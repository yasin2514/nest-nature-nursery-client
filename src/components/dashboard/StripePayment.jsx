import { useForm } from "react-hook-form";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import BreadCum from "./BreadCum";
import FormElement, { Input, Textarea } from "../ui/FormComponent";
import { Link, useNavigate } from "react-router-dom";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useGetCartProducts from "../../hooks/useGetCartProducts";
import useGetCartDataByUser from "../../hooks/useGetCartDataByUser";
import { AuthContext } from "../../providers/AuthProvider";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const StripePayment = ({ data: items, isDelete }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const formatNumber = useNumberFormatter();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [, , refetchALL] = useGetCartProducts();
  const [, , refetch] = useGetCartDataByUser();
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);
  const totalPlants = items?.length;
  const totalQuantity = items?.reduce((acc, curr) => acc + curr?.quantity, 0);
  const totalAmount = items?.reduce((acc, curr) => acc + curr.totalAmount, 0);
  const deliveryCharge = 60;
  const totalAmountWithDelivery = totalAmount + deliveryCharge;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  // Validate email format
  const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Create Payment Intent
  useEffect(() => {
    if (totalAmount > 0) {
      axiosSecure
        .post("createPaymentIntent", {
          price: totalAmountWithDelivery,
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [totalAmount, axiosSecure, totalAmountWithDelivery]);

  // Submit Payment
  const onSubmit = async (data) => {
    const userInfo = {
      phone: data?.phone,
      address: {
        city: data?.city,
        district: data?.district,
        country: data?.country,
      },
    };

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (card === null) return;

    // Ensure user email is valid
    const userEmail = isValidEmail(user?.email) ? user.email : "unknown";

    const { error: paymentMethodError } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (paymentMethodError) {
      setCardError(paymentMethodError.message);
      return;
    } else {
      setCardError(null);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: userEmail,
          },
        },
      });

    setProcessing(false);

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const purchaseData = {
        userName: user?.displayName,
        userEmail,
        userPhone: data?.phone,
        userCity: data?.city,
        userDistrict: data?.district,
        userCountry: data?.country,
        userAdditionalInfo: data?.additionalInfo,
        totalPlants,
        totalQuantity,
        totalAmount: totalAmountWithDelivery,
        deliveryCharge,
        delivery: "Pending",
        paymentMethod: "Stripe",
        totalDue: 0,
        paymentId: paymentIntent.id,
        purchaseDate: new Date().toISOString(),
        paymentStatus: "Paid",
        items: items?.map((item) => ({
          quantity: item.quantity,
          price: item.price,
          category: item.category,
          totalAmount: item.totalAmount,
          userName: user?.displayName,
          userEmail,
          uploadByEmail: item.uploadByEmail,
          photos: item.photos,
          name: item.name,
          delivery: "Pending",
          paymentMethod: "Stripe",
          paymentStatus: "Paid",
        })),
      };

      axiosSecure.patch(`updateUser/${user?.email}`, userInfo).then(() => {});
      axiosSecure.post("addPurchase", purchaseData).then((response) => {
        if (response.data.insertedId) {
          reset();
          Swal.fire({
            icon: "success",
            title: "Payment successfully completed",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate("/dashboard/cart/purchased-items");

          if (isDelete === "all") {
            axiosSecure
              .delete(`deleteUserCartItems/${user?.email}`)
              .then((res) => {
                if (res.data.result.deletedCount > 0) {
                  refetch();
                  refetchALL();
                }
              });
          }

          if (isDelete === "single") {
            axiosSecure.delete(`deleteCart/${items[0]?._id}`).then((res) => {
              if (res.data.result.deletedCount > 0) {
                refetch();
                refetchALL();
              }
            });
          }
        }
      });
    }
  };

  return (
    <div>
      <BreadCum text1={"User Dashboard"} text2={"Stripe Payment"} />
      <div className="bg-white p-5 mt-5 rounded-lg h-[calc(100vh-177px)] overflow-auto">
        <div className="mb-7">
          <h4 className="text-green-700 text-2xl text-center  font-semibold">
            Complete Your Payment
          </h4>
          {cardError && (
            <p className="text-red-500 text-sm mt-1 text-center">{cardError}</p>
          )}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-5 px-5"
        >
          {/* Delivery Details Fieldset */}
          <fieldset className="col-span-6  py-7 px-5 rounded-lg border">
            <legend className="text-xl font-semibold text-green-700">
              Delivery Details
            </legend>
            <div className="grid grid-cols-12 gap-5">
              <FormElement
                type="text"
                label={"City/Village"}
                className={"col-span-6"}
                register={register("city", { required: "City is required" })}
                errors={errors}
              >
                <Input />
              </FormElement>
              <FormElement
                type="text"
                label={"District"}
                className={"col-span-6"}
                register={register("district", {
                  required: "District is required",
                })}
                errors={errors}
              >
                <Input />
              </FormElement>
              <FormElement
                type="text"
                label={"Country"}
                className={"col-span-6"}
                register={register("country", {
                  required: "Country is required",
                })}
                errors={errors}
              >
                <Input />
              </FormElement>
              <FormElement
                type="text"
                label={"Phone Number"}
                className={"col-span-6"}
                register={register("phone", {
                  required: "Phone number is required",
                })}
                errors={errors}
              >
                <Input />
              </FormElement>
              <FormElement
                label={"Additional Information"}
                className={"col-span-12"}
                register={register("additionalInfo")}
                errors={errors}
              >
                <Textarea />
              </FormElement>
            </div>
          </fieldset>

          {/* Payment Details Fieldset */}
          <fieldset className="col-span-6 rounded-lg p-5 border">
            <legend className="text-xl font-semibold text-green-700 ml-5">
              Payment Information
            </legend>

            {/* main text section */}
            <div className="flex flex-col h-[350px] pt-2">
              {/* payment design */}
              <div className="mb-5 p-4 border rounded-md shadow-sm">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#008f00",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
              </div>
              {/* payment information */}
              <div className="grid grid-cols-12 mb-8">
                <div className="text-gray-500 font-semibold text-lg space-y-2 col-span-8">
                  <p>Total Plants: </p>
                  <p>Total Quantity: </p>
                  <p>Amount: </p>
                  <p>Delivery Charge: </p>
                  <p>Total Amount: </p>
                </div>
                <div className="col-span-4 text-gray-500 font-semibold text-lg space-y-3 text-end">
                  <p>{formatNumber(totalPlants || 0)}</p>
                  <p>{formatNumber(totalQuantity || 0)}</p>
                  <p>${formatNumber(totalAmount || 0)}</p>
                  <p>${formatNumber(deliveryCharge)} </p>
                  <p>${formatNumber(totalAmountWithDelivery || 0)}</p>
                </div>
              </div>
              {totalAmount > 0 && (
                <div className="flex justify-end gap-5 mt-auto">
                  <Link to={"/dashboard/cart/pending-items"}>
                    <button type="reset" className="button-red">
                      Cancel Payment
                    </button>
                  </Link>
                  <button
                    disabled={!stripe || !clientSecret || processing}
                    type="submit"
                    className="button-green"
                  >
                    {processing ? "Processing..." : "Confirm Payment"}
                  </button>
                </div>
              )}
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

const StripePaymentWrapper = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <StripePayment {...props} />
    </Elements>
  );
};

export default StripePaymentWrapper;

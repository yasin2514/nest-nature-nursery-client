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
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useGetCartProducts from "../../hooks/useGetCartProducts";
import useGetCartDataByUser from "../../hooks/useGetCartDataByUser";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const StripePayment = ({ data: items, isDelete }) => {
  const user = useContext(AuthContext);
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

  const onSubmit = async (data) => {
    console.log(data);
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (card === null) return;

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
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
            email: user?.email || "unknown",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
    } else {
      setCardError(null);
    }
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      const userInfo = {
        phone: data?.phone,
        address: {
          city: data?.city,
          district: data?.district,
          country: data?.country,
        },
      };
      const purchaseData = {
        userName: user?.displayName,
        userEmail: user?.email,
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
        paymentMethod: "COD",
        totalDue: totalAmountWithDelivery,
        paymentId,
        purchaseData: todayDate,
        payment: "Not Paid",
        items: items?.map((item) => ({
          quantity: item.quantity,
          price: item.price,
          category: item.category,
          totalAmount: item.totalAmount,
          userName: user?.displayName,
          userEmail: user?.email,
          uploadByEmail: item.uploadByEmail,
          photos: item.photos,
          name: item.name,
          delivery: "Pending",
          paymentMethod: "COD",
          payment: "Not Paid",
        })),
      };

      axiosSecure.patch(`updateUser/${user?.email}`, userInfo).then(() => {});
      axiosSecure.post("addPurchase", purchaseData).then((response) => {
        if (response.data.insertedId) {
          reset();
          Swal.fire({
            icon: "success",
            title: "Product added successfully",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate("/dashboard/cart/purchased-items");
          isDelete === "all" &&
            axiosSecure
              .delete(`deleteUserCartItems/${user?.email}`)
              .then((res) => {
                if (res.data.result.deletedCount > 0) {
                  refetch();
                  refetchALL();
                }
              });
          isDelete === "single" &&
            axiosSecure.delete(`deleteCart/${items[0]?._id}`).then((res) => {
              if (res.data.result.deletedCount > 0) {
                refetch();
                refetchALL();
              }
            });
        }
      });
    }
  };

  return (
    <div>
      <BreadCum text1={"User Dashboard"} text2={"Stripe Payment"} />
      <div className="bg-white p-5 mt-5 rounded-lg h-[calc(100vh-177px)] overflow-auto">
        <h4 className="text-green-700 text-2xl text-center mb-8 font-semibold">
          Complete Your Payment
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-5 px-5"
        >
          {/* Delivery Details Fieldset */}
          <fieldset className="col-span-6  py-10 px-5 rounded-lg border">
            <legend className="text-xl font-semibold text-green-700">
              Delivery Details
            </legend>
            <div className="grid grid-cols-12 gap-6">
              <FormElement
                type="text"
                label={"City/Village"}
                className={"col-span-6"}
                register={register("city")}
                errors={errors}
              >
                <Input />
              </FormElement>
              <FormElement
                type="text"
                label={"District"}
                className={"col-span-6"}
                register={register("district")}
                errors={errors}
              >
                <Input />
              </FormElement>
              <FormElement
                type="text"
                label={"Country"}
                className={"col-span-6"}
                register={register("country")}
                errors={errors}
              >
                <Input />
              </FormElement>
              <FormElement
                type="text"
                label={"Phone Number"}
                className={"col-span-6"}
                register={register("phone")}
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
            <div className="flex flex-col h-[370px] pt-5">
              {/* payment design */}
              <div className="mb-5 p-5 border rounded-md shadow-sm">
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
              <div className="grid grid-cols-12 mb-5">
                <div className="text-gray-500 font-semibold text-lg space-y-3 col-span-8">
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
                    disabled={!stripe}
                    type="submit"
                    className="button-green"
                  >
                    {processing ? "Processing..." : "Confirm Payment"}
                  </button>
                </div>
              )}
              {cardError && <p className="text-red-500 mt-2">{cardError}</p>}
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

const StripePaymentWrapper = (props) => (
  <Elements stripe={stripePromise}>
    <StripePayment {...props} />
  </Elements>
);

export default StripePaymentWrapper;

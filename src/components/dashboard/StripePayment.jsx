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

const StripePayment = ({ data: items }) => {
  const formatNumber = useNumberFormatter();
  // const navigate = useNavigate();
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

  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (data) => {
    console.log(data);
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    if (card === null) return;
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
  };
  return (
    <Elements stripe={stripePromise}>
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
              <div className=" flex flex-col h-[370px] pt-5">
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
                <div className=" grid grid-cols-12 mb-5 ">
                  <div className="text-gray-500 font-semibold text-lg  space-y-3 col-span-8">
                    <p className="">Total Plants: </p>
                    <p className="">Total Quantity: </p>
                    <p className="">Amount: </p>
                    <p className="">Delivery Charge: </p>
                    <p className="">Total Amount: </p>
                  </div>
                  <div className="col-span-4 text-gray-500 font-semibold text-lg  space-y-3 text-end">
                    <p>{formatNumber(totalPlants || 0)}</p>
                    <p>{formatNumber(totalQuantity || 0)}</p>
                    <p>${formatNumber(totalAmount || 0)}</p>
                    <p>${formatNumber(deliveryCharge)} </p>
                    <p>${formatNumber(totalAmountWithDelivery || 0)}</p>
                  </div>
                </div>
                {totalAmount > 0 && (
                  <div className="flex justify-end gap-5 mt-auto ">
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
                      Confirm Payment
                    </button>
                  </div>
                )}
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </Elements>
  );
};

export default StripePayment;

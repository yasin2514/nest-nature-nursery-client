import { useForm } from "react-hook-form";
import BreadCum from "./BreadCum";
import FormElement, { Input, Textarea } from "../ui/FormComponent";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const CODPayment = ({ data: items }) => {
  const { user } = useContext(AuthContext);
  const formatNumber = useNumberFormatter();
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

  const generateUniquePaymentId = () => {
    const date = new Date()
      .toISOString()
      .slice(0, 16)
      .replace(/-/g, "")
      .replace(/T/g, ""); // YYYYMMDDHHMMSS format
    const randomSection = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0"); // Random 6-digit section
    return `${date}${randomSection}`; // Combine date/time and random section
  };

  const onSubmit = (data) => {
    const userInfo = {
      userName: user?.displayName,
      userEmail: user?.email,
      userPhone: data?.phone,
      userCity: data?.city,
      userDistrict: data?.district,
      userCountry: data?.country,
      userAdditionalInfo: data?.additionalInfo,
    };
    const paymentData = {
      ...userInfo,
      totalPlants,
      totalQuantity,
      totalAmount,
      deliveryCharge,
      totalAmountWithDelivery,
      delivery: false,
      paymentMethod: "COD",
      paymentId: generateUniquePaymentId(),
      items: items?.map((item) => ({
        id: item._id,
        quantity: item.quantity,
        price: item.price,
        category: item.category,
        totalAmount: item.totalAmount,
        uploadByEmail: item.uploadByEmail,
      })),
    };
    console.log(paymentData);
  };

  return (
    <div>
      <BreadCum text1={"User Dashboard"} text2={"COD Payment"} />
      <div className="bg-white p-5 mt-5 rounded-lg h-[calc(100vh-177px)] overflow-auto">
        <h4 className="text-green-700 text-2xl text-center mb-8 font-semibold">
          Complete Your Order
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-10 px-5"
        >
          {/* Delivery Details Fieldset */}
          <fieldset className="col-span-6  p-10 rounded-lg border">
            <legend className="text-xl font-semibold text-green-700">
              Delivery Details
            </legend>
            <div className="grid grid-cols-12 gap-5">
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
            <div className=" flex flex-col h-[350px] ">
              <div className="p-5 grid grid-cols-12 mb-5">
                <div className="text-gray-500 font-semibold text-lg  space-y-3 col-span-8">
                  <p className="">Total Plants: </p>
                  <p className="">Total Quantity: </p>
                  <p className="">Amount: </p>
                  <p className="">Delivery Charge: </p>
                  <p className="">Total Amount: </p>
                  <p className="text-red-500 font-semibold text-lg">
                    Total Due:{" "}
                  </p>
                </div>
                <div className="col-span-4 text-gray-500 font-semibold text-lg  space-y-3 text-end">
                  <p>{formatNumber(totalPlants || 0)}</p>
                  <p>{formatNumber(totalQuantity || 0)}</p>
                  <p>${formatNumber(totalAmount || 0)}</p>
                  <p>${formatNumber(deliveryCharge)} </p>
                  <p>${formatNumber(totalAmountWithDelivery || 0)}</p>
                  <p className="text-red-500 font-semibold text-lg">
                    ${formatNumber(totalAmountWithDelivery || 0)}
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-5 mt-auto ">
                <button type="reset" className="button-red">
                  Reset Order
                </button>
                <button type="submit" className="button-green">
                  Confirm Order
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CODPayment;

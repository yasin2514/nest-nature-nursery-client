import { useForm } from "react-hook-form";
import BreadCum from "./BreadCum";
import FormElement, { Input, Textarea } from "../ui/FormComponent";

const CODPayment = ({ data }) => {
  console.log(data); // Still useful for debugging or potential future use

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Submit the collected form data
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
                  <p>122</p>
                  <p>4</p>
                  <p>$ </p>
                  <p>$ </p>
                  <p>$ </p>
                  <p className="text-red-500 font-semibold text-lg">$ </p>
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

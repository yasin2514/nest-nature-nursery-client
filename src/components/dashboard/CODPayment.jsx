import { useForm } from "react-hook-form";
import BreadCum from "./BreadCum";
import FormElement, { Input, Textarea } from "../ui/FormComponent";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useGetCartProducts from "../../hooks/useGetCartProducts";
import useGetCartDataByUser from "../../hooks/useGetCartDataByUser";

const CODPayment = ({ data: items, isDelete }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const formatNumber = useNumberFormatter();
  const [, , refetchALL] = useGetCartProducts();
  const [, , refetch] = useGetCartDataByUser();
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
      delivery: "pending",
      paymentMethod: "COD",
      paymentAmount: 0,
      totalDue: totalAmountWithDelivery,
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
                <Link to={"/dashboard/cart/pending-items"}>
                  <button type="reset" className="button-red">
                    Cancel Order
                  </button>
                </Link>
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

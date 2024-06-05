import { useLoaderData } from "react-router-dom";
import BreadCum from "./BreadCum";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import TableComponent from "./TableComponent";

const PaymentsDetails = () => {
      const tHeadData = [
        {
          id: 1,
          field: "SL",
        },
        {
          id: 2,
          field: "Image",
        },
        {
          id: 3,
          field: "Name",
        },
        {
          id: 4,
          field: "Price",
        },
        {
          id: 5,
          field: "Quantity",
        },
        {
          id: 6,
          field: "Total Amount",
        },
        {
          id: 7,
          field: "Category",
        }
      ];
  const data = useLoaderData();
  const formatNumber = useNumberFormatter();

  const {
    userName,
    userEmail,
    userPhone,
    userCity,
    userDistrict,
    userCountry,
    totalPlants,
    totalQuantity,
    totalAmount,
    totalDue,
    delivery,
    deliveryCharge,
    paymentId,
    paymentMethod,
    paymentStatus,
    purchaseDate,
    items,
  } = data || {};
  return (
    <div>
      <BreadCum text1={"User Dashboard"} text2={"Payment Details"} />
      <div className="bg-white p-5 mt-5 rounded-lg h-[calc(100vh-177px)] overflow-auto ">
        {/* payment Details */}
        <div className=" grid grid-cols-12  gap-20">
          <div className="col-span-6 ">
            <h1 className="text-green-700 font-semibold text-lg px-5 underline">
              Payment Details
            </h1>
            <div className="flex flex-col mt-3 gap-2 px-5 text-[#5e5e5e]">
              <div className="flex justify-between">
                <p className="font-semibold">Payment Date :</p>
                <p>{purchaseDate.slice(0, 10) || null}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Payment ID :</p>
                <p>{paymentId}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Payment Method :</p>
                <p>{paymentMethod}</p>
              </div>

              <div className="flex justify-between">
                <p className="font-semibold">Payment Amount :</p>
                <p>${formatNumber(totalAmount)}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Due Amount :</p>
                <p>${formatNumber(totalDue)}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Payment Status :</p>
                <p
                  className={`${
                    paymentStatus === "Paid" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {paymentStatus}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Delivery Status :</p>
                <p
                  className={` ${
                    delivery === "Pending" ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {delivery}
                </p>
              </div>
            </div>
          </div>
          {/* Delivery Details */}
          <div className="col-span-6 ">
            <h1 className="text-green-700 font-semibold text-lg px-5 underline">
              Order Details
            </h1>
            <div className="flex flex-col mt-3 gap-1 px-5 text-[#5e5e5e]">
              <div className="flex justify-between">
                <p className="font-semibold">Customer Name:</p>
                <p>{userName || null}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Customer Email :</p>
                <p>{userEmail || null}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Customer Phone :</p>
                <p>{userPhone || null}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Customer Address :</p>
                <p>
                  {userCity},{userDistrict},{userCountry}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Total Plans :</p>
                <p>{formatNumber(totalPlants)}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Total Quantity :</p>
                <p>{formatNumber(totalQuantity)}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Delivery Charge :</p>
                <p>{formatNumber(deliveryCharge)}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Total Amount :</p>
                <p>${formatNumber(totalAmount)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 mx-5  my-10  border rounded-md">
          <TableComponent
            tHeadData={tHeadData}
            data={items}
            show={"paymentDetails"}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentsDetails;

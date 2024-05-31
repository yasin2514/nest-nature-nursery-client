
const PaymentOption = ({data}) => {
    return (
      <div className="bg-white p-5 mt-5 rounded-lg h-[calc(100vh-177px)] overflow-auto">
        <div className="flex justify-between text-xl font-semibold text-gray-700">
            <span>Total Item: </span>
            <span>Total Quantity:</span>
            <span>Total Amount: $ </span>
        </div>
        <div className="mt-10 flex justify-between">
          <div className="border p-5 rounded-md shadow-md">Stripe Payment</div>
          <div>Stripe Payment</div>
          <div>Stripe Payment</div>
        </div>
      </div>
    );
};

export default PaymentOption;
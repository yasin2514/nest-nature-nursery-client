import BreadCum from "../../../components/dashboard/BreadCum";
import Input, { Textarea } from "../../../components/ui/FormComponent";

const UploadProducts = () => {
  return (
    <div>
      <BreadCum text1={"Admin Dashboard"} text2={"Upload Product"} />
      <div className="my-7 bg-white rounded-lg py-10 px-5">
        <form className="grid grid-cols-12 gap-x-10 gap-y-6">
          <Input type="text" label={"Plant Name"} className={"col-span-6"} />
          <Input
            type="text"
            label={"Plant Category"}
            className={"col-span-6"}
          />
          <Input type="text" label={"Quantity"} className={"col-span-6"} />
          <Input type="text" label={"Current Price"} className={"col-span-6"} />
          <Input
            type="text"
            label={"Previous Price"}
            className={"col-span-6"}
          />
          <Input type="text" label={"Rating"} className={"col-span-6"} />
          <Input type="file" label={"Images"} className={"col-span-12 "} />

          <Textarea
            type="text"
            label={"Description"}
            className={"col-span-12"}
            rows={5}
          />
          <div className="col-span-12 flex justify-end gap-10 mt-5">
            <button type="Reset" className="button-red">
              Reset
            </button>
            <button type="Submit" className="button-green">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProducts;

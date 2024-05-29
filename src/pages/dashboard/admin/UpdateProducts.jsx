import BreadCum from "../../../components/dashboard/BreadCum";
import { useForm } from "react-hook-form";
import FormElement, {
  Input,
  Textarea,
} from "../../../components/ui/FormComponent";
import { useLoaderData } from "react-router-dom";

BreadCum
const UpdateProduct = () => {
  const data = useLoaderData();
  console.log({ data });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <BreadCum text1={"Admin Dashboard"} text2={"Upload Product"} />
      <div className="my-7 bg-white rounded-lg py-10 px-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-x-10 gap-y-6"
        >
          <FormElement
            type="text"
            label={"Plant Name"}
            className={"col-span-6"}
            register={register("name")}
            errors={errors}
          >
            <Input />
          </FormElement>
          <FormElement
            type="text"
            label={"Plant Category"}
            className={"col-span-6"}
            register={register("category")}
            errors={errors}
          >
            <Input />
          </FormElement>

          <FormElement
            type="text"
            label={"Current Price"}
            className={"col-span-6"}
            register={register("price")}
            errors={errors}
          >
            <Input />
          </FormElement>
          <FormElement
            type="text"
            label={"Previous Price"}
            className={"col-span-6"}
            register={register("previousPrice")}
            errors={errors}
          >
            <Input />
          </FormElement>
          <FormElement
            type="text"
            label={"Quantity"}
            className={"col-span-6"}
            register={register("quantity")}
            errors={errors}
          >
            <Input />
          </FormElement>
          <FormElement
            type="text"
            label={"Rating"}
            className={"col-span-6"}
            register={register("rating")}
            errors={errors}
          >
            <Input />
          </FormElement>
          <FormElement
            type="file"
            label={"Images"}
            className={"col-span-12"}
            register={register("images")}
            errors={errors}
          >
            <Input />
          </FormElement>
          <FormElement
            type="text"
            label={"Description"}
            className={"col-span-12"}
            register={register("description")}
            errors={errors}
            rows={4}
          >
            <Textarea />
          </FormElement>

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

export default UpdateProduct;

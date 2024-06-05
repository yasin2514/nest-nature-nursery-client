import { useForm } from "react-hook-form";
import useGetSingleUser from "../../hooks/useGetSingleUser";
import FormElement, { Input } from "../ui/FormComponent";

const Setting = () => {
  const [userData] = useGetSingleUser();
  const {
    name,
    photo,
    role,
    phone,
    email,
    address: { city, district, country },
  } = userData || {};

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {};

  return (
    <div className="bg-white flex flex-col items-center justify-center  p-5 mt-5 rounded-lg h-[calc(100vh-177px)] overflow-auto gap-10 ">
      <div className="w-10/12">
        {/* user info */}
        <div className=" w-1/2 mx-auto flex gap-10 items-center  justify-evenly p-5 rounded-md">
          <div className="size-24 rounded-full overflow-hidden outline outline-green-900">
            <img src={photo} alt={name} className="object-contain" />
          </div>
          <div className="space-y-">
            <h1 className="font-semibold text-lg text-green-800">
              {" "}
              Name: <span>{name}</span>
            </h1>
            <p className="font-semibold text-lg text-green-800">
              Email: <span>{email}</span>
            </p>
            <p className="font-semibold text-lg text-green-800">
              Role: <span>{role}</span>
            </p>
          </div>
        </div>
        {/* update user info */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-12 w-full gap-x-10 gap-y-5 p-10 "
        >
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
            type="text"
            label={"City Name"}
            className={"col-span-6"}
            register={register("city")}
            errors={errors}
          >
            <Input />
          </FormElement>
          <FormElement
            type="text"
            label={"District Name"}
            className={"col-span-6"}
            register={register("district")}
            errors={errors}
          >
            <Input />
          </FormElement>
          <FormElement
            type="text"
            label={"Country Name"}
            className={"col-span-6"}
            register={register("country")}
            errors={errors}
          >
            <Input />
          </FormElement>

          <div className="col-span-12 flex justify-end gap-5 mt-5">
            <button type="reset" className="button-red">
              Reset
            </button>
            <button type="submit" className="button-green">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setting;

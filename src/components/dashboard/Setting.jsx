import { useForm } from "react-hook-form";
import useGetSingleUser from "../../hooks/useGetSingleUser";
import FormElement, { Input } from "../ui/FormComponent";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useGetUser from "../../hooks/useGetUser";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const axiosSecure = useAxiosSecure();
  const [userData, , refetch] = useGetSingleUser();
  const navigate = useNavigate();
  const {
    name,
    photo,
    role,
    phone,
    email,
    address: { city, district, country } = {},
  } = userData || {};
  const defaultValues = {
    phone: phone || "",
    city: city || "",
    district: district || "",
    country: country || "",
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    const updateUserData = {
      phone: data.phone,
      address: {
        city: data.city,
        district: data.district,
        country: data.country,
      },
    };
    axiosSecure.patch(`updateUser/${email}`, updateUserData).then((res) => {
      if (res.data.modifiedCount > 0) {
        reset();
        refetch();
        navigate("/dashboard")
        Swal.fire({
          icon: "success",
          title: "Updated successfully",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center  p-5 mt-5 rounded-lg h-[calc(100vh-177px)] overflow-auto gap-10 ">
      <div className="w-10/12">
        {/* user info */}
        <div className=" w-3/5  justify-center mx-auto flex gap-10 items-center  p-5 ">
          <div className="size-24 rounded-full overflow-hidden outline outline-green-900">
            <img src={photo} alt={name} className="object-contain" />
          </div>
          <div className="space-y-1 uppercase">
            <h1 className="font-semibold text-lg text-green-800">
              {" "}
              Name: <span>{name}</span>
            </h1>
            <p className="font-semibold text-lg text-green-800">
              Email: <span className="lowercase">{email}</span>
            </p>
            <p className="font-semibold text-lg text-green-800 ">
              Role: <span >{role}</span>
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

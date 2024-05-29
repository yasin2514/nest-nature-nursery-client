import BreadCum from "../../../components/dashboard/BreadCum";
import { useForm } from "react-hook-form";
import FormElement, {
  Input,
  Textarea,
} from "../../../components/ui/FormComponent";
import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const UploadProducts = () => {
  const { user } = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log({ data });
    const uploadedImages = [];
    const uploadPromises = Array.from(data.photos).map((photo) => {
      const formData = new FormData();
      formData.append("image", photo);

      return fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgResponse) => {
          if (imgResponse.success) {
            uploadedImages.push(imgResponse.data.display_url);
          }
        });
    });

    await Promise.all(uploadPromises);

    const addProduct = {
      name: data.name,
      category: data.category,
      price: data.price,
      previousPrice: data.previousPrice,
      quantity: data.quantity,
      rating: data.rating,
      photos: uploadedImages,
      description: data.description,
      uploadByName: user.displayName,
      uploadByEmail: user.email,
      totalSell: 0,
    };

    console.log({ addProduct });

    axiosSecure.post("/classes", addProduct).then((response) => {
      if (response.data.insertedId) {
        reset();
        Swal.fire({
          icon: "success",
          title: "Product added successfully",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
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
            type="number"
            step="any"
            label={"Current Price"}
            className={"col-span-6"}
            register={register("price")}
            errors={errors}
          >
            <Input />
          </FormElement>
          <FormElement
            type="number"
            step="any"
            label={"Previous Price"}
            className={"col-span-6"}
            register={register("previousPrice")}
            errors={errors}
          >
            <Input />
          </FormElement>
          <FormElement
            type="number"
            label={"Quantity"}
            className={"col-span-6"}
            register={register("quantity")}
            errors={errors}
          >
            <Input />
          </FormElement>
          <FormElement
            type="number"
            step="any"
            label={"Rating"}
            className={"col-span-6"}
            register={register("rating")}
            errors={errors}
          >
            <Input />
          </FormElement>
          <FormElement
            type="file"
            multiple
            label={"Images"}
            className={"col-span-12"}
            register={register("photos")}
            errors={errors}
          >
            <Input multiple />
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
            <button type="reset" className="button-red">
              Reset
            </button>
            <button type="submit" className="button-green">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProducts;

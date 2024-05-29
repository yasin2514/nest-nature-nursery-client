import BreadCum from "../../../components/dashboard/BreadCum";
import { useForm } from "react-hook-form";
import FormElement, {
  Input,
  Textarea,
} from "../../../components/ui/FormComponent";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

BreadCum;
const UpdateProduct = () => {
  const navigate = useNavigate();
  const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const axiosSecure = useAxiosSecure();
  const data = useLoaderData();
  const {
    _id,
    name,
    price,
    photos,
    category,
    quantity,
    rating,
    previousPrice,
    description,
  } = data || {};

  const defaultValues = {
    name: name || "",
    category: category || "",
    quantity: quantity || "",
    price: price || "",
    previousPrice: previousPrice || "",
    rating: rating || "",
    photos: photos || [],
    description: description || "",
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = async (data) => {
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

    const updatedProduct = {
      name: data.name,
      category: data.category,
      price: data.price,
      previousPrice: data.previousPrice,
      quantity: data.quantity,
      rating: data.rating,
      photos: uploadedImages,
      description: data.description,
      edited: true,
    };

    axiosSecure
      .patch(`updateProduct/${_id}`, updatedProduct)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          reset();
          navigate("/dashboard/products/products-list");
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

          <div className={"col-span-12 flex items-end justify-between "}>
            <FormElement
              type="file"
              multiple
              label={"Images"}
              className={"w-5/6"}
              register={register("photos")}
              errors={errors}
            >
              <Input />
            </FormElement>
            <div className="flex gap-5">
              {photos?.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`${name} ${index}`}
                  className="object-cover size-10 border rounded-md"
                />
              ))}
            </div>
          </div>
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

export default UpdateProduct;

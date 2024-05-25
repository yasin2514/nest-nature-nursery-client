import img1 from "../../assets/client-1.jpg";
import img2 from "../../assets/client-2.jpg";
import img3 from "../../assets/client-3.png";
import SectionHeader from "../../components/ui/SectionHeader";
import useRating from "../../hooks/useRating";

const ClientReviewSection = () => {
  return (
    <div>
      <SectionHeader
        className={"mb-12"}
        header="Our Client Reviews"
        title="What our customers say about us"
      />

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-20 group">
        {/* client -1 */}
        <Client
          img={img1}
          name="John Doe"
          rating={5}
          review="I was very impressed by the packaging and the quality of the plants. Will definitely order again."
        />
        {/* client -1 */}
        <Client
          img={img2}
          name={"Linda Smith"}
          rating={5}
          review="The plants were healthy and arrived in excellent condition. Very happy with my purchase!"
        />
        {/* client -1 */}
        <Client
          img={img3}
          name="Edward Brown"
          rating={5}
          review="Great service and healthy plants that thrived in my garden. Highly recommend this nursery!"
        />
      </div>
    </div>
  );
};

const Client = ({ img, name, rating, review }) => {
  const renderRating = useRating();

  return (
    <div
      className="bg-base-100 space-y-5 rounded-ss-[50px] rounded-ee-[50px]  shadow shadow-green-900 p-8 
                group-hover:blur-sm duration-500 hover:!blur-none group-hover:scale-[0.90] cursor-pointer hover:!scale-110"
    >
      <div className="flex justify-around ">
        <div className="rounded-full size-20 bg-gray-300 border border-black">
          <img
            src={img}
            alt="customer"
            className=" rounded-full object-contain"
          />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-semibold">{name}</h4>
          <div className="flex items-center">
            {renderRating(rating)}
            <span className="ml-2 text-gray-600">{rating}</span>
          </div>
        </div>
      </div>
      <div className="text-center ">
        <p className="text-gray-500">{review}</p>
      </div>
    </div>
  );
};

export default ClientReviewSection;

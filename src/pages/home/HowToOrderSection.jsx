import SectionHeader from "../../components/ui/SectionHeader";
import img from "../../assets/order.png";
import { Link } from "react-router-dom";

const HowToOrderSection = () => {
  return (
    <div>
      <SectionHeader
      className={"mb-12"}
        header="How to Order"
        title="Order plant and help to the World"
      />
      <div className="flex flex-col items-center md:grid md:grid-cols-10  lg:grid-cols-12 gap-20 bg-gray-50 p-10 rounded-xl">
        <div className="col-span-4 flex flex-col items-start gap-16">
          <Section
            count={"01"}
            text={"At first you need to choose a plant."}
            title={"Choose Plants"}
          />
          <Section
            count={"03"}
            text={"Give you billing address to  ship your plant."}
            title={"Billing Address"}
          />
        </div>
        <div className="md:col-span-4  flex items-center justify-center">
          <div
            className="p-28 bg-contain bg-no-repeat bg-center hover:scale-110 duration-300 "
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <Link
              to={"/plant-category"}
              className="bg-[#056e31] flex size-28 items-center justify-center text-white font-medium rounded-full"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="col-span-4 flex flex-col items-end gap-16">
          <Section
            count={"02"}
            text={"Then place  order your favorite plant."}
            title={"Place an Order"}
          />
          <Section
            count={"04"}
            text={"Complete payment and receive your plant."}
            title={"Receive Your Order"}
          />
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, text, count }) => {
  return (
    <div className="flex flex-col items-center  text-center space-y-2">
      <div
        className="size-28 flex items-center justify-center text-green-800 text-2xl font-semibold  bg-blend-overlay bg-center bg-contain rounded-full"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        {count}
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-green-900">{title}</h2>
        <p className="text-gray-700 max-w-[25ch] mt-1 ">{text}</p>
      </div>
    </div>
  );
};
export default HowToOrderSection;

import { FaShippingFast } from "react-icons/fa";
import SectionHeader from "../../components/ui/SectionHeader";
import { FaSackDollar } from "react-icons/fa6";
import { GiDeliveryDrone } from "react-icons/gi";
import { IoIosCall } from "react-icons/io";
import { MdAssignmentReturn } from "react-icons/md";

const ServiceSection = () => {
  return (
    <div>
      <SectionHeader
        className={"mb-12"}
        header="Our Customer Services"
        title="We provide the best service"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 px-2 lg:px-0">
        <Section
          title="Free Shipping"
          text="We provide free shipping some plants."
        >
          <FaShippingFast className="text-4xl text-green-600" />
        </Section>
        <Section
          title="Delivery On"
          text="We provide 24/7 hours delivery on  any place."
        >
          <GiDeliveryDrone className="text-4xl text-green-600" />
        </Section>
        <Section
          title="Payment"
          text="We provide online and cash on payment system."
        >
          <FaSackDollar className="text-4xl text-green-600" />
        </Section>
        <Section
          title="Need Help"
          text="If you need any help feel free to call or email us."
        >
          <IoIosCall className="text-4xl text-green-600" />
        </Section>
        <Section
          title="Return"
          text="We provide free return and exchange our plants."
        >
          <MdAssignmentReturn className="text-4xl text-green-600" />
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, text, children }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md hover:scale-110 overflow-hidden duration-500 hover:outline hover:outline-[#01352c] p-5 text-center space-y-2">
      <div className="bg-gray-100 p-2 rounded-full">
        <div className="bg-gray-200 p-7 rounded-full">{children}</div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-700 max-w-[40ch] mt-1 ">{text}</p>
      </div>
    </div>
  );
};
export default ServiceSection;

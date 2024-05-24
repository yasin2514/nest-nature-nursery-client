import { FaShippingFast } from "react-icons/fa";
import SectionHeader from "../../components/ui/SectionHeader";

const ServiceSection = () => {
  return (
    <div>
      <SectionHeader
        header="Our Customer Services"
        title="We provide the best service"
      />
      <div className="grid grid-cols-5 gap-10">
        <Section
          title="Free Shipping"
          text="We provide free shipping to all over the world"
        >
          <FaShippingFast className="text-4xl text-green-600" />
        </Section>
        <Section
          title="Free Shipping"
          text="We provide free shipping to all over the world"
        >
          <FaShippingFast className="text-4xl text-green-600" />
        </Section>
        <Section
          title="Free Shipping"
          text="We provide free shipping to all over the world"
        >
          <FaShippingFast className="text-4xl text-green-600" />
        </Section>
        <Section
          title="Free Shipping"
          text="We provide free shipping to all over the world"
        >
          <FaShippingFast className="text-4xl text-green-600" />
        </Section>
        <Section
          title="Free Shipping"
          text="We provide free shipping to all over the world"
        >
          <FaShippingFast className="text-4xl text-green-600" />
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, text, children }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md hover:scale-110 overflow-hidden duration-500 hover:outline p-5 text-center space-y-2">
      <div className="bg-gray-100 p-2 rounded-full">
        <div className="bg-gray-200 p-7 rounded-full">{children}</div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-700 max-w-[20ch]">{text}</p>
      </div>
    </div>
  );
};
export default ServiceSection;

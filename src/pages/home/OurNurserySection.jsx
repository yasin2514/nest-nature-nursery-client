import SectionHeader from "../../components/ui/SectionHeader";
import img from "../../assets/nursery-3.jpg";
import { Link } from "react-router-dom";

const OurNurserySection = () => {
  return (
    <div className="grid grid-cols-12 gap-10 ">
      <div className=" rounded-2xl overflow-hidden col-span-5">
        <img
          src={img}
          alt="nursery img"
          className="object-fill h-full w-full"
        />
      </div>
      <div className=" col-span-7    w-full ">
        <SectionHeader
          header="Our Nursery"
          title="We provide the best service"
        />
        <div
          className="px-8 space-y-6"
        >
          <p>
            Welcome to our nursery, where we nurture the minds and hearts of
            young learners. Our dedicated team provides a safe, stimulating
            environment, fostering creativity, curiosity, and a love for
            learning in every child.
          </p>
          <p>
            At our nursery, we believe in the holistic development of each
            child. Through engaging activities and personalized attention, we
            ensure that every child feels valued and supported. Join us in
            building a foundation for lifelong success and happiness.
          </p>
          <p>
            Join our nursery family and watch your child thrive in a nurturing,
            inspiring environment.
          </p>
          <div className="">
            <Link to="/contact-us">
              <button className="button-green">Get in Touch</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNurserySection;

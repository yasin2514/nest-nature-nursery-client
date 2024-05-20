import {
  FaFacebookF,
  FaLocationArrow,
  FaMailBulk,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import ShortBanner from "../../components/ui/ShortBanner";
import { useEffect } from "react";
import Aos from "aos";
import Container from "../../components/ui/Container";

const ContactUS = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <ShortBanner
        banner={"all-plants-banner-2"}
        header={"Contact Us"}
        text={`Fill up the from to contact with us to get our support`}
      />
      <Container className={"grid grid-cols-12 gap-12 py-16"}>
        <form className="col-span-8">
          <div className="grid grid-cols-2 gap-5 ">
            <div className="form-control w-full" data-aos="zoom-in">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control w-full" data-aos="zoom-in">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control w-full" data-aos="zoom-in">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Your Phone"
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control w-full" data-aos="zoom-in">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control mt-5 mb-10" data-aos="zoom-in">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="text" data-aos="flip-up">
            <button type="submit" className=" btn-outline">
              Send Message
            </button>
          </div>
        </form>
        {/* others section */}
        <div className="space-y-10 col-span-4">
          <div data-aos="zoom-in">
            <h5 className="text-2xl font-semibold mb-2">
              Before Contacting Us
            </h5>
            <p>
              Writing content in your unique style just got easier. Try
              ContentShake to create, optimize, and publish engaging articles in
              an instant.
            </p>
          </div>
          <div className="space-y-1 mb-2" data-aos="zoom-in">
            <h5 className="text-2xl font-semibold">Contact Information</h5>
            <p className="flex items-center gap-2">
              <FaLocationArrow className="text-[#01352c]"></FaLocationArrow>{" "}
              Dhaka,Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#01352c]"></FaPhoneAlt>+880
              17744647257
            </p>
            <p className="flex items-center gap-2">
              <FaMailBulk className="text-[#01352c]"></FaMailBulk>{" "}
              yasinkhanrabbi1999@gmail.com
            </p>
          </div>
          <div data-aos="flip-up">
            <h5 className="text-2xl font-semibold">Social Media</h5>
            <div className="space-x-5 mt-5">
              <button className="btn btn-outline  btn-sm">
                {" "}
                <FaTwitter className="text-xl"></FaTwitter> Twitter
              </button>
              <button className="btn btn-outline  btn-sm">
                <FaFacebookF className="text-xl"></FaFacebookF> Facebook
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUS;

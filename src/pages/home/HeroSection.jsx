import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="relative bg-black w-full">
      <div ref={sliderRef} className="keen-slider h-[100vh]">
        {/* slider-1 */}
        <div className="keen-slider__slide number-slide1">
          <div
            className="flex flex-col w-10/12 items-center  text-center space-y-5"
            data-aos="zoom-in"
          >
            <h2 className="text-5xl font-bold ">
              Welcome to NatureNest Nursery
            </h2>
            <h3 className="text-4xl font-bold">Trees our best friends</h3>
            <p className="text-sm max-w-[64ch]">
              This is not a nursery , this is a green heaven for us. Where
              nature flourishes! Discover your perfect nursery today.
            </p>

            <Link to="/plant-category" className="btn btn-sm">
              Shop Now
            </Link>
          </div>
        </div>
        {/* slider-2 */}
        <div className="keen-slider__slide number-slide2">
          <div
            className="flex flex-col w-10/12 items-center  text-center space-y-5"
            data-aos="zoom-in"
          >
            <h2 className="text-5xl font-bold ">
              Welcome to NatureNest Nursery
            </h2>
            <h3 className="text-4xl font-bold">Trees our best friends</h3>
            <p className="text-sm max-w-[64ch] mb-10">
              This is not a nursery , this is a green heaven for us. Where
              nature flourishes! Discover your perfect nursery today.
            </p>
                <Link to="/plant-category" className="btn btn-sm">
              Shop Now
            </Link>
          </div>
        </div>
        {/* slider-3 */}
        <div className="keen-slider__slide number-slide3">
          <div
            className="flex flex-col w-10/12 items-center  text-center space-y-5"
            data-aos="zoom-in"
          >
            <h2 className="text-5xl font-bold ">
              Welcome to NatureNest Nursery
            </h2>
            <h3 className="text-4xl font-bold">Trees our best friends</h3>
            <p className="text-sm max-w-[64ch] mb-10">
              This is not a nursery , this is a green heaven for us. Where
              nature flourishes! Discover your perfect nursery today.
            </p>

                <Link to="/plant-category" className="btn btn-sm">
              Shop Now
            </Link>
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

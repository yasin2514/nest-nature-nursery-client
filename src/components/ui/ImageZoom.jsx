import { useState, useRef, useEffect } from "react";

const ImageZoom = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const zoomRef = useRef(null);

  const handleMouseDown = (e) => {
    if (!isZoomed) return;
    const { left, top } = zoomRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - left, y: e.clientY - top });
    zoomRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isZoomed) return;
    const { x, y } = offset;
    const { left, top, width, height } =
      zoomRef.current.getBoundingClientRect();
    const moveX = e.clientX - left - x;
    const moveY = e.clientY - top - y;
    zoomRef.current.scrollLeft -= moveX;
    zoomRef.current.scrollTop -= moveY;
  };

  const handleMouseUp = () => {
    if (!isZoomed) return;
    zoomRef.current.style.cursor = "grab";
  };

  useEffect(() => {
    if (isZoomed) {
      zoomRef.current.style.cursor = "grab";
    }
  }, [isZoomed]);

  return (
    <div
      className="relative overflow-hidden rounded-lg outline outline-[#01352c] "
      ref={zoomRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ cursor: isZoomed ? "zoom-out" : "zoom-in" }}
      onClick={() => setIsZoomed(!isZoomed)}
    >
      <img
        src={src}
        alt={alt}
        className={`object-contain transition-transform duration-300 ${
          isZoomed ? "transform scale-150" : "transform scale-100"
        }`}
        style={{ width: "100%", height: "auto", maxHeight: "450px" }} // Adjust the maxHeight as needed
      />
    </div>
  );
};

export default ImageZoom;

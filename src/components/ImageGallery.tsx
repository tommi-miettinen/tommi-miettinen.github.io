import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import Overlay from "./Overlay";
import { useNavigate, useLocation } from "react-router-dom";

const ImageGallery = ({ images, className }: { className?: string; images: string[] }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const filenameFromSrc = (path: string) => encodeURIComponent(path.split("/").pop()!);

  return (
    <Fragment>
      <div className={twMerge("bg-gray-800 rounded-lg grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-2", className)}>
        {images.map((image) => (
          <Fragment>
            <div
              className="relative flex flex-col items-center justify-center hover:opacity-80"
              onClick={() => navigate(`${location.pathname}/${filenameFromSrc(image)}`)}
            >
              <img className="h-auto max-w-full rounded-lg border  cursor-pointer" src={image} alt="" />
            </div>
            {location.pathname.includes(filenameFromSrc(image)!) && (
              <Overlay dismiss={() => navigate(-1)}>
                <img className="h-full object-contain" src={image} />
              </Overlay>
            )}
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default ImageGallery;

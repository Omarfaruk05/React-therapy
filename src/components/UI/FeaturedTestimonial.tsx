import React from "react";
import CartLayout from "../../layout/CartLayout";
import photo from "../../assets/image 116.png";
import { MapPin } from "phosphor-react";

const FeaturedTestimonial = () => {
  return (
    <div>
      <h5 className="text-xl font-semibold">Featured Testimonial</h5>
      <CartLayout>
        <div className="space-y-3">
          <div className="flex items-center gap-3 border p-2 rounded-xl">
            <img className="shrink-0 w-[130] h-[140px]" src={photo} alt="" />
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <MapPin className="text-gray-500" size={12} weight="fill" />
                <p className="text-xs md:text-md 2xl:text-lg">
                  123 Elm Street, New York
                </p>
              </div>
              <h3 className="text-md md:text-lg 2xl:texxt-xl font-semibold">
                <span>Healing Bodywork</span>{" "}
                <span className="text-blue-500 italic">by Cort</span>
              </h3>
              <p className="text-sm md:text-md 2xl:text-lg">
                <span>
                  Cort’s healing bodywork massage was absolutely transformative.
                  Their intuitive touch and deep understanding of...
                </span>
                <span className="font-semibold text-blue-500 underline">
                  Read More
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 border p-2 rounded-xl">
            <img className="shrink-0 w-[130] h-[140px]" src={photo} alt="" />
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <MapPin className="text-gray-500" size={12} weight="fill" />
                <p className="text-xs md:text-md 2xl:text-lg">
                  123 Elm Street, New York
                </p>
              </div>
              <h3 className="text-md md:text-lg 2xl:text-xl font-semibold">
                <span>Healing Bodywork</span>{" "}
                <span className="text-blue-500 italic">by Cort</span>
              </h3>
              <p className="text-sm md:text-md 2xl:text-lg">
                <span>
                  Cort’s healing bodywork massage was absolutely transformative.
                  Their intuitive touch and deep understanding of...
                </span>
                <span className="font-semibold text-blue-500 underline">
                  Read More
                </span>
              </p>
            </div>
          </div>
        </div>
      </CartLayout>
    </div>
  );
};

export default FeaturedTestimonial;

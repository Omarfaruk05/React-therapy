import CartLayout from "../../layout/CartLayout";
import { MapPin } from "phosphor-react";
import { useEffect, useState } from "react";
import { ITestimonial } from "../../interfaces/mocData.interface";
import mocTestimonial from "../../../public/data/mockTestimonial.json";

const FeaturedTestimonial = () => {
  const [testimonial, setTestimonial] = useState<ITestimonial[]>([]);

  useEffect(() => {
    setTestimonial(mocTestimonial as ITestimonial[]);
  });
  return (
    <div>
      <h5 className="text-xl font-semibold">Featured Testimonial</h5>
      <CartLayout>
        <div className="space-y-3">
          {testimonial &&
            testimonial.map((data: ITestimonial, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border p-2 rounded-xl"
              >
                <img
                  className="shrink-0 w-[130] h-[140px]"
                  src={data?.image}
                  alt=""
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="text-gray-500" size={12} weight="fill" />
                    <p className="text-xs md:text-md 2xl:text-lg">
                      {data?.address}
                    </p>
                  </div>
                  <h3 className="text-md md:text-lg 2xl:texxt-xl font-semibold">
                    <span>{data?.title}</span>{" "}
                    <span className="text-blue-500 italic">by Cort</span>
                  </h3>
                  <p className="text-sm md:text-md 2xl:text-lg">
                    <span>{data?.description.slice(0, 111)}...</span>
                    <span className="font-semibold text-blue-500 underline">
                      Read More
                    </span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </CartLayout>
    </div>
  );
};

export default FeaturedTestimonial;

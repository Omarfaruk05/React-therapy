import CartLayout from "../../layout/CartLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Car, CaretLeft, CaretRight, MapPin } from "phosphor-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";
import { ITherapist } from "../../interfaces/mocData.interface";
import mockTherapist from "../../../public/data/mocktherapist.json";

const FeaturedTherapist = () => {
  const [therapist, setTherapist] = useState<ITherapist[] | null>([]);
  const num = [1, 2, 3, 4, 5, 6, 7, 8];
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setTherapist(mockTherapist as ITherapist[]);
  });
  return (
    <CartLayout>
      <div className="flex items-center gap-2">
        <div>
          <CaretLeft
            className="bg-[#D4E9FF] hover:bg-[#156BCA] rounded-full text-white font-bold w-9 h-9 p-2"
            onClick={() => swiperRef.current?.slidePrev()}
            size={32}
          />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1444: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {num.map((slide) => (
            <div key={slide} className="flex-[0_0_80%]">
              {therapist?.map((data: ITherapist, index) => (
                <SwiperSlide key={index}>
                  <Card>
                    <CardHeader className="p-[5px]">
                      <img
                        className="w-[194px] h-[146px]"
                        src={data?.image}
                        alt="image"
                        width={600}
                        height={400}
                      />
                    </CardHeader>
                    <CardContent className="space-y-2 text-start p-0">
                      <CardTitle className="text-md px-3">
                        {data?.name}
                      </CardTitle>
                      <CardDescription className="space-y-1 text-gray-400 px-2">
                        <div className="flex items-center gap-1">
                          <MapPin
                            className="text-gray-600"
                            size={12}
                            weight="fill"
                          />
                          <p>{data?.address}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Car className="text-gray-600" size={12} />
                          <p>{data?.workType}</p>
                        </div>
                      </CardDescription>
                      <Button
                        className="w-full rounded-none text-black hover:text-white font-semibold bg-[#D4E9FF] hover:bg-[#156BCA] underline"
                        size="xs"
                      >
                        See Details
                      </Button>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </div>
          ))}
        </Swiper>
        <div>
          <CaretRight
            className="bg-[#D4E9FF] hover:bg-[#156BCA] rounded-full text-white font-bold w-9 h-9 p-2"
            onClick={() => swiperRef.current?.slideNext()}
            size={32}
          />
        </div>
      </div>
    </CartLayout>
  );
};

export default FeaturedTherapist;

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from "keep-react";
import CartLayout from "../../layout/CartLayout";
import photo from "../../assets/image 116.png";

const FeaturedTherapist = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <CartLayout>
      <div className="relative w-full">
        <Carousel className="w-screen" options={{ loop: true }}>
          <CarouselSlides className="w-screen">
            {num.map((slide) => (
              <CarouselItem key={slide} className="flex-[0_0_80%]">
                <CarouselItem
                  key={slide}
                  className="flex-[0_0_80%] [&:not(.is-snapped)]:opacity-[0.16]"
                >
                  <img
                    className="rounded-xl"
                    src={"https://picsum.photos/700/350?v=1"}
                    alt="Carousel Item"
                  />
                </CarouselItem>
              </CarouselItem>
            ))}
          </CarouselSlides>
          <CarouselControl>
            <div className="absolute top-1/2 -mt-4 -left-4">
              <CarouselPrevButton className="text-white" />
            </div>
            <div className="absolute top-1/2 -mt-4 -right-4">
              <CarouselNextButton />
            </div>
          </CarouselControl>
        </Carousel>
      </div>
    </CartLayout>
  );
};

export default FeaturedTherapist;

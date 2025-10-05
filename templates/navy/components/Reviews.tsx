'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ResumeReviewItem } from '@/types/resume';

export default function Reviews({
  reviews
}: {
  reviews: ResumeReviewItem[];
}) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
      setTotalItems(carouselApi.scrollSnapList().length);
    };

    updateCarouselState();

    carouselApi.on('select', updateCarouselState);

    return () => {
      carouselApi.off('select', updateCarouselState); // Clean up on unmount
    };
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  return (
    <div className="relative px-5 mx-auto mt-5 max-w-7xl lg:mt-6 mb-4">
      <Carousel
        setApi={setCarouselApi}
        opts={{ loop: true }}
        className="w-full max-w-7xl  z-10 "
      >
        <CarouselContent className="!max-w-[calc(100vw-50px)] ">
          {reviews.map((review, index) => (
            <CarouselItem key={index}>
              <Card className="bg-primary-950">
                <CardContent className="flex items-center justify-center p-6">
                  <div className="p-2 sm:p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform overflow-hidden">
                    <div className="text-xl md:text-2xl font-bold mb-1 flex flex-row items-center gap-4">
                      {review.reviewName}

                      {review.reviewDate && (
                        <div className="text-sm md:text-lg font-semibold">
                          {review.reviewDate}
                        </div>
                      )}
                    </div>
                    {review.company && (
                      <div className="text-sm md:text-lg font-semibold mb-1">
                        {review.company}
                      </div>
                    )}
                    {review.comment && (
                      <div className="text-lg md:text-xl font-semibold mb-3">
                        <span
                          suppressHydrationWarning
                          dangerouslySetInnerHTML={{
                            __html: review.comment || ''
                          }}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-3 pointer-events-none">
        <Button
          onClick={() => scrollToIndex(currentIndex - 1)}
          className="pointer-events-auto rounded-full w-16 h-16 p-0 bg-transparent shadow-none hover:bg-transparent"
        >
          <ChevronLeft
            className="size-16 text-primary-950"
            strokeWidth={1}
          />
        </Button>
        <Button
          onClick={() => scrollToIndex(currentIndex + 1)}
          className="pointer-events-auto rounded-full w-16 h-16 p-0 bg-transparent shadow-none hover:bg-transparent"
        >
          <ChevronRight
            className="size-16 text-primary-950"
            strokeWidth={1}
          />
        </Button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

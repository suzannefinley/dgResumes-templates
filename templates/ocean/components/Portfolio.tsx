'use client';
import { PortfolioProject } from '@/types/resume';
import SectionHeader from './shared/SectionHeader';
import PortfolioItem from './PortfolioItem';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

export default function Portfolio({
  portfolio
}: {
  portfolio: PortfolioProject[];
}) {
  return (
    <>
      <section>
        <SectionHeader label="Portfolio" />

        <Carousel
          className=" bg-gray-100 my-5 py-5 mr-5 rounded-lg"
          opts={{
            loop: true,
            align: 'start'
          }}
          plugins={[
            Autoplay({
              delay: 2000
            })
          ]}
        >
          <CarouselContent className="ml-5">
            {portfolio.map((item, index) => (
              <PortfolioItem key={index} item={item} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}

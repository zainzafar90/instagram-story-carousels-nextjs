"use client";

import React from "react";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import { cn } from "@/lib/utils";
import { useStoryProgressStore } from "@/store/story.store";

type Story = {
  title: string;
  song: string;
  image: string;
};

const stories: Story[] = [
  {
    title: "Mountain Escape",
    song: "Elevation - High Altitude Tunes",
    image: "/images/1.avif",
  },
  {
    title: "Beach Day",
    song: "Ocean Waves - Summer Hits",
    image: "/images/2.avif",
  },
  {
    title: "Sunset Vibes",
    song: "Golden Hour - The Vibe Guide",
    image: "/images/3.avif",
  },
  {
    title: "City Lights",
    song: "Night Drive - Chillwave Essentials",
    image: "/images/4.avif",
  },
];

export const StoryCarousel = () => {
  const { progresses, setProgress, fillProgressesUpTo, initProgresses } =
    useStoryProgressStore();
  const onAutoplayTimeLeft = (
    swiper: SwiperType,
    _: number,
    progressValue: number
  ) => {
    const progressComputed = progressValue * 100;
    const inverseProgress = Math.min(Math.ceil(100 - progressComputed), 100);
    setProgress(swiper.realIndex, inverseProgress);
  };

  return (
    <div>
      <Swiper
        spaceBetween={0}
        navigation={true}
        centeredSlides={true}
        onAutoplayStart={() => initProgresses(stories.length)}
        onSlideChange={(swiper) => fillProgressesUpTo(swiper.realIndex)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="relative overflow-hidden"
      >
        {stories.map((story, i) => (
          <SwiperSlide key={i}>
            <StoryTile story={story} />
          </SwiperSlide>
        ))}

        <div className="absolute top-3 left-2 right-2 z-10 h-[4px] overflow-hidden">
          <div className="flex space-x-1 w-full h-full">
            {progresses.map((progress: number, index: number) => (
              <div
                key={index}
                className="relative flex-1 bg-opacity-80 overflow-hidden rounded-full"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-30" />
                <div
                  style={{ width: `${progress}%` }}
                  className="absolute top-0 left-0 h-full z-10 bg-white bg-opacity-80 transition-all duration-100 ease-linear"
                />
              </div>
            ))}
          </div>
        </div>
      </Swiper>
    </div>
  );
};

const StoryTile = (props: { story: Story; className?: string }) => {
  return (
    <div className="relative group aspect-[9/16] flex-none h-full w-full max-h-[720px] items-center justify-center border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
      <Image
        fill
        alt=""
        src={props.story.image}
        className="relative aspect-[9/16] object-cover"
        sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
      />

      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}

      <div className="relative top-5 left-2 flex flex-col items-start justify-start w-full h-full">
        <StoryTitle>{props.story.title}</StoryTitle>
        <StorySubtitle>{props.story.song}</StorySubtitle>
      </div>
    </div>
  );
};

const StoryTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-primary-foreground text-sm font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
};

const StorySubtitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-primary-foreground text-xs tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
};

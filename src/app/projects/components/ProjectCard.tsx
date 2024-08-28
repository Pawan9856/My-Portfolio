import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  images: StaticImageData[];
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex justify-center items-center flex-col lg:flex-row w-full gap-10">
      <div className="basis-1/2 h-full px-1 flex justify-center items-center lg:col-span-7">
        <Carousel className="max-w-[600px] w-2/3" >
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="p-1 sm:p-3 bg-mySecondaryColor">
                  <CardContent className="p-0 flex rounded-lg w-full h-full ">
                    <Image
                      src={image}
                      alt="Picture of the author"
                      className=" object-contain"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="basis-1/2 flex flex-col gap-7 px-5 py-5 text-center lg:text-start">
        <h1 className="text-mySecondaryColor text-lg sm:text-2xl font-bold ">
          {project.title}
        </h1>
        <p className="text-mySecondaryColor/90 text-sm sm:text-lg">
          {project.description}
        </p>
        <div className="flex justify-center lg:justify-start">
          <Link
            href="/project/project1"
            className="py-3 text-sm sm:text-lg hover:scale-105 transition-all duration-300 font-semibold px-10 rounded-lg bg-myExtraColor text-white"
          >
            CASE STUDY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

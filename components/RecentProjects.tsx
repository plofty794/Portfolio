/* eslint-disable @next/next/no-img-element */
"use client";

import { ExternalLinkIcon } from "lucide-react";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          A collection of <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-col items-center justify-center p-4 space-y-8 mt-10">
          {projects.map((item) => (
            <div
              className="sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
              key={item.id}
            >
              <PinContainer
                title="Visit"
                href="https://post-it-ecru.vercel.app/"
              >
                <a href={item.link} target={"_blank"}>
                  <div className="relative flex items-center justify-center w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img src="/bg.png" alt="bgimg" />
                    </div>
                    <img
                      src={item.img}
                      alt="cover"
                      className="z-[5] absolute w-3/4 mx-auto object-cover"
                    />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full black-gradient lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <ExternalLinkIcon className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </a>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;

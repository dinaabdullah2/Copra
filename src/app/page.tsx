import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { ArrowRight, Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
import { Icons } from "@/components/Icons";
export default function Home() {
  return (
    <div className=" overflow-hidden">
      <section>
        <MaxWidthWrapper className="pb-24  lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 pt-24 xl:pt-32 lg:pb-52">
          <div className=" col-span-2 px-6 lg:px-0 lg:pt-4 ">
            <div className=" flex flex-col  mx-auto text-center lg:text-left  items-center lg:items-start ">
              <div className=" relative w-28 hidden lg:block">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                <img src="/snake-1.png" className="w-full" />
              </div>
              <h1 className=" relative lg:text-7xl md:text-6xl text-5xl mt-2  c">
                Your Image on a{" "}
                <span className="bg-green-600 text-white px-2 ">Custom</span>{" "}
                Phone Case
              </h1>

              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>
              <ul className=" mt-7 font-medium  space-y-2 ">
                <li className=" flex gap-3 items-center">
                  {" "}
                  <Check className="h-5 w-5 shrink-0 text-green-600" />{" "}
                  High-quality, durable material
                </li>
                <li className=" flex gap-3 items-center">
                  {" "}
                  <Check className="h-5 w-5 shrink-0 text-green-600" />5 year
                  print guarantee
                </li>
                <li className=" flex gap-3 items-center">
                  {" "}
                  <Check className="h-5 w-5 shrink-0 text-green-600" /> Modern
                  iPhone models supported
                </li>
              </ul>
              <div className=" flex md:flex-row flex-col gap-5 mt-12 ">
                <div className=" flex items-center md:justify-start justify-center -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user image"
                  />
                </div>
                <div className="flex flex-col ">
                  <div className="flex gap-0.5  md:justify-start justify-center ">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    <span className=" font-semibold md:text-left text-center">
                      1,250
                    </span>{" "}
                    happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Phone imgSrc="/testimonials/1.jpg" className="w-64" />
              <img
                className=" absolute -bottom-7 -left-7 z-50   w-28  h-40"
                src="/line.png"
                alt="outer-line"
              />
              <img
                className="absolute w-40  lg:w-48 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                src="/your-image.png"
                alt="outer-line"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className=" bg-slate-100 py-24   bg-opacity-[.8]">
        <MaxWidthWrapper>
          <h2  className=" text-center relative md:text-6xl text-5xl mt-2  font-bold tracking-tight !leading-tight  text-gray-900 text-balance">
            What our <span className=" relative ">customers <Icons.underline className=" hidden sm:block absolute -bottom-6 inset-x-0 text-green-500" /></span> say
          </h2>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

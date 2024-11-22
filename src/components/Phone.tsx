import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes } from "react";

interface PhoneProps extends HtmlHTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden rounded-3xl",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "phone-template-white-edges.png"
        }
        className=" z-[50] pointer-events-none select-none"
      />

      <div className="inset-0 -z-10 absolute  ">
        <img
          src={imgSrc}
          className="object-cover min-w-full min-h-full"
          alt="phone-img"
        />
      </div>
    </div>
  );
};

export default Phone;

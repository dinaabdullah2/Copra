import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// Navbar server component ssr
const Navbar = async () => {
  const {getUser} = getKindeServerSession()
  const user = await getUser()
  const isAdmin = user?.email === process.env.ADMIN_EMAIL
  return (
    <nav className=" bg-white/75 g-white border-b  fixed top-0 w-full h-14 z-[1000]   backdrop-blur-lg   border-gray-200  px-2.5 md:px-20  ">
      <MaxWidthWrapper className=" py-4">
        <div className=" flex justify-between items-center h-full">
          <Link href="/" className="flex    font-semibold capitalize">
            case<span className="text-green-600">cobra</span>
          </Link>
          {user ? (
            <div className="h-full flex items-center space-x-4">
              <Link
                href="/api/auth/logout"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Sign out
              </Link>
              {isAdmin && (
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Dashboard ✨
                </Link>
              )}
              <Link
                href="/configure/upload"
                className={buttonVariants({
                
                  size: "sm",
                  className: "hidden sm:flex items-center gap-1 rounded-lg  !bg-green-500 hover:bg-green-500 hover:bg-opacity-[.9]",
                })}
              >
                Create case
                <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </div>
          ) : (
            <div className="h-full flex items-center space-x-4">
            <RegisterLink
            href='/api/auth/register'
            className={buttonVariants({
              size: 'sm',
              variant: 'ghost',
            })}>
            Sign up
          </RegisterLink>

          <LoginLink
            href='/api/auth/login'
            className={buttonVariants({
              size: 'sm',
              variant: 'ghost',
            })}>
            Login
          </LoginLink>

          <div className='h-8 w-px bg-zinc-200 hidden sm:block' />

          <Link
            href='/configure/upload'
            className={buttonVariants({
              size: 'sm',
              className: 'hidden sm:flex items-center gap-1  bg-green-500 hover:bg-green-500 hover:bg-opacity-[.9]',
            })}>
            Create case
            <ArrowRight className='ml-1.5 h-5 w-5' />
          </Link>
          </div>
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;

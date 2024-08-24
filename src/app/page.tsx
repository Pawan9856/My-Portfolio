import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
export default function Home() {
  return (
    <>
      <div className="bg-transparent w-full mt-40 ">
        <div className="hidden fixed left-0 rounded-r-md md:flex flex-col justify-center items-center bg-mySecondaryColor/90 px-2 gap-5 py-5">
          <Link href="https://www.linkedin.com/in/pawan-paliwal-3819a122a/">
            <FaLinkedin className="text-3xl text-white hover:text-myPrimaryColor hover:scale-110 traall duration-300" />
          </Link>
          <Link href="https://github.com/Pawan9856">
            <FaGithub className="text-3xl text-white hover:text-myPrimaryColor hover:scale-110 traall duration-300" />
          </Link>
          <Link href="https://leetcode.com/u/pawan_4444/">
            <SiLeetcode className="text-3xl text-white hover:text-myPrimaryColor hover:scale-110 traall duration-300" />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-14 text-mySecondaryColor">
          <span className="text-6xl font-bold w-2/3 text-center">
            HEY, I'M PAWAN PALIWAL
          </span>
          <span className=" text-xl w-1/2 text-center">
            A Fullstack Web Developer Building the future of the web, one
            elegant line of code at a time.
          </span>
          <Link
            href="/projects"
            className="py-4 text-lg hover:scale-105 transition-all duration-300 font-semibold px-20 rounded-lg bg-[#e76f51] text-white"
          >
            PROJECTS
          </Link>
        </div>
      </div>
    </>
  );
}

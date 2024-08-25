import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import ProfilePic from "../../assets/profile-pic.jpg";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-mySecondaryColor/90 text-slate-200 backdrop-blur-lg sticky top-0 z-50 w-full py-3  flex justify-between px-10 ">
      <Link className="flex justify-center items-center gap-3" href="/">
        <Avatar className="w-14 h-14">
          <Image src={ProfilePic} alt="profile" width={500} height={500} />

          <AvatarFallback className="text-black">P</AvatarFallback>
        </Avatar>
        <span className="text-lg font-semibold hover:text-myPrimaryColor cursor-pointer transition-all duration-300">
          PAWAN PALIWAL
        </span>
      </Link>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex justify-center items-center gap-10 text-sm font-semibold">
          <NavigationMenuItem className="hover:text-myPrimaryColor cursor-pointer transition-all duration-300">
            <NavigationMenuLink asChild>
              <Link href="/">HOME</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:text-myPrimaryColor cursor-pointer transition-all duration-300">
            <NavigationMenuLink asChild>
              <Link href="/about">ABOUT</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:text-myPrimaryColor cursor-pointer transition-all duration-300">
            <NavigationMenuLink asChild>
              <Link href="/projects" prefetch= {false}>PROJECTS</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:text-myPrimaryColor cursor-pointer transition-all duration-300">
            <NavigationMenuLink asChild>
              <Link href="/contact">CONTACT</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden">
          <IoMdMenu className="text-3xl hover:text-myPrimaryColor" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-mySecondaryColor/90 text-white border-none">
          <DropdownMenuItem asChild ><Link href="/" className="">HOME</Link></DropdownMenuItem>
          <DropdownMenuItem asChild><Link href="/about">ABOUT</Link></DropdownMenuItem>
          <DropdownMenuItem asChild><Link href="/projects">PROJECTS</Link></DropdownMenuItem>
          <DropdownMenuItem asChild><Link href="/contact">CONTACT</Link></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;

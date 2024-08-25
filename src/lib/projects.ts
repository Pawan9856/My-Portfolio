import project1_image1 from "@/assets/GYM-management/p1.png";
import project1_image2 from "@/assets/GYM-management/p2.png";
import project1_image3 from "@/assets/GYM-management/p3.png";
import project1_image4 from "@/assets/GYM-management/p4.png";
import project1_image5 from "@/assets/GYM-management/p5.png";
import project1_image6 from "@/assets/GYM-management/p6.png";

import project2_image1 from "@/assets/Inventory-management-system/p1.png";
import project2_image2 from "@/assets/Inventory-management-system/p2.png";
import project2_image3 from "@/assets/Inventory-management-system/p3.png";
import project2_image4 from "@/assets/Inventory-management-system/p4.png";
import project2_image5 from "@/assets/Inventory-management-system/p5.png";
import project2_image6 from "@/assets/Inventory-management-system/p6.png";

import { StaticImageData } from "next/image";

type Project = {
  title: string;
  description: string;
  images: StaticImageData[];
};

const project1: Project = {
  title: "GYM Management System",
  description:
    "A ReactJS and JavaScript-based, responsive web application designed for efficient gym management. It utilizes Firebase for secure database management, authentication, and Firebase Storage for storing user profile pictures.",
  images: [
    project1_image1,
    project1_image2,
    project1_image3,
    project1_image4,
    project1_image5,
    project1_image6,
  ],
};
const project2: Project = {
  title: "Inventory Management System",
  description:
    "This web application is built using the MERN stack to efficiently manage and track inventory items for students. The system incorporates item tracking, safety stock management, and user authentication, along with PDF generation and a history of requests tracking feature.",
  images: [
    project2_image1,
    project2_image2,
    project2_image3,
    project2_image4,
    project2_image5,
    project2_image6,
  ],
};

export const projects = [project1, project2];

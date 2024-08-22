import React from "react";
import { CNavItem } from "@coreui/react";
import { MdDashboard } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { MdOutlineAssignment } from "react-icons/md";
import { PiBookmarksLight } from "react-icons/pi";
import { GrCatalog } from "react-icons/gr";
import { LiaUsersSolid } from "react-icons/lia";
const Nav = [
  {
    component: CNavItem,
    icon: <MdDashboard className=" text-2xl hover:text-white" />,
    name: (
      <span className="font-Roboto font-medium text-lg  pl-4">Dashboard</span>
    ),
    to: "/dashboard",
  },

  {
    component: CNavItem,
    icon: <FaBookReader className=" text-2xl" />,
    name: (
      <span className=" font-Roboto font-medium text-lg pl-4">My Learning</span>
    ),
    to: "/student/MyLearning",
  },
  {
    component: CNavItem,
    icon: <VscGraph className=" text-2xl" />,
    name: (
      <span className=" font-Roboto font-medium text-lg pl-4">My Progress</span>
    ),
    to: "/student/MyProgress",
  },

  {
    component: CNavItem,
    icon: <MdOutlineAssignment className=" text-2xl" />,
    name: (
      <span className=" font-Roboto font-medium text-lg pl-4">
        Test/Assignments
      </span>
    ),
    to: "/student/Test",
  },
  {
    component: CNavItem,
    icon: <PiBookmarksLight className=" text-2xl" />,
    name: (
      <span className=" font-Roboto font-medium text-lg pl-4">Bookmarks</span>
    ),
    to: "/student/Bookmarks",
  },
  {
    component: CNavItem,
    icon: <GrCatalog className=" text-2xl" />,
    name: (
      <span className=" font-Roboto font-medium text-lg pl-4">
        Course Catalog
      </span>
    ),
    to: "/student/CourseCatalog",
  },
  {
    component: CNavItem,
    icon: <LiaCertificateSolid className=" text-2xl  " />,
    name: (
      <span className=" font-Roboto font-medium text-lg pl-4">
        Certificates
      </span>
    ),
    to: "/student/Certificates",
  },
  {
    component: CNavItem,
    icon: <FaHandHoldingUsd className=" text-2xl" />,
    name: (
      <span className=" font-Roboto font-medium text-lg pl-4">Payments</span>
    ),
    to: "/student/Payment",
  },
  {
    component: CNavItem,
    icon: <LiaUsersSolid className=" text-2xl " />,
    name: (
      <span className=" font-Roboto font-medium text-lg pl-4 ">Batches</span>
    ),
    to: "/student/Batches",
  },
];

export default Nav;

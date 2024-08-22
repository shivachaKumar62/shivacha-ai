
import React from "react";

import { ReactComponent as Vector } from "./sidebarimage/User.svg";
import { ReactComponent as AiDashboard } from "./sidebarimage/Ai Studio.svg";
import { ReactComponent as Video } from "./sidebarimage/Video.svg";
import { ReactComponent as Audio } from "./sidebarimage/Audio.svg"; 
import { ReactComponent as Help } from "./sidebarimage/leftbar/Help.svg";
import { ReactComponent as TextSpeech } from "./sidebarimage/textSpeech.svg";
import { ReactComponent as Dubbingstudio } from "./sidebarimage/Dubbing Studio.svg";
import { ReactComponent as Templates } from "./sidebarimage/Templates.svg";
import { ReactComponent as ApiKey } from "./sidebarimage/Api Key Secret.svg";
import { ReactComponent as TermCondiotion } from "./sidebarimage/term & Condition.svg";
import "./component/AppSidebarNav.css"
// import {AiDashboard} from "../../src/sidebarimage/Vector.svg"
import { ReactComponent as Admin } from "./sidebarimage/leftbar/admin.svg";
import { ReactComponent as Apikey } from "./sidebarimage/leftbar/apikey.svg";
import { ReactComponent as Blogcommenting } from "./sidebarimage/leftbar/Blogcommenting.svg";
import { ReactComponent as BulkAudio } from "./sidebarimage/leftbar/BulkAudio.svg";
import { ReactComponent as BulkVideo } from "./sidebarimage/leftbar/BulkVideo.svg";
import { ReactComponent as Cashdelivery } from "./sidebarimage/leftbar/Cashdelivery.svg";
import { ReactComponent as Emailtemplate } from "./sidebarimage/leftbar/Emailtemplate.svg";
import { ReactComponent as Group } from "./sidebarimage/leftbar/Group.svg";
import { ReactComponent as Logoutbutton } from "./sidebarimage/leftbar/Logoutbutton.svg";
import { ReactComponent as Positivetestimonials } from "./sidebarimage/leftbar/Positivetestimonials.svg";

import { ReactComponent as Subscriber } from "./sidebarimage/leftbar/Subscriber.svg";
import { ReactComponent as TableUsers } from "./sidebarimage/leftbar/tabler_users.svg";
import { ReactComponent as Tax } from "./sidebarimage/leftbar/Tax.svg";
import { ReactComponent as Updatesoftware } from "./sidebarimage/leftbar/Updatesoftware.svg";
import { ReactComponent as YellowPages } from "./sidebarimage/leftbar/YellowPages.svg";
import { ReactComponent as PaymentBoard } from "./sidebarimage/leftbar/payment-board.svg";
import { ReactComponent as TermsCondition } from "./sidebarimage/leftbar/term & Condition.svg";

import { ReactComponent as VoiceClonning } from "./sidebarimage/VoiceCloning.svg";

const Nav = [
  {
    icon: <Vector className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">
        Getting Started
      </span>
    ),
    to: "/getting-Started",
  },
  {
    icon: <Vector className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">Dashboard</span>
    ),
    to: "/dashboard",
  },
  {
    icon: <AiDashboard className="svg-icon " />,
    name: <span className="font-semibold pl-3">Shivacha Ai Studio</span>,
    items: [
      {
        icon: <BulkAudio className="svg-icon " />,
        name: <span className="font-semibold pl-3">Bulk Audio Generator</span>,
        to: "/Shivacha-Ai-Studio/bulk-audio",
      },
      {
        icon: <BulkVideo className="svg-icon " />,
        name: <span className="font-semibold pl-3">Bulk Video Generator</span>,
        to: "/Shivacha-Ai-Studio/bulk-video",
      },
    ],
  },
  // {
  //   icon: <Blogcommenting className="svg-icon " />,
  //   name: (
  //     <span className="font-Roboto font-medium text-lg pl-3">
  //       Voice Clonning
  //     </span>
  //   ),
  //   to: "/voice-clonning",
  // },
  {
    icon: <VoiceClonning className="svg-icon  " />,
    name: <span className="font-semibold pl-3">Voice Clonning</span>,
    items: [
      {
        icon: <Blogcommenting className="svg-icon " />,
        name: <span className="font-semibold pl-3">Clone Your Voice</span>,
        to: "/create-clonning",
      },
      {
        icon: <Blogcommenting className="svg-icon " />,
        name: <span className="font-semibold pl-3">Voice Library</span>,
        to: "/voice-clonning",
      },
    ],
  },
  {
    icon: <Audio className="svg-icon " />,
    name: <span className="font-semibold pl-3">Audio Generator</span>,
    items: [
      {
        icon: <Blogcommenting className="svg-icon " />,
        name: <span className="font-semibold pl-3">Generate Audio</span>,
        to: "/generate-audio",
      },
      {
        icon: <Blogcommenting className="svg-icon " />,
        name: <span className="font-semibold pl-3">Audio Library</span>,
        to: "/audio-library",
      },
    ],
  },
  {
    icon: <Video className="svg-icon " />,
    name: <span className="font-semibold pl-3">Video Generator</span>,
    items: [
      {
        icon: <Video className="svg-icon " />,
        name: <span className="font-semibold pl-3">Generate Video</span>,
        to: "/generate-video",
      },
      {
        icon: <Video className="svg-icon " />,
        name: <span className="font-semibold pl-3">Video Library</span>,
        to: "/video-library",
      },
    ],
  },

  // {
  //   icon: <Audio className="svg-icon " />,
  //   name: (
  //     <span className="font-Roboto font-medium text-lg pl-3">
  //       Audio Generator
  //     </span>
  //   ),
  //   to: "/audio-generator",
  // },
  {
    icon: <Dubbingstudio className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">
        Dubbing Studio
      </span>
    ),
    to: "/Ai-Text-Reader",
  },

  {
    icon: <Templates className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">Templates</span>
    ),
    to: "/Templates",
  },
  {
    icon: <Templates className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">Membership</span>
    ),
    to: "/Membership",
  },
  {
    icon: <PaymentBoard className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">
        Payment Methods
      </span>
    ),
    to: "/payment",
  },
  {
    icon: <Tax className="svg-icon " />,
    name: <span className="font-Roboto font-medium text-lg pl-3">Taxes</span>,
    to: "/tax",
  },
  {
    icon: <Cashdelivery className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">Transactions</span>
    ),
    to: "/Transactions",
  },
  {
    icon: <Emailtemplate className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">
        Email Template
      </span>
    ),
    to: "/Email-Templates",
  },
  {
    icon: <Templates className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">Languages</span>
    ),
    to: "/Languages",
  },
  {
    icon: <Blogcommenting className="svg-icon " />,
    name: <span className="font-Roboto font-medium text-lg pl-3">Blog</span>,
    to: "/blog",
  },
  {
    icon: <Positivetestimonials className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">Testimonials</span>
    ),
    to: "/Testimonials",
  },
  {
    icon: <YellowPages className="svg-icon " />,
    name: <span className="font-Roboto font-medium text-lg pl-3">Pages</span>,
    to: "/Pages",
  },
  {
    icon: <TableUsers className="svg-icon " />,
    name: <span className="font-Roboto font-medium text-lg pl-3">Users</span>,
    to: "/Users",
  },
  {
    icon: <Admin className="svg-icon " />,
    name: <span className="font-Roboto font-medium text-lg pl-3">Admin</span>,
    to: "/Admin",
  },
  {
    icon: <Subscriber className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">Subscribers</span>
    ),
    to: "/Subscribers",
  },
  {
    icon: <Templates className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">Settings</span>
    ),
    to: "/Settings",
  },
  {
    icon: <Apikey className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">Api Keys</span>
    ),
    to: "/api-key",
  },
  {
    icon: <Updatesoftware className="svg-icon " />,
    name: <span className="font-Roboto font-medium text-lg pl-3">Update</span>,
    to: "/Update",
  },
  {
    icon: <Help className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">Help/Support</span>
    ),
    to: "/help&support",
  },
  {
    icon: <TermsCondition className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">
        Term & Conditions
      </span>
    ),
    to: "/Term&Conditions",
  },

  {
    icon: <Logoutbutton className="svg-icon " />,
    name: <span className="font-Roboto font-medium text-lg pl-3">Logout</span>,
    to: "/logout",
  },
];

export default Nav;

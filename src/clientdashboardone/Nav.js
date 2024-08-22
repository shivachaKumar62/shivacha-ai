
import React from "react";

import { ReactComponent as Vector } from "./sidebarimage/User.svg";
import { ReactComponent as AiDashboard } from "./sidebarimage/Ai Studio.svg";
import { ReactComponent as Video } from "./sidebarimage/Video.svg";
import { ReactComponent as Audio } from "./sidebarimage/Audio.svg"; 
import { ReactComponent as Help } from "./sidebarimage/Help.svg";
import { ReactComponent as TextSpeech } from "./sidebarimage/textSpeech.svg";
import { ReactComponent as Dubbingstudio } from "./sidebarimage/Dubbing Studio.svg";
import { ReactComponent as Templates } from "./sidebarimage/Templates.svg";
import { ReactComponent as ApiKey } from "./sidebarimage/Api Key Secret.svg";
import { ReactComponent as TermCondiotion } from "./sidebarimage/term & Condition.svg";
import "./component/AppSidebarNav.css"
// import {AiDashboard} from "../../src/sidebarimage/Vector.svg"
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
    name: <span className="font-semibold pl-3">Ai Studio</span>,
    items: [
      {
        icon: <TextSpeech className="svg-icon " />,
        name: <span className="font-semibold pl-3">Main</span>,
        to: "/shivacha-ai-studio",
      },
      {
        icon: <Audio className="svg-icon " />,
        name: <span className="font-semibold pl-3">Content</span>,
        to: "/content",
      },
    ],
  },
  {
    icon: <Video className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">
        Video Generator
      </span>
    ),
    to: "/Video-Generator",
  },
  {
    icon: <Audio className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">
        Audio Generator
      </span>
    ),
    to: "/audio-generator",
  },
  {
    icon: <TextSpeech className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">
        Ai Text Reader
      </span>
    ),
    to: "/Ai-Text-Reader",
  },
  {
    icon: <Dubbingstudio className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">
        Dubbing Studio
      </span>
    ),
    to: "/Dubbing-Studio",
  },
  {
    icon: <Templates className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">Templates</span>
    ),
    to: "/Templates",
  },
  {
    icon: <Help className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">Help/Support</span>
    ),
    to: "/Help",
  },
  {
    icon: <ApiKey className="svg-icon " />,
    name: <span className="font-Roboto font-medium text-lg pl-3">Api Key</span>,
    to: "/api-key",
  },
  {
    icon: <TermCondiotion className="svg-icon " />,
    name: (
      <span className="font-Roboto font-medium text-lg pl-3">
        Term & Conditions
      </span>
    ),
    to: "/term&conditions",
  },
];

export default Nav;

import React from "react";
import GettingStarted from "./pages/GettingStarted";
const GetStartAudio = React.lazy(() => import("./pages/audiopages/GetStartAudio"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Main = React.lazy(() => import("./pages/Main"));
const AudioGenerator = React.lazy(() => import("./pages/AudioGenerator"));
const AiTextReader = React.lazy(() => import("./pages/aitextreader/AiTextReader"));
const AiStudioVideo = React.lazy(() =>
  import("./pages/aistudio/AiVideo")
);
const AddVideo = React.lazy(() => import("./pages/aistudio/AddVideo"));
const routes = [
  { path: "/dashboard", name: "Dashboard", element: <Dashboard /> },
  {
    path: "/getting-started",
    name: "Getting Started",
    element: <GettingStarted />,
  },
  { path: "/main", name: "Main", element: <Main /> },
  {
    path: "/audio-generator",
    name: "Audio Generator",
    element: <AudioGenerator />,
  },
  {
    path: "/make-audio",
    name: "Make Audio",
    element: <GetStartAudio />,
  },
  {
    path: "/Ai-Text-Reader",
    name: "Ai Text Reader",
    element: <AiTextReader />,
  },
  {
    path: "/shivacha-ai-studio",
    name: "Main",
    element: <AiStudioVideo />,
  },
  {
    path: "/add-video",
    name: "Add Video",
    element: <AddVideo />,
  },
];
export default routes;

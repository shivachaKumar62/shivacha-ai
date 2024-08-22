import React from "react";
import GettingStarted from "./pages/GettingStarted";

const GetStartAudio = React.lazy(() => import("./pages/audiopages/GetStartAudio"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Main = React.lazy(() => import("./pages/Main"));
const AudioGenerator = React.lazy(() => import("./pages/AudioGenerator"));
const AiTextReader = React.lazy(() => import("./pages/aitextreader/AiTextReader"));
const AiStudioVideo = React.lazy(() =>
  import("./pages/aistudio/BulkVideo")
);
const Logout = React.lazy(() => import("./pages/Logout"));
const VoiceClonning = React.lazy(() => import("./pages/voiceclone/VoiceClonning"));
const AddVideo = React.lazy(() => import("./pages/aistudio/AddVideo"));
const VideoDashboard = React.lazy(() =>
  import("./pages/aistudio/VideoDashboard")
);
const BulkAudio = React.lazy(() => import("./pages/aistudio/BulkAudio"));
const AudioDashboard = React.lazy(() =>
  import("./pages/aistudio/AudioDashboard")
);
const BulkVideo = React.lazy(() => import("./pages/aistudio/BulkVideo"));
const VoiceCloneDashboard = React.lazy(() =>
  import("./pages/voiceclone/VoiceCloneDashboard")
);
const GenerateAudio = React.lazy(() =>
  import("./pages/generateaudio/GenerateAudio")
);
const AudioLibrary = React.lazy(() =>
  import("./pages/generateaudio/AudioLibrary")
);
const VideoLibrary = React.lazy(() =>
  import("./pages/generatevideo/VideoLibrary")
);
const GenerateVideo = React.lazy(() =>
  import("./pages/generatevideo/GenerateVideo")
);
const AudioProjectIdData = React.lazy(() =>
  import("./pages/aistudio/AudioProjectIdData")
);
const Payment = React.lazy(() =>
  import("./pages/paymentpage/Payment.tsx")
);
const Support = React.lazy(() => import("./pages/support/HelpSupport"));
const ApiKey = React.lazy(() => import("./pages/apikey/ApiKey"));
const TermsCondition = React.lazy(() =>
  import("./pages/termscondition/TermsCondition")
);

const routes = [
  { path: "/dashboard", name: "Dashboard", element: <Dashboard /> },
  {
    path: "/getting-started",
    name: "Getting Started",
    element: <GettingStarted />,
  },
  { path: "/main", name: "Main", element: <Main /> },
  {
    path: "/voice-clonning",
    name: "VoiceClonning",
    element: <VoiceCloneDashboard />,
  },
  {
    path: "/create-clonning",
    name: "VoiceClonning",
    element: <VoiceClonning />,
  },

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

  {
    path: "/logout",
    name: "Logout",
    element: <Logout />,
  },
  {
    path: "/generate-audio",
    name: "GenerateAudio",
    element: <GenerateAudio />,
  },
  {
    path: "/audio-library",
    name: "Audio Library",
    element: <AudioLibrary />,
  },
  {
    path: "/video-library",
    name: "VideoLibrary",
    element: <VideoLibrary />,
  },
  {
    path: "/generate-video",
    name: "GeenerateVideo",
    element: <GenerateVideo />,
  },
  {
    path: "/Shivacha-Ai-Studio/bulk-audio",
    name: "BulkAudio",
    element: <AudioDashboard />,
  },
  {
    path: "/Shivacha-Ai-Studio/bulk-audio/:id",
    name: "BulkAudio",
    element: <AudioProjectIdData />,
  },
  {
    path: "/Shivacha-Ai-Studio/create-bulk-audio",
    name: "BulkAudio",
    element: <BulkAudio />,
  },
  {
    path: "/Shivacha-Ai-Studio/create-bulk-video",
    name: "BulkAudio",
    element: <BulkVideo />,
  },
  {
    path: "/Shivacha-Ai-Studio/bulk-video",
    name: "Add Video",
    element: <VideoDashboard />,
  },
  {
    path: "/help&support",
    name: "Support",
    element: <Support />,
  },
  {
    path: "/Term&Conditions",
    name: "TermsCondition",
    element: <TermsCondition />,
  },

  {
    path: "/api-key",
    name: "ApiKey",
    element: <ApiKey />,
  },
  {
    path: "/payment",
    name: "Payment",
    element: <Payment />,
  },
];
export default routes;

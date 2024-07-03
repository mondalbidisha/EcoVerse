import { HomeIcon } from "./icons/HomeIcon";
import { MediaIcon } from "./icons/MediaIcon";
import { ServerIcon } from "./icons/ServerIcon";
import { ContactIcon } from "./icons/ContactIcon";

export const data = [
  {
    tooltip: "Dashboard",
    icon: <HomeIcon />,
    link: "/dashboard",
  },
  {
    tooltip: "Actions",
    icon: <HomeIcon />,
    link: "/actions",
  },
  {
    tooltip: "Acitity Logs",
    icon: <MediaIcon />,
    link: "/activity",
  },
  {
    tooltip: "All Challenges",
    icon: <ContactIcon />,
    link: "/challenge",
  },
  {
    tooltip: "Achievements",
    icon: <ServerIcon />,
    link: "/achievements",
  },
  {
    tooltip: "Logout",
    icon: <ServerIcon />,
    link: "/signin",
  }
];
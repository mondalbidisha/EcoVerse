import { Link, useLocation } from "react-router-dom";
import { data } from "./data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const style = {
  inactive: "text-gray-400",
  active: "font-medium text-white",
  link: "flex items-center justify-start my-2 p-4 text-sm w-full hover:text-white",
};

export function SidebarItems() {
  const { pathname } = useLocation();
  return (
    <ul>
      {data.map((item) => (
        <li key={item.tooltip}>
          <Link to={item.link}>
            <span
              className={`${style.link} 
               ${item.link === pathname ? style.active : style.inactive}`}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>{item.icon}</span>
                  </TooltipTrigger>
                  <TooltipContent side={"right"}>
                    <p>{item.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
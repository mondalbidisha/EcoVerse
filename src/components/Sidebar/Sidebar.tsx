import { useDashboardContext } from "../Dashboard/Provider";
import css from "./../Dashboard/style.module.css";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarItems } from "./SidebarItems";

interface SidebarProps {
  mobileOrientation: "start" | "end";
}

const style = {
  mobileOrientation: {
    start: "left-0 ",
    end: "right-0 lg:left-0",
  },
  close: "hidden",
  container: "md:w-16 sm:w-16",
  open: "absolute w-4/12 z-40 sm:w-5/12",
  default:
    "bg-[#25074D] h-screen overflow-y-auto top-0 lg:flex lg:relative lg:w-16 lg:z-auto",
};

export function Sidebar(props: SidebarProps) {
  const { sidebarOpen } = useDashboardContext();
  return (
    <aside
      className={`${style.default} 
        ${style.mobileOrientation[props.mobileOrientation]} 
        ${sidebarOpen ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className={style.container}>
        <SidebarHeader />
        <SidebarItems />
      </div>
    </aside>
  );
}
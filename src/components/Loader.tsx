import { useEffect, useState } from "react";
import GaugeCircle from "./magicui/gauge-circle";

export function Loader(props: any) {
  const { message } = props;
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full scroll-smooth">
        <GaugeCircle
            max={100}
            min={0}
            value={value}
            gaugePrimaryColor="rgb(79 70 229)"
            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
            />
        <div className="flex items-center mt-10 flex-col text-slate-100 gap-2 text-xl font-medium tracking-[4px]">
            {message}
        </div>
    </div>
    
  );
}
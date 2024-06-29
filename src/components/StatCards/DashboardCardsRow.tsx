import { NeonGradientCard } from "../magicui/neon-gradient-card";
import NumberTicker from "../magicui/number-ticker";

const CardsRow = () => {
    return (
        <>
          <div className="w-full max-h-[300px] md:w-4/12 p-4 mb-2">
            <NeonGradientCard className="dark max-w-md items-center justify-center text-center">
              <div className="flex flex-col">
                <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-8xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
                  <NumberTicker value={25000} />
                </div>
                <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
                  Kilograms
                </div>
                <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  <span className="underline underline-offset-8 decoration-sky-500">CO<sub className="text-pink-500">2</sub></span> Saved
                </div>
              </div>
            </NeonGradientCard>
          </div>
          <div className="w-full max-h-[300px] md:w-4/12 p-4 mb-2">
            <NeonGradientCard className="dark max-w-md items-center justify-center text-center">
              <div className="flex flex-col">
                <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-8xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
                  <NumberTicker value={322000} />
                </div>
                <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
                  Litres
                </div>
                <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  <span className="underline underline-offset-4 decoration-sky-500">WATER</span> Saved
                </div>
              </div>
            </NeonGradientCard>
          </div>
          <div className="w-full max-h-[300px] md:w-4/12 p-4 mb-2">
            <NeonGradientCard className="dark max-w-md items-center justify-center text-center">
              <div className="flex flex-col">
                <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-8xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
                  <NumberTicker value={804} />
                </div>
                <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
                  Kilograms
                </div>
                <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                <span className="underline underline-offset-4 decoration-sky-500">WASTE</span> Diverted
                </div>
              </div>
            </NeonGradientCard>
          </div>
        </>
    )
}

export default CardsRow;
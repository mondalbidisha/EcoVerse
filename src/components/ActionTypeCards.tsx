import { NeonGradientCard } from "./magicui/neon-gradient-card";

const ActionTypeCards = () => {

    return (
        <>
          <div className="w-full max-h-[270px] md:w-4/12 p-4 mb-2">
            <NeonGradientCard className="dark max-w-md items-center justify-center text-center">
              <div className="flex flex-col">
                <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-4xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
									Investment Actions
							  </div>
                <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-lg font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
                  An Investment Action is a one-time or rare effort with lasting benefits, such as installing a smart thermostat or solar panels. These actions are logged once, providing ongoing impact. 
                </div>
              </div>
            </NeonGradientCard>
          </div>
          <div className="w-full max-h-[250px] md:w-4/12 p-4 mb-2">
            <NeonGradientCard className="dark max-w-md items-center justify-center text-center">
              <div className="flex flex-col">
								<div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-4xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
									Discrete Actions
							  </div>
                <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-lg font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
                  Discrete actions are irregular activities with impacts that are hard to estimate continuously, such as shopping at thrift stores, buying recycled products, or checking tire pressure. 
                </div>
              </div>
            </NeonGradientCard>
          </div>
          <div className="w-full max-h-[250px] md:w-4/12 p-4 mb-2">
            <NeonGradientCard className="dark max-w-md items-center justify-center text-center">
							<div className="flex flex-col">
								<div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-4xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
									Habitual Actions
								</div>
								<div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-lg font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
									Once an action is mastered, it's considered a habit, earning the user daily impact credit. If the user stops logging it, the credit pauses until they resume logging. 
								</div>
							</div>
            </NeonGradientCard>
          </div>
        </>
    )
}

export default ActionTypeCards;
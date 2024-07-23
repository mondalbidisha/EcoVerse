import { NeonGradientCard } from '../magicui/neon-gradient-card';
import NumberTicker from '../magicui/number-ticker';

const ActivityCards = (props: any) => {
  const { userDetails } = props;
  const { totalUserActions, totalActionPoints, totalImpactPoints } = userDetails;

  return (
    <>
      <div className="w-full max-h-[200px] md:w-4/12 p-4 mb-2">
        <NeonGradientCard className="dark max-w-md items-center justify-center text-center">
          <div className="flex flex-col">
            <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
              {totalUserActions > 0 ? <NumberTicker value={totalUserActions} /> : 0}
            </div>
            <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
              Actions Logged
            </div>
          </div>
        </NeonGradientCard>
      </div>
      <div className="w-full max-h-[200px] md:w-4/12 p-4 mb-2">
        <NeonGradientCard className="dark max-w-md items-center justify-center text-center">
          <div className="flex flex-col">
            <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
              {totalActionPoints > 0 ? <NumberTicker value={totalActionPoints} /> : 0}
            </div>
            <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
              Action Points Earned
            </div>
          </div>
        </NeonGradientCard>
      </div>
      <div className="w-full max-h-[200px] md:w-4/12 p-4 mb-2">
        <NeonGradientCard className="dark max-w-md items-center justify-center text-center">
          <div className="flex flex-col">
            <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
              {totalImpactPoints > 0 ? <NumberTicker value={totalImpactPoints} /> : 0}
            </div>
            <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-5">
              Impact Points Scored
            </div>
          </div>
        </NeonGradientCard>
      </div>
    </>
  );
};

export default ActivityCards;

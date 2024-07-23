import { Link } from 'react-router-dom';

const BadgesEmptyState = () => {
  return (
    <>
      <div className="text-justify text-slate-100 sm:text-sm md:text-xl font-medium opacity-90 tracking-[2px] mb-5 px-20">
        Actions are themed into fun badges! Log and master multiple actions to earn your badges, each with unique
        requirements. Start your exciting journey to collect them all by logging your actions today!
      </div>
      <div className="w-full grid grid-cols-1">
        <div className="flex flex-col items-center text-center text-slate-100">
          <Link to="/actions">
            <span className="homepage-button">
              <span className="homepage-button-background"></span>
              <span className="homepage-button-text">Log Action</span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BadgesEmptyState;

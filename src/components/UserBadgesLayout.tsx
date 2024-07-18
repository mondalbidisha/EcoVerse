import WelcomeBadge from "./../assets/badgeIcons/welcomebadge.jpeg";
import AToB from "./../assets/badgeIcons/atob.jpeg";
import AverageJoe from "./../assets/badgeIcons/averagejoe.jpeg";
import CleanMachine from "./../assets/badgeIcons/cleanmachine.jpeg";
import DriveHappy from "./../assets/badgeIcons/drivehappy.jpeg";
import EmployeeOfTheMonth from "./../assets/badgeIcons/employeeofthemonth.jpeg";
import GreaseMoney from "./../assets/badgeIcons/greasemoney.jpeg";
import KeyToTheCity from "./../assets/badgeIcons/keytothecity.jpeg";
import LightSaver from "./../assets/badgeIcons/lightsaver.jpeg";
import ShowerPower from "./../assets/badgeIcons/showerpower.jpeg";
import PowerLunch from "./../assets/badgeIcons/powerlunch.jpeg";
import RecycleBoss from "./../assets/badgeIcons/recycleboss.jpeg";
import ReuseRodeo from "./../assets/badgeIcons/reuserodeo.jpeg";
import SleepingBeauty from "./../assets/badgeIcons/sleepingbeauty.jpeg";
import SmartyPants from "./../assets/badgeIcons/smartypants.jpeg";
import SuperCycles from "./../assets/badgeIcons/supercycles.jpeg";
import GroceryConnoiseur from "./../assets/badgeIcons/groceryconnoiseur.jpeg";
import LeanAndMean from "./../assets/badgeIcons/leanandmean.jpeg";

const UserBadgesLayout = (props: any) => {
    const { badges } = props;
    const getBadgeIconPath = (name: any) => {
        switch(name) {
            case "Welcome Badge":
                return WelcomeBadge;
            case "A to B":
                return AToB;
            case "Average Joe":
                return AverageJoe;
            case "Clean Machine":
                return CleanMachine;
            case "Drive Happy":
                return DriveHappy;
            case "Employee of the Month":
                return EmployeeOfTheMonth;
            case "Grease Money":
                return GreaseMoney;
            case "Key To The City":
                return KeyToTheCity;
            case "Light Saver":
                return LightSaver;
            case "Power Lunch":
                return PowerLunch;
            case "Recycle Boss":
                return RecycleBoss;
            case "Reuse Rodeo":
                return ReuseRodeo;
            case "Sleeping Beauty":
                return SleepingBeauty;
            case "Smarty Pants":
                return SmartyPants;
            case "Super Cycles":
                return SuperCycles;
            case "Grocery Connoisseur":
                return GroceryConnoiseur;
            case "Lean and Mean":
                return LeanAndMean;
            case "Shower Power":
                return ShowerPower;
        }
    }
    
    return ( 
        <>
            <div className="text-center text-slate-100 sm:text-sm md:text-xl font-medium opacity-90 tracking-[2px] mb-10 md:px-20">
                Congratulations on logging your sustainable actions and earning badges! 🌟 
            </div>
            <div className="text-justify text-slate-100 sm:text-sm md:text-xl font-medium opacity-90 tracking-[2px] mb-10 md:px-20">
                Your commitment to a greener future is truly inspiring. 
                Every action you take helps create a more sustainable world for everyone. 
                Keep up the fantastic work, and continue to make a positive impact. 
                Together, we can achieve a brighter, greener future! 🌿✨
            </div>
            <div className="w-full grid grid-cols-1">
                <div className="flex flex-col items-center text-center text-slate-100">
                    <div className="flex flex-row">
                        {badges.map((badge: any) => (
                            <div key={badge.id} className="flex-shrink-0">
                                <img
                                    src={getBadgeIconPath(badge.name)}
                                    width={150}
                                    height={150}
                                    className="rounded-full"
                                />
                            <div className="mt-5 text-white text-xl">{badge.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
  };
  
  export default UserBadgesLayout;
import Avatar from "./Avatar";
import {
    Card,
    CardContent
} from "./ui/card"

  
const ProfileBox = () => {
    return (
        <Card className="hidden md:block lg:block dark w-[200px] h-[200px]">
            <CardContent className="p-2">
                <div className="text-center mt-5">
                    <Avatar name={"Bidisha Mondal"} size="large" />
                    <div className="text-white font-medium text-base mt-5">Bidisha Mondal</div>
                </div>
            </CardContent>
        </Card>
    );
  };
  
  export default ProfileBox;
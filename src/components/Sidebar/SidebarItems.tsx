import { Link, useLocation, useNavigate } from 'react-router-dom';
import { data } from './data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

const style = {
  inactive: 'text-gray-400',
  active: 'font-medium text-white',
  link: 'flex flex-col items-center justify-start my-2 p-4 text-sm w-full hover:text-white',
};

export function SidebarItems() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const logout = (name: string) => {
    if (name !== 'Logout') {
      return;
    }
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <ul>
      {data.map((item) => (
        <li key={item.tooltip}>
          <Link to={item.link}>
            <span
              className={`${style.link} 
               ${item.link === pathname ? style.active : style.inactive}`}
              onClick={() => logout(item.tooltip)}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>{item.icon}</span>
                  </TooltipTrigger>
                  <TooltipContent className="TooltipContent" side={'right'}>
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

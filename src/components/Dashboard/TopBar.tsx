import Avatar from '../Avatar';
import { useDashboardContext } from './Provider';

export function TopBar() {
  const loggedInUser = localStorage.getItem('user') as string;
  const user = JSON.parse(loggedInUser);

  const getInitials = () => {
    const nameParts = user.name.trim().split(/\s+/);

    // If there's only one word, return the first letter
    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }

    // If there are two words, return the first letter of each word
    if (nameParts.length === 2) {
      return nameParts.map((word: string) => word.charAt(0).toUpperCase()).join('');
    }

    // If there are more than two words, return the first letter of the first two words
    return nameParts
      .slice(0, 2)
      .map((word: string) => word.charAt(0).toUpperCase())
      .join('');
  };

  const { openSidebar } = useDashboardContext();
  return (
    <header className="relative z-10 h-20 w-full items-center bg-[#25074D]">
      <div className="relative mx-auto flex h-full flex-col justify-center px-3">
        <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
          <div className="relative left-0 flex w-3/4">
            <div className="group relative flex h-full w-12 items-center">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                onClick={openSidebar}
                className="text-4xl text-white focus:outline-none lg:hidden"
              >
                &#8801;
              </button>
            </div>
          </div>
          <div className="relative ml-5 flex w-full items-center justify-end p-1 sm:right-auto sm:mr-0">
            <a href="#" className="relative block">
              <Avatar name={getInitials()} size="medium" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

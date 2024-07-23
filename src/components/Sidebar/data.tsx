import { RiDashboard2Fill } from '@remixicon/react';
import { RiNewsFill } from '@remixicon/react';
import { RiAB } from '@remixicon/react';
import { RiTrophyFill } from '@remixicon/react';
import { RiLogoutBoxFill } from '@remixicon/react';
import { RiTeamFill } from '@remixicon/react';
import { Icon } from '@tremor/react';

export const data = [
  {
    tooltip: 'Dashboard',
    icon: <Icon color="violet" size="lg" icon={RiDashboard2Fill} />,
    link: '/dashboard',
  },
  {
    tooltip: 'Actions',
    icon: <Icon color="violet" size="lg" icon={RiTeamFill} />,
    link: '/actions',
  },
  {
    tooltip: 'Activity Logs',
    icon: <Icon color="violet" size="lg" icon={RiNewsFill} />,
    link: '/activity',
  },
  {
    tooltip: 'Challenges',
    icon: <Icon color="violet" size="lg" icon={RiAB} />,
    link: '/challenge',
  },
  {
    tooltip: 'Achievements',
    icon: <Icon color="violet" size="lg" icon={RiTrophyFill} />,
    link: '/achievements',
  },
  {
    tooltip: 'Logout',
    icon: <Icon color="violet" size="lg" icon={RiLogoutBoxFill} />,
    link: '/signin',
  },
];

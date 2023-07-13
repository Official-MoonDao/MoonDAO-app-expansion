import {
  HomeIcon,
  HomeModernIcon,
  BellIcon,
  WalletIcon,
  LockClosedIcon,
  TableCellsIcon,
  ChartPieIcon,
  RocketLaunchIcon,
  CalendarDaysIcon,
  FolderIcon,
} from '@heroicons/react/24/outline'

export const navigation = [
  {
    name: 'home',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'lockTokens',
    href: '/lock',
    icon: LockClosedIcon,
  },
  {
    name: 'Missions',
    icon: RocketLaunchIcon,
    children: [
      { name: 'Zero-g', href: '/zero-g' },
      { name: 'Lifeship', href: '/lifeship' },
    ],
  },
  {
    name: 'Announcements',
    href: '/announcements',
    icon: BellIcon,
  },
  {
    name: 'Proposals',
    href: '/proposals',
    icon: FolderIcon,
  },
  {
    name: 'Treasury',
    href: '/treasury',
    icon: WalletIcon,
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: ChartPieIcon,
  },
  {
    name: 'Calendar',
    href: '/calendar',
    icon: CalendarDaysIcon,
  },
]

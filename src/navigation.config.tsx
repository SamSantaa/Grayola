import { Cog8ToothIcon, HomeIcon, ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import configuration from '~/configuration';

const NAVIGATION_CONFIG = (organization: string) => ({
  items: [
    {
      label: 'common:dashboardTabLabel',
      path: getPath(organization, ''),
      Icon: ({ className }: { className: string }) => {
        return <HomeIcon className={className} />;
      },
      end: true,
    },
    {
      label: 'common:ordersTabLabel',
      path: getPath(organization, 'requests'),
      Icon: ({ className }: { className: string }) => {
        return <ListBulletIcon className={className} />;
      },
      end: true,
    },
    {
      label: 'common:plansTabLabel',
      path: getPath(organization, 'plans'),
      Icon: ({ className }: { className: string }) => {
        return <Squares2X2Icon className={className} />;
      },
      end: true,
    },
    {
      label: 'common:settingsTabLabel',
      path: getPath(organization, 'settings'),
      Icon: ({ className }: { className: string }) => {
        return <Cog8ToothIcon className={className} />;
      },
    },
  ],
});

export default NAVIGATION_CONFIG;

function getPath(organizationId: string, path: string) {
  const appPrefix = configuration.paths.appPrefix;

  return [appPrefix, organizationId, path].filter(Boolean).join('/');
}

import { Cog8ToothIcon, HomeIcon, ListBulletIcon, Squares2X2Icon,  } from '@heroicons/react/24/outline';
import configuration from '~/configuration';
import { LayoutDashboard, Scroll, Layers, FileBarChart, Package2, Settings } from "lucide-react"
const NAVIGATION_CONFIG = (organization: string) => ({
  items: [
    {
      label: 'common:dashboardTabLabel',
      path: getPath(organization, ''),
      Icon: ({ className }: { className: string }) => {
        return <LayoutDashboard className={className} />;
      },
      end: true,
    },
    {
      label: 'common:ordersTabLabel',
      path: getPath(organization, 'requests'),
      Icon: ({ className }: { className: string }) => {
        return <Scroll className={className} />;
      },
      end: true,
    },
    {
      label: 'common:plansTabLabel',
      path: getPath(organization, 'plans'),
      Icon: ({ className }: { className: string }) => {
        return <Layers className={className} />;
      },
      end: true,
    },
    {
      label: 'common:filesTabLabel',
      path: getPath(organization, 'files'),
      Icon: ({ className }: { className: string }) => {
        return <Package2 className={className} />;
      },
    },
    {
      label: 'common:settingsTabLabel',
      path: getPath(organization, 'Ajustes'),
      Icon: ({ className }: { className: string }) => {
        return <Settings className={className} />;
      },
    },
  ],
});

export default NAVIGATION_CONFIG;

function getPath(organizationId: string, path: string) {
  const appPrefix = configuration.paths.appPrefix;

  return [appPrefix, organizationId, path].filter(Boolean).join('/');
}

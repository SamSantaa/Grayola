import configuration from '~/configuration';
import { LayoutDashboard, Scroll, Layers, Package2, Settings, FileBarChart } from "lucide-react"
const NAVIGATION_CONFIG = (organization: string) => ({
  items: [
    {
      label: 'Dashboard',
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
      label: 'Facturas',
      path: getPath(organization, 'invoices'),
      Icon: ({ className }: { className: string }) => {
        return <FileBarChart className={className} />;
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
      path: getPath(organization, 'settings'),
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

import React from 'react';
import {
  RectangleStackIcon,
  BellIcon
} from '@heroicons/react/24/outline';
import Trans from '~/core/ui/Trans';
import { withI18n } from '~/i18n/with-i18n';
import AppHeader from '~/app/dashboard/[organization]/components/AppHeader';
import AppContainer from '~/app/dashboard/[organization]/components/AppContainer';
import { DataTable } from './components/orders-table';
import { Order, columns } from './components/columns';
import { PageBody } from '~/core/ui/Page';
import Button from '~/core/ui/Button';

interface TasksPageParams {
  params: {
    organization: string;
  };
}

// we will implement this function later
async function loadTasksData({ organizationUid }: { organizationUid: string }) {
  // ...
}




const data: Order[] = [
  {
    id: "728ed52f",
    title: "audiovisual - video pitch",
    status: "pending",
    assignedTo: "Samuel",
    priority: "Low",
    createdDate: new Date("2023-10-24"),
    dueDate: new Date("2023-10-30")
  },
  // Add more data items as needed
];

async function getData(): Promise<Order[]> {
  return [
    {
      id: "728ed52f",
      title: "audiovisual - video pitch",
      status: "pending",
      assignedTo: "Samuel",
      priority: "Low",
      createdDate: new Date("2023-10-24"),
      dueDate: new Date("2023-10-30")
    },
    // Add more data items as needed
  ];
}

async function TasksPage({ params }: TasksPageParams) {
  return (
    <>
      <AppHeader title={undefined}>
        <div style={{ margin: '1% 1% 1% 1%' }} className="flex flex-1 justify-between px-4">
          <div className="flex flex-1 items-center">
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <h1 className="scroll-m-20 text-primary pb-2 text-5xl font-semibold tracking-tight first:mt-0">
                <Trans i18nKey={'common:requestsTabLabel'} />
              </h1>
            </div>
          </div>
          <div className="ml-4 flex items-center space-x-3 md:ml-6">
          <Button>Crear pedido</Button>
          <BellIcon className="w-5 h-5 text-primary mx-2"></BellIcon>

          </div>
        </div>
      </AppHeader>

      <div style={{ margin: '1% 1% 1% 1%', padding: '0px 16px 0px 16px' }}>
        <PageBody>
          <DataTable columns={columns} data={data} />
        </PageBody>
      </div>
    </>
  );
}

export default withI18n(TasksPage);

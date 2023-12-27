import {
    RectangleStackIcon,
  } from '@heroicons/react/24/outline';
   
  import Trans from '~/core/ui/Trans';
  import { withI18n } from '~/i18n/with-i18n';
  import AppHeader from '~/app/dashboard/[organization]/components/AppHeader';
  import AppContainer from '~/app/dashboard/[organization]/components/AppContainer';



  interface TasksPageParams {
    params: {
      organization: string;
    };
  }
   
  // we will implement this function later
  async function loadTasksData({ organizationUid }: { organizationUid: string}) {
    // ...
  }
   
  
  async function TasksPage({ params }: TasksPageParams) {
   
    return (
      <>
        <AppHeader title={undefined}>
  <div className="flex flex-1 justify-between px-4">
    <div className="flex flex-1 items-center">
      <div className="relative w-full text-gray-400 focus-within:text-gray-600">
        <h3 className="text-xl font-medium leading-6 text-gray-900 sm:truncate">
          <Trans i18nKey={'common:plansTabLabel'} />
        </h3>
      </div>
    </div>
    <div className="ml-4 flex items-center space-x-3 md:ml-6">
      <a
        className="ml-3 inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        href="https://app.grayola.io/requests/create"
      >
        <Trans i18nKey={'common:plansTabLabel'} />
      </a>
      <div>
        <a
          className="relative block rounded-full p-1 text-gray-400 hover:text-gray-500 lg:hidden"
          href="https://app.grayola.io/notifications"
        >
          <span className="sr-only"><Trans i18nKey={'common:viewNotificationsLabel'} /></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
          <div className="absolute left-1.5 top-1.5 h-1 w-1 rounded-full bg-red-600"></div>
        </a>
        <div data-headlessui-state="" className="relative hidden lg:block">
          <button
            className="relative hidden rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 lg:block"
            id="headlessui-popover-button-339"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span className="sr-only"><Trans i18nKey={'common:viewNotificationsLabel'} /></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
            <div className="absolute left-1.5 top-1.5 h-1 w-1 rounded-full bg-red-600"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</AppHeader>

   
        <AppContainer>
       
        </AppContainer>
      </>
    );
  }
   
  export default withI18n(
    TasksPage
  );
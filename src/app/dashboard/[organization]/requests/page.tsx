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
           <AppHeader title={"Pedidos"}></AppHeader>
      </>
    );
  }
   
  export default withI18n(
    TasksPage
  );
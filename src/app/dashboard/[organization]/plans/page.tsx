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
        <AppHeader title={"Planes"}></AppHeader>


      </>
    );
  }
   
  export default (
    TasksPage
  );
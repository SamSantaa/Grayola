import { redirect } from 'next/navigation';
import { fetchRequests } from '~/lib/requests/queries';
import getSupabaseServerComponentClient from '~/core/supabase/server-component-client';
import Link from "next/link";
import { use } from "react";
import { LucideLayoutDashboard } from "lucide-react";
import Button from '~/core/ui/Button';
 
async function fetchDashboardPageData() {
  const client = getSupabaseServerComponentClient();
  const sessionResponse = await client.auth.getSession();
  const user = sessionResponse.data?.session?.user;
 
  if (!user) {
    redirect('/auth/sign-in');
  }
 
  const { data, error } = await fetchRequests(client, user.id);
 
  if (error) {
    throw error;
  }
 
  return data;
}


 
function DashboardPage() {
  const requests = use(fetchDashboardPageData());
 
  return (
    {requests}
  );
}
 
export default DashboardPage;
 
import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";
import Card1 from '@/components/dashboard/Card1'

const ServerPage = async () => {
  const user = await currentUser();

  return ( 
    <div className='space-y-6'>
      <div>Welcome Andrew</div>
      <div className="space-y-2 md:px-6">
        <div className="text-sm">Last 30 days</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      </div>
    </div>
   );
}
 
export default ServerPage;
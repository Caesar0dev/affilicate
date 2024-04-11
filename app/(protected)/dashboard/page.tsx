import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";

const ServerPage = async () => {
  const user = await currentUser();

  return ( 
    <div className='space-y-6 w-full'>
      <div>Welcome Andrew</div>
      <div className="grid grid-cols-3 gap-6=3">
        <div className="bg-gray-50">
          <div className="p-4 flex flex-row w-full space-x-4">
            <div>Icon</div>
            <div>
              <p>Referrals</p>
              <div className="flex flex-row w-full space-x-2 items-end">
                <div className="text-2xl">5.77%</div>
                <div className="flex flex-row flex-grow items-end">
                  <div>up</div>
                  <div>9.8%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">View all</div>
        </div>
      </div>
    </div>
   );
}
 
export default ServerPage;
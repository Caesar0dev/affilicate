import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";
import Card1 from '@/components/dashboard/Card1'
import { DashboardIcon } from '@radix-ui/react-icons'

const Card1Data = [
  {
    icon: <DashboardIcon width={30} height={30}  />,
    title: 'Referrals',
    amount: 9,
    rate: 55.6
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: 'Referrals',
    amount: 9,
    rate: 55.6
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: 'Referrals',
    amount: 9,
    rate: 55.6
  }
]

const ServerPage = async () => {
  const user = await currentUser();

  return ( 
    <div className='space-y-6'>
      <div>Welcome Andrew</div>
      <div className="space-y-2 px-4 md:px-6">
        <div className="text-sm">Last 30 days</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {
            Card1Data.map((data, i) => <Card1 icon={data.icon} amount={data.amount} rate={data.rate} title={data.title} key={i} />)
          }
      </div>
      </div>
    </div>
   );
}
 
export default ServerPage;
import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";
import Card1 from '@/components/dashboard/Card1'
import { DashboardIcon } from '@radix-ui/react-icons'

const Last30 = [
  {
    icon: <DashboardIcon width={30} height={30}  />,
    title: 'Referrals',
    amount: 9,
    rate: 55.6,
    view: true,
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: 'Visits',
    amount: 156,
    rate: -9.8,
    view: true,
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: 'Conversion Rate',
    amount: 5.77,
    rate: 59.6,
    view: false,
  }
]

const AllTime = [
  {
    icon: <DashboardIcon width={30} height={30}  />,
    title: 'Referrals',
    amount: 181,
    view: true,
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: 'Visits',
    amount: 4100,
    view: true,
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: 'Conversion Rate',
    amount: "4.41%",
    view: false,
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: 'Paid Referrals',
    amount: 170,
    view: true,
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: 'Unpaid Earnings',
    amount: '$497.25',
    view: false,
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: 'Total Earnings',
    amount: '$7876.17',
    view: false,
  }
]

const ServerPage = async () => {
  const user = await currentUser();

  return ( 
    <div className='space-y-6 py-4'>
      <div className="px-4 md:px-6 text-2xl font-bold">Welcome Andrew</div>
      
      <div className="space-y-2 px-4 md:px-6">
        <div className="font-bold">Last 30 days</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { Last30.map((data, i) => <Card1 key={i} icon={data.icon} amount={data.amount} rate={data.rate} title={data.title} view={data.view} />) }
        </div>
      </div>

      <div className="space-y-2 px-4 md:px-6">
        <div className="font-bold">All-time</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { AllTime.map((data, i) => <Card1 key={i} icon={data.icon} amount={data.amount} title={data.title} view={data.view} />) }
        </div>
      </div>
    </div>
   );
}
 
export default ServerPage;
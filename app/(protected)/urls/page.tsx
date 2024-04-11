import { currentUser } from "@/lib/auth";
import { DashboardIcon } from "@radix-ui/react-icons";
import ActivityTable from "@/components/dashboard/ActivityTable";
import Card1 from "@/components/dashboard/Card1";

const Last30 = [
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: "Referrals",
    amount: 9,
    rate: 55.6,
    view: true
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: "Visits",
    amount: 156,
    rate: -9.8,
    view: true
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: "Conversion Rate",
    amount: 5.77,
    rate: 59.6,
    view: false
  }
];

const AllTime = [
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: "Referrals",
    amount: 181,
    view: true
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: "Visits",
    amount: 4100,
    view: true
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: "Conversion Rate",
    amount: "4.41%",
    view: false
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: "Paid Referrals",
    amount: 170,
    view: true
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: "Unpaid Earnings",
    amount: "$497.25",
    view: false
  },
  {
    icon: <DashboardIcon width={30} height={30} />,
    title: "Total Earnings",
    amount: "$7876.17",
    view: false
  }
];

const activity = [
  {
    reference: 23945,
    amount: 304.8,
    description: "My Test Product 1",
    status: "unpaid",
    date: new Date()
  },
  {
    reference: 234.41,
    amount: 521.45,
    description: "My Test Product 2",
    status: "unpaid",
    date: new Date()
  },
  {
    reference: 4895,
    amount: 531.041,
    description: "My Test Product 3",
    status: "unpaid",
    date: new Date()
  }
];

const Urls = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Affiliate URLs</div>
    </div>
  );
};

export default Urls;

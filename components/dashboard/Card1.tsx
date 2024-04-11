import { DashboardIcon } from '@radix-ui/react-icons'

export default function Card1() {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <div className="p-4 flex flex-row w-full space-x-4">
        <div><DashboardIcon /></div>
        <div>
          <p>Referrals</p>
          <div className="flex flex-row w-full space-x-2 items-end">
            <div className="text-2xl font-bold">5.77%</div>
            <div className="flex flex-row flex-grow items-end text-green-500 text-sm">
              <div>up</div>
              <div>9.8%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-200 text-purple-600">View all</div>
    </div>
  )
}

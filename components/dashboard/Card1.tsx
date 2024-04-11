import { DashboardIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

export default function Card1() {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <div className="p-4 flex flex-row w-full space-x-4 items-center">
        <div><DashboardIcon width={30} height={30} /></div>
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
      <Button variant={'secondary'} className='w-full text-purple-600 bg-gray-200 flex justify-start'>View all</Button>
    </div>
  )
}

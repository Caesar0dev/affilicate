import {FC} from 'react'
import { Button } from '@/components/ui/button'
import { clsx } from 'clsx/lite'
import { ArrowUpIcon, ArrowDownIcon } from '@radix-ui/react-icons'

interface Card1Type {
  icon: any;
  title: string;
  amount: number | string;
  rate?: number;
  view: boolean;
};

export default function Card1({ icon, title, amount, rate, view  }: Card1Type) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
      <div className="p-4 flex flex-row w-full space-x-4 items-center">
        <div>{icon}</div>
        <div>
          <p>{title}</p>
          <div className="flex flex-row w-full space-x-2 items-end">
            <div className="text-2xl font-extrabold">{ amount }</div>
            {rate &&
              <div className={clsx("flex flex-row flex-grow space-x-1 items-center text-green-500 text-sm font-bold", rate >= 0 ? "text-green-600" : "text-red-500")}>
                <div>{ rate >= 0 ? <ArrowUpIcon /> : <ArrowDownIcon /> }</div>
                <div>9.8%</div>
              </div>
            }
          </div>
        </div>
      </div>
      {view && <Button variant={'secondary'} className='w-full text-purple-600 bg-gray-200 flex justify-start'>View all</Button>}
    </div>
  )
}

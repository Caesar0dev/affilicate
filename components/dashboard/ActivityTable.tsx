import {FC} from 'react'
import { Button } from '@/components/ui/button'
import { clsx } from 'clsx/lite'
import { ArrowUpIcon, ArrowDownIcon } from '@radix-ui/react-icons'

interface ActivityType {
  reference: number;
  amount: string;
  description: string;
  status: string;
  date: Date;
};

export default function ActivityTable({ reference, amount, description, status, date  }: ActivityType) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
      123    
    </div>
  )
}

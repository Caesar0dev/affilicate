import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

interface ActivityType {
  reference: number;
  amount: number;
  description: string;
  status: string;
  date: Date;
}

export default function ActivityTable({ data }: { data: ActivityType[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Reference</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>description</TableHead>
          <TableHead className="w-[150px]">status</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: ActivityType, i: number) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{row.reference}</TableCell>
            <TableCell>{row.amount}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>
              <Badge variant={"success"}>{row.status}</Badge>
            </TableCell>
            <TableCell className="text-right">{row.date.toISOString().slice(0, 10)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

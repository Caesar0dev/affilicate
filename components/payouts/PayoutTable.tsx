import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface PayoutType {
  date: Date;
  amount: number;
  method: string;
  status: string;
}

export default function PayoutTable({ data }: { data: PayoutType[] }) {
  return (
    <Table className="rounded-md overflow-hidden">
      <TableHeader className="bg-gray-50 shadow-md">
        <TableRow>
          <TableHead className="w-[100px]">DATE</TableHead>
          <TableHead>AMOUNT</TableHead>
          <TableHead>PAYOUT METHOD</TableHead>
          <TableHead>STATUS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: PayoutType, i: number) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{row.date.toISOString().slice(0, 10)}</TableCell>
            <TableCell>{row.amount}</TableCell>
            <TableCell>{row.method}</TableCell>
            <TableCell>{row.status}</TableCell>
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

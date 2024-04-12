import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ReferralsType {
  reference: string;
  amount: number;
  description: string;
  status: string;
  date: Date;
}

export default function ReferralsTable({ data }: { data: ReferralsType[] }) {
  return (
    <Table className="rounded-md overflow-hidden">
      <TableHeader className="bg-gray-50 shadow-md">
        <TableRow>
          <TableHead>REFERENCE</TableHead>
          <TableHead>AMOUNT</TableHead>
          <TableHead>DESCRIPTION</TableHead>
          <TableHead>STATUS</TableHead>
          <TableHead className="text-right">DATE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: ReferralsType, i: number) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{row.reference}</TableCell>
            <TableCell>{row.amount}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>{row.status}</TableCell>
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

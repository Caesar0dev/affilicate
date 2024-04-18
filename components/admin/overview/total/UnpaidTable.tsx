import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface UnpaidType {
  total: String;
  month: String;
  today: String;
}

export default function UnpaidTable({ data }: { data: UnpaidType[] }) {
  return (
    <Table className="rounded-md overflow-hidden">
      <TableHeader className="bg-gray-50 shadow-md">
        <TableRow>
          <TableHead>Unpaid Earnings</TableHead>
          <TableHead>Unpaid earnings this month</TableHead>
          <TableHead>Unpaid earnings today</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: UnpaidType, i: number) => (
          <TableRow key={i}>
            <TableCell>{row.total}</TableCell>
            <TableCell>{row.month}</TableCell>
            <TableCell>{row.today}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

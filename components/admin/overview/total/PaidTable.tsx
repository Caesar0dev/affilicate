import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface PaidType {
  total: String;
  month: String;
  today: String;
}
export default function PaidTable({ data }: { data: PaidType[] }) {
  return (
    <Table className="rounded-md overflow-hidden">
      <TableHeader className="bg-gray-50 shadow-md">
        <TableRow>
          <TableHead>Paid earnings</TableHead>
          <TableHead>Paid earnings this month</TableHead>
          <TableHead>Paid earnings today</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: PaidType, i: number) => (
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

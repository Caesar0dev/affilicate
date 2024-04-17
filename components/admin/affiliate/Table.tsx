import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface PayoutType {
  name: String;
  id: String;
  group: String;
  username: String;
  paid: Number;
  unpaid: Number;
  rate: Number;
  paidRef: String;
  unpaidRef: String;
  visits: String;
  IDV: String;
  status: Boolean;
}

export default function AffiliateTable({ data }: { data: PayoutType[] }) {
  return (
    <Table className="rounded-md overflow-hidden">
      <TableHeader className="bg-gray-50 shadow-md">
        <TableRow>
          <TableHead>DATE</TableHead>
          <TableHead>AMOUNT</TableHead>
          <TableHead>PAYOUT METHOD</TableHead>
          <TableHead>STATUS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: PayoutType, i: number) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.group}</TableCell>
            <TableCell>{row.username}</TableCell>
            <TableCell>${row.paid.toString()}</TableCell>
            <TableCell>{row.status ? "Active" : "Deactivate"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

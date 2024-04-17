import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface AffiliateType {
  name: String;
  id: String;
  group: String;
  username: String;
  paid: Number;
  unpaid: Number;
  rate: Number;
  paidRef: Number;
  unpaidRef: Number;
  visits: Number;
  id_verify?: Date;
  status: Boolean;
}

export default function AffiliateTable({ data }: { data: AffiliateType[] }) {
  return (
    <Table className="rounded-md overflow-hidden">
      <TableHeader className="bg-gray-50 shadow-md">
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Group</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Paid Earnings</TableHead>
          <TableHead>Unpaid Earnings</TableHead>
          <TableHead>Rate</TableHead>
          <TableHead>Paid Referrals</TableHead>
          <TableHead>Unpaid Referrals</TableHead>
          <TableHead>Visits</TableHead>
          <TableHead>ID verification</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: AffiliateType, i: number) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.group}</TableCell>
            <TableCell>{row.username}</TableCell>
            <TableCell>${row.paid.toString()}</TableCell>
            <TableCell>${row.unpaid.toString()}</TableCell>
            <TableCell>{row.rate.toString()}%</TableCell>
            <TableCell>${row.paidRef.toString()}</TableCell>
            <TableCell>${row.unpaidRef.toString()}</TableCell>
            <TableCell>{row.visits.toString()}</TableCell>
            <TableCell>{row?.id_verify?.toString()?.slice(0, 10)}</TableCell>
            <TableCell>{row.status ? "Active" : "Deactivate"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ReferralType {
  id: String;
}

export default function ReferralTable({ data }: { data: ReferralType[] }) {
  return (
    <Table className="rounded-md overflow-hidden">
      <TableHeader className="bg-gray-50 shadow-md">
        <TableRow>
          <TableHead>Referral ID</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Affiliate</TableHead>
          <TableHead>Referrals</TableHead>
          <TableHead>Generated by</TableHead>
          <TableHead>Referral method</TableHead>
          <TableHead>Referral account</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: ReferralType, i: number) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{row.id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
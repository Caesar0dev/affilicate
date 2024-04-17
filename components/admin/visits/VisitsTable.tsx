import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface VisitType {
  id: String;
  landing: String;
  url: String;
  ip: String;
  converted: String;
  refId: String;
  affiliate: String;
  date: Date;
}

export default function VisitTable({ data }: { data: VisitType[] }) {
  return (
    <Table className="rounded-md overflow-hidden">
      <TableHeader className="bg-gray-50 shadow-md">
        <TableRow>
          <TableHead>Visit ID</TableHead>
          <TableHead>Landing Page</TableHead>
          <TableHead>Referring URL</TableHead>
          <TableHead>IP</TableHead>
          <TableHead>Converted</TableHead>
          <TableHead>Referral ID</TableHead>
          <TableHead>Affiliate</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: VisitType, i: number) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{row.id}</TableCell>
            <TableCell>{row.amount.toString()}</TableCell>
            <TableCell>{row.affiliate}</TableCell>
            <TableCell>{row.referrals}</TableCell>
            <TableCell>{row.generated}</TableCell>
            <TableCell>{row.method}</TableCell>
            <TableCell>{row.account}</TableCell>
            <TableCell>{row.date.toISOString().slice(0, 10)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

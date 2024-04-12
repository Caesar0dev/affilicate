import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface VisitsType {
  url: number;
  ref: string;
  convert: string;
  date: Date;
}

export default function VisitsTable({ data }: { data: VisitsType[] }) {
  return (
    <Table className="rounded-md overflow-hidden">
      <TableHeader className="bg-gray-50 shadow-md">
        <TableRow>
          <TableHead className="w-[100px]">URL</TableHead>
          <TableHead>REFERRING URL</TableHead>
          <TableHead>CONVERTED</TableHead>
          <TableHead>DATE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: VisitsType, i: number) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{row.url}</TableCell>
            <TableCell>{row.ref}</TableCell>
            <TableCell>{row.convert}</TableCell>
            <TableCell>{row.date.toISOString().slice(0, 10)}</TableCell>
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

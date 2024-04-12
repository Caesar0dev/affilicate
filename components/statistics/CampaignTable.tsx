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

interface CampaignType {
  campaign: string;
  visits: number;
  links: string;
  convert: string;
  conversion: string;
}

export default function CampaignTable({ data }: { data: CampaignType[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">CAMPAIGN</TableHead>
          <TableHead>VISITS</TableHead>
          <TableHead>UNIQUE LINKS</TableHead>
          <TableHead>CONVERTED</TableHead>
          <TableHead className="text-right">CONVERSION RATE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: CampaignType, i: number) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{row.campaign}</TableCell>
            <TableCell>{row.visits}</TableCell>
            <TableCell>{row.links}</TableCell>
            <TableCell>
              <Badge variant={"success"}>{row.convert}</Badge>
            </TableCell>
            <TableCell className="text-right">{row.conversion}</TableCell>
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

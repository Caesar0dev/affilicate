import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface CreativeType {
  name: String;
  id: String;
  type: String;
  url: String;
  categories: String;
  status: Boolean;
  preview: String;
}

export default function CreativeTable({ data }: { data: CreativeType[] }) {
  return (
    <Table className="rounded-md overflow-hidden shadow-sm">
      <TableHeader className="bg-gray-50 shadow-md">
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>URL</TableHead>
          <TableHead>Categories</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Preview</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: CreativeType, i: number) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.type}</TableCell>
            <TableCell>{row.url}</TableCell>
            <TableCell>{row.categories}</TableCell>
            <TableCell>{row.status ? "Active" : "Inactive"}</TableCell>
            <TableCell>{row.preview}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

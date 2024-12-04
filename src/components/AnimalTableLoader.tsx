import { Skeleton } from "./ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const AnimalTableLoader = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {new Array(10).fill(null).map((_, index) => (
          <TableRow key={index}>
            <TableCell className="max-w-[200px] truncate">
              <Skeleton className="w-[160px] m y-1.5 h-[20px] rounded-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-[110px] my-1.5 h-[20px] rounded-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-[110px] my-1.5 h-[20px] rounded-full" />
            </TableCell>
            <TableCell className="flex gap-3">
              <Skeleton className="w-[20px] h-[20px] my-1.5 rounded-full" />
              <Skeleton className="w-[20px] h-[20px] my-1.5 rounded-full" />
              <Skeleton className="w-[20px] h-[20px] my-1.5 rounded-full" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AnimalTableLoader;

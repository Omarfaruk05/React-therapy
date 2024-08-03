import CartLayout from "../../layout/CartLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";

const PopularCities = () => {
  const tableData = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <h5 className="text-xl font-semibold">Featured Cities</h5>
      <CartLayout>
        <Table>
          <TableBody>
            {tableData.map((item) => (
              <TableRow key={""}>
                <TableCell className="text-sx xl:text-md underline text-blue-400">
                  <div className="max-w-[250px] truncate">Atlanta, GA</div>
                </TableCell>
                <TableCell className="text-sx xl:text-md underline text-blue-400">
                  Indianapolis, IN
                </TableCell>
                <TableCell className="text-sx xl:text-md underline text-blue-400">
                  Philadelphia, PA
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CartLayout>
    </div>
  );
};

export default PopularCities;

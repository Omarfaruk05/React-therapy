import CartLayout from "../../layout/CartLayout";
import { Table, TableBody, TableCell, TableRow } from "keep-react";
import mockCities from "../../../public/data/mocCities.json";
import { useEffect, useState } from "react";
import { ICities } from "../../interfaces/mocData.interface";

const PopularCities = () => {
  const [cities, setCities] = useState<ICities[]>([]);

  useEffect(() => {
    setCities(mockCities as ICities[]);
  });
  return (
    <div>
      <h5 className="text-xl font-semibold">Featured Cities</h5>
      <CartLayout>
        <Table>
          <TableBody>
            {cities &&
              cities.slice(0, 7).map((city, index) => (
                <TableRow key={index}>
                  <TableCell className="text-sx xl:text-md underline text-blue-400">
                    <div className="max-w-[250px] truncate">{city.name}</div>
                  </TableCell>
                  <TableCell className="text-sx xl:text-md underline text-blue-400">
                    {city.name}
                  </TableCell>
                  <TableCell className="text-sx xl:text-md underline text-blue-400">
                    {city.name}
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

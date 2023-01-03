import { TableCell, TableRow } from "@mui/material";
import { CountryType } from "../../types/type";

type PropType = {
  country: CountryType;
};

const CountryItem = ({ country }: PropType) => {
  return (
    <TableRow
      key={crypto.randomUUID()}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="right">
        <img
          style={{ width: "70px" }}
          src={country.flags.svg}
          alt={country.name.common}
        />
      </TableCell>
      <TableCell component="th" scope="row">
        {country.name.common}
      </TableCell>
      <TableCell align="right">{country.region}</TableCell>
      <TableCell align="right">{country.population}</TableCell>
      <TableCell align="right">
        {country.languages && (
          <ul>
            {Object.keys(country.languages).map((item, index) => {
              return (
                <i key={crypto.randomUUID()}>
                  {item}:{Object.values(country.languages)[index]}
                </i>
              );
            })}
          </ul>
        )}
      </TableCell>
    </TableRow>
    // <div>
    //   <img src={country.flags.svg} alt={country.name.common} />
    //   <p>{country.name.common}</p>
    //   <p>{country.region}</p>
    //   <p>{country.population}</p>
    //   {country.languages && (
    //     <ul>
    //       {Object.keys(country.languages).map((item, index) => {
    //         return (
    //           <i key={crypto.randomUUID()}>
    //             {item}:{Object.values(country.languages)[index]}
    //           </i>
    //         );
    //       })}
    //     </ul>
    //   )}
    // </div>
  );
};

export default CountryItem;

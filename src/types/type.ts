export type CountryType = {
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
  region: string;
  population: number;
  languages: object;
  favorite: boolean;
  capital: string[];
  maps: {
    googleMaps: string;
  };
};

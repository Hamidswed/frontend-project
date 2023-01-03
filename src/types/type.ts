export type CountryType = {
  name: {
    common: string;
  };
  region: string;
  population: number;
  languages: object;
  flags: {
    svg: string;
  };
  capital:string[]
};

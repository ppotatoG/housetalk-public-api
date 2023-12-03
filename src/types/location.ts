type DefineKey = keyof Define['ITEMS'];

interface Define {
  ITEMS: {
    [key: string]: {
      type: DefineKey;
      id: string;
      name: string;
    };
  };
}

interface Facility {
  id: string;
  name: string;
  place_name: string;
  distance: number | null;
}

interface FacilityResult {
  id: string;
  name: string;
  place_name: string;
  distance: number | null;
}

interface FacilitySearchResults {
  [key: string]: {
    id: string;
    place_name: string;
    distance: number | null;
  };
}

export { Define, DefineKey, Facility, FacilityResult, FacilitySearchResults };

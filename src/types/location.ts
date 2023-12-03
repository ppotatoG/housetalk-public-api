type DefineKey = 'category' | 'keyword';

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

interface FacilitySearchResults {
  [key: string]: Facility;
}

export { Define, DefineKey, Facility, FacilitySearchResults };

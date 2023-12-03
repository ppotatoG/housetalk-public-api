interface Define {
  CATEGORY_GROUP_CODE: {
    [key: string]: string;
  };
  QUERY: {
    [key: string]: string;
  };
}

interface Facility {
  id: string;
  place_name: string;
  distance: number | null;
}

interface FacilityResult {
  id: string;
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

export { Define, Facility, FacilityResult, FacilitySearchResults };

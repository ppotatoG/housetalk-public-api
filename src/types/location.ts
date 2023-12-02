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
  distance: 5 | 10 | 15 | 20 | null;
}

interface FacilitySearchResults {
  [key: string]: Facility;
}

export { Define, Facility, FacilitySearchResults };

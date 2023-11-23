interface Define {
  QUERY: {
    [key: string]: string;
  };
}

interface Facility {
  id: string;
  place_name: string;
  distance: string;
}

interface FacilitySearchResults {
  [key: string]: Facility[];
}

export { Define, Facility, FacilitySearchResults };

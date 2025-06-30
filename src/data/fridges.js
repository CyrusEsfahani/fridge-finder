// Community Fridges in Orange County, California
export const fridges = [
  {
    id: 1,
    name: "Anaheim Community Fridge",
    address: "123 E Lincoln Ave, Anaheim, CA 92805",
    lat: 33.8366,
    lng: -117.9143,
    description: "Located in the heart of Anaheim, this community fridge serves the local neighborhood with fresh produce and non-perishable items.",
    hours: "24/7 Access",
    notes: "Please take what you need, leave what you can. Maintained by local volunteers."
  },
  {
    id: 2,
    name: "Santa Ana Mutual Aid Fridge",
    address: "456 N Main St, Santa Ana, CA 92701",
    lat: 33.7456,
    lng: -117.8678,
    description: "Community-operated fridge providing free food to Santa Ana residents. Stocked regularly with donations from local businesses and community members.",
    hours: "24/7 Access",
    notes: "Fresh produce restocked Mondays and Thursdays. Please respect the space and keep it clean."
  },
  {
    id: 3,
    name: "Irvine Campus Community Fridge",
    address: "789 University Dr, Irvine, CA 92617",
    lat: 33.6405,
    lng: -117.8443,
    description: "University-sponsored community fridge serving students and local residents. Focus on healthy, fresh options.",
    hours: "6 AM - 10 PM Daily",
    notes: "ID check required after 10 PM. Priority given to students and families in need."
  },
  {
    id: 4,
    name: "Huntington Beach Shore Fridge",
    address: "321 Pacific Coast Hwy, Huntington Beach, CA 92648",
    lat: 33.6595,
    lng: -118.0056,
    description: "Beachside community fridge serving the coastal community. Popular with surfers and beach workers.",
    hours: "24/7 Access",
    notes: "Weather-protected unit. Great for grab-and-go meals and snacks."
  },
  {
    id: 5,
    name: "Orange Plaza Community Fridge",
    address: "654 E Chapman Ave, Orange, CA 92866",
    lat: 33.7879,
    lng: -117.8531,
    description: "Located in the historic Orange Plaza district. Serves the local community with a variety of food options.",
    hours: "24/7 Access",
    notes: "Managed by Orange Community Center. Restocked daily."
  },
  {
    id: 6,
    name: "Costa Mesa Community Share",
    address: "987 Newport Blvd, Costa Mesa, CA 92627",
    lat: 33.6411,
    lng: -117.9186,
    description: "Community-driven food sharing initiative. Focus on reducing food waste and supporting neighbors.",
    hours: "24/7 Access",
    notes: "Part of the Costa Mesa sustainability initiative. Accept all types of food donations."
  },
  {
    id: 7,
    name: "Fullerton Care Fridge",
    address: "147 N Harbor Blvd, Fullerton, CA 92832",
    lat: 33.8704,
    lng: -117.9254,
    description: "Centrally located community fridge serving Fullerton residents. Maintained by local faith communities.",
    hours: "24/7 Access",
    notes: "Multilingual signage available. Special focus on families with children."
  },
  {
    id: 8,
    name: "Westminster Little Saigon Fridge",
    address: "258 S Brookhurst St, Westminster, CA 92683",
    lat: 33.7592,
    lng: -117.9556,
    description: "Serving the diverse Westminster community, including the Little Saigon area. Features international food options.",
    hours: "24/7 Access",
    notes: "Vietnamese and English signage. Culturally appropriate food options prioritized."
  },
  {
    id: 9,
    name: "Garden Grove Community Hub Fridge",
    address: "369 W Garden Grove Blvd, Garden Grove, CA 92841",
    lat: 33.7739,
    lng: -117.9595,
    description: "Located at the community hub, this fridge serves as a central resource for Garden Grove residents.",
    hours: "5 AM - 11 PM Daily",
    notes: "Supervised during community center hours. Self-service available 24/7."
  },
  {
    id: 10,
    name: "Laguna Beach Artists' Fridge",
    address: "741 Laguna Canyon Rd, Laguna Beach, CA 92651",
    lat: 33.5427,
    lng: -117.7854,
    description: "Community fridge supported by the local arts community. Known for creative presentation and healthy options.",
    hours: "24/7 Access",
    notes: "Decorated by local artists. Focus on organic and locally-sourced items when available."
  }
];

// Orange County center coordinates for map initialization
export const OC_CENTER = {
  lat: 33.7175,
  lng: -117.8311
};

// Default map zoom level
export const DEFAULT_ZOOM = 10;

// Map zoom level when focusing on a specific fridge
export const FOCUSED_ZOOM = 15;
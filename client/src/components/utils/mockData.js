export const API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const CLOUD_IMG_OFEERS =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/";

export const BANNER_IMG =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

export const CARD_IMG =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const STAR_URL =
  "https://cdn-icons-png.flaticon.com/128/2224/2224638.png";

export const OFFER_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83649&offset=0&pageType=COLLECTION&type=rcv2&page_type=DESKTOP_COLLECTION_LISTING";

// export const MENU_API =
//   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=43836&catalog_qa=undefined&submitAction=ENTER";

export function filteredData(searchInput, restaurant) {
  const data = restaurant.filter((res) =>
    res?.info?.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return data;
}

// {
//   path: "/register",
//   element: <Register />,
// },
// {
//   path: "/login",
//   element: <Login />,
// },

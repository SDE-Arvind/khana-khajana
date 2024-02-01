// Image CDN URL for Restaurant card
export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

// Swiggy API to get Restaurant data with foodfire server
export const swiggy_api_URL =
  "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";

// Swiggy API to get Restaurant Menu data with foodfire server
export const swiggy_menu_api_URL =
  "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";

// shimmer card unit
export const shimmer_card_unit = 20;

// shimmer Menu card unit
export const shimmer_menu_card_unit = 4;

// Github - username
export const Github_UserName = "SDE-Arvind";
export const Github_Repository_Name = "khana-khajana";

// Github API for User
export const Github_API_User = "https://api.github.com/users/";

// Social Media Links
export const Linkedin_Link = "https://www.linkedin.com/in/arvind302/";
export const Twitter_Link = "";
export const Github_Link = "";
export const Email_Link = "";

// Github Authorization Token
export const options = {
  method: "GET",
  headers: {
    Authorization: "",
  },
};

// menu items api card type key
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

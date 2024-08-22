import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getTokenFromCookie = () => {
  return cookies.get("AccessToken");
};

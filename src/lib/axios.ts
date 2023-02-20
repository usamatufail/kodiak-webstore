import axiosMain from "axios";

export const axios = axiosMain.create({
  baseURL: import.meta.env.PUBLIC_GHL_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.PUBLIC_GHL_APIKEY}`,
  },
});

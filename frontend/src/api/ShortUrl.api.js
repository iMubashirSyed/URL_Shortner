import axios from "axios";
import AxiosInstance from "../utils/AxiosInstance";

export const  createShortUrl = async (Url) => {
   let {data} =  await AxiosInstance.post("/api/create", { url: Url });
    return data;
}


import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AxiosInstance } from "axios";
import { store } from "src/services/store";
import { setLoading } from "src/services/store/Loading";
import { api } from "src/common/configs";
import { ACCESS_TOKEN, ID_TOKEN } from "../../../common/constants";
import handleError from "./error";

// axios singleton
const axiosInstance: AxiosInstance = axios.create({
	baseURL: api.base,
	timeout: 10000,
	timeoutErrorMessage: "Timeout Error, ",
});

// request interceptor
axiosInstance.interceptors.request.use(
	(config: any) => {
		// Show Loading Tip
		store.dispatch(setLoading(true));
		const preka_access_token = localStorage.getItem(ACCESS_TOKEN);
		const preka_id_token = localStorage.getItem(ID_TOKEN);

		// console.log(config);
		// if (config.url.includes("/api/member/membership")) {
		// 	config.baseURL = "http://localhost:8002";
		// }
		if (preka_access_token) {
			config.headers["Authorization"] = "Bearer " + preka_access_token;
		}
		if (preka_id_token) {
			config.headers["id_token"] = preka_id_token;
		}
		return config;
	},
	(error: any) => {
		store.dispatch(setLoading(false));
		return handleError(error);
	}
);

// response interceptor
axiosInstance.interceptors.response.use(
	(response: any) => {
		store.dispatch(setLoading(false));
		if (response.data.code === 401) return handleError("401");
		return response;
	},
	(error: any) => {
		store.dispatch(setLoading(false));
		return handleError(error);
	}
);

export default axiosInstance;

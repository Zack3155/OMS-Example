import axiosInstance from "src/services/utils/handlers/request";

export function SIGN_IN(data) {
	return axiosInstance.request({
		method: "POST",
		url: "/api/pas/auth/signin",
		data,
	});
}

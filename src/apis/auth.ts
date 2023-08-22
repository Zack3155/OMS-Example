import axiosInstance from "src/services/utils/handlers/request";

export function SignIn(data) {
    return axiosInstance.request({
        method: "POST",
        url: "/api/pas/auth/signin",
        data,
    });
}

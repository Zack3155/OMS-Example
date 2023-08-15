import { api, env } from "../configs";
import { APIEnvironment } from "../models";

export const PLAZA =
	env === APIEnvironment.DEV
		? "https://devplaza.e-bridge.ca"
		: env === APIEnvironment.UAT
		? "https://uatplaza.e-bridge.ca"
		: "https://plaza.e-bridge.ca";

export const ImgUpload = api.base + "/api/common/uploaders/?scene=goods";

import { ENVIRONMENT } from "../constants";

const env: string = ENVIRONMENT; // 开发环境development  生产环境production

// backend api
const apis = {
	// 开发环境
	dev: {
		base: "https://devapigateway.e-bridge.ca",
		// base: "http://35.182.66.64:8088",
		// base: "http://localhost:8088"
	},
	// UAT环境
	uat: {
		// base: "http://3.98.89.193:8088",
		base: "https://uatapigateway.e-bridge.ca",
	},
	// 生产环境
	pro: {
		base: "https://apigateway.e-bridge.ca",
	},
};

//
const domains = {
	//开发环境
	dev: {
		wap: "开发域名",
	},
	//生成环境
	pro: {
		wap: "生产域名",
	},
	uat: {
		wap: "UAT域名",
	},
};

const api =
	env === "development" ? apis.dev : env === "uat" ? apis.uat : apis.pro;
const domain =
	env === "development"
		? domains.dev
		: env === "uat"
		? domains.uat
		: domains.pro;

export { api, domain, env };

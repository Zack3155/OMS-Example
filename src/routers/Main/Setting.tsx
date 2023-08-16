import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { RouteProps, RouteTypes } from "src/common/models";
import Loading from "src/components/core/Stateless/Loading";
import loadable from "@loadable/component";
import { isAvailable } from "src/common/constants";

// 一级菜单Account组件
const BusinessSetting = loadable(
	() => import("src/views/Account/BusinessSetting"),
	{
		fallback: <Loading />,
	}
);
const BillingSubscription = loadable(
	() => import("src/views/Account/BillingSubscription"),
	{
		fallback: <Loading />,
	}
);
const UserSetting = loadable(() => import("src/views/Account/UserSetting"), {
	fallback: <Loading />,
});
const IntegrationSetting = loadable(
	() => import("src/views/Account/IntegrationSetting"),
	{
		fallback: <Loading />,
	}
);

export const Setting: RouteProps = {
	index: false,
	path: "/account",
	label: "accountTitle",
	key: "/account",
	icon: <UserOutlined />,
	clickable: false,
	type: RouteTypes.READONLY,
	children: [
		{
			index: false,
			clickable: false,
			nestable: true,
			path: "/account/businesssetting",
			label: "businessSetting",
			key: "/account/businesssetting",
			element: <BusinessSetting />,
			type: RouteTypes.READONLY,
			children: [
				{
					index: false,
					clickable: false,
					path: `/account/businesssetting/:selection`,
					label: "businessSetting",
					key: "/account/businesssetting/:selection",
					element: <BusinessSetting />,
					type: RouteTypes.READONLY,
				},
			],
		},
		{
			index: false,
			clickable: false,
			path: "/account/billsubscription",
			label: "billsubscription",
			key: "/account/billsubscription",
			element: <BillingSubscription />,
			type: RouteTypes.ADMIN,
		},
		{
			index: false,
			clickable: false,
			path: "/account/user",
			label: "user_setting",
			key: "/account/user",
			element: <UserSetting />,
			type: RouteTypes.ADMIN,
		},
		{
			index: false,
			clickable: false,
			path: "/account/integration",
			label: "integration_setting",
			key: "/account/integration",
			element: <IntegrationSetting />,
			type: RouteTypes.ADMIN,
		},
		// {
		// 	index: false,
		// 	clickable: false,
		// 	path: "systemMessage",
		// 	label: "system_message",
		// 	key: "/account/systemMessage",
		// 	element: <SystemMessage />,
		// 	type: isAvailable ? RouteTypes.READONLY : RouteTypes.HIDDEN,
		// },
	],
};

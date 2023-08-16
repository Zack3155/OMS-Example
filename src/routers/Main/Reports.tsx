import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { RouteProps, RouteTypes } from "src/common/models";
import Loading from "src/components/core/Stateless/Loading";
import loadable from "@loadable/component";

// 一级菜单Performance组件
const Overview = loadable(
	() => import("src/views/Performance/Overview/Overview"),
	{
		fallback: <Loading />,
	}
);
const Redemption = loadable(() => import("src/views/Performance/Redemptions"), {
	fallback: <Loading />,
});
const BalanceCheck = loadable(
	() => import("src/views/Performance/BalanceCheck"),
	{
		fallback: <Loading />,
	}
);
const Orders = loadable(() => import("src/views/Performance/Orders"), {
	fallback: <Loading />,
});

export const Reports: RouteProps = {
	index: false,
	path: "performance",
	label: "performanceTitle",
	key: "/performance",
	icon: <ShoppingCartOutlined />,
	clickable: false, // 面包屑可点击
	type: RouteTypes.READONLY,
	children: [
		{
			index: false,
			clickable: false,
			path: "overview",
			label: "performanceOverview",
			key: "/performance/overview",
			element: <Overview />,
			type: RouteTypes.HIDDEN,
		},
		{
			index: false,
			clickable: false,
			path: "orders",
			label: "performanceOrders",
			key: "/performance/orders",
			element: <Orders />,
			type: RouteTypes.READONLY,
		},
		{
			index: false,
			clickable: false,
			path: "redemption",
			label: "performanceRedemption",
			key: "/performance/redemption",
			element: <Redemption />,
			type: RouteTypes.READONLY,
		},
		// {
		// 	index: false,
		// 	clickable: false,
		// 	path: "balanceCheck",
		// 	label: "performanceBalanceCheck",
		// 	key: "/performance/balanceCheck",
		// 	element: <BalanceCheck />,
		// 	type: RouteTypes.READONLY,
		// },
	],
};

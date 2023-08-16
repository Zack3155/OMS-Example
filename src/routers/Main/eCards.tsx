import React from "react";
import { FormOutlined } from "@ant-design/icons";
import { RouteProps, RouteTypes } from "src/common/models";
import Loading from "src/components/core/Stateless/Loading";
import loadable from "@loadable/component";

// 一级菜单Issue eGift Cards组件
const Overview = loadable(() => import("src/views/eCards/Overview"), {
	fallback: <Loading />,
});
const History = loadable(() => import("src/views/eCards/History"), {
	fallback: <Loading />,
});
const Item = loadable(() => import("src/views/eCards/eCardItem"), {
	fallback: <Loading />,
});

export const eCards: RouteProps = {
	index: false,
	path: "eCards",
	label: "eCard_menu_title",
	key: "/eCards",
	icon: <FormOutlined />,
	element: <Overview />,
	type: RouteTypes.READONLY,
	clickable: false, // 面包屑可点击
	nestable: true,
	children: [
		{
			index: false,
			clickable: false,
			path: "/eCards/create",
			key: "/eCards/create",
			element: <Item />,
			type: RouteTypes.ADMIN,
		},
		{
			index: false,
			clickable: false,
			path: "/eCards/history",
			key: "/eCards/history",
			element: <History />,
			type: RouteTypes.ADMIN,
		},
		{
			index: false,
			clickable: false,
			path: "/eCards/:type",
			key: "/eCards/:type",
			element: <Overview />,
			type: RouteTypes.READONLY,
		},
		{
			index: false,
			clickable: false,
			path: "/eCards/item/:product_id",
			key: "/eCards/item/:product_id",
			element: <Item />,
			type: RouteTypes.READONLY,
		},
	],
};

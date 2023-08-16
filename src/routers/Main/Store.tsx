import React from "react";
import { ShopOutlined } from "@ant-design/icons";
import { RouteProps, RouteTypes } from "src/common/models";
import Loading from "src/components/core/Stateless/Loading";
import loadable from "@loadable/component";

const Main = loadable(() => import("src/views/Store/Main"), {
	fallback: <Loading />,
});
const MyStore = loadable(() => import("src/views/Store/MyStore"), {
	fallback: <Loading />,
});

export const Store: RouteProps = {
	index: false,
	path: "store",
	label: "store_menu_title",
	key: "/store",
	icon: <ShopOutlined />,
	element: <Main />,
	type: RouteTypes.READONLY,
	clickable: false, // 面包屑可点击
	nestable: true,
	children: [
		{
			index: false,
			clickable: false,
			path: "/store/:type",
			key: "/store/:type",
			element: <MyStore />,
			type: RouteTypes.ADMIN,
		},
	],
};

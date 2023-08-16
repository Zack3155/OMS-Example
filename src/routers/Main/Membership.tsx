import React from "react";
import { FlagOutlined } from "@ant-design/icons";
import { RouteProps, RouteTypes } from "src/common/models";
import Loading from "src/components/core/Stateless/Loading";
import loadable from "@loadable/component";

// 一级菜单Membership组件
const Main = loadable(() => import("src/views/Membership/Main"), {
	fallback: <Loading />,
});
const History = loadable(() => import("src/views/Membership/History"), {
	fallback: <Loading />,
});
const Item = loadable(() => import("src/views/Membership/MembershipItem"), {
	fallback: <Loading />,
});

export const Membership: RouteProps = {
	index: false,
	path: "membership",
	label: "membership_menu_title",
	key: "/membership",
	icon: <FlagOutlined />,
	element: <Main />,
	type: RouteTypes.READONLY,
	clickable: false, // 面包屑可点击
	nestable: true,
	children: [
		{
			index: false,
			clickable: false,
			path: "/membership/create",
			key: "/membership/create",
			element: <Item />,
			type: RouteTypes.ADMIN,
		},
		{
			index: false,
			clickable: false,
			path: "/membership/history",
			key: "/membership/history",
			type: RouteTypes.ADMIN,
			element: <History />,
		},
		{
			index: false,
			clickable: false,
			path: "/membership/:membership_code",
			key: "/membership/:membership_code",
			element: <Item />,
			type: RouteTypes.READONLY,
		},
	],
};

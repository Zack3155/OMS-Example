import React from "react";
import { RouteProps, RouteTypes } from "src/common/models";
import { CircularProgress } from "@mui/material";
import loadable from "@loadable/component";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";

// 一级菜单Membership组件
const Main = loadable(() => import("src/views/Membership/"), {
	fallback: <CircularProgress />,
});
// const History = loadable(() => import("src/views/Membership/History"), {
// 	fallback: <CircularProgress />,
// });
// const Item = loadable(() => import("src/views/Membership/MembershipItem"), {
// 	fallback: <CircularProgress />,
// });

const Membership: RouteProps = {
	index: false,
	path: "membership",
	label: "membership_menu_title",
	key: "/membership",
	icon: <FlagOutlinedIcon />,
	element: <Main />,
	type: RouteTypes.READONLY,
	clickable: false, // 面包屑可点击
	nestable: true,
	children: [
		// {
		// 	index: false,
		// 	clickable: false,
		// 	path: "/membership/create",
		// 	key: "/membership/create",
		// 	element: <Item />,
		// 	type: RouteTypes.ADMIN,
		// },
		// {
		// 	index: false,
		// 	clickable: false,
		// 	path: "/membership/history",
		// 	key: "/membership/history",
		// 	type: RouteTypes.ADMIN,
		// 	element: <History />,
		// },
		// {
		// 	index: false,
		// 	clickable: false,
		// 	path: "/membership/:membership_code",
		// 	key: "/membership/:membership_code",
		// 	element: <Item />,
		// 	type: RouteTypes.READONLY,
		// },
	],
};

export default Membership;

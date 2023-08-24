import React from "react";
import { RouteProps, RouteTypes } from "src/common/models";
import Loading from "src/components/core/Stateless/Loading";
import loadable from "@loadable/component";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";

const Main = loadable(() => import("src/views/eServices"), {
	fallback: <Loading />,
});

const eServices: RouteProps = {
	index: false,
	path: "eServices",
	label: "eServices_menu_title",
	key: "/eServices",
	icon: <CardGiftcardOutlinedIcon />,
	element: <Main />,
	type: RouteTypes.READONLY,
	clickable: false, // 面包屑可点击
	nestable: true,
	children: [],
};

export default eServices;

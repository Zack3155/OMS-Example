import React from "react";
import { RouteProps, RouteTypes } from "src/common/models";
import Loading from "src/components/core/Stateless/Loading";
import loadable from "@loadable/component";
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';

const Main = loadable(() => import("src/views/Stores"), {
	fallback: <Loading />,
});

const Stores: RouteProps = {
	index: false,
	path: "stores",
	label: "store_menu_title",
	key: "/stores",
	icon: <StoreOutlinedIcon />,
	element: <Main />,
	type: RouteTypes.READONLY,
	clickable: false, // 面包屑可点击
	nestable: true,
	children: [],
};

export default Stores;
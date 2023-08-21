import React from "react";
import loadable from "@loadable/component";
import { RouteProps, RouteTypes } from "src/common/models";
import { CircularProgress } from "@mui/material";

// 主页面MainLayout
const MainLayout = loadable(() => import("src/components/core/Layouts"), {
	fallback: <CircularProgress />,
});

export const Main: RouteProps = {
	index: false,
	path: "/",
	label: "dashboard_menu_title",
	key: "/",
	element: <MainLayout />,
	type: RouteTypes.PUBLIC,
	clickable: true,
	children: [
		// Dashboard,
		// eCards,
		// Membership,
		// Store,
		// CustomerManagement,
		// Reports,
		// Setting,
	],
};

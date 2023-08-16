import React from "react";
import loadable from "@loadable/component";
import Loading from "src/components/core/Stateless/Loading";
import { RouteProps, RouteTypes } from "src/common/models";
import Dashboard from "./Dashboard";
import { eCards } from "./eCards";
import { Membership } from "./Membership";
import { CustomerManagement } from "./CustomerManagement";
import { Setting } from "./Setting";
import { Reports } from "./Reports";
import { Store } from "./Store";

// 主页面MainLayout
const MainLayout = loadable(
	() => import("src/components/core/Layouts/MainLayout"),
	{
		fallback: <Loading />,
	}
);

export const Main: RouteProps = {
	index: false,
	path: "/",
	label: "dashboard_menu_title",
	key: "/",
	element: <MainLayout />,
	type: RouteTypes.PUBLIC,
	clickable: true,
	children: [
		Dashboard,
		eCards,
		Membership,
		Store,
		CustomerManagement,
		Reports,
		Setting,
	],
};

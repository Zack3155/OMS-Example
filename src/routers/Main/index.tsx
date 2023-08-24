import React from "react";
import loadable from "@loadable/component";
import { RouteProps, RouteTypes } from "src/common/models";
import Dashboard from "./Dashboard";
import Membership from "./Membership";
import Loading from "src/components/core/Stateless/Loading";
import eServices from "./eServices";
import Reports from "./Reports";
import Settings from "./Settings";
import Stores from "./Stores";

// 主页面MainLayout
const MainLayout = loadable(() => import("src/components/core/Layouts"), {
	fallback: <Loading />,
});

export const Main: RouteProps = {
	index: false,
	path: "/",
	label: "dashboard_menu_title",
	key: "/",
	element: <MainLayout />,
	type: RouteTypes.PUBLIC,
	clickable: true,
	children: [Dashboard, eServices, Membership, Stores, Reports, Settings],
};

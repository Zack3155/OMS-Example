import React from "react";
import loadable from "@loadable/component";
import { RouteTypes } from "src/common/models";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import Loading from "src/components/core/Stateless/Loading";

// 一级菜单Dashboard
export const DashboardMain = loadable(() => import("../../views/Dashboard"), {
	fallback: <Loading />,
});

const Dashboard = {
	index: true,
	clickable: false,
	label: "dashboard_menu_title",
	key: "/",
	path: "/",
	element: <DashboardMain />,
	type: RouteTypes.READONLY,
	icon: <DashboardCustomizeOutlinedIcon />,
};

export default Dashboard;

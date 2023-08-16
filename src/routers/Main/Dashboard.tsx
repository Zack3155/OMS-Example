import React from "react";
import loadable from "@loadable/component";
import Loading from "src/components/core/Stateless/Loading";
import { RouteTypes } from "src/common/models";
import { DashboardOutlined, SelectOutlined } from "@ant-design/icons";
import dashboard from "src/assets/images/menu/DashBoard_gray.svg";

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
	icon: <DashboardOutlined />,
//	icon: <img src={dashboard} className="ant-select-selector"/>
};

export default Dashboard;

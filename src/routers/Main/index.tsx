import React from "react";
import loadable from "@loadable/component";
import { RouteProps, RouteTypes } from "src/common/models";

// 主页面MainLayout
// const MainLayout = loadable(
// 	() => import("src/components/core/Layouts/MainLayout"),
// 	{
// 		fallback: <Loading />,
// 	}
// );

export const Main: RouteProps = null;
// {
// index: false,
// path: "/",
// label: "dashboard_menu_title",
// key: "/",
// element: <MainLayout />,
// type: RouteTypes.PUBLIC,
// clickable: true,
// children: [
// 	Dashboard,
// 	eCards,
// 	Membership,
// 	Store,
// 	CustomerManagement,
// 	Reports,
// 	Setting,
// ],
// };

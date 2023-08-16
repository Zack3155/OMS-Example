import React from "react";
import { TeamOutlined } from "@ant-design/icons";
import { RouteProps, RouteTypes } from "src/common/models";
import Loading from "src/components/core/Stateless/Loading";
import loadable from "@loadable/component";
// import MemberProfileDetails from "src/views/CustomerManagement/components/MemberProfileDetails";

// 一级菜单Membership组件
const Main = loadable(() => import("src/views/CustomerManagement/index"), {
	fallback: <Loading />,
});

const MemberProfileDetails = loadable(
	() => import("src/views/CustomerManagement/components/MemberProfileDetails"),
	{
		fallback: <Loading />,
	}
);

export const CustomerManagement: RouteProps = {
	index: false,
	path: "customer_management",
	label: "customer_management",
	key: "/customer_management",
	icon: <TeamOutlined />,
	element: <Main />,
	type: RouteTypes.ADMIN,
	clickable: false, // 面包屑可点击
	nestable: true,
	children: [
		{
			index: false,
			clickable: true, // Set clickable to true to make the breadcrumb clickable
			path: "/customer_management/:email", // Use a dynamic parameter (email) to pass the email ID
			label: "customer_management",
			key: "/customer_management/:email", // Use a dynamic parameter (email) as part of the key
			type: RouteTypes.ADMIN,
			element: <MemberProfileDetails />,
		},
	],
};

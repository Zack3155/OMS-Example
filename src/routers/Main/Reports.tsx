import React from "react";
import { RouteProps, RouteTypes } from "src/common/models";
import Loading from "src/components/core/Stateless/Loading";
import loadable from "@loadable/component";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

const Main = loadable(() => import("src/views/Reports"), {
	fallback: <Loading />,
});

const Reports: RouteProps = {
	index: false,
	path: "report",
	label: "report_menu_title",
	key: "/report",
	icon: <AssessmentOutlinedIcon />,
	element: <Main />,
	type: RouteTypes.READONLY,
	clickable: false, // 面包屑可点击
	nestable: true,
	children: [],
};

export default Reports;

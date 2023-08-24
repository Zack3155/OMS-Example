import React from "react";
import { RouteProps, RouteTypes } from "src/common/models";
import Loading from "src/components/core/Stateless/Loading";
import loadable from "@loadable/component";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Main = loadable(() => import("src/views/Settings"), {
	fallback: <Loading />,
});

const Settings: RouteProps = {
	index: false,
	path: "settings",
	label: "setting_menu_title",
	key: "/settings",
	icon: <SettingsOutlinedIcon />,
	element: <Main />,
	type: RouteTypes.READONLY,
	clickable: false, // 面包屑可点击
	nestable: true,
	children: [],
};

export default Settings;

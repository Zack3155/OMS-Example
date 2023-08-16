import { TFunction } from "i18next";
import { USER_ROLE } from "src/common/constants";
import { RouteProps } from "src/common/models";

// Convert a Single Route without any children to a Menu Item
const routeToMenuItem = (route: RouteProps, t: TFunction) => ({
	...route,
	index: "",
	clickable: "",
	nestable: "",
	label: t(route.label),
});

// Convert a Single Route with children to a SubMenu
const routeToSubMenu = (route: RouteProps, t: TFunction) => ({
	...route,
	index: "",
	clickable: "",
	nestable: "",
	label: t(route.label),
	...{
		children: route?.nestable ? null : routesToMenu(route.children, t),
	},
});

// Convert an array of Routes which are children of
// another Route to an array of Menu Items
export const routesToMenu = (routes: RouteProps[], t: TFunction) =>
	routes.map((route) =>
		route.children?.length
			? routeToSubMenu(route, t)
			: routeToMenuItem(route, t)
	);

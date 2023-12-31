import React from "react";
import loadable from "@loadable/component";
import { RouteTypes } from "src/common/models";
import Loading from "src/components/core/Stateless/Loading";

const Auths = loadable(() => import("../../views/Auths"), {
	fallback: <Loading />,
});

export const Auth = {
	index: false,
	path: "auths",
	label: "Auths",
	key: "/auths",
	clickable: false,
	type: RouteTypes.PUBLIC,
	children: [
		{
			index: false,
			clickable: false,
			path: "login",
			label: "Login",
			key: "/auths/login",
			element: <Auths />,
			type: RouteTypes.PUBLIC,
		},
		{
			index: false,
			clickable: false,
			path: "signup",
			label: "Signup",
			key: "/auths/signup",
			element: <Auths />,
			type: RouteTypes.PUBLIC,
		},
	],
};

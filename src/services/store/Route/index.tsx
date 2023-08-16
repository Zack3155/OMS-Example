import { createSlice } from "@reduxjs/toolkit";
import rootRouter from "src/routers";
import { RouteProps, RouteTypes, UserRoleType } from "src/common/models";
import { availableRoutes } from "src/services/utils/handlers/routes";

interface StateProps {
	routes: RouteProps[];
	subRoutes: string[];
	targetMenuKey: string;
}

const onDefaultConditions = (route: RouteProps) =>
	route.type !== RouteTypes.HIDDEN;

const onLoginConditions =
	(roles: UserRoleType[], navigate) => (route: RouteProps) => {
		// Filter Route which is PUBLIC
		if (route.type === RouteTypes.PUBLIC) return true;
		// If Roles is "ADMIN", Allow All Routes Except HIDDEN
		else if (
			route.type !== RouteTypes.HIDDEN &&
			roles.includes(UserRoleType.ADMIN)
		)
			return true;
		// If Roles is "READONLY", Allow Specific Routes
		else if (
			route.type === RouteTypes.READONLY &&
			roles.includes(UserRoleType.READONLY)
		)
			return true;
		// Otherwise Return False
		else if (route.type !== RouteTypes.HIDDEN) navigate("/");
		return false;
	};

const initialState: StateProps = {
	routes: availableRoutes(rootRouter, onDefaultConditions),
	subRoutes: localStorage.getItem("sub_route_keys")?.split(",") || [],
	targetMenuKey: "",
};

const routeSlice = createSlice({
	name: "route",
	initialState,
	reducers: {
		setLoginRoutes: (state, actions) => {
			const { roles, navigate } = actions.payload;
			return {
				...state,
				routes: availableRoutes(rootRouter, onLoginConditions(roles, navigate)),
			};
		},

		setTargetMenuKey: (state, action) => {
			state.targetMenuKey = action.payload;
		},

		reset: () => initialState,
	},
});

const routeReducer = routeSlice.reducer;

export const routeActions = { ...routeSlice.actions };

export default routeReducer;

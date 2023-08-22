import React, { useEffect } from "react";
import { RouteObject, useNavigate, useRoutes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
	useAppSelector,
	useAppDispatch,
} from "src/services/utils/hooks/useSelector";
import { IS_LOGIN } from "src/common/constants";
import { routeActions } from "src/services/store/Route";
import { Backdrop } from "@mui/material";

export default function Routes() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { t } = useTranslation("translation", { keyPrefix: "globalPrompt" });

	// Route Store
	const { routes } = useAppSelector((state) => state.route);
	// const { roles } = useAppSelector((state) => state.user);
	// Rendering Routes
	const filteredRoutes = useRoutes(routes as RouteObject[]);

	// 显示加载中提示
	const { loading } = useAppSelector((state) => state.loading);

	useEffect(() => {
		// Check Every Time when Page get Reloaded
		if (localStorage.getItem(IS_LOGIN))
			dispatch(
				routeActions.setLoginRoutes({
					roles: "ADMIN",
					navigate,
				})
			);
	}, []);

	return (
		<>
			{filteredRoutes}
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={loading}
			/>
		</>
	);
}

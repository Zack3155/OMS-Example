import React, { createContext, useEffect, useState } from "react";
import { useAppDispatch } from "src/services/utils/hooks/useSelector";
import { ModalVisibility } from "./model";
import { CssBaseline } from "@mui/material";
import MainContent from "./components/MainContent";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";

function MainLayout({ classes }) {
	const dispatch = useAppDispatch();

	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const [modalVisible, setModalVisible] = useState<ModalVisibility>(
		ModalVisibility.Disable
	);

	useEffect(() => {
		let isApiSubscribed = true;
		if (isApiSubscribed) {
			// dispatch(userActions.getMerchantInfo());
			// dispatch(userActions.checkMerchantStatus());
		}
		return () => {
			isApiSubscribed = false;
		};
	}, []);

	return (
		<article id="app-main-layout" className={classes.root}>
			<MainLayoutContext.Provider
				value={{ classes, drawerOpen, setDrawerOpen, setModalVisible }}
			>
				<CssBaseline />

				<NavBar />

				<Menu />

				<MainContent />
			</MainLayoutContext.Provider>
		</article>
	);
}

export const MainLayoutContext = createContext(null);

export default withStyles(styles as unknown)(MainLayout);

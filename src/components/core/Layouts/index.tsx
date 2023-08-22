import React, { createContext, useEffect, useState } from "react";
import { useAppDispatch } from "src/services/utils/hooks/useSelector";
import { ModalVisibility } from "./model";
import MenuIcon from "@material-ui/icons/Menu";
import {
	AppBar,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import { Badge } from "@mui/base";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MainContent from "./components/MainContent";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import classNames from "classnames";

function MainLayout(props) {
	const dispatch = useAppDispatch();

	const { classes } = props;

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
		<article id="app-main-layout" className="flex">
			<MainLayoutContext.Provider value={{ setModalVisible }}>
				<CssBaseline />

				{/* Nav Bar */}
				<AppBar
					position="absolute"
					className={classNames(
						classes.appBar,
						drawerOpen && classes.appBarShift
					)}
				>
					<Toolbar disableGutters={!drawerOpen} className={classes.toolbar}>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={() => setDrawerOpen(true)}
							className={classNames(
								classes.menuButton,
								drawerOpen && classes.menuButtonHidden
							)}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
							className={classes.title}
						>
							MainLayout
						</Typography>
						<IconButton color="inherit">
							<Badge badgeContent={4} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>
					</Toolbar>
				</AppBar>

				{/* Menu */}
				<Drawer
					variant="permanent"
					classes={{
						paper: classNames(
							classes.drawerPaper,
							!drawerOpen && classes.drawerPaperClose
						),
					}}
					open={drawerOpen}
				>
					<div className={classes.toolbarIcon}>
						<IconButton onClick={() => setDrawerOpen(false)}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					{/* <List>{mainListItems}</List> */}
					<Divider />
					{/* <List>{secondaryListItems}</List> */}
				</Drawer>

				{/* Main Content */}
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<MainContent />
				</main>
			</MainLayoutContext.Provider>
		</article>
	);
}

export const MainLayoutContext = createContext(null);

export default withStyles(styles as unknown)(MainLayout);

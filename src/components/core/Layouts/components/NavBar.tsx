import React, { useContext } from "react";
import { MainLayoutContext } from "..";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import { Badge } from "@mui/base";
import NotificationsIcon from "@material-ui/icons/Notifications";
import classNames from "classnames";

export default function NavBar() {
	const { drawerOpen, setDrawerOpen, classes } = useContext(MainLayoutContext);
	return (
		<AppBar
			position="absolute"
			className={classNames(classes.appBar, drawerOpen && classes.appBarShift)}
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
	);
}

import React, { useContext, useState } from "react";
import { MainLayoutContext } from "..";
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import { Badge } from "@mui/base";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
	const navigate = useNavigate();
	const { drawerOpen, setDrawerOpen, classes } = useContext(MainLayoutContext);

	const { onOpenSetting, onCloseSetting, open, anchorEl } = useNavbar();

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

				<div className="inline-flex items-center justify-center">
					<IconButton
						color="inherit" onClick={onOpenSetting}>
						<PersonOutlinedIcon />
					</IconButton>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={onCloseSetting}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						<MenuItem onClick={() => null}>Profile</MenuItem>
						<MenuItem onClick={() => null}>Setting</MenuItem>
						<MenuItem onClick={() => navigate("/auths/login")}>Logout</MenuItem>
					</Menu>
				</div>
			</Toolbar>
		</AppBar>
	);
}

function useNavbar() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const onOpenSetting = (e) => setAnchorEl(e.currentTarget);

	const onCloseSetting = () => setAnchorEl(null);

	const open = Boolean(anchorEl);

	return { onOpenSetting, onCloseSetting, open, anchorEl }
}

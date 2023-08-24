import React, { useContext, useState } from "react";
import { MainLayoutContext } from "..";
import {
	AppBar,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import { Badge } from "@mui/base";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/services/utils/hooks/useSelector";
import { routeActions } from "src/services/store/Route";
import { onClearLoginCache } from "src/services/utils/handlers/logout";
import TranslateIcon from "@mui/icons-material/Translate";
import { langActions } from "src/services/store/Lang";

export default function NavBar() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { drawerOpen, setDrawerOpen, classes } = useContext(MainLayoutContext);

	const { onClickSetting, onCloseSetting, open, anchorEl, onLogout } =
		useNavbar();

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

				<div className="inline-flex items-center justify-center">
					<IconButton color="inherit" onClick={onClickSetting}>
						<PersonOutlinedIcon />
					</IconButton>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={onCloseSetting}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
					>
						<MenuItem onClick={() => null}>Profile</MenuItem>
						<MenuItem onClick={() => null}>Setting</MenuItem>
						<MenuItem onClick={onLogout}>Logout</MenuItem>
					</Menu>
				</div>

				<IconButton
					color="inherit"
					onClick={() => dispatch(langActions.changeLang())}
				>
					<TranslateIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}

function useNavbar() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const onCloseSetting = () => setAnchorEl(null);
	const onClickSetting = (e) => setAnchorEl(e.currentTarget);

	const onLogout = async () => {
		// await Auth.signOut({ global: true }).catch(() => Auth.signOut());
		onClearLoginCache();
		dispatch(routeActions.reset());
		navigate("/auths/login", { replace: true });
	};

	const open = Boolean(anchorEl);

	return { onClickSetting, onCloseSetting, open, anchorEl, onLogout };
}

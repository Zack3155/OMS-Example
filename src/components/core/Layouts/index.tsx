import React, { useEffect, useState } from "react";
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
import MainContent from "./MainContent";

export default function MainLayout() {
	const dispatch = useAppDispatch();
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
		<article id="app-main-layout">
			<CssBaseline />

			{/* Nav Bar */}
			<AppBar>
				<Toolbar>
					<IconButton>
						<MenuIcon />
					</IconButton>
					<Typography component="h1" variant="h6" color="inherit" noWrap>
						Dashboard
					</Typography>
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>

			{/* Menu */}
			<Drawer variant="permanent">
				<div className={""}>
					<IconButton>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				{/* <List>{mainListItems}</List> */}
				<Divider />
				{/* <List>{secondaryListItems}</List> */}
			</Drawer>

			{/* Main Content */}
			<main className={""}>
				<MainContent />
			</main>
		</article>
	);
}

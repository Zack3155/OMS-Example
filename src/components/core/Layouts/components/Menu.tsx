import React, { useContext, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routesToMenu } from "src/services/utils/handlers/menu";
import {
	useAppSelector,
	useAppDispatch,
} from "src/services/utils/hooks/useSelector";
import { routeActions } from "src/services/store/Route";
import { MainLayoutContext } from "..";
import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Divider,
	Drawer,
	IconButton,
} from "@mui/material";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import classNames from "classnames";

export default function Menu() {
	const { drawerOpen, setDrawerOpen, classes } = useContext(MainLayoutContext);

	const { menu, currKeys, onClick } = useMenu();

	return (
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
			{/* Collapse Icon */}
			<div className={classes.toolbarIcon}>
				<IconButton onClick={() => setDrawerOpen(false)}>
					<ChevronLeftIcon />
				</IconButton>
			</div>

			<Divider />

			{/* Menu */}
			<List className="menu">
				{menu.map((itm, index) => (
					<div
						key={index}
						className="menu-item"
						onClick={() => onClick({ key: itm.key })}
					>
						<ListItemButton>
							<ListItemIcon>{itm.icon}</ListItemIcon>
							<ListItemText primary={itm.label} />
						</ListItemButton>
					</div>
				))}
			</List>

			{/* <Divider />
            <List>{secondaryListItems}</List> */}
		</Drawer>
	);
}

function useMenu() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();

	const { setModalVisible } = useContext(MainLayoutContext);
	const { t } = useTranslation("translation", { keyPrefix: "sidemenu" });

	// const { hasEdited } = useAppSelector((state) => state.editCard);
	const { subRoutes } = useAppSelector((state) => state.route);
	const routes = useAppSelector((state) => state.route.routes[0].children);

	// 当前选中的Keys
	const [currKeys, setCurrKeys] = useState(["/"]);
	// 是否已打开
	const [isOpen, setIsOpen] = useState(false);

	const needSaveCard = (currKey, targetKey) => {
		// if (!hasEdited) return false;
		// return EXCEPTION.some(
		// 	(itm) => currKey.includes(itm) && !targetKey.includes(itm)
		// )
		// 	? true
		// 	: hasEdited;
	};

	const onClick = ({ key }) => {
		// console.log({ key, currKeys });
		dispatch(routeActions.setTargetMenuKey(key));
		// Check if Current Page Meet Exception Condition
		// and is About to Leave by Selecting Menu Item
		// if (needSaveCard(currKeys[0], key)) {
		// 	return setModalVisible(ModalVisibility.SaveCard);
		// }
		navigate(key);
		setIsOpen(false);
	};

	// 菜单
	const menu = routesToMenu(routes, t);

	useMemo(() => {
		const index = subRoutes.findIndex((item) =>
			!item ? false : pathname.includes(item)
		);
		const path = index !== -1 ? subRoutes[index] : pathname;
		// console.log({ index, pathname, path });
		setCurrKeys([path]);
	}, [pathname, isOpen]);

	return { menu, currKeys, onClick };
}

import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalVisibility, PanesItemProps } from "../model";
import { MainLayoutContext } from "..";
import { IS_LOGIN } from "src/common/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { getKeyName } from "src/services/utils/handlers/routes";
import Panes from "./Panes";

export default function MainContent() {
	const { setModalVisible, classes } = useContext(MainLayoutContext);

	const { panesItem, tabActiveKey } = useMainContent();

	return (
		<main className={classes.content}>
			<div className={classes.appBarSpacer} />
			<Panes panesItem={panesItem} tabActiveKey={tabActiveKey} />
		</main>
	);
}

const noNewTab = ["/signin", "/signup"];

function useMainContent() {
	const pathRef = useRef("");
	const navigate = useNavigate();
	const { pathname, search } = useLocation();

	const [tabActiveKey, setTabActiveKey] = useState("home");
	const [panesItem, setPanesItem] = useState<PanesItemProps>({
		title: "",
		content: <></>,
		key: "",
		closable: false,
		path: "",
	});

	useEffect(() => {
		// 未登录
		if (!localStorage.getItem(IS_LOGIN) && !pathname.includes("/auths")) {
			// onClearLoginCache();
			// setModalVisible(ModalVisibility.Login);
		}

		const { tabKey, title, element } = getKeyName(pathname);

		// 新Pane已存在或不需要新建Pane，return
		if (pathname === pathRef.current || noNewTab.includes(pathname)) {
			setTabActiveKey(tabKey);
			return;
		}

		// 记录新路径，用于下次更新比较
		const newPath = search ? pathname + search : pathname;
		pathRef.current = newPath;
		setPanesItem({
			title,
			content: element,
			key: tabKey,
			closable: tabKey !== "/",
			path: newPath,
		});
		setTabActiveKey(tabKey);
	}, [pathname, navigate, search]);

	return { panesItem, tabActiveKey };
}

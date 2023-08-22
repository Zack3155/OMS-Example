import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { DashboardMain } from "src/routers/Main/Dashboard";

export default function Panes({ panesItem, tabActiveKey }) {
	const { pathname, search } = useLocation();
	const { panes } = usePanes({ panesItem, tabActiveKey, pathname, search });

	const fullPath = pathname + search;

	return (
		<>
			{panes.map(
				(pane) =>
					pane.path === fullPath &&
					pane.path !== "/403" && (
						<article key={pane.key} className="main-content">
							{pane.content}
						</article>
					)
			)}
		</>
	);
}

const initPane = [
	{
		title: "Home",
		key: "/",
		content: <DashboardMain />,
		closable: false,
		path: "/",
	},
];

function usePanes({ panesItem, tabActiveKey, pathname, search }) {
	const pathRef = useRef<string>("");

	const [panes, setPanes] = useState<any[]>(initPane);
	const [activeKey, setActiveKey] = useState<string>("");

	useEffect(() => {
		// console.log({ panesItem, panes });
		const newPath = pathname + search;

		// 当前的路由和上一次的一样，return
		if (!panesItem.path || panesItem.path === pathRef.current) return;
		// 保存这次的路由地址
		pathRef.current = newPath;

		// 无效的新tab，return
		const index = panes.findIndex((pane) => pane.key === panesItem.key);
		if (!panesItem.key || (index > -1 && newPath === panes[index].path)) {
			setActiveKey(tabActiveKey);
			return;
		}

		// 新tab已存在，重新覆盖掉（解决带参数地址数据错乱问题）
		if (index > -1) {
			panes[index].path = newPath;
			setPanes(panes);
			setActiveKey(tabActiveKey);
			return;
		}

		// 添加新tab并保存起来
		setPanes((prev) => [...prev, panesItem]);
		setActiveKey(tabActiveKey);
	}, [panes, panesItem, pathname, search, tabActiveKey]);

	return { panes, activeKey };
}

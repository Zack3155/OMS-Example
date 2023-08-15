import React, { useEffect, useState } from "react";
import useFilterParams from "src/services/utils/hooks/useFilterParams";

export default function usePagination(initParams, setData, apiCaller) {
	const [total, setTotal] = useState<number>(0);
	const [filterParams, updateFilterParams] = useFilterParams(initParams);

	const onChange = (page) => updateFilterParams("page_no", page);

	async function fetchData() {
		return await apiCaller(filterParams).then((res) => {
			const { data_total, data } = res.data;
			setData(data);
			setTotal(data_total);
		});
	}

	useEffect(() => {
		let isSubscribed = true;
		if (isSubscribed) fetchData();
		return () => {
			isSubscribed = false;
		};
	}, [filterParams]);

	return {
		total,
		current: filterParams.page_no,
		pageSize: filterParams.page_size,
		onChange,
		setTotal,
	};
}

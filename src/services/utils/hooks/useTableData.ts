import { useMemo, useState } from "react";
import { FetchDataProps, FilterParamProps } from "src/common/models";

export default function useTableData(
	fetchTableData: () => Promise<FetchDataProps>,
	filterParams: FilterParamProps,
	extraTriggers: any[] = []
) {
	// Total number of Table Items
	const [total, setTotal] = useState<number>(0);
	// Table Data
	const [tableData, setTableData] = useState<object[]>([]);

	async function updateTableData() {
		await fetchTableData()
			.then(({ data_total, table_data }) => {
				setTotal(data_total || 0);
				setTableData(table_data || []);
			})
			.catch(() => {
				//
			});
	}

	useMemo(() => {
		let isSubscribed = true;
		if (isSubscribed) updateTableData();
		return () => {
			isSubscribed = false;
		};
	}, [filterParams, ...extraTriggers]);

	return [total, tableData] as [total: number, tableData: object[]];
}

import {useMemo, useState} from "react";
import {FilterParamProps, FilterParamTypes} from "src/common/models";
import {remove, update} from "../handlers/object";

const extraList = [
    "create_time",
    "is_auth",
    "check_status",
    "cert_check_status",
    "adv_check_status",
    "store_check_status",
    "merchant_type",
];

export default function useFilterParams(
    initParams: FilterParamProps = {},
    tabField?
) {
    const [filterParams, setFilterParams] =
        useState<FilterParamProps>(initParams);

    const [sorter, setSorter] = useState(null);
    const [filters, setFilters] = useState(null);

    function updateFilterParams(key: string, val: any) {
        // Received "Remove" Keyword
        if (key === FilterParamTypes.Remove) {
            remove(val as string, setFilterParams);
        }
        // Received "Refetch" Keyword
        else if (key === FilterParamTypes.Refetch) {
            setFilterParams((prev) => ({ ...prev }));
        }
        // Received "Refresh" Keyword
        else if (key === FilterParamTypes.Refresh && tabField) {
            setSorter(null);
            setFilters(null);
            // If tabField Exists, Keep it when Refresh
            setFilterParams((prev) => ({
                ...initParams,
                [tabField]: prev[tabField],
            }));
        } else if (key === FilterParamTypes.Refresh) {
            setSorter(null);
            setFilters(null);
            setFilterParams({ ...initParams });
        }
        // Key is tabField, and Tab is going to be Changed
        else if (key === tabField) {
            setSorter(null);
            setFilters(null);
            setFilterParams({ ...initParams, [tabField]: val });
        }
        // Exceptions Found
        else if (extraList.includes(key)) {
            update("sort_name", key, setFilterParams);
            update("sort_type", val, setFilterParams);
        }
        // Normal Update or Add Key
        else {
            update(key, val, setFilterParams);
        }
    }

    // Handle Sorter Change
    useMemo(() => {
        // console.log(sorter);
        if (!sorter?.order) {
            updateFilterParams(FilterParamTypes.Remove, "sort_name");
            updateFilterParams(FilterParamTypes.Remove, "sort_type");
        } else if (sorter?.order === "ascend") {
            updateFilterParams(sorter.field, "ASC");
        } else if (sorter?.order === "descend") {
            updateFilterParams(sorter?.field, "DESC");
        }
    }, [sorter]);

    // Handle Filters Change
    useMemo(() => {
        // console.log(filters);
        if (filters)
            for (const key in filters)
                if (filters[key]) {
                    updateFilterParams("sort", key);
                    updateFilterParams("sort_order", "DESC");
                    updateFilterParams(key, filters[key].join());
                } else {
                    updateFilterParams(FilterParamTypes.Remove, key);
                    updateFilterParams(FilterParamTypes.Remove, "sort");
                    updateFilterParams(FilterParamTypes.Remove, "sort_order");
                }
    }, [filters]);

    return [
        filterParams,
        updateFilterParams,
        sorter,
        setSorter,
        filters,
        setFilters,
    ];
}

import React from "react";
import routes from "src/routers/index";
import Exception404 from "src/components/core/Stateless/Exception/Exception404";
import {RouteProps} from "src/common/models";

const getCurrRoute = (
    route: RouteProps,
    onFilterConditions: (route: RouteProps) => boolean
) => ({
    ...route,
    children: availableRoutes(route.children, onFilterConditions),
});

export const availableRoutes = (
    routes: RouteProps[],
    onFilterConditions: (route: RouteProps) => boolean
) =>
    routes
        // Filter Out Exceptions
        .filter((route) => onFilterConditions(route))
        // Get Current Route
        .map((route) =>
            route.children?.length
                ? getCurrRoute(route, onFilterConditions)
                : route
        );

export const flattenRoutes = (arr) =>
    arr.reduce((prev, item) => {
        if (Array.isArray(item.children)) {
            prev.push(item);
        }
        return prev.concat(
            Array.isArray(item.children) ? flattenRoutes(item.children) : item
        );
    }, []);

export const getKeyName = (path = "/404") => {
    const subRoutes: string[] = [];
    const thePath = path.split("?")[0];

    const curRoute = flattenRoutes(routes)
        .filter((item) => !item.index)
        .filter((item) => {
            // Handle Sub-Route (e.g.: user/:id)
            if (item.key?.includes(":")) {
                const source = item.key?.split("/:")[0];
                const target = thePath.slice(0, thePath.lastIndexOf("/"));
                subRoutes.push(source);
                return source === target;
            }
            return item.key?.indexOf(thePath) !== -1;
        });

    localStorage.setItem("sub_route_keys", subRoutes.join());

    if (!curRoute[0])
        return {
            title: "Not Found",
            tabKey: "/404",
            element: <Exception404 />,
        };

    const { label, key, element } = curRoute[0];
    return {
        title: label,
        tabKey: key,
        element,
    };
};

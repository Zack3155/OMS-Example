import { createSearchParams, useNavigate } from "react-router-dom";

// Pass Params to Navigate
// e.g: navigateParams('/posts', { sort: 'date' })
export const useNavigateParams = () => {
    const navigate = useNavigate();
    return (pathname, params, replace = false) =>
        navigate(pathname, { state: params, replace });
};

// Pass URL Search Query to Navigate
// e.g: navigateSearch('/posts', { sort: 'date' })
export const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname, params, replace = false) =>
        navigate(
            { pathname, search: `?${createSearchParams(params)}` },
            { replace }
        );
};

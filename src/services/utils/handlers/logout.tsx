import {
	ACCESS_TOKEN,
	ID_TOKEN,
	IS_LOGIN,
	USER_NAME,
	USER_ROLE,
	SUB_ROUTE,
	REFRESH_TOKEN,
} from "src/common/constants";

export const onClearLoginCache = () => {
	localStorage.removeItem(REFRESH_TOKEN);
	localStorage.removeItem(ACCESS_TOKEN);
	localStorage.removeItem(ID_TOKEN);
	localStorage.removeItem(IS_LOGIN);

	localStorage.removeItem(USER_NAME);
	localStorage.removeItem(USER_ROLE);
	localStorage.removeItem(SUB_ROUTE);
};

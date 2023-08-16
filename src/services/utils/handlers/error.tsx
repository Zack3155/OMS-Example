import { IS_LOGIN } from "src/common/constants";
import { ErrCodes } from "src/common/models";
import { onClearLoginCache } from "./logout";

export default function handleError(err) {
	const error: string = err.toString();

	if (error.indexOf("401") != -1 && localStorage.getItem(IS_LOGIN)) {
		window.location.href = window.location.origin;
		// Token Invalid, Clear localStorage
		// Remind User for Upcoming Redirection
		// (Logic Stores in ContentProvider.tsx)
		onClearLoginCache();
		return Promise.reject(ErrCodes.TokenError);
	} else if (error.indexOf("500") != -1)
		return Promise.reject(ErrCodes.LoadingError);
	else return Promise.reject(ErrCodes.PayloadError);
}

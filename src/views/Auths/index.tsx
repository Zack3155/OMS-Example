import React from "react";
import { useTranslation } from "react-i18next";
import logo from "src/assets/site/logo.svg";
import * as API_Auth from "src/apis/auth";
import { ACCESS_TOKEN, IS_LOGIN, REFRESH_TOKEN } from "src/common/constants";
import { useAppDispatch } from "src/services/utils/hooks/useSelector";
import { useNavigate } from "react-router-dom";

export default function Auths() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { t } = useTranslation("translation", { keyPrefix: "auth" });

	async function login() {
		// const { username, password } = form.getFieldsValue(true);
		// await API_Auth.SignIn({ username, password }).then((res) => {
		// 	const data = res.data;
		// 	const { access_token, refresh_token, username } = data;
		// 	localStorage.setItem(ACCESS_TOKEN, access_token);
		// 	localStorage.setItem(REFRESH_TOKEN, refresh_token);
		// 	localStorage.setItem(IS_LOGIN, "true");
		// 	// dispatch(userActions.setUsername(username));
		// 	navigate("/", { replace: true });
		// 	window.location.reload();
		// });
	}

	return (
		<article
			id="login-container"
			className="relative h-screen bg-[url('../../assets/site/layout-background.svg')]"
		>
			<section className="max-w-[275px] pt-[15vh] relative m-auto flex flex-col items-center">
				<div className="logo">
					<img src={logo} />
					<div className="site-intro">{t("siteTitle")}</div>
				</div>

				<aside className="mt-[1rem] flex items-center justify-between">
					<div className="w-full" onClick={login}>
						{t("login")}
					</div>
				</aside>
			</section>
		</article>
	);
}

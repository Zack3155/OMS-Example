import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "src/assets/site/logo.svg";
import * as API_Auth from "src/apis/auth";
import { ACCESS_TOKEN, IS_LOGIN, REFRESH_TOKEN } from "src/common/constants";
import { useAppDispatch } from "src/services/utils/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { Alert, Button, FormControl, Snackbar, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { AlertTypes } from "./model";
import Message from "src/components/core/Stateless/Message";

export default function Auths() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { t } = useTranslation("translation", { keyPrefix: "auth" });

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const [alertOpen, setAlertOpen] = useState<AlertTypes>(AlertTypes.DISABLE);

	const onCloseAlert = () => setAlertOpen(AlertTypes.DISABLE);

	async function login(data) {
		const res = await API_Auth.SIGN_IN(data).catch(() => null);
		if (!res?.data) return setAlertOpen(AlertTypes.FAIL);

		const { access_token, refresh_token, username } = res.data;
		localStorage.setItem(IS_LOGIN, "true");
		localStorage.setItem(ACCESS_TOKEN, access_token);
		localStorage.setItem(REFRESH_TOKEN, refresh_token);
		// dispatch(userActions.setUsername(username));
		navigate("/", { replace: true });
		window.location.reload();
	}

	useEffect(() => {
		if (localStorage.getItem(IS_LOGIN) == "true") {
			setAlertOpen(AlertTypes.REDIRECT);
			setTimeout(() => {
				navigate("/", { replace: true });
				window.location.reload();
			}, 1500);
		}
	}, []);

	return (
		<article
			id="login-container"
			className="relative h-screen bg-[url('../assets/site/layout-background.svg')]"
		>
			<section className="max-w-xs pt-[15vh] relative m-auto flex flex-col items-center">
				<div>
					<img src={logo} />
					<div className="text-center">{t("siteTitle")}</div>
				</div>

				<div>
					<FormControl>
						<TextField
							required
							id="username"
							name="username"
							label="User Name"
							fullWidth
							margin="dense"
							{...register("username")}
							error={errors.username ? true : false}
						/>

						<TextField
							required
							id="password"
							name="password"
							type="password"
							label="Password"
							fullWidth
							margin="dense"
							{...register("password")}
							error={errors.password ? true : false}
						/>

						<Button
							variant="contained"
							color="primary"
							onClick={handleSubmit(login)}
						>
							Login
						</Button>
					</FormControl>
				</div>

				<aside>
					<Message
						mode="error"
						onClose={onCloseAlert}
						open={alertOpen === AlertTypes.FAIL}
						content="Login Failed! Please try again."
					/>

					<Message
						mode="warning"
						onClose={onCloseAlert}
						open={alertOpen === AlertTypes.REDIRECT}
						content="Already logged in, Redirecting..."
					/>
				</aside>
			</section>
		</article>
	);
}

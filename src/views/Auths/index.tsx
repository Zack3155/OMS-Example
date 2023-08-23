import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "src/assets/site/logo.svg";
import * as API_Auth from "src/apis/auth";
import { ACCESS_TOKEN, IS_LOGIN, REFRESH_TOKEN } from "src/common/constants";
import { useAppDispatch } from "src/services/utils/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import {
	Alert,
	Button,
	FormControl,
	FormLabel,
	Snackbar,
	TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

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

	const [alertOpen, setAlertOpen] = useState(false);

	async function login(data) {
		const res = await API_Auth.SignIn(data).catch(() => null);
		if (!res?.data) return setAlertOpen(true);

		const result = res.data;
		const { access_token, refresh_token, username } = result;
		localStorage.setItem(ACCESS_TOKEN, access_token);
		localStorage.setItem(REFRESH_TOKEN, refresh_token);
		localStorage.setItem(IS_LOGIN, "true");
		// dispatch(userActions.setUsername(username));
		navigate("/", { replace: true });
		window.location.reload();
	}

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
							label="Password"
							type="password"
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
					<Snackbar
						open={alertOpen}
						autoHideDuration={6000}
						onClose={() => setAlertOpen(false)}
					>
						<Alert
							onClose={() => setAlertOpen(false)}
							severity="error"
							sx={{ width: "100%" }}
						>
							Login Failed! Please try again.
						</Alert>
					</Snackbar>
				</aside>
			</section>
		</article>
	);
}

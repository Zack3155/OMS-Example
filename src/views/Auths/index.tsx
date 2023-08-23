import React from "react";
import { useTranslation } from "react-i18next";
import logo from "src/assets/site/logo.svg";
import * as API_Auth from "src/apis/auth";
import { ACCESS_TOKEN, IS_LOGIN, REFRESH_TOKEN } from "src/common/constants";
import { useAppDispatch } from "src/services/utils/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
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

	const onSubmit = (data) => {
		console.log(JSON.stringify(data, null, 2));
	};

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
							onClick={handleSubmit(onSubmit)}
						>
							Login
						</Button>
					</FormControl>
				</div>
			</section>
		</article>
	);
}

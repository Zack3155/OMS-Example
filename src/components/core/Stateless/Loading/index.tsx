import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

interface LoadingProps {
	loading?: boolean;
}

export default function Loading(props: LoadingProps) {
	const { loading } = props;

	return (
		<Backdrop
			open={loading ?? true}
			sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
}

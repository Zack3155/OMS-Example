import React from "react";
import { Alert, Snackbar } from "@mui/material";

interface MessageProps {
	mode: "success" | "warning" | "error" | "info";
	horizontal?: "left" | "center" | "right";
	vertical?: "top" | "bottom";
	open: boolean;
	onClose: () => void;
	content: string;
}

export default function Message(props: MessageProps) {
	const { mode, vertical, horizontal, open, onClose, content } = props;

	return (
		<Snackbar
			open={open}
			autoHideDuration={6000}
			onClose={onClose}
			anchorOrigin={{
				vertical: vertical || "top",
				horizontal: horizontal || "center",
			}}
		>
			<Alert severity={mode} sx={{ width: "100%" }}>
				{content}
			</Alert>
		</Snackbar>
	);
}

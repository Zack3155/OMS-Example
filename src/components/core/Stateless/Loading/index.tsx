import React from "react";
import { CircularProgress } from "@mui/material";

export default function Loading() {
	return (
		<CircularProgress className="flex justify-center items-center w-full h-full" />
	);
}

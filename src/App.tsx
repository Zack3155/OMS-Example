import React, { useMemo } from "react";
import "./i18n/config";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Routes from "./components/core/Routes";
import { useAppSelector } from "./services/utils/hooks/useSelector";

export default function App() {
	const locale = useAppSelector((state) => state.lang.locale);

	const theme = createTheme({
		typography: {
			allVariants: {
				fontFamily: "Mulish",
				textTransform: "none",
				fontSize: 16,
			},
		},
		palette: {
			primary: { main: "#1976d2" },
		},
	});

	const themeWithLocale = useMemo(
		() => createTheme(theme, locale),
		[locale, theme]
	);

	return (
		<ThemeProvider theme={themeWithLocale}>
			<Routes />
		</ThemeProvider>
	);
}

import { createSlice } from "@reduxjs/toolkit";
import i18n from "src/i18n/config";
import { zhCN, enUS, Localization } from "@mui/material/locale";

interface stateProps {
	locale: Localization;
}

const initialState: stateProps = {
	locale: localStorage.getItem("lang") === "zh" ? zhCN : enUS,
};

const langSlice = createSlice({
	name: "langReducer",
	initialState,
	reducers: {
		changeLang: (state) => {
			if (localStorage.getItem("lang") === "en") {
				state.locale = zhCN;
				i18n.changeLanguage("zh");
				localStorage.setItem("lang", "zh");
			} else {
				state.locale = enUS;
				i18n.changeLanguage("en");
				localStorage.setItem("lang", "en");
			}
		},
	},
});

const langReducer = langSlice.reducer;

export const langActions = { ...langSlice.actions };

export default langReducer;

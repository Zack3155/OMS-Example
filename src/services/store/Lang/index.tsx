import { createSlice } from "@reduxjs/toolkit";
import { zhCN, enUS } from "@mui/material/locale";
interface stateProps {
	locale: typeof enUS;
}

const initialState: stateProps = {
	locale: localStorage.getItem("lang") === "zh" ? zhCN : enUS,
};

const langSlice = createSlice({
	name: "langReducer",
	initialState,
	reducers: {
		setLang: (state, action) => {
			action.payload === "zh" ? (state.locale = zhCN) : (state.locale = enUS);
		},
	},
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;

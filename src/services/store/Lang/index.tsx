import { createSlice } from "@reduxjs/toolkit";
import zh_CN from "antd/locale/zh_CN";
import en_US from "antd/locale/en_US";

interface stateProps {
	locale: typeof en_US;
}

const initialState: stateProps = {
	locale: localStorage.getItem("lang") === "zh" ? zh_CN : en_US,
};

const langSlice = createSlice({
	name: "langReducer",
	initialState,
	reducers: {
		setLang: (state, action) => {
			action.payload === "zh" ? (state.locale = zh_CN) : (state.locale = en_US);
		},
	},
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;

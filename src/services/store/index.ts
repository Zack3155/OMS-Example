import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { isAvailable } from "src/common/constants";
import loadingReducer from "./Loading";
import langReducer from "./Lang";
import routeReducer from "./Route";
// import userReducer from "./User";
// import editCardReducer from "./EditCard";
// import membershipReducer from "./Membership";
// import myStoreReducer from "./MyStore";
// import tagFilterReducer from "./TagFilter";

const rootReducer = combineReducers({
	lang: langReducer,
	loading: loadingReducer,
	route: routeReducer,
	// user: userReducer,
	// editCard: editCardReducer,
	// membership: membershipReducer,
	// myStore: myStoreReducer,
	// tagFilter: tagFilterReducer,
	// unreadNotificationCount: unreadNotificationReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		})
			// Custom Middleware
			.concat(),
	devTools: isAvailable,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

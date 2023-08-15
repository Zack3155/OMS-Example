import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { isAvailable } from "src/common/constants";

const rootReducer = combineReducers({
	// lang: langReducer,
	// loading: loadingReducer,
	// user: userReducer,
	// editCard: editCardReducer,
	// membership: membershipReducer,
	// myStore: myStoreReducer,
	// tagFilter: tagFilterReducer,
	// route: routeReducer,
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

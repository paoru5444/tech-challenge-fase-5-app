import { authenticatorReducer } from "@/modules/auth/store/slices";
import { taskReducer } from "@/modules/home/store/slices";
import { setupReducer } from "@/modules/setup/store/slices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  createMigrate,
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const migrations = {
  1: (state: any) => {
    if (!state?.setup?.setup?.feedback) {
      return state;
    }

    const { soundConfirmation, ...feedback } = state.setup.setup.feedback;

    return {
      ...state,
      setup: { ...state.setup, setup: { ...state.setup.setup, feedback } },
    };
  },
};

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
  migrate: createMigrate(migrations, { debug: __DEV__ }),
};

const rootReducer = combineReducers({
  user: authenticatorReducer,
  task: taskReducer,
  setup: setupReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: __DEV__,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

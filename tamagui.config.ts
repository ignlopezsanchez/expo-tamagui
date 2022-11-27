import { createTamagui, setupReactNative } from "@tamagui/core";
import * as ReactNative from "react-native";
import { config } from "@tamagui/config-base";

// if using with `react-native` components
setupReactNative(ReactNative);

const appConfig = createTamagui(config);

export type AppConfig = typeof appConfig;

declare module "@tamagui/core" {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;

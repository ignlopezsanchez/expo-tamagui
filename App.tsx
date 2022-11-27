import { TamaguiProvider, Button } from "tamagui";
import { Text } from "react-native";
import { TAMAGUI_TARGET } from "@env";

import config from "./tamagui.config";

const Test = () => {
  return (
    <>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>target {TAMAGUI_TARGET}</Text>
      <Button>
        <Text>{TAMAGUI_TARGET}</Text>
      </Button>
    </>
  );
};
export default function App() {
  return (
    <TamaguiProvider config={config}>
      <Test />
    </TamaguiProvider>
  );
}

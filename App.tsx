import { TamaguiProvider, Button } from "tamagui";
import { Text } from "react-native";

import config from "./tamagui.config";

process.env.TAMAGUI_TARGET = "native expo start";

const Test = () => {
  return (
    <Button>
      <Text>Button</Text>
    </Button>
  );
};
export default function App() {
  return (
    <TamaguiProvider config={config}>
      <Test />
    </TamaguiProvider>
  );
}

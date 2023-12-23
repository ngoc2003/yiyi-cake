import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import MainNavigation from "./src/navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <MainNavigation />
    </NativeBaseProvider>
  );
}

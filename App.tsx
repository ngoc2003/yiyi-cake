import MainNavigation from "./src/navigation";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  return (
    <ToastProvider
      placement="bottom"
      duration={2000}
      animationType="zoom-in"
      animationDuration={250}
      successColor="#FFD43E"
      dangerColor="#F55555"
      warningColor="orange"
      normalColor="#FFD43E"
      textStyle={{ fontSize: 13 }}
      offset={50}
    >
      <MainNavigation />
    </ToastProvider>
  );
}

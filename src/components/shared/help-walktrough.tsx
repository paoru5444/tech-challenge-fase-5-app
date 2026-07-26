import { appWalkthroughSteps } from "@/modules/onboarding/walkthrough-steps";
import { Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Walkthrough from "./walkthrough";

export default function HelpWalktrough({
  onFinish,
  visible,
}: {
  onFinish: () => void;
  visible: boolean;
}) {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={() => {}}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Walkthrough steps={appWalkthroughSteps} onFinish={onFinish} />
      </SafeAreaView>
    </Modal>
  );
}

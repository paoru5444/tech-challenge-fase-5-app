import PageHeader from "@/components/shared/page-header";
import ScrollWrapper from "@/components/shared/scroll-wrapper";
import TitleDisplay from "@/components/shared/title-display";
import Card from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Switch } from "react-native-switch";
import SetupCard from "../components/setup-card";
import * as actions from "../store/actions";
import {
  selectContrastLevel,
  selectFeedback,
  selectFontSize,
  selectInterfaceMode,
  selectSpacementSize,
} from "../store/selector";
import { FeedbackType, SetupType } from "../store/slices";

export default function SetupScreen() {
  const dispatch = useAppDispatch();

  const currentFontSize = useAppSelector(selectFontSize);
  const currentContrastLevel = useAppSelector(selectContrastLevel);
  const currentSpacementSize = useAppSelector(selectSpacementSize);
  const currentInterfaceMode = useAppSelector(selectInterfaceMode);
  const currentFeedback = useAppSelector(selectFeedback);

  const onSelectFontSize = useCallback((fontSize: SetupType["fontSize"]) => {
    dispatch(actions.updateFontSize(fontSize));
  }, []);

  const onSelectContrastLevel = useCallback(
    (contrastLevel: SetupType["contrastLevel"]) => {
      dispatch(actions.updateContrastLevel(contrastLevel));
    },
    [],
  );

  const onSelectSpacementSize = useCallback(
    (spacementSize: SetupType["spacementSize"]) => {
      dispatch(actions.updateSpacementSize(spacementSize));
    },
    [],
  );

  const onSelectInterfaceMode = useCallback(
    (interfaceMode: SetupType["interfaceMode"]) => {
      dispatch(actions.updateInterfaceMode(interfaceMode));
    },
    [],
  );

  type FeedbackProps = {
    title: string;
    description: string;
    type: keyof FeedbackType;
    enabled: boolean;
  };

  const feedbackConfirmations: FeedbackProps[] = [
    {
      title: "Feedback Visual",
      description: "Animações e destaques ao completar ações",
      type: "visualFeedback",
      enabled: currentFeedback.visualFeedback,
    },
    {
      title: "Pedir confirmação extra",
      description: "Confirmar antes de excluir ou enviar algo importante",
      type: "extraConfirmation",
      enabled: currentFeedback.extraConfirmation,
    },
    {
      title: "Sons de confirmação",
      description: "Um som suave ao concluir uma tarefa",
      type: "soundConfirmation",
      enabled: currentFeedback.soundConfirmation,
    },
  ];

  const onSelectFeedback = useCallback((feedback: FeedbackProps) => {
    dispatch(
      actions.updateFeedback({
        [feedback.type]: !feedback.enabled,
      }),
    );
  }, []);

  return (
    <ScrollWrapper
      header={
        <PageHeader
          title={"Personalizar Experiência"}
          description={
            "Ajuste o aplicativo do seu jeito para ter mais conforto e facilidade"
          }
        />
      }
      contentContainerStyle={{ marginVertical: 32, gap: 8 }}
      content={{ paddingHorizontal: 20, paddingTop: 32 }}
    >
      <SetupCard<"fontSize">
        list={["small", "default", "big"]}
        onSelectItem={onSelectFontSize}
        title="Tamanho da letra"
        description="Escolha o tamanho que é mais fácil para ler"
        letter="T"
        currentItem={currentFontSize}
      />

      <SetupCard<"contrastLevel">
        list={["default", "high"]}
        onSelectItem={onSelectContrastLevel}
        title="Nível de Contraste"
        description="Torna as cores mais distintas para facilitar a leitura"
        letter="C"
        currentItem={currentContrastLevel}
      />

      <SetupCard<"spacementSize">
        list={["small", "default", "big"]}
        onSelectItem={onSelectSpacementSize}
        title="Espaçamento"
        description="Controla a distância entre os elementos na tela"
        letter="E"
        currentItem={currentSpacementSize}
      />

      <SetupCard<"interfaceMode">
        list={["simple", "default"]}
        onSelectItem={onSelectInterfaceMode}
        title="Espaçamento"
        description="Controla a distância entre os elementos na tela"
        letter="I"
        currentItem={currentInterfaceMode}
      />

      <Card style={{ gap: 16 }}>
        <TitleDisplay
          letter={"F"}
          title={"Feedbacks e Confirmações"}
          containerStyle={{ borderRadius: 10 }}
        />

        <View style={{ gap: 8 }}>
          {feedbackConfirmations.map((item) => (
            <TouchableOpacity
              key={item.title}
              onPress={() => onSelectFeedback(item)}
              style={{
                height: 40,
                backgroundColor: "#EAEAEA",
                padding: 6,
                borderRadius: 10,
                flexDirection: "row",
              }}
            >
              <View style={{ width: "80%" }}>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>

              <Switch
                value={item.enabled}
                onValueChange={() => onSelectFeedback(item)}
                disabled={false}
                activeText={"On"}
                inActiveText={"Off"}
                circleSize={20}
                circleBorderWidth={1}
                circleBorderActiveColor="#EAEAEA"
                circleBorderInactiveColor="#EAEAEA"
                backgroundActive={"#39A304"}
                backgroundInactive={"#C4C4C4"}
                circleActiveColor={"#FFFFFF"}
                circleInActiveColor={"#FFFFFF"}
                changeValueImmediately={true}
                renderActiveText={false}
                renderInActiveText={false}
              />
            </TouchableOpacity>
          ))}
        </View>
      </Card>
    </ScrollWrapper>
  );
}

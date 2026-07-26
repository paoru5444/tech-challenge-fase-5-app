import ScrollWrapper from "@/components/shared/scroll-wrapper";
import TitleDisplay from "@/components/shared/title-display";
import Walkthrough from "@/components/shared/walkthrough";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Divider from "@/components/ui/divider";
import Typography from "@/components/ui/typography";
import { colors } from "@/constants/colors";
import { preferencesNames } from "@/constants/conts";
import { useSpacing } from "@/hooks/useSpacing";
import * as actions from "@/modules/auth/store/actions";
import { selectUser } from "@/modules/auth/store/selectors";
import { appWalkthroughSteps } from "@/modules/onboarding/walkthrough-steps";
import { selecPreferences } from "@/modules/setup/store/selector";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Lucide from "@react-native-vector-icons/lucide";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { FlatList, Modal, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const user = useAppSelector(selectUser);
  const preferences = useAppSelector(selecPreferences);

  const dispatch = useAppDispatch();
  const spacing = useSpacing();
  const [showWalkthrough, setShowWalkthrough] = useState(false);

  const logout = async () => {
    await dispatch(actions.logout());
    router.replace("/sign-in");
  };

  const preferencesTitleNames = {
    contrastLevel: "Contraste",
    fontSize: "Tamanho da fonte",
    spacementSize: "Espaçamento",
    interfaceMode: "Interface",
    visualFeedback: "Feedback visual",
    extraConfirmation: "Confirmação extra",
  };

  const preferencesList = useMemo(() => {
    const normalizedPreferences = {
      ...preferences,
      ...preferences.feedback,
    };

    delete normalizedPreferences.feedback;

    return Object.entries(normalizedPreferences);
  }, [preferences]);

  return (
    <>
      <ScrollWrapper
        header={
          <View style={{ gap: spacing(4) }}>
            <Typography variant="h2" style={{ lineHeight: 28 }}>
              Informações do{" "}
              <Text style={{ color: colors.brand.primary }}>Perfil</Text>
            </Typography>

            <Typography style={{ lineHeight: 20 }}>
              Suas informações e preferências salvas
            </Typography>
          </View>
        }
        footer={<Button text={"Sair da conta"} onPress={logout} />}
        contentContainerStyle={{ gap: spacing(24) }}
        content={{
          paddingHorizontal: spacing(20),
          paddingTop: spacing(64),
        }}
      >
        <View />

        <Card>
          <TitleDisplay
            user={user}
            title={user?.displayName ?? ""}
            description={user?.age ? `${user?.age} anos` : ""}
          />
        </Card>

        <Card>
          <Pressable
            onPress={() => setShowWalkthrough(true)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: spacing(10) }}
            >
              <Lucide name="circle-help" size={20} color={colors.brand.primary} />
              <Typography variant="subtitle">Como usar o app</Typography>
            </View>

            <Lucide name="chevron-right" size={20} color={colors.text.secondary} />
          </Pressable>
        </Card>

        <Card style={{ gap: spacing(32) }}>
          <TitleDisplay letter="P" title="Preferências ativas" />

          <FlatList
            data={preferencesList}
            keyExtractor={([key]) => key}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <Divider size={12} />}
            renderItem={({ item: [key, value] }) => {
              const name =
                preferencesTitleNames[
                  key as keyof typeof preferencesTitleNames
                ];

              const badgeName = preferencesNames[value];

              return (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body">{name}</Typography>

                  <Badge text={badgeName} />
                </View>
              );
            }}
          />
        </Card>
      </ScrollWrapper>

      <Modal
        visible={showWalkthrough}
        animationType="slide"
        onRequestClose={() => setShowWalkthrough(false)}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <Walkthrough
            steps={appWalkthroughSteps}
            onFinish={() => setShowWalkthrough(false)}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
}

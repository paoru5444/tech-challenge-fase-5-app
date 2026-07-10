import PageHeader from "@/components/shared/page-header";
import ScrollWrapper from "@/components/shared/scroll-wrapper";
import TitleDisplay from "@/components/shared/title-display";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Divider from "@/components/ui/divider";
import { preferencesNames } from "@/constants/conts";
import * as actions from "@/modules/auth/store/actions";
import { selectUser } from "@/modules/auth/store/selectors";
import { selecPreferences } from "@/modules/setup/store/selector";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { router } from "expo-router";
import { useMemo } from "react";
import { FlatList, Text, View } from "react-native";

export default function ProfileScreen() {
  const user = useAppSelector(selectUser);
  const preferences = useAppSelector(selecPreferences);

  const dispatch = useAppDispatch();

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
    soundConfirmation: "Conformação por som",
  };

  const preferencesList = useMemo(() => {
    const normalizedPreferences = {
      ...preferences,
      ...preferences.feedback,
    };

    delete normalizedPreferences.feedback;

    return Object.entries(normalizedPreferences);
  }, [preferences]);

  console.log("preferencesList: ", preferencesList);

  return (
    <ScrollWrapper
      header={
        <PageHeader
          title={"Meu Perfil"}
          description={"Suas informações e preferências salvas"}
        />
      }
      footer={<Button text={"Sair da conta"} onPress={logout} />}
      contentContainerStyle={{ gap: 16 }}
      content={{ paddingHorizontal: 20, paddingTop: 32 }}
      headerContainerStyle={{ height: 50 }}
    >
      <Card>
        <TitleDisplay
          user={user}
          title="João Lucas Pereira de Almeida"
          description="40 anos"
        />
      </Card>

      <Card style={{ gap: 32 }}>
        <TitleDisplay letter="P" title="Preferências ativas" />

        <FlatList
          data={preferencesList}
          keyExtractor={([key]) => key}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <Divider size={12} />}
          renderItem={({ item: [key, value] }) => {
            const name =
              preferencesTitleNames[key as keyof typeof preferencesTitleNames];

            console.log("value: ", value);
            const badgeName = preferencesNames[value];

            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: 700, fontSize: 12 }}>{name}</Text>

                <Badge text={badgeName} />
              </View>
            );
          }}
        />
      </Card>
    </ScrollWrapper>
  );
}

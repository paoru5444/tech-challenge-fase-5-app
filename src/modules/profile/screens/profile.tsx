import PageHeader from "@/components/shared/page-header";
import ScrollWrapper from "@/components/shared/scroll-wrapper";
import Avatar from "@/components/ui/avatar";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import * as actions from "@/modules/auth/store/actions";
import { selectUser } from "@/modules/auth/store/selectors";
import { selecPreferences } from "@/modules/setup/store/selector";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function ProfileScreen() {
  const user = useAppSelector(selectUser);
  const preferences = useAppSelector(selecPreferences);

  const dispatch = useAppDispatch();

  const logout = async () => {
    await dispatch(actions.logout());
    router.replace("/sign-in");
  };

  const preferencesNames = {
    contrastLevel: "Contraste",
    fontSize: "Tamanho da fonte",
    spacementSize: "Espaçamento",
    interfaceMode: "Interface",
    visualFeedback: "Feedback visual",
    extraConfirmation: "Confirmação extra",
    soundConfirmation: "Conformação por som",
  };

  const preferencesList = Object.entries(preferences);

  return (
    <ScrollWrapper
      header={
        <PageHeader
          title={"Meu Perfil"}
          description={"Suas informações e preferências salvas"}
        />
      }
      footer={<Button text={"Sair da conta"} onPress={logout} />}
      contentContainerStyle={{ paddingVertical: 32, gap: 16 }}
      content={{ paddingHorizontal: 20, paddingVertical: 32 }}
    >
      <Card
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Avatar user={user} />

        <View style={{}}>
          <Text style={{ fontWeight: 700 }}>João Lucas Pereira de Almeida</Text>
          <Text>40 anos</Text>
        </View>
      </Card>

      <Card style={{ gap: 32 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Avatar user={user} />

          <View style={{}}>
            <Text style={{ fontWeight: 700 }}>Preferências ativas</Text>
          </View>
        </View>

        <View style={{ gap: 16 }}>
          {preferencesList.map(([key, value]) => {
            const isObject = typeof value === "object";

            const name = isObject
              ? preferencesNames[value[key]]
              : preferencesNames[key];

            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: 700 }}>{name}</Text>

                <View
                  style={{
                    backgroundColor: "#D13F62",
                    padding: 4,
                    borderRadius: 16,
                  }}
                >
                  <Text style={{ color: "#FFFFFF" }}>
                    {isObject ? value[key] : value}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </Card>
    </ScrollWrapper>
  );
}

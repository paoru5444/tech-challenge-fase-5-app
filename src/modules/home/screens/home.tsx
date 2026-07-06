import Banner from "@/components/shared/banner";
import ScrollWrapper from "@/components/shared/scroll-wrapper";
import Card from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/ui/header";
import { ProgressBar } from "@/components/ui/progress-bar";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <>
      <ScrollWrapper
        header={<Header />}
        contentContainerStyle={{ marginVertical: 32, gap: 8 }}
        content={{ paddingHorizontal: 20, paddingTop: 32 }}
      >
        <Banner title="Atividades pendentes" value="3" />

        <Text>Minhas atividades</Text>

        <Card style={{ gap: 12 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onPress={() => setIsCollapsed((prev) => !prev)}
          >
            <View>
              <Text>Módulo Testes Automatizados</Text>
              <Text>Primeiro módulo da fase 5 da Pós Tech</Text>
            </View>

            <Text>{isCollapsed ? "Abrir" : "Fechar"}</Text>
          </TouchableOpacity>

          {!isCollapsed && (
            <>
              <ProgressBar progress={50} />

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Checkbox checked={true} />
                <Text>Introdução à biblioteca Jest</Text>
              </View>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Checkbox checked={false} />
                <Text>Introdução à biblioteca Jest</Text>
              </View>

              <View />

              <TouchableOpacity
                style={{
                  backgroundColor: "#39A304",
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 16,
                }}
              >
                <Text style={{ color: "#FFFFFF", fontWeight: 600 }}>
                  Concluir atividade
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Card>
      </ScrollWrapper>

      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#F67653",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 25,
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: 300, color: "#FFFFFF" }}>
          +
        </Text>
      </TouchableOpacity>
    </>
  );
}

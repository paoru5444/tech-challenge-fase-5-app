import React from "react";
import { ScrollView, StyleProp, View, ViewStyle } from "react-native";

interface ScrollWrapper {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  headerContainerStyle?: StyleProp<ViewStyle>;
  footerContainerStyle?: StyleProp<ViewStyle>;
  content?: StyleProp<ViewStyle>;
}

export default function ScrollWrapper({
  header,
  footer,
  headerContainerStyle,
  contentContainerStyle,
  footerContainerStyle,
  content,
  children,
}: ScrollWrapper) {
  return (
    <View style={{ flex: 1, ...content }}>
      <View style={{ ...headerContainerStyle }}>{header}</View>

      <ScrollView
        contentContainerStyle={{
          flex: 1,
          ...contentContainerStyle,
        }}
      >
        {children}
      </ScrollView>

      <View style={{ ...footerContainerStyle }}>{footer}</View>
    </View>
  );
}

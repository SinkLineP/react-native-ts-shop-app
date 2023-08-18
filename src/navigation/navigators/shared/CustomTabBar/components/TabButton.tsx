import React from "react";
import {TouchableOpacity, Text} from "react-native";
import Lottie from "lottie-react-native";
import {useNavigation} from "@react-navigation/native";

interface InterfaceTabButton {
  isFocused: boolean,
  activeIcon: string,
  inActiveIcon: string,
  options: any,
  route: any,
  key: string,
  tabName: string
}

export const TabButton = ({ isFocused, activeIcon, inActiveIcon, options, route, key, tabName }: InterfaceTabButton) => {
  const navigation = useNavigation();

  const iconTab = {
    sourceImg: ""
  }

  if (isFocused) {
    iconTab.sourceImg = activeIcon;
  } else {
    iconTab.sourceImg = inActiveIcon;
  }

  const onPress = () => {
    // @ts-ignore
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
    });

    if (!isFocused && !event.defaultPrevented) {
      // @ts-ignore
      navigation.navigate(route.name);
    }
  };

  const onLongPress = () => {
    // @ts-ignore
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };


  return (
    // @ts-ignore
    <TouchableOpacity
      key={key}
      accessibilityRole="button"
      // accessibilityStates={isFocused ? ['selected'] : []}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      // onLongPress={onLongPress}
      style={{ flex: 1, alignItems:"center", paddingBottom: 20 }}
    >
      {/*<Lottie width={"auto"} height={21} source={iconTab.sourceImg} />*/}
      <Text>{tabName}</Text>
    </TouchableOpacity>
  );
}
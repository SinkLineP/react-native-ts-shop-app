import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {TabButton} from "./components/TabButton";
import {AnyIfEmpty} from "react-redux";


interface CustomTabBarProps {
  state: any,
  descriptors: any
}

interface InterfaceContainerSlider {
  height: number,
  width: number,
  alignItems: string,
  justifyContent: string,
  marginLeft: string,
  marginRight: string,
}


export default function CustomTabBar({ state, descriptors }: CustomTabBarProps) {
  const containerSlider: InterfaceContainerSlider = {
    height: 7,
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  }

  return (
    <>
      <View style={stylesCustomTabBar.containerTabBar}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          if (route.name === 'SignTab') {
            if (isFocused) {
              containerSlider.alignItems = "flex-start"
            }

            return (
              <TabButton
                tabName={"Auth"}
                key={"Auth"}
                options={options}
                activeIcon={require(`./Icons/sign-active.json`)}
                inActiveIcon={require(`./Icons/sign-inactive.json`)}
                isFocused={isFocused}
                route={route}
              />
            )
          } else if (route.name === 'HomeTab') {
            if (isFocused) {
              containerSlider.alignItems = "center"
            }

            return (
              <TabButton
                tabName={"Home"}
                key={"Home"}
                options={options}
                activeIcon={require(`./Icons/home-active.json`)}
                inActiveIcon={require(`./Icons/home-inactive.json`)}
                isFocused={isFocused}
                route={route}
              />
            )
          } else if (route.name === 'MenuTab') {
            if (isFocused) {
              containerSlider.alignItems = "flex-end"
            }

            return (
              <TabButton
                tabName={"Menu"}
                key={"Menu"}
                options={options}
                activeIcon={require(`./Icons/menu-active.json`)}
                inActiveIcon={require(`./Icons/menu-inactive.json`)}
                isFocused={isFocused}
                route={route}
              />
            )
          }
        })}
      </View>
      {/*<View style={containerSlider}>*/}
      {/*  <View style={stylesCustomTabBar.slider}></View>*/}
      {/*</View>*/}
    </>
  );
}

const stylesCustomTabBar = StyleSheet.create({
  containerTabBar: {
    flexDirection: 'row',
    backgroundColor: "#ffffff",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  slider: {
    height: 5,
    width: 100,
    backgroundColor: "#323232",
    borderRadius: 5
  }
})
// import Header from "../shared/Header/Header";
import {useNavigation} from "@react-navigation/native";


export const setOptions = (titleText: string, backgroundColor: string, titleColor: string, navigationRoute: any, height: string | number, width: string | number, sourceImage: string, showButton: boolean) => {
  const navigation = useNavigation();

  return {
    // headerTitle: (props: any) => <Header
    //   navigationRoute={navigationRoute}
    //   heightImage={height}
    //   iconSource={sourceImage}
    //   widthImage={width}
    //   showButton={showButton}
    //   titleColor={titleColor}
    //   title={titleText}
    //   {...props}
    // />,
    headerStyle: {
      backgroundColor: backgroundColor ? backgroundColor : "coral",
    },
    headerTintColor: titleColor !== "" ? titleColor : "#fff",
    drawerLabel: titleText,
  };
}

export const drawerNavigatorOptions = (isShown: boolean) => {
  return {
    headerShown: isShown,
  }
}
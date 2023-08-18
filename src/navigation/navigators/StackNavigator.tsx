import {createStackNavigator} from "@react-navigation/stack";
import Auth from "../../Pages/Auth/Auth";
import Home from "../../Pages/Home/Home";
import Menu from "../../Pages/Menu/Menu";


const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={Auth}
      />
    </Stack.Navigator>
  );
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}

const MenuStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
      />
    </Stack.Navigator>
  );
}


export { MainStackNavigator, AuthStackNavigator, MenuStackNavigator };
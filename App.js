import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./components/screen/Welcome";
import Quiz from "./components/screen/Quiz";



const Stack = createNativeStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name="Welcome" component={Welcome}/>
    <Stack.Screen name="Quiz" component={Quiz}/>
   </Stack.Navigator>
   </NavigationContainer>
  );
}



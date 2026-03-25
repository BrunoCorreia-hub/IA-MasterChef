import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import { Historico } from "../screens/Historico";
import { DetalheReceita } from "../components/detalheReceita";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Historico" component={Historico}/>
                <Stack.Screen name="Detalhes" component={DetalheReceita} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
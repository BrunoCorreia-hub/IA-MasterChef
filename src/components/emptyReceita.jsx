import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { emptyStyles } from "../styles/emptyStyles";

export function EmptyReceita() {
    return(
        <View style={emptyStyles.container}>
            <Ionicons name="restaurant-outline" style={emptyStyles.icon}/>
            <Text style={emptyStyles.text1}>Nenhuma receita</Text>
            <Text style={emptyStyles.text2}>Peça para a IA gerar uma receita e ela aparecerá aqui</Text>
        </View>
    )
}
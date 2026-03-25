import { ScrollView } from "react-native";
import { ReceitaCard } from "./receitaCard";
import { historicoStyles } from "../styles/historicoStyles";
import { useNavigation } from "@react-navigation/native";
import { useHistorico } from "../hooks/useHistorico";


export function DetalheReceita({ route }) {
    const { receita } = route.params;
    const { removerItemDoHistorico } = useHistorico();
    const navigation = useNavigation();
    return(
        <ScrollView style={historicoStyles.scroll}>
            <ReceitaCard 
            receita={receita}
            modo="completo"
            mostrarSalvar={false}
            onExcluir={async () => {
                await removerItemDoHistorico(receita.id)
                navigation.goBack()
            }}
            />
        </ScrollView>
    )
}
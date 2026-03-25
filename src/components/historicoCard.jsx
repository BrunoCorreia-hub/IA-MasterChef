import { Text, View } from "react-native";
import { historicoStyles } from "../styles/historicoStyles";
import { ReceitaCard } from "./receitaCard";
import { useNavigation } from "@react-navigation/native";


export function HistoricoCard({ item, removerItemDoHistorico, limparTela }) {
    const navigation = useNavigation();
    return (
        <View style={historicoStyles.div}>
            <Text style={historicoStyles.textTitle}>{item.nome}</Text>
            <View style={historicoStyles.containerButton}>
                <ReceitaCard 
                modo="resumo"
                onVerReceita={() => navigation.navigate("Detalhes", { receita: item})}
                mostrarSalvar={false}
                onExcluir={() => {
                    removerItemDoHistorico(item.id)
                    limparTela(item.id)
                }}
                />
            </View>
        </View>
    )
}
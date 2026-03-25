import { useCallback, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { useHistorico } from "../hooks/useHistorico";
import { useFocusEffect } from "@react-navigation/native";
import { cardStyles } from "../styles/cardStyles";
import { historicoStyles } from "../styles/historicoStyles";
import { Button } from "../components/button";
import { HistoricoCard } from "../components/historicoCard";
import { Ionicons } from "@expo/vector-icons";
import { emptyStyles } from "../styles/emptyStyles";

export function Historico() {
    const { apagarHistorico, removerItemDoHistorico, carregaHistorico } = useHistorico();
    const [historico, setHistorico] = useState([]);
    const [loading, setLoading] = useState(false);

    useFocusEffect(
        useCallback(() => {
            async function load() {
                setLoading(true);
                try {
                    const dados = await carregaHistorico();
                    setHistorico(dados)
                } catch (error) {
                    Alert.alert("❌ Erro ao carregar historico")
                } finally {
                    setLoading(false)
                }
            }
            load();
        }, [])
    );

    const limparTela = (id) => {
        setHistorico(prev => prev.filter(i => i.id !== id))
    }
    return (
        <View style={historicoStyles.container}>
            <Text style={historicoStyles.title}>Historico de receitas</Text>


            <ScrollView style={historicoStyles.scroll}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {loading ? (
                    <Text style={cardStyles.textLabel}>Carregando historico...</Text>
                ) : (
                    historico.length === 0 ? (
                        <View style={historicoStyles.viewSemReceita}>
                            <Text style={cardStyles.textSemReceita}>Nenhuma receita encontrada</Text>
                            <Ionicons name="restaurant-outline" style={emptyStyles.icon} />
                        </View>
                    ) : (
                        <>
                            <Button onPress={() => {
                                Alert.alert(
                                    "Confirmação",
                                    "Tem certeza que deseja excluir o histórico?",
                                    [
                                        {
                                            text: "Cancelar",
                                            style: "cancel"
                                        },
                                        {
                                            text: "Excluir",
                                            style: "destructive",
                                            onPress: async () => {
                                                apagarHistorico()
                                                setHistorico([])
                                            }
                                        }
                                    ]
                                )

                            }}
                                variant="delete"
                            >Apagar Histórico</Button>
                            {historico.map(item => (
                                <HistoricoCard
                                    key={item.id}
                                    item={item}
                                    removerItemDoHistorico={removerItemDoHistorico}
                                    limparTela={limparTela}
                                />
                            ))}
                        </>
                    )
                )}
            </ScrollView>
        </View >
    )

}
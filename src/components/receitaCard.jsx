import { ActivityIndicator, Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { cardStyles } from '../styles/cardStyles';
import { Ionicons } from '@expo/vector-icons';
import { buttonStyles } from "../styles/buttonStyles";
import { Button } from "./button";

export function ReceitaCard({
  receita,
  onSalvar,
  spinner,
  onExcluir,
  modo = "completo",
  mostrarSalvar = true,
  onVerReceita }) {

  return (
    <ScrollView style={[ cardStyles.caixaReceita, 
      modo !== "completo" && cardStyles.caixaHistorico
     ]}>
        {modo === "completo" && (
          <>
            <Text style={cardStyles.title}>{receita.nome}</Text>

            <View style={cardStyles.cardTime}>
              <Text style={cardStyles.receita}><Text style={cardStyles.textLabel}>
                <Ionicons name="time-outline" size={22} color="#f8762b" /> Tempo Médio:

              </Text> {receita.tempo}</Text>
              <Text style={cardStyles.receita}><Text style={cardStyles.textLabel}>
                <Ionicons name="people-outline" size={22} color="#f8762b" /> Porções:
              </Text> {receita.porcoes}</Text>

            </View>

            <View style={cardStyles.cardTime}>
              <Text style={cardStyles.textLabel}>
                <Ionicons name="list-outline" size={22} color="#f8762b" /> Ingredientes:</Text>
              {receita.ingredientes
                ?.split(',')
                .map((item, index) => (
                  <Text key={index} style={cardStyles.receita}>
                    ▪ {item.trim()}
                  </Text>
                ))}
            </View>
            <View style={cardStyles.cardTime

            }>
              <Text style={cardStyles.textLabel}>
                <Ionicons name="book-outline" size={22} color="#f8762b" /> Modo de Preparo:
              </Text>
              {receita.preparo
                ?.split(";")

                .map((item, index) => (
                  <Text key={index} style={cardStyles.receita}>
                    ▪{item.trim()}
                  </Text>
                ))}
            </View>

            <Text style={cardStyles.receita}>
              <Text style={cardStyles.textLabel}>
                <Ionicons name="bulb-outline" size={22} color="#f8762b" /> Dica:
              </Text>
              {receita.dica}
            </Text>
          </>
        )}

        <View style={cardStyles.containerButton}>
          {modo === "completo" ? (
            mostrarSalvar && (
              spinner ? (
                <View style={{ alignItems: "center", marginTop: 20 }}>
                  <ActivityIndicator size="large" color="#FF9A00" />
                  <Text>Salvando receita</Text>
                </View>
              ) : (
                <Button onPress={onSalvar} style={buttonStyles.buttonBase}>
                  Salvar receita
                </Button>
              )
            )
          ) : (
            <Button onPress={onVerReceita} style={buttonStyles.buttonBase} size="small">Ver receita</Button>
          )}

          <Button style={buttonStyles.buttonDelet} onPress={() => {
            Alert.alert(
              "Confirmação",
              "Deseja excluir a receita?",
              [
                {
                  text: "Cancelar",
                  style: "cancel"
                },
                {
                  text: "Excluir",
                  style: "destructive",
                  onPress: async () => {
                    onExcluir()
                  }
                }
              ]
            )
          }} variant="delete" size="small">
           Apagar receita
          </Button>
        </View>
    </ScrollView>

  )
}
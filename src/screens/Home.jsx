import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { styles } from '../styles/appStyles';
import { useGerarReceita } from '../hooks/useGerarReceita';
import { ReceitaCard } from '../components/receitaCard';
import { cardStyles } from '../styles/cardStyles';
import { useHistorico } from '../hooks/useHistorico';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../components/button';
import { EmptyReceita } from '../components/emptyReceita';

/*
  [x] pegar o click do botao
  [x] pegar as informacoes do input
  [x] mandar as informacoes do input para a IA
  [x] colocar as info na tela
*/

export default function Home() {
  const navigation = useNavigation();

  const [input, setInput] = useState({});
  const { receita, gerarReceita, loading, apagaReceita } = useGerarReceita();
  const { salvarReceitaNoHistorico, spinner } = useHistorico();

  const navegacao = () => {
    navigation.navigate("Historico");
  }

  async function handleSalvarReceita() {
    if (!receita || !receita.nome) {
      Alert.alert("Nenhuma receita");
      return
    }
    await salvarReceitaNoHistorico(receita)
    Alert.alert("Sucesso", "Receita salva no histórico!");
    navegacao();
  }

  const receitaVazia = !receita || Object.keys(receita).length === 0;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 90 }} >
      <StatusBar style="auto" />
      <View>
        <View style={styles.header}>
          <Text style={styles.icon}>👨‍🍳</Text>
          <Text style={styles.textHeader}>IA Master Chef</Text>
        </View>

        <View style={styles.view}>
          <TextInput
            style={styles.input}
            placeholder='Digite os ingredientes...'
            multiline
            placeholderTextColor={'#885'}
            value={input}
            onChangeText={setInput}
          />
          <Button onPress={() => navigation.navigate("Historico")} size='small' border='radius'>Ver Histórico</Button>
        </View>

        {loading ? (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <ActivityIndicator size="large" color="#FF9A00" />
            <Text style={cardStyles.title}>Gerando receita...</Text>
          </View>
        ) : (
          <Button onPress={() => {
            gerarReceita(input)
            setInput('')
          }}>Gerar receita</Button>
        )}
      </View>

      <View style={styles.cardView}>
        {receitaVazia ? (
          <View style={cardStyles.caixaSemReceita}>
            <EmptyReceita />
          </View>
        ) : (
          <ReceitaCard
            receita={receita}
            onSalvar={handleSalvarReceita}
            spinner={spinner}
            onExcluir={apagaReceita} />
        )}

      </View>
    </ScrollView>
  );
}


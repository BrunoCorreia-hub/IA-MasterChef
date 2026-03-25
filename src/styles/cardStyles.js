import { StyleSheet } from "react-native";


export const cardStyles = StyleSheet.create({
  caixaReceita: {
    backgroundColor: '#d3d1d1',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    marginTop: 20
  },
  caixaSemReceita: {
    padding: 15
  },
  icon: {
    fontSize: 40,
    textAlign: "center"
  },
  textSemReceita: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  },
  cardTime: {
    marginBottom: 20
  },
  title: {
    textAlign: 'center',
    color: '#f8762b',
    fontWeight: 'bold',
    fontSize: 23,
    marginBottom: 20
  },
  textLabel: {
    fontSize: 19,
    fontWeight: '700',
    color: '#010101'
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  receita: {
    color: '#010108',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  caixaHistorico: {
    backgroundColor: "transparent",
    shadowColor: "transparent"
  }
})
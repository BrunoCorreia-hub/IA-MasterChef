import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export function useHistorico() {
    const [spinner, setSpinner] = useState(false);

    async function salvarReceitaNoHistorico(novaReceita) {
        setSpinner(true)
        try {
            const historico = await AsyncStorage.getItem("@historicoReceitas");
            const historicoArray = historico ? JSON.parse(historico) : [];

            const receita = {
                ...novaReceita,
                id: Date.now()
            }

            historicoArray.unshift(receita);

            await AsyncStorage.setItem("@historicoReceitas", JSON.stringify(historicoArray))
        } catch (error) {
            return { success: false, error }
        } finally {
            setSpinner(false)
        }
    }

    async function carregaHistorico() {
        try {
            const historico = await AsyncStorage.getItem("@historicoReceitas");
            return JSON.parse(historico || "[]");
        } catch (error) {
            throw error;
        } 
    }

    async function apagarHistorico() {
        try {
            await AsyncStorage.setItem("@historicoReceitas", JSON.stringify([]))
            return { success: true }
        } catch (error) {
            return { success: false, error}
        }
    }

    async function removerItemDoHistorico(idReceita) {
        try {
            const historico = await AsyncStorage.getItem("@historicoReceitas");
            const historicoArray = historico ? JSON.parse(historico) : [];

            const novaLista = historicoArray.filter(item => item.id !== idReceita)

            await AsyncStorage.setItem("@historicoReceitas", JSON.stringify(novaLista))

            return { success: true }
        } catch (error) {
            return { success: false, error}
        }
    }

    return { salvarReceitaNoHistorico, carregaHistorico, apagarHistorico, removerItemDoHistorico, spinner }
}
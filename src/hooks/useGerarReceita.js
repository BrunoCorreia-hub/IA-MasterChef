import { useState } from 'react';
import { api } from '../services/service';

export function useGerarReceita() {
    const [receita, setReceita] = useState({})
    const [loading, setLoading] = useState(false)

    async function gerarReceita(input) {
        setLoading(true)
        try {
            const response = await api.post('/chat/completions', {
                model: "llama-3.1-8b-instant",
                temperature: 1,
                max_completion_tokens: 1024,
                messages: [
                    {
                        role: 'system',
                        content: `Você é um chefe muito talentoso. Crie receitas simples e deliciosas com os ingredientes fornecidos. Responda APENAS neste formato JSON:

                    {
                      "nome": "",
                      "tempo": "",
                      "porcoes": "",
                      "ingredientes": "",
                      "preparo": "",
                      "dica": ""
                    }

                    NUNCA retorne nada além do JSON.`
                    },
                    {
                        role: 'user',
                        content: `Crie uma receita com os seguintes ingredientes: ${input}`
                    }
                ],
            })
            const data = JSON.parse(response.data.choices[0].message.content)

            const receitaFormatada = {
                nome: String(data.nome),
                tempo: String(data.tempo),
                porcoes: String(data.porcoes),
                ingredientes: String(data.ingredientes),
                preparo: String(data.preparo),
                dica: String(data.dica)
            }
            setReceita(receitaFormatada)
        } catch (error) {
            return { success: false, error}
        } finally {
            setLoading(false)
        }
    }
    const apagaReceita = () => {
        setReceita({})
    }

    return { receita, gerarReceita, loading, apagaReceita }
}
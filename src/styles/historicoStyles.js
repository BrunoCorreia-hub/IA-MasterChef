import { StyleSheet } from "react-native";
/*40487e*/
export const historicoStyles = StyleSheet.create({
    container: {
        backgroundColor: '#2b2e4a',
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 30,
    },
    title: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center",
        marginBottom: 20
    },
    containerButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    scroll: {
        flex: 1,
        marginTop: 25,
        padding: 10,
        backgroundColor: "#2b2e4a"
    },
    div: {
        paddingTop: 10,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 10,
        backgroundColor: "#3a3f6b",
        shadowColor: '#cac5c5',
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
        marginTop: 35
    },
    textTitle: {
        color: "#00ff88",
        fontSize: 19,
        fontWeight: "bold",
        textAlign: "center"
    },
    viewSemReceita: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 35
    }
})
import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: "#EEE",
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        flex: 1
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').height / 4,
        borderRadius: 10,
        resizeMode: "contain",
    },
    title: {
        marginTop: 5,
        color: "#000",
        fontWeight: "bold",
        fontSize: 20,
    },
    price: {
        marginTop: 5,
        color: "#444",
        fontWeight: "bold",
        fontSize: 18,
    },
    stock: {
        color: "red",
        marginTop: 5,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 18,
    },
});
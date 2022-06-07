import { StyleSheet } from "react-native";
export default StyleSheet.create({
    parent: {
        display: "flex",
        flexDirection: "row",
        borderWidth:1,
        borderRadius: 80,
        borderColor: "#694966",
        backgroundColor: '#694966',
        // paddingLeft: "8%",
        // paddingRight: "8%",
        // paddingTop: "5%",
        // paddingBottom: "5%",
    },

    child: {
        fontSize: 40,
        color: "#C89933",
    },

    buttonParent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "2%",
    },

    button: {
        backgroundColor: "#694966",
        paddingTop: "5%",
        // paddingBottom: "5%",
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#694966",
        height: 80,
    },

    buttonText: {
        color: "#C89933",
        fontSize: 20,
        alignSelf: "center"
    }
});
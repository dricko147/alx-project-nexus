import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 3,
        borderBottomColor: '#eee',
    },
    headerContainer: {
        backgroundColor: "#0C8057",
        paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
        paddingBottom: 16,
        paddingHorizontal: 16,
    },
    searchGroup: {
        marginBottom: 16,
    },
    searchFormGroup: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F0F0F0",
        borderRadius: 8,
        padding: 10,
    },
    searchControlGroup: {
        flex: 1,
    },
    searchFormText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
    },
    searchControl: {
        marginTop: 4,
        borderBottomWidth: 1,
        borderColor: "#ddd",
        paddingBottom: 4,
    },
    searchButton: {
        backgroundColor: "grey",
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 8,
    },
    filterGroup: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: 10,
    },
    filterContainer: {
        alignItems: "center",
        marginHorizontal: 6,
    },
    listingContainer: {
        flex: 2,
    },
    paginationContainer: {
        alignItems: "center",
        marginVertical: 40,
    },
    showMoreButton: {
        backgroundColor: "black",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 20,
    },
    showMoreButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
    },
});


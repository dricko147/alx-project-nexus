import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    headerContainer: {
        backgroundColor: "#7EF4CC",
        paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
        paddingBottom: 16,
        paddingHorizontal: 16,
    },
    searchGroup: {
        marginBottom: 16,
    },
    searchContainer: {
    padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#eee'
    },
    searchFormGroup:
     {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F0F0F0",
        borderRadius: 4,
        padding: 5,
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
        borderColor: "#grey",
        paddingBottom: 4,
    },
    searchButton: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 8,
    },
    filterGroup: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
    },
    filterContainer: {
        alignItems: "center",
        marginHorizontal: 10,
    },
    listingContainer: {
        flex: 1,
    },
    paginationContainer: {
        alignItems: "center",
        marginVertical: 16,
    },
    showMoreButton: {
        backgroundColor: "7EF4CC",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 20,
    },
    showMoreButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
    
});
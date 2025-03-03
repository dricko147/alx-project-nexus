import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


interface SavedItem {
    id: string;
    title: string;
    price: number;
}

const savedItems: SavedItem[] = [
    { id: '1', title: 'Item 1', price: 29.99 },
    { id: '2', title: 'Item 2', price: 49.99 },
    { id: '3', title: 'Item 3', price: 19.99 },
];

const saved: React.FC = () => {
    const renderItem = ({ item }: { item: SavedItem }) => (
        <View style={styles.item}>
            <Text>{item.title}</Text>
            <Text>${item.price.toFixed(2)}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Saved Items</Text>
            <FlatList
                data={savedItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    Button: {
        borderColor: "7EF4CC",
        borderWidth: 2,
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 5,
        fontSize: 20,
        backgroundColor: "7EF4CC",
        flex: 1,
        alignItems: "center",
      },
    
      ButtonGroup: {
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 20,
      },
});

export default saved;

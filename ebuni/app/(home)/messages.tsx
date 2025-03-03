import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text } from 'react-native';

interface Message {
    id: number;
    text: string;
}

const ChatPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [messages] = useState<Message[]>([
        { id: 1, text: 'Hey there!' },
        { id: 2, text: 'How are you doing?' },
        { id: 3, text: 'What’s up?' },
        { id: 4, text: 'Let’s catch up soon!' },
    ]);

    const filteredMessages = messages.filter(message =>
        message.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search in messages..."
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            <FlatList
                data={filteredMessages}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.messageContainer}>
                        <Text>{item.text}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    searchBar: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    messageContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
});

export default ChatPage;

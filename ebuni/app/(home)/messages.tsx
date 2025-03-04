import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import { styles } from "@/styles/_messagestyle";
import { Feather } from "@expo/vector-icons";

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
            <View style={styles.searchGroup}>
                  <View style={styles.searchFormGroup}>
                    <View style={styles.searchControlGroup}>
                      <Text style={styles.searchFormText}>Search here</Text>
                      <TextInput
                        style={{ ...styles.searchControl, ...styles.searchFormText }}
                        placeholder="I am looking for..."
                      />
              <View
                  style={{
                    height: 120,
                    backgroundColor: "#7EF4CC",
                  }}
                ></View>
                <View style={styles.searchButton}>
                      <Feather name="search" size={24} color="white" />
                    </View>
                    </View>
                    </View>
                    </View>


            <FlatList
                data={filteredMessages}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.searchContainer}>
                        <Text>{item.text}</Text>
                    </View>
                )}
            />
        </View>
    );
};


export default ChatPage;

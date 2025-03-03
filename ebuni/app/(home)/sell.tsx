import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const sell: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [imageUri, setImageUri] = useState<string | undefined>(undefined);

    const handleImagePicker = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.assets && response.assets.length > 0) {
                setImageUri(response.assets[0].uri);
            }
        });
    };

    const handleSubmit = () => {
        // Here you would typically handle the submission of the image and item details
        console.log('Title:', title);
        console.log('Price:', price);
        console.log('Image URI:', imageUri);
        // Reset fields after submission
        setTitle('');
        setPrice('');
        setImageUri(undefined);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sell Your Item</Text>
            <TextInput
                style={styles.input}
                placeholder="Item Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Price"
                value={price}
                keyboardType="numeric"
                onChangeText={setPrice}
            />
            <Button title="Upload Image" onPress={handleImagePicker} />
            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            <Button title="Submit" onPress={handleSubmit} />
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
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 15,
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

export default sell;
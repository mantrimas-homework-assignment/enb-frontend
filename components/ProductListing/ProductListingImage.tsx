import { Image, ImageSource } from "expo-image";
import { StyleSheet, View } from "react-native";

interface ProductListingImageProperties {
    image: ImageSource
}

export default function ProductListingImage(properties: ProductListingImageProperties) {
    return (
        <View style={styles.container}>
            <Image 
                source={properties.image}
                style={styles.image}
                contentFit="fill"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
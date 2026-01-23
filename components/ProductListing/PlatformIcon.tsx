import { Image, ImageSource } from 'expo-image';
import { StyleSheet, View } from "react-native";

interface PlatformIconProperties {
    image: ImageSource
}

export default function PlatformIcon(properties: PlatformIconProperties) {
    return (
        <View style={style.container}> 
            <Image 
                source={properties.image}
                style={style.icon}
                contentFit="contain" 
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        height: 16,
        width: 16,
        alignItems: 'center',
    },
    icon: {
        width: 16,
        height: 16
    }
})
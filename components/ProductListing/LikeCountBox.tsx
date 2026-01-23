import { typography } from "@/constants/typography";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

interface LikeCountBoxProperties {
    likeCount: number;
}

export default function LikeCountBox(properties: LikeCountBoxProperties) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/grey-heart.svg')}
                contentFit='contain'
                style={styles.likeIcon}
            />
            <Text 
                style={styles.likeText}
            >
                {properties.likeCount}
            </Text>    

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    likeIcon: {
        width: 18,
        height: 18,
        marginRight: 5
    },
    likeText: {
        alignContent: 'center',
        fontSize: 12,
        color: "#bcb6ca",
        ...typography.semiBold,
    }
})
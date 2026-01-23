import { typography } from "@/constants/typography";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function CashbackBox() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/cashback.svg')}
                contentFit='contain'
                style={styles.cashbackImage}
            />
            <Text style={styles.cashbackText}>
                CASHBACK
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 105,
        height: 30,
        flexDirection: 'row',
        backgroundColor: '#63e3c2',
        alignItems: 'center',
        gap: 5
    },
    cashbackText: {
        alignContent: 'center',
        fontSize: 12,
        color: '#1f0a4d',
        ...typography.bold,
    },
    cashbackImage: {
        marginLeft: 7,
        width: 16,
        height: 16,
    }
})
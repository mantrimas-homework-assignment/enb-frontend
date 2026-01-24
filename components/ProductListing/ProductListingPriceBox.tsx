import { typography } from "@/constants/typography";
import { calculateDiscountPercentage, formatPriceFromCents } from "@/utils/ProductListingUtils";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

interface ProductListingPriceBoxProperties {
    price: number;
    cashback: number;
    discountedPrice?: number;
}

export default function ProductListingPriceBox(properties: ProductListingPriceBoxProperties) {
    const discountPercentage = properties.discountedPrice 
        ? calculateDiscountPercentage(properties.price, properties.discountedPrice)
        : null;

    return (
        <View>
            <View style={styles.discountContainer}>
                <Text style={styles.discountLineText}>
                    {"From "}
                </Text>
                {discountPercentage && (
                    <>
                        <Text style={[styles.discountLineText, styles.discountLinePriceText]}>
                            €{formatPriceFromCents(properties.price)}
                        </Text>
                        <Text style={[styles.discountLineText, styles.discountLineDiscountNumberText]}>
                            {" "}-{discountPercentage}%
                        </Text>
                    </>
                )}
            </View>
            <View style={styles.priceLineContainer}>
                <Text style={styles.priceLineText}>
                    €{properties.discountedPrice ? formatPriceFromCents(properties.discountedPrice) : formatPriceFromCents(properties.price)}
                </Text>
                <Image 
                    source={require('../../assets/images/info.svg')}
                    style={styles.informationImage}
                />
            </View>
            <Text style={styles.cashbackLineText}>
                Cashback: €{formatPriceFromCents(properties.cashback)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    discountContainer: {
        flexDirection: 'row'
    },
    discountLineText: {
        fontSize: 11,
        ...typography.semiBold,
        color: '#bcb6ca'
    },
    discountLinePriceText: {
        textDecorationLine: 'line-through'
    },
    discountLineDiscountNumberText: {
        color: '#84e916'
    },
    cashbackLineText: {
        fontSize: 11,
        marginTop: 5,
        color: '#84e916',
        ...typography.semiBold,
    },
    priceLineContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 5,
        gap: 8
    },
    priceLineText: {
        fontSize: 23,
        color: '#fff',
        ...typography.semiBold,
    },
    informationImage: {
        width: 20,
        height: 20,
    }
})
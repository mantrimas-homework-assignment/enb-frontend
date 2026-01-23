import { typography } from "@/constants/typography";
import { calculateDiscountPercentage } from "@/utils/ProductListingUtils";
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
                            €{properties.price}
                        </Text>
                        <Text style={[styles.discountLineText, styles.discountLineDiscountNumberText]}>
                            {" "}-{discountPercentage}%
                        </Text>
                    </>
                )}
            </View>
            <Text style={styles.priceLineText}>
                €{properties.discountedPrice ?  properties.discountedPrice : properties.price}
            </Text>
            <Text style={styles.cashbackLineText}>
                Cashback: €{properties.cashback}
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
    priceLineText: {
        marginTop: 5,
        fontSize: 23,
        color: '#fff',
        ...typography.semiBold,
    }
})
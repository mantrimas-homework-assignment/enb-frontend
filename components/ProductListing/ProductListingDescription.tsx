import { typography } from "@/constants/typography";
import { createProductListingName } from "@/utils/ProductListingUtils";
import { StyleSheet, Text, View } from "react-native";

interface ProductListingDescriptionProperties {
    gameName: string;
    regionName: string;
    platformName: string;
    hardwareName: string;
}

export default function ProductListingDescription(properties: ProductListingDescriptionProperties) {
    const productListingDisplayName = createProductListingName({
        gameName: properties.gameName,
        regionName: properties.regionName,
        platformName: properties.platformName,
        hardwareName: properties.hardwareName
    });
    
    return (
        <View>
            <Text style={styles.displayNameText}>
                {productListingDisplayName}
            </Text>
            <Text style={styles.regionText}>
                {properties.regionName.toUpperCase()}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    displayNameText: {
        fontSize: 12,
        color: '#fff',
        ...typography.semiBold,
        marginBottom: 11,
        flexShrink: 1,
    },
    regionText: {
        color: '#23c299',
        fontSize: 12,
        ...typography.bold,
    }
})


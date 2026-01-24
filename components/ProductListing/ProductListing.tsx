import { ImageSource } from "expo-image";
import { StyleSheet, View } from "react-native";
import CashbackBox from "./CashbackBox";
import LikeCountBox from "./LikeCountBox";
import PlatformBox from "./PlatformBox";
import ProductListingDescription from "./ProductListingDescription";
import ProductListingImage from "./ProductListingImage";
import ProductListingPriceBox from "./ProductListingPriceBox";

interface ProductListingProperties {
    gameName: string;
    hardwareName: string;
    platformName: string;
    regionName: string;
    platformIconUrl: ImageSource;
    gameImageUrl: ImageSource;
    price: number;
    cashback: number;
    likeCount: number;
    discountedPrice?: number;
}

export default function ProductListing(properties: ProductListingProperties) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ProductListingImage image={properties.gameImageUrl}/>
                <View style={styles.cashbackBoxContainer}>
                    <CashbackBox />
                </View>
                <View style={styles.platformBoxContainer}>
                    <PlatformBox
                        icon={properties.platformIconUrl}
                        platformName={properties.platformName}
                    />
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.productListingDescriptionContainer}>
                    <ProductListingDescription 
                        gameName={properties.gameName}
                        regionName={properties.regionName}
                        platformName={properties.platformName}
                        hardwareName={properties.hardwareName}
                    />
                </View>
                <View style={styles.productListingPriceContainer}>
                    <ProductListingPriceBox
                        price={properties.price}
                        cashback={properties.cashback}
                        discountedPrice={properties.discountedPrice}
                    />
                </View>
                <LikeCountBox
                    likeCount={properties.likeCount}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        borderColor: '#63e3c2',
        borderWidth: 0.1,
        backgroundColor: '#1f0a4d',
    },
    imageContainer: {
        width: '100%',
        height: '68%',
        position: 'relative',
    },
    cashbackBoxContainer: {
        bottom: '17%',
    },
    platformBoxContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    contentContainer: {
        height: '30%',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    productListingDescriptionContainer: {
        height: '50%',
    },
    productListingPriceContainer: {
        marginBottom: 10
    },
})
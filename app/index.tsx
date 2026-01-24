import { productListingsApi } from "@/api/product-listings";
import Header from "@/components/Header/Header";
import ProductListing from "@/components/ProductListing/ProductListing";
import { typography } from "@/constants/typography";
import { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SearchContext } from "./_layout";

interface ProductListingData {
  uuid: string;
  productPreset: {
    hardware: {
      name: string;
    };
    region: {
      name: string;
    };
    platform: {
      name: string;
      iconUrl: string;
    };
    game: {
      name: string;
    };
    imageUrl: string;
  };
  price: number;
  cashback: number;
  likeCount: number;
  discountedPrice?: number;
}

export default function Index() {
  const [productListings, setProductListings] = useState<ProductListingData[]>([]);
  const [productListingCount, setProductListingCount] = useState<number>(0);
  const { searchQuery } = useContext(SearchContext);

  useEffect(() => {
    const fetchProductListings = async () => {
      try {
        const response = await productListingsApi.getProductListings(searchQuery || undefined);
        setProductListings(response.data.productListings);
        setProductListingCount(response.data.productListingCount);
      } catch (error) {
        console.error("Failed to fetch product listings:", error);
      }
    };

    fetchProductListings();
  }, [searchQuery]);

  return (
    <View style={styles.outerContainer}>
      <FlatList
        data={productListings}
        keyExtractor={(item) => item.uuid}
        numColumns={4}
        ListHeaderComponent={
          <>
            <View style={styles.headerContainer}>
              <Header />
            </View>
            <View style={styles.countContainer}>
              <Text style={styles.countText}>
                Results found: {productListingCount}
              </Text>
            </View>
          </>
        }
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <ProductListing
              gameName={item.productPreset.game.name}
              hardwareName={item.productPreset.hardware.name}
              platformName={item.productPreset.platform.name}
              regionName={item.productPreset.region.name}
              platformIconUrl={{ uri: item.productPreset.platform.iconUrl }}
              gameImageUrl={{ uri: item.productPreset.imageUrl }}
              price={item.price}
              cashback={item.cashback}
              discountedPrice={item.discountedPrice}
              likeCount={item.likeCount}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#4518ac",
  },
  headerContainer: {
    backgroundColor: "#4518ac",
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  countContainer: {
    backgroundColor: "#4518ac",
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  countText: {
    ...typography.medium,
    color: '#fff',
    fontSize: 14,
    width: 1196,
    textAlign: 'left',
  },
  listContent: {
    paddingTop: 0,
    alignItems: 'center',
  },
  columnWrapper: {
    justifyContent: 'flex-start',
    width: 1220,
  },
  itemContainer: {
    margin: 8,
    width: 289,
    height: 550,
  },
});

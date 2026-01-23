import ProductListing from "@/components/ProductListing/ProductListing";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4518ac",
      }}
    >
      <ProductListing
        gameName={'Split Fiction'}
        hardwareName={'PC'}
        platformName={'Steam'}
        regionName={'global'}
        platformIconUrl={require('../assets/images/steam.svg')}
        gameImageUrl={require('../assets/images/split-fiction-2.jpg')}
        price={50.99}
        cashback={5.99}
        discountedPrice={28.01}
        likeCount={538}
      />
    </View>
  );
}

interface CreateProductListingNamePayload {
    regionName: string;
    platformName: string;
    hardwareName: string;
    gameName: string;
}

export function createProductListingName(payload: CreateProductListingNamePayload): string {
    return `${payload.gameName} (${payload.hardwareName}) ${payload.platformName} Key ${payload.regionName.toUpperCase()}`;
}

export function calculateDiscountPercentage(
    price: number,
    discountedPrice: number
): number {
    if (price <= 0) return 0;
    
    const discount = ((price - discountedPrice) / price) * 100;
    return Math.round(discount);
}

export function formatPriceFromCents(cents: number): string {
    const dollars = cents / 100;
    return dollars.toFixed(2);
}
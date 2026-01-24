import { apiClient } from "./client";

export const productListingsApi = {
    getProductListings: async (search?: string) => {
        return apiClient.get('product-listings/list', { params: { search }});
    }
}
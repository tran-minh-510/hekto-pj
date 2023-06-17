import axiosClient from ".";
import {
    ICombineProductResponse,
    ISearchProductParams,
    ISearchProductResponse,
    ISearchProductDetailResponse,
} from "../interfaces";

const productApi = {
    getCombineProducts(): Promise<ICombineProductResponse> {
        return axiosClient.get("/products/combine-products");
    },
    search(params: ISearchProductParams): Promise<ISearchProductResponse> {
        return axiosClient.get("/products", { params });
    },
    searchDetail(id: string | number): Promise<ISearchProductDetailResponse> {
        return axiosClient.get(`/products/${id}`);
    },
};
export default productApi;

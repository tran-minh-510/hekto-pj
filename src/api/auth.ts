import axiosClient from ".";
import { IRegisterRequest, ILoginRequest } from "../interfaces";

const authApi = {
    register(body: IRegisterRequest) {
        return axiosClient.post("/auth/register", body);
    },
    login(body: ILoginRequest) {
        return axiosClient.post("/auth/login", body);
    },
    getCurrentUser() {
        return axiosClient.get("/auth/current-user");
    },
};

export default authApi;

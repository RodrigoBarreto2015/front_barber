import api from "@/lib/axios";

type LoginDto = {
    phone?: number;
    email?: string;
    password: string;
}

export const UserLogin = async (loginData: LoginDto) => {
    return await api.post(
        "/auth/login",
        loginData
    )
}
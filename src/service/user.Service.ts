import api from "@/lib/axios";

type CreateUserDto = {
    name: string;
    phone: bigint;
    email: string;
    password: string;
}

export const CreateUser = async (userData: CreateUserDto) => {
    return await api.post(
        "/user",
        { ...userData, phone: JSON.parse(userData.phone.toString()) }
    )
}
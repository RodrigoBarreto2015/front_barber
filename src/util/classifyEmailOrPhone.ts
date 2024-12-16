export function classifyEmailOrPhone(input: string): { email?: string; phone?: number }{

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)

    if(isEmail){
        return { email: input }
    }

    const isPhone = /^\d+$/.test(input);

    if(isPhone){
        return { phone: parseInt(input, 10)}
    }

    throw new Error("Invalid email or phone number!")
}
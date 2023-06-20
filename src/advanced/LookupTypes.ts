export type SubmitForm = {
    user: {
        id: number,
        name: string,
        email: string,
        address: {
            wardName: string,
            districtName: string,
            providerName: string
        },
        phone: string,
        description: string,
    },
    payment: {
        token: string,
    }
};

type PaymentRequest = SubmitForm['payment'];
type UserAddress = SubmitForm['user']['address'];

export function getPayment(): PaymentRequest {
    return {
        token: 'vuong-hovan-vuong-hovan-'
    }
};
export function getUserAddress(): UserAddress {
    return {
        wardName: 'Đường số 9',
        districtName: 'Hiệp Bình Phước',
        providerName: 'THủ Đức'
    }
};

console.log(getPayment());
console.log(getUserAddress());

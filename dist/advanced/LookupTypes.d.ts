export type SubmitForm = {
    user: {
        id: number;
        name: string;
        email: string;
        address: {
            wardName: string;
            districtName: string;
            providerName: string;
        };
        phone: string;
        description: string;
    };
    payment: {
        token: string;
    };
};
type PaymentRequest = SubmitForm['payment'];
type UserAddress = SubmitForm['user']['address'];
export declare function getPayment(): PaymentRequest;
export declare function getUserAddress(): UserAddress;
export {};

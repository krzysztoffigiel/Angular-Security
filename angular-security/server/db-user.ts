


export interface DbUser {
    id: number;
    email: string;
    passwordDigest: string;
    passwordMasks?: Array<string>;
}
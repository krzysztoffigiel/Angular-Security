


export interface DbUser {
    id: number;
    email: string;
    passwordDigest: string;
    passwordMasks?: Array<MasksDictionary>;
}

export class MasksDictionary {
    mask: string;
    maskHash: string;
    constructor(mask: string, maskHash: string) {
        this.mask = mask;
        this.maskHash = maskHash;
    }
}
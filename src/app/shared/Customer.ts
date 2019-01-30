import { Address } from './Address';
export class Customer {
    name: string;
    isVip: boolean;
    id: number;
    createDate: Date;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address;
    selected?: boolean;
    constructor(name: string, address?: Address, city?: string, zipCode?: string, isVip?: boolean, id?: number,
        createDate?: Date, username?: string, email?: string, phone?: string, website?: string) {
        this.name = name;
        this.isVip = isVip;
        this.id = id;
        this.createDate = createDate;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.address = address;
    }
}

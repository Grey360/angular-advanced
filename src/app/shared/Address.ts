export class Address {
    street: string;
    city: string;
    zipcode: string;
    suite: string;
    constructor(street?: string, suite?: string, city?: string, zipcode?: string) {
    this.street = street;
        this.city = city;
        this.zipcode = zipcode;
        this.suite = suite;
    }
}

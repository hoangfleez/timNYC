export class Lover {
    private _id:number;
    private _name:string;
    private _zodiac:string;
    private _address:string;
    private _birth:string;
    private _interest:string;


    constructor(id: number, name: string, zodiac: string, address: string, birth: string, interest: string) {
        this._id = id;
        this._name = name;
        this._zodiac = zodiac;
        this._address = address;
        this._birth = birth;
        this._interest = interest;
    }


    getId(): number {
        return this._id;
    }
    setId(value: number) {
        this._id = value;
    }

    getName(): string {
        return this._name;
    }
    setName(value: string) {
        this._name = value;
    }

    getZodiac(): string {
        return this._zodiac;
    }
    setZodiac(value: string) {
        this._zodiac = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }

    getBirth(): string {
        return this._birth;
    }
    setBirth(value: string) {
        this._birth = value;
    }

    getInterest(): string {
        return this._interest;
    }
    setInterest(value: string) {
        this._interest = value;
    }
}


export class SampleModelClass {

    private cityName: String;
    private countryName: String;
    private address: String;
    private pincode: number;
   

    
	constructor(cityName: String, countryName: String, address: String, pincode: number) {
		this.cityName = cityName;
		this.countryName = countryName;
		this.address = address;
		this.pincode = pincode;
	}
    
    public get CityName(): String {
        return this.cityName;
    }
    public set CityName(value: String) {
        this.cityName = value;
    }
    public get CountryName(): String {
        return this.countryName;
    }
    public set CountryName(value: String) {
        this.countryName = value;
    }
    public get Address(): String {
        return this.address;
    }
    public set Address(value: String) {
        this.address = value;
    }

    public get Pincode(): number {
        return this.pincode;
    }
    public set Pincode(value: number) {
        this.pincode = value;
    }


}

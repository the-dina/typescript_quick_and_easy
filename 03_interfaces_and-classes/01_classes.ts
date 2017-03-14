class Animal {
    readonly specie: string = "";
    private _numberOfKidneys = 2;

    constructor(specie, public weight) {
        this.specie = specie;
        this.weight = weight;		
    }

    public setNumberOfKidneys (value) {
        this._numberOfKidneys = value;
    }

    get numberOfKidneys() {
        return this._numberOfKidneys;
    }

    set numberOfKidneys(value) {
        if (value < 0) {
            console.log("How on earth number of kidneys can be less than 0");
            return;
        }
        this._numberOfKidneys = value;
    }
}

let koko = new Animal("Goorila", 200);
var howManyKidneys = koko.numberOfKidneys;
koko.numberOfKidneys = 3;
koko.weight = 250;

// static members
class MyMathHeper {
    public static pi: number = 3.14159;
    public static Add (x: number, y: number): number {
        return x = y;
    }
}

let myBankPassword = MyMathHeper.Add(1, MyMathHeper.pi);
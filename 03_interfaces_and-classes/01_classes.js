var Animal = (function () {
    function Animal(specie, weight) {
        this.weight = weight;
        this.specie = "";
        this._numberOfKidneys = 2;
        this.specie = specie;
        this.weight = weight;
    }
    Animal.prototype.setNumberOfKidneys = function (value) {
        this._numberOfKidneys = value;
    };
    Object.defineProperty(Animal.prototype, "numberOfKidneys", {
        get: function () {
            return this._numberOfKidneys;
        },
        set: function (value) {
            if (value < 0) {
                console.log("How on earth number of kidneys can be less than 0");
                return;
            }
            this._numberOfKidneys = value;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
var koko = new Animal("Goorila", 200);
var howManyKidneys = koko.numberOfKidneys;
koko.numberOfKidneys = 3;
koko.weight = 250;
// static members
var MyMathHeper = (function () {
    function MyMathHeper() {
    }
    MyMathHeper.Add = function (x, y) {
        return x = y;
    };
    return MyMathHeper;
}());
MyMathHeper.pi = 3.14159;
var myBankPassword = MyMathHeper.Add(1, MyMathHeper.pi);

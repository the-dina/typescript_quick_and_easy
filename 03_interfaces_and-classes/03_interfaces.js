var printIt = function (what) {
    what.print();
};
var printableObject = {
    paperSize: "A3",
    print: function () { return console.log("printableObject is printed"); }
};
printIt(printableObject);
var PdfDoc = (function () {
    function PdfDoc() {
        this.paperSize = "A4";
    }
    PdfDoc.prototype.print = function () {
        console.log("pdf doc is printed");
    };
    return PdfDoc;
}());
var add;
add = function (x, y) {
    return x + y;
};
// Asserting types
var getChanceOfLife = function (person) {
    return person.sex == "male"
        ? { remained: 68 - person.age }
        : { remained: 73 - person.age };
};
getChanceOfLife({ age: 38, sex: "male", country: "Australia" });

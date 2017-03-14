var test_lambda = function () {
    document.getElementById("dynamicContents").innerHTML = "<button id=\"testBtn\">Click here!</button>";
    var testBtn = document.getElementById("testBtn");
    var object1 = {
        id: "object 1",
        set: function () {
            testBtn.addEventListener("click", function () {
                console.log("object1's Event Listener");
                console.log(this.id);
            });
        }
    };
    object1.set();
    var object2 = {
        id: "object 2",
        set: function () {
            var _this = this;
            testBtn.addEventListener("click", function () {
                console.log("object2's Event Listener");
                console.log(_this.id);
            });
        }
    };
    object2.set();
};

let test_lambda = function () {
    document.getElementById("dynamicContents").innerHTML = `<button id="testBtn">Click here!</button>`;
    let testBtn = document.getElementById("testBtn");

    let object1 = {
        id: "object 1",
        set: function () {
            testBtn.addEventListener("click", function () {
                console.log("object1's Event Listener");
                console.log(this.id);
            });
        }
    }
    object1.set();

   let object2 = {
        id: "object 2",
        set: function () {
            testBtn.addEventListener("click", () => {
                console.log("object2's Event Listener");
                console.log(this.id);
            });
        }
    }
    object2.set();
}
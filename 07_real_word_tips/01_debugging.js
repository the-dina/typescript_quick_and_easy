var ButtonHelper = (function () {
    function ButtonHelper(buttonId) {
        this.buttonId = buttonId;
        this.onClick = function () {
            var x = 2;
            x = 3;
            debugger;
            x = 4;
            console.log();
        };
        document.getElementById(buttonId)
            .addEventListener("click", this.onClick);
    }
    return ButtonHelper;
}());
var btnHelper = new ButtonHelper("testBtn");
//# sourceMappingURL=01_debugging.js.map
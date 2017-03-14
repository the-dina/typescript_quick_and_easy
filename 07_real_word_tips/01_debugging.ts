class ButtonHelper {

    constructor(public buttonId: string){
        document.getElementById(buttonId)
                .addEventListener ("click", this.onClick );
    }

    onClick = function()
    {
        let x = 2;
        x = 3;
        
        debugger;

        x = 4;
        console.log();
    }
}

let btnHelper = new ButtonHelper("testBtn");
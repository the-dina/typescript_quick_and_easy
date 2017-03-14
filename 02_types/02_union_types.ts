let something: (Array<any> | string);

something = [1, 2, 3];
something = "one string";

let theLentgh = something.length;

if (typeof something === "string"){
    something.substr(1, 3);
}

(something as string).substr(1, 3);
(<string>something).substr(1, 3);
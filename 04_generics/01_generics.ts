class Entity {
    constructor (public id: number) {}
}

class User extends Entity {
    constructor (id: number, public name: string) { super(id); }
}

class Product extends Entity {
    constructor (id: number, public price: number) { super(id); }
} 

function EntitySerializer<T extends Entity>(input: T): string{
    return JSON.stringify(input);
}

function EntityDeserializer<T extends Entity>(input: string): T{
    return JSON.parse(input) as T;
}


let user = new User(1, "Good user");
let product = new Product(2, 114);

let serializedUser = EntitySerializer<User>(user);
let serializedProduct = EntitySerializer<Product>(product);

class EntityHelper<T extends Entity> {
    serialize(input: T): string{
        return JSON.stringify(input);
    }

    deserialize(input: string): T{
        return JSON.parse(input) as T;
    }
} 

let userHelper = new EntityHelper<User>();
serializedUser = userHelper.serialize(user);
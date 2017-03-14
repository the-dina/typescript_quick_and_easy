var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Entity = (function () {
    function Entity(id) {
        this.id = id;
    }
    return Entity;
}());
var User = (function (_super) {
    __extends(User, _super);
    function User(id, name) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        return _this;
    }
    return User;
}(Entity));
var Product = (function (_super) {
    __extends(Product, _super);
    function Product(id, price) {
        var _this = _super.call(this, id) || this;
        _this.price = price;
        return _this;
    }
    return Product;
}(Entity));
function EntitySerializer(input) {
    return JSON.stringify(input);
}
function EntityDeserializer(input) {
    return JSON.parse(input);
}
var user = new User(1, "Good user");
var product = new Product(2, 114);
var serializedUser = EntitySerializer(user);
var serializedProduct = EntitySerializer(product);
var EntityHelper = (function () {
    function EntityHelper() {
    }
    EntityHelper.prototype.serialize = function (input) {
        return JSON.stringify(input);
    };
    EntityHelper.prototype.deserialize = function (input) {
        return JSON.parse(input);
    };
    return EntityHelper;
}());
var userHelper = new EntityHelper();
serializedUser = userHelper.serialize(user);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Pokemon = /** @class */ (function () {
    function Pokemon(name, powerPointAvailable) {
        this.powerPointAvailable = 1;
        this.name = name;
        this.powerPointAvailable = powerPointAvailable;
    }
    Pokemon.prototype.figth = function (move) {
        console.log("".concat(this.name, " used ").concat(move === null || move === void 0 ? void 0 : move.name, "!"));
        this.powerPointAvailable -= 1;
    };
    __decorate([
        checkPowerPoint,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Pokemon.prototype, "figth", null);
    return Pokemon;
}());
function checkPowerPoint(target, propertyKey, descriptor) {
    console.log("target ".concat(JSON.stringify(target, null, 3)));
    console.log("propertyKey ".concat(JSON.stringify(propertyKey, null, 3)));
    console.log("descriptor ".concat(JSON.stringify(descriptor, null, 3)));
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("descriptor ".concat(JSON.stringify(this, null, 3)));
        this.powerPointAvailable;
    };
    return descriptor;
}
var move = { name: 'thunderbolt', power: 90 };
var pikachu = new Pokemon('pikachu', 1);
pikachu.figth(move);
pikachu.figth(move);

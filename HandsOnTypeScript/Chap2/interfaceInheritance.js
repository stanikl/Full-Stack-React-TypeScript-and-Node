var InterfaceNamespace;
(function (InterfaceNamespace) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            // no super for interfaces
            this.name = name;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Automobile has ".concat(this.wheelCount));
        };
        Motorcycle.prototype.showNumberOfWheels = function () {
            console.log("moved Automobile ".concat(this.wheelCount, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0miles"));
        };
        Motorcycle.prototype.getFullName = function () {
            return "MC-" + this.name;
        };
        return Motorcycle;
    }());
    var moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
})(InterfaceNamespace || (InterfaceNamespace = {}));

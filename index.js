var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, wheels) {
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    Vehicle.prototype.start = function () {
        this.status = "started";
    };
    Vehicle.prototype.stop = function () {
        this.status = "stopped";
    };
    return Vehicle;
}());
var vehicle1 = new Vehicle("Tesla", "Y", 4);
vehicle1.start();
console.log(vehicle1);
printStatus(vehicle1);
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model) {
        return _super.call(this, make, model, 4) || this;
    }
    return Car;
}(Vehicle));
var car = new Car("Tesla Y", "2021");
console.log(car);
var MotorCycle = /** @class */ (function (_super) {
    __extends(MotorCycle, _super);
    function MotorCycle(make, model) {
        return _super.call(this, make, model, 2) || this;
    }
    return MotorCycle;
}(Vehicle));
function printStatus(vehicle) {
    if (vehicle.status === "started") {
        console.log("The vehicle is started.");
    }
    else {
        console.log("The vehicle is stopped.");
    }
}
var myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());
var myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);
var NCycle = /** @class */ (function () {
    function NCycle(make, model, wheels) {
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    NCycle.prototype.start = function () {
        this.status = "started";
    };
    NCycle.prototype.stop = function () {
        this.status = "stopped";
    };
    NCycle.prototype.print = function (num) {
        if (num === void 0) { num = 0; }
        if (this.make instanceof Array && this.model instanceof Array) {
            if (typeof this.make[num] !== "undefined" && typeof this.model[num] !== "undefined") {
                console.log("This NCycle has a ".concat(this.make[num], " ").concat(this.model[num], " at ").concat(num, "."));
            }
            else {
                console.log("This NCycle was not created properly.");
            }
        }
        else if (!(this.make instanceof Array) && !(this.model instanceof Array)) {
            console.log("Line 83: This is a ".concat(this.make, " ").concat(this.model, " NCycle."));
        }
        else {
            console.log("This NCycle was not created properly.");
        }
    };
    NCycle.prototype.printAll = function () {
        if (this.make instanceof Array && this.model instanceof Array) {
            for (var i = 0; i < Math.min(this.make.length, this.model.length); i++) {
                console.log("This NCycle has a ".concat(this.make[i], " ").concat(this.model[i], "."));
            }
        }
        else if (!(this.make instanceof Array) && !(this.model instanceof Array)) {
            console.log("This is a ".concat(this.make, " ").concat(this.model, " NCycle."));
        }
        else {
            console.log("This NCycle was not created properly.");
        }
    };
    return NCycle;
}());
// Rudimentary testing Code, not part of the assignment
var testCycle1 = new NCycle(1, 2, 3);
testCycle1.print();
testCycle1.printAll();
var testCycle2 = new NCycle("This", "That", 4);
testCycle2.print();
testCycle2.printAll();
var testCycle3 = new NCycle("Make", "10", 4);
testCycle3.print(4);
testCycle3.printAll();
var makes4 = ["Volkswagon", "Tesla", "Audi"];
var models4 = ["Passat", "Model X", "A4"];
var testCycle4 = new NCycle(makes4, models4, 4);
testCycle4.print(2);
testCycle4.printAll();
var makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var models5 = [1, 1, 2, 3, 5];
var testCycle5 = new NCycle(makes5, models5, 0);
testCycle5.print(7);
testCycle5.printAll();
function add(x, y) {
    return x + y;
}
console.log(typeof testCycle1.make, typeof testCycle5.model[1]);
console.log(typeof testCycle2.make, typeof testCycle4.model[1]);
console.log(add(testCycle1.make, testCycle5.model[1]));
// Error expected here
// add(testCycle2.make, testCycle4.model[1]);

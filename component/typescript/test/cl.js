"use strict";
var Part1 = (function () {
    function Part1(dataType) {
        this.index = 0;
        this.id = 0;
        this.dt = "";
        this.dt = dataType;
        this.start();
    }
    Part1.prototype.start = function () {
        var outT = setTimeout(function () {
            console.log("delay");
            clearTimeout(outT);
        }, 1001);
    };
    Part1.prototype.stop = function () {
    };
    Part1.prototype.getDate = function () {
    };
    return Part1;
}());
exports.Part1 = Part1;

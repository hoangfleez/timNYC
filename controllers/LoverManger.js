"use strict";
exports.__esModule = true;
exports.LoverManger = void 0;
var Lover_1 = require("../model/Lover");
var LoverManger = /** @class */ (function () {
    function LoverManger() {
        this.loverList = [new Lover_1.Lover(1, 'huong', 'cu gia', 'hp', '1997', 'nghe nhac'),
            new Lover_1.Lover(2, 'lan', 'su nu', 'hp', '1996', 'do sach'),
            new Lover_1.Lover(3, 'yen', 'thien binh', 'hcm', '2002', 'games'),
            new Lover_1.Lover(4, 'hong', 'kim nguu', 'nb', '2000', 'the thao'),
            new Lover_1.Lover(5, 'ngocanh', 'su tu', 'hd', '1999', 'nhay')];
    }
    LoverManger.prototype.showLoverList = function () {
        return this.loverList;
    };
    LoverManger.prototype.findByName = function (name) {
        var result = [];
        for (var i = 0; i < this.loverList.length; i++) {
            if (this.loverList[i].getName().includes(name)) {
                result.push(this.loverList[i]);
            }
        }
        return result;
    };
    LoverManger.prototype.searchById = function (id) {
        for (var i = 0; i < this.loverList.length; i++) {
            if (this.loverList[i].getId() == id) {
                return +i;
            }
        }
        return -1;
    };
    LoverManger.prototype.addLover = function (id, name, zodiac, address, birth, interest) {
        this.loverList.push(new Lover_1.Lover(id, name, zodiac, address, birth, interest));
    };
    LoverManger.prototype.fixLover = function (id) {
        var index = this.searchById(id);
        this.loverList[index];
        return;
    };
    LoverManger.prototype.deleteLover = function (id) {
        var index = this.searchById(id);
        this.loverList.splice(index, 1);
        return;
    };
    return LoverManger;
}());
exports.LoverManger = LoverManger;

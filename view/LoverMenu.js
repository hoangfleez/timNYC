"use strict";
exports.__esModule = true;
exports.LoverMenu = void 0;
var LoverManger_1 = require("../controllers/LoverManger");
var readlineSync = require('readline-sync');
var LoverMenu = /** @class */ (function () {
    function LoverMenu() {
        this.menu = "\n    1.Hien thi danh sach nguoi yeu.\n    2.Tim kiem nguoi yeu.\n    3.Nhap thong tin nguoi yeu moi.\n    4.Chinh suong thong tin nguoi yeu.\n    5.Xoa nguoi yeu";
        this.loverManger = new LoverManger_1.LoverManger();
    }
    LoverMenu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.menu);
                choice = +readlineSync.question(" Hay chon so: ");
                if (choice < 1 || choice > 5) {
                    console.log("<---KHONG CO SO NAY. BAN HAY CHON LAI DI!!--->");
                }
            } while (choice < 1 || choice > 5);
            switch (choice) {
                case 1: {
                    console.table(this.loverManger.showLoverList());
                    break;
                }
                case 2: {
                    var name_1 = readlineSync.question("Ban muon tim em nao:");
                    var nameExist = this.loverManger.findByName(name_1);
                    if (nameExist == name_1) {
                        // chưa biết chuyền gì vào
                        console.table(this.loverManger.findByName(name_1));
                        break;
                    }
                    else {
                        console.log('khong co em nay!!');
                    }
                    break;
                }
                case 3: {
                    var id = readlineSync.question('Nhap ID:');
                    var notExist = -1;
                    var index = this.loverManger.searchById(id);
                    if (index == notExist) {
                        var name_2 = readlineSync.question('Nhap ten:');
                        var zodiac = readlineSync.question('Nhap cung hoang dao:');
                        var address = readlineSync.question('Nhap dia chi:');
                        var birth = readlineSync.question('Nhap nam sinh:');
                        var interest = readlineSync.question('Nhap so thich:');
                        this.loverManger.addLover(id, name_2, zodiac, address, birth, interest);
                        console.log("Da them nguoi yeu.");
                    }
                    else {
                        console.log("ID nay da ton tai");
                    }
                    break;
                }
                case 4: {
                    var id = +readlineSync.question("Nhap ID ban muon sua:");
                    var isIdExist = this.loverManger.searchById(id);
                    var no = -1;
                    while (true) {
                        if (isIdExist == no) {
                            console.log('Khong co ID nay!!');
                            break;
                        }
                        else {
                            console.log('Sua thanh cong^^!');
                            this.loverManger.fixLover(id);
                            break;
                        }
                    }
                    break;
                }
                case 5: {
                    var id = +readlineSync.question("Nhap id:");
                    var isIdExist = this.loverManger.searchById(id);
                    var no = -1;
                    while (true) {
                        if (isIdExist == no) {
                            console.log('Khong co nguoi nay');
                            break;
                        }
                        else {
                            this.loverManger.deleteLover(id);
                            console.log('Xoa nguoi yeu cu thanh cong >w<');
                            break;
                        }
                    }
                    break;
                }
            }
        }
    };
    return LoverMenu;
}());
exports.LoverMenu = LoverMenu;

import {LoverManger} from "../controllers/LoverManger";
import {Lover} from "../model/Lover";
import {request} from "http";

const readlineSync = require('readline-sync');

export class LoverMenu {
    private menu = `
    1.Hien thi danh sach nguoi yeu.
    2.Tim kiem nguoi yeu.
    3.Nhap thong tin nguoi yeu moi.
    4.Chinh suong thong tin nguoi yeu.
    5.Xoa nguoi yeu`;

    private loverManger: LoverManger = new LoverManger();

    public selection(): void {
        while (true) {
            let choice;
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
                    let name = readlineSync.question("Ban muon tim em nao:");

                    let nameExist = this.loverManger.findByName(name);
                    if (nameExist == name) {
                        // chưa biết chuyền gì vào
                        console.table(this.loverManger.findByName(name));
                        break;
                    }else {
                        console.log('khong co em nay!!');
                    }
                    break;
                }
                case 3: {
                    let id = readlineSync.question('Nhap ID:');

                    let notExist = -1;
                    let index = this.loverManger.searchById(id);
                    if (index == notExist) {
                        let name = readlineSync.question('Nhap ten:');
                        let zodiac=readlineSync.question('Nhap cung hoang dao:');
                        let address = readlineSync.question('Nhap dia chi:');
                        let birth = readlineSync.question('Nhap nam sinh:');
                        let interest = readlineSync.question('Nhap so thich:');
                        this.loverManger.addLover(id,name,zodiac,address,birth,interest);
                        console.log("Da them nguoi yeu.")
                    } else {
                        console.log("ID nay da ton tai");
                    }

                    break;
                }
                case 4: {
                    let id = +readlineSync.question("Nhap ID ban muon sua:");
                    let isIdExist = this.loverManger.searchById(id);
                    let no = -1;
                    while (true) {
                        if (isIdExist == no) {
                            console.log('Khong co ID nay!!')
                            break;
                        } else {

                            console.log('Sua thanh cong^^!')
                            this.loverManger.fixLover(id);
                            break;
                        }
                    }
                    break;
                }
                case 5: {
                    let id = +readlineSync.question("Nhap id:");
                    let isIdExist = this.loverManger.searchById(id);
                    let no = -1;

                    while (true) {
                        if (isIdExist == no) {
                            console.log('Khong co nguoi nay')
                            break;
                        } else {
                            this.loverManger.deleteLover(id);
                            console.log('Xoa nguoi yeu cu thanh cong >w<')
                            break;
                        }
                    }
                    break;
                }
            }
        }
    }
}
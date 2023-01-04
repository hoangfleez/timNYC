import {Lover} from "../model/Lover";

export class LoverManger {
    private loverList: Lover[] = [new Lover(1, 'huong', 'cu gia', 'hp', '1997', 'nghe nhac'),
        new Lover(2, 'lan', 'su nu', 'hp', '1996', 'do sach'),
        new Lover(3, 'yen', 'thien binh', 'hcm', '2002', 'games'),
        new Lover(4, 'hong', 'kim nguu', 'nb', '2000', 'the thao'),
        new Lover(5, 'ngocanh', 'su tu', 'hd', '1999', 'nhay')];


    public showLoverList() {
        return this.loverList
    }

    public findByName(name: string): Lover[] {
        let result: Lover[] = [];
        for (let i = 0; i < this.loverList.length; i++) {
            if (this.loverList[i].getName().includes(name)) {
                result.push(this.loverList[i]);
            }
        }
        return result;
    }

    public searchById(id: number) {
        for (let i = 0; i < this.loverList.length; i++) {
            if (this.loverList[i].getId() == id) {
                return +i;
            }
        }
        return -1;
    }

    public addLover(id: number, name: string, zodiac: string, address: string, birth: string, interest: string) {
        this.loverList.push(new Lover(id, name, zodiac, address, birth, interest));
    }

    public fixLover(id: number):　number {
        let index = this.searchById(id);
        this.loverList[index]
        return ;
    }

    public deleteLover(id: number):number {
        let index = this.searchById(id);
        this.loverList.splice(index, 1);
        return ;
    }
}
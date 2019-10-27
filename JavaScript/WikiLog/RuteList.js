class RuteList {
    ruteList = [];
    pattern = /[0-9][0-9][a-z][a-z]/i;

    add(id, start, final, km, difficulty){

        if(!this.pattern.test(id) || !this.idComp(id))
            return false;


        let r = new Rute(id, start, final, km, difficulty);
        this.ruteList.push(r);

        return true;
    }

    addInPos(id, start, final, km, difficulty, pos){

        if(!this.pattern.test(id) || !this.idComp(id))
            return false;


        let r = new Rute(id, start, final, km, difficulty);
        this.ruteList.splice(pos, 0, r);

        return true;
    }

    deleteById(id) {
        for (let i = 0; i < this.size(); i++)
            if(this.ruteList[i].id === id){
                this.ruteList.splice(i, 1);
                return true;
            }

        return false;
    }

    filtredList(id, start, final, km, difficulty){
        let list = [];
        let comp = [id, start, final, km, difficulty];
        let flag = true;
        let cont = 0;
        let aux = true;

        for (let r of this.ruteList){
            for(let i in r){
                aux = (i === "km") ? comp[cont] === r[i] : r[i].includes(comp[cont]);

                if(comp[cont] !== "" && !aux){
                    flag = false;
                    break;
                }
                cont++;
            }
            if(flag === true)
                list.push(r);

            cont = 0;
            flag = true;
        }

        return list;
    }

    idComp(id) {

        for (let i = 0; i < this.ruteList.length; i++) {
            if (id.toString() === this.ruteList[i].id.toString())
                return false;
        }

        return true;
    }

     orderByKm(order) {
        let temp = null;

        for (let i = 0; i < this.ruteList.length; i++)
            for (let j = (i+1); j < this.ruteList.length; j++)
                if (this.order(this.ruteList[i].km, this.ruteList[j].km) === order) {
                    temp = this.ruteList[i];
                    this.ruteList[i] = this.ruteList[j];
                    this.ruteList[j] = temp;
                }
    }

    order(firstKm, secondKm) {

        if(firstKm > secondKm)
            return "ascendent";

        return "descendent"
    }

    size(){
        return this.ruteList.length;
    }
}
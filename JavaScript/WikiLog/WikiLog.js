let list = new RuteList();


list.add("11qq", "Inca", "Lluc", "30", "Medium");
list.add("11qa", "Montuiri", "Manacor", "15", "Easy");
list.add("11qb", "Inca", "Binissalem", "21", "Medium");
list.add("11qc", "Ses salines", "Lluc", "42", "High");


function addRute() {
    let id=document.forms["myForm"].elements["id"].value;
    let start=document.forms["myForm"].elements["start"].value;
    let final=document.forms["myForm"].elements["final"].value;
    let km=document.forms["myForm"].elements["km"].value;
    let difficulty=document.forms["myForm"].elements["dif"].value;

    let pos = document.getElementById("pos").value;
    let flag = pos === "last";
    let add = (flag) ? list.add(id, start, final, km, difficulty) : list.addInPos(id, start, final, km, difficulty, pos);

    if(add)
        document.getElementById("comp").innerHTML = "Ruta creada"
    else
        document.getElementById("comp").innerHTML = "ID incorrecta"

    display();

}

function display() {
    displayRute(list.ruteList);
}

function filtre() {
    let id=document.forms["filtre"].elements["id"].value;
    let start=document.forms["filtre"].elements["start"].value;
    let final=document.forms["filtre"].elements["final"].value;
    let km=document.forms["filtre"].elements["km"].value;
    let difficulty=document.forms["filtre"].elements["dif"].value;

    let filtredList = list.filtredList(id, start, final, km, difficulty);

    displayRute(filtredList);
}

function orderByKm() {
    let or = document.getElementById("order").value;

    list.orderByKm(or);

    display();
}

function addPos() {
    var options = "";

    for (let i = 0; i < list.size() ; i++) {
        options += '<option value='+'"'+i+'"'+'>'+i+'</option>';
    }

    options += '<option value="last">Last</option>';

    document.getElementById("pos").innerHTML = options;
}

function del() {
    let id = document.getElementById("delete").value;
    let flag = list.deleteById(id);
    let text = (flag) ? "Eliminat" : "No trobat";

    document.getElementById("deleteMessage").innerHTML = text;
    display();
}

function displayRute(ruteArray) {
    let dis = "";
    let tr = "";

    for (let r of ruteArray){

        for (let a in r){
            tr += "<th>" + r[a] + "</th>";
        }

        dis+= "<tr>" + tr + "</tr>";
        tr = "";
    }

    document.getElementById("list").innerHTML = dis;
    addPos();
}


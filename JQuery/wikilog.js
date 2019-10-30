class RuteComp {
    IDs = [];
    start = "";
    final = "";

    compFinal(fin){
        if(this.start === fin)
            return false;

        for (let i = 0; i < this.IDs.length; i++) {
            if($("#" + this.IDs[i]).children("span") === fin)
                return false;
        }
        return true;
    }

    addID(id){
        this.IDs.push(id.toString());
    }

}

$("#find").click(function () {
    $("*").removeClass("color");
    let start = "#" +$("#findStart").val().toLowerCase();
    let final = $("#findFinal").val();
    let llista = [];
    let conRute;

    $(start).children("p").each(function (){
        conRute = new RuteComp();
        conRute.start = $("#findStart").val().toLowerCase();
        conRute.final = $(this).children("span").text().toLowerCase();
        conRute.addID($(this).attr("id"));
        llista.push(conRute);
    });

    for(let l of llista){
        let con = "#" + l.final;

        if ($(con).length > 0){
            $(con).children("p").children("span").each( function () {
                if(l.compFinal($(this).text().toLowerCase())){
                    conRute = new RuteComp();
                    conRute.start = $("#findStart").val().toLowerCase();
                    conRute.final = $(this).text().toLowerCase();
                    conRute.IDs = copyArray(l.IDs);
                    conRute.addID($(this).parent("p").attr("id"));
                    llista.push(conRute);
                }
            });
        }
    }

    for(let l of llista) {
        console.log(l.final);
        console.log(l.IDs);
        if(l.final === final){
            for (let i = 0; i < l.IDs.length; i++) {
                $("#" + l.IDs[i]).addClass("color");
            }
        }
    }
});

function copyArray(array) {
    let arrayCopy = [];

    for (let i = 0; i < array.length ; i++) {
        arrayCopy.push(array[i]);
    }

    return arrayCopy;
}
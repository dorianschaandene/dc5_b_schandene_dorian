function NP(){
    let value = prompt("Entrez un nombre", "0");
    let number = parseInt(value);
    let resultat ="";

    if(number >= 0){
        resultat = "P";
    }else{
        resultat = "N";
    }

    document.write(resultat);

    return resultat;
}

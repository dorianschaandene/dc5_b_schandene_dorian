function alphabet(order){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let resultat="";

   
    for(var i=0; i<alphabet.length; i++){ //Traitement du tableau
        if(order ==  0){ //Affichage ordre croissant

            resultat = resultat+" "+alphabet[i];

        }else if(order == 1){ //affichage ordre decroissant

            resultat = resultat+" "+alphabet[alphabet.length-i-1];

        }
        
    }

    return(resultat);
}

function comb(){

    //Première étape : Générer des compositions sans doublon, exemple : 123 et non 111;

    let traitement = []; //initialisation du tableau de traitement de donnée
    let result = []; //initialisation du tableau final de traitement
   
    for(var i=0; i<=987; i++){ //traitement sur 987 étant la valeur maximale possible
  
        let value;

        if(i<10){ //générer chaque chiffre/nombre sur une composition de 3 chiffres. Exemple : 001,002,...,010,011,...,100,101,...
            value="00"+i;
        }else if(i<100){
            value="0"+i;
        }else if(i<1000){
            value=""+i;
        }

        let value_split = value.split(''); //on split la valeur. Exemple : 123 = array[1,2,3]
         

        if(value_split[0]==value_split[1] || value_split[0]==value_split[2] || value_split[1]==value_split[2]){
        //Si 2 chiffres de la composition sont égaux, alors on ne fait rien, sinon on récupère la valeur et on push dans l'array de traitement

            //console.log("min 2 chiffres sont identiques");

        }else{

            //console.log("tous les chiffres sont différents");
            
            if(value_split[0] < value_split[1] && value_split[1] < value_split[2]) {

            //Donc si les chiffres qui composent un nombre sont rangés dans un ordre CROISSANT, 
            //alors il n'existe aucun nombre ayant la même combinaison de chiffres qui soit inférieur.
            //Les autres possibilités futures seront donc exclues. Exemple : 014 = ok ; 041 = exclu ; 123 = ok ; 132 = exclu;

                traitement.push(value); //On ajoute la valeur filtrée dans le tableau post traitement

            }


       }

    }

    
    return traitement;

}
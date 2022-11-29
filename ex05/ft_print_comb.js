function comb(){

    //Première étape : Générer des compositions sans doublon, exemple : 123 et non 111;

    let traitement = []; //initialisation du tableau final de donnée
   
    for(var i=0; i<=987; i++){ //traitement sur 987 étant la valeur maximale possible
  
        let value;

        if(i<10){ //générer chaque chiffre/nombre sur une composition de 3 chiffres. Exemple : 001,002,...,010,011,...,100,101,...
            value="00"+i;
        }else if(i<100){
            value="0"+i;
        }else if(i<1000){
            value=""+i;
        }
    
        //console.log(value);

        let array = value.split(''); //on split la valeur. Exemple : 123 = [1,2,3]
         

        if(array[0]==array[1] || array[0]==array[2] || array[1]==array[2]){
            //Si 2 chiffres de la composition sont égaux, alors on ne fait rien, sinon on récupère la valeur et on push dans l'array final

            //console.log("min 2 chiffres sont identiques");
        }else{
            //console.log("tous les chiffres sont différents");
            traitement.push(value);
        }

    }



    return traitement;


}

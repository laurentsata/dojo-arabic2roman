//Definit les 2 listes avec leur equivalence.
let v = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; 
let r = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

function myConvertToRoman(num) {
    //Définit un str vide de résultat
    let myStr = "";
    //Si Num = 0 arrête tout
    if(num===0) return "";
    //Défile sur tout les éléments de la première liste
    v.forEach((val,index)=>{
        //Calcul à l'arrondi le plus bas du num divisé par la valeur actuelle
        let res = Math.floor(num / val)
        //Si le chiffre du résultat est supérieur ou égal à 1 on continue
        if(res >= 1){
            // console.log("res : " + Math.floor(num / val) + "  num: "+ num + " index: " + r[index]);
            //Repète l'equivalence dans le tableau r du nombre de fois de res
            myStr += r[index].repeat(res)
            //Enlève le chiffre 
            num -= res * val
        }
    })
    return myStr
}
console.log("test2 : " + myConvertToRoman(8));
console.log("test2 : " + myConvertToRoman(74));
console.log("test2 : " + myConvertToRoman(2135));
console.log("test2 : " + myConvertToRoman(9237));


//Credit: https://prograide.com/pregunta/79085/convertir-un-nombre-en-chiffre-romain-en-javascript
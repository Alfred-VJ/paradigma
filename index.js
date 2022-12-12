/* 
En este ejercicio se te pasará un string(steps) por parametro a la funcion 'valles' que contiene una combinación de caracteres que forman los pasos de un usuario el caracter "U" significa un paso para arriba el caracter "D" un paso para abajo y el caracter "S" es un paso hacia adelante.

Por ejemplo: 
         --->  "DDDSSUUU"  --> Significa que el usuario dio 3 pasos hacia abajo dos hacia adelante y tres hacia arriba.

Aclarado este punto el propósito de este ejercicio será que descubras cuantos valles cruzo el usuario.

Por ejemplo si te mandan el siguiente String:
         ---> "DDUUDDSSUU" -->  debes de retornar   ==>  2 <==
         Tu respuesta se basa en que el usuario dio dos pasos hacia abajo y luego dos pasos hacia arriba eso significa que paso un valle luego dio dos pasos hacia abajo dos rectos y luego dos hacia arriba eso significa que paso otro valle por lo tanto la respuesta es ==> 2.

         ---> "UDUUDDU"  --> debes de retornar ==> 0 <==
         Tu respuesta se basa en que el usuario dio un paso hacia arriba una hacia abajo luego dos hacia arriba y luego dos hacia abajo y por último uno hacia arriba, en ningún momento bajo del nivel principal o inicial. 
*/


function valles(steps){

}

module.exports = {
    valles
}
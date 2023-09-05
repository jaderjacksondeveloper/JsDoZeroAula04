var nota = 9;
var falta = 27;

if((nota < 5 ) || (falta > 25)){
    document.write("Reprovado: " + nota + ". Falta: " + falta + "<br>");
}

nota = 8;
falta = 22;

if ((nota < 4) && (falta > 25)){
    document.write("Reprovada: " + nota + ". Falta: " + falta + "<br>")
}else{
    document.write("Aluno bem avaliado<br>")
}
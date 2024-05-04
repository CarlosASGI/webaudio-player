const inputF=document.getElementById("inputF"); //Variable del input del archivo
const audio=document.getElementById("audio") //Elemento del audio
const btnPlay=document.getElementById("play"); //Boton de play
var inpFile; //Archivo seleccionado

inputF.onchange=()=>{
    if(inputF.files.length==1){
        //si es un archivo entonces:
        console.log(inputF.files[0]) //Muestra por la consola la informacion del archivo
        inpFile=inputF.files[0] //Se declara la variable con el archivo seleecionado
    }
}

btnPlay.onclick=()=>{
    //Crea la URL local del audio y lo reproduce
    var uri=window.URL.createObjectURL(inpFile);
    console.log(uri);
    audio.src=uri;
    audio.play()
}


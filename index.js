const inputF=document.getElementById("inputF");
const title=document.getElementById("title");
const audio=document.getElementById("audio")
const btnPlay=document.getElementById("play");
const btnReload=document.getElementById("reload");
var inpFile;

inputF.onchange=()=>{
    if(inputF.files.length==1){
        console.log(inputF.files[0])
        inpFile=inputF.files[0]
    }
}

btnPlay.onclick=()=>{
    var uri=window.URL.createObjectURL(inpFile);
    console.log(uri);
    audio.src=uri;
    audio.play()
}


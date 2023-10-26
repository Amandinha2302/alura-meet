function tocaSomPom(id.ElementoAudio){
  document.querySelector(idelementoaudio).play()  
} 
const listadeTeclas=document.querySelectotAll('.tecla');

let contador = 0;

while(contador<listadeteclas.lenght){
  const tecla= listadeTeclas[contador];

    const instrumento= tecla.classlist[1];
    const idAudio=`#som_$(instrumento)´;

    tecla.onclick=function(){
    tocaSom(idAudio);
}
contador=contador+1;

}
    



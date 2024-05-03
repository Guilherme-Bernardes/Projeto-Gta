const musicaGta=new Audio("/songs/musicagta.mp3")

musicaGta.play();
musicaGta.volume=0.40;
musicaGta.loop=true;
const butao =document.querySelector(".butao-plataforma");
const elementoPlataformas=document.querySelector(".butao-plataforma .plataformas" );
butao.addEventListener("click",()=>{
    elementoPlataformas.classList.toggle("ativo");
 
});

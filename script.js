function fuecoco(){
    document.querySelector(".centro-pok").classList.remove("sprigatito");
    document.querySelector(".centro-pok").classList.remove("quaxly");
    document.querySelector(".centro-pok").classList.add("fuecoco");
    document.querySelector(".centro-pok").innerHTML= " ";
    document.querySelector(".altura").innerHTML="0,40m"
    document.querySelector(".peso").innerHTML="9,8kg"
    document.querySelector(".habilidade").innerHTML="Habilidade: Blaze (chamas)"
    
}
function sprigatito(){
    document.querySelector(".centro-pok").classList.remove("fuecoco");
    document.querySelector(".centro-pok").classList.remove("quaxly");
    document.querySelector(".centro-pok").classList.add("sprigatito");
    document.querySelector(".centro-pok").innerHTML= " ";
    document.querySelector(".altura").innerHTML="0,40m"
    document.querySelector(".peso").innerHTML="0,40 kg"
    document.querySelector(".habilidade").innerHTML="Overgrow (crescimento)"
}
function quaxly(){
    document.querySelector(".centro-pok").classList.remove("sprigatito");
    document.querySelector(".centro-pok").classList.remove("fuecoco");
    document.querySelector(".centro-pok").classList.add("quaxly");
    document.querySelector(".centro-pok").innerHTML= " ";
    document.querySelector(".altura").innerHTML="0,50m"
    document.querySelector(".peso").innerHTML="6,1 kg"
    document.querySelector(".habilidade").innerHTML="Torrent (riacho)"
}
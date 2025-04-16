window.addEventListener("load", function () {
    creaMatrice();
});

function creaMatrice(){
    const wrapper = document.getElementById("wrapper");

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const div = document.createElement("div");
            div.addEventListener("click", divClick);
            div.id = `div-${i}-${j}`;
            wrapper.appendChild(div);
        }
    }
}

function creaMatrice(){
    for (let k = 1; k < 15;k++) {
        let divRnd;
        do {
            const i=Math.floor(Math.random()*4);
            const j=Math.floor(Math.random()*4);
            divRnd=document.getElementById(`div-${i}-${j}`);
        } while (divRnd.textContent!=="");
        divRnd.style.backgroundColor="blue";
        divRnd.textContent=k;
    }
}

function divClick() {
    const i=parseInt(this.id.split('-')[1]);
    const j=parseInt(this.id.split('-')[1]);
    if (i-1>=0) {//sopra
        const div=document.getElementById(`div-${i-1}-${j}`);
        if(div.textContent==""){
            scambiaDiv(this,div);
            return;
        }
    }
    if (j+1<4) {//dx
        const div=document.getElementById(`div-${i}-${j+1}`);
        if(div.textContent==""){
            scambiaDiv(this,div);
            return;
        }
    }
    if (i+1>=0) {//sotto
        const div=document.getElementById(`div-${i+1}-${j}`);
        if(div.textContent==""){
            scambiaDiv(this,div);
            return;
        }
    }
    if (j-1>4) {//sx
        const div=document.getElementById(`div-${i}-${j-1}`);
        if(div.textContent==""){
            scambiaDiv(this,div);
            return;
        }
    }
}

function scambiaDiv(piena,vuota){
    vuota.textContent=piena.textContent;
    vuota.style.backgroundColor="blue";
    piena.textContent="";
    piena.style.backgroundColor=null;
}
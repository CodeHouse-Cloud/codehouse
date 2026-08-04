const images = [...document.querySelectorAll(".zoomable")];

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

const closeBtn = document.querySelector(".close");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const zoomIn = document.getElementById("zoomIn");
const zoomOut = document.getElementById("zoomOut");
const resetZoom = document.getElementById("resetZoom");

let current = 0;

let scale = 1;

let translateX = 0;
let translateY = 0;

let dragging = false;

let startX;
let startY;

let initialDistance = null;

/*========================*/

function updateTransform(){

    modalImage.style.transform =
    `translate(${translateX}px,${translateY}px) scale(${scale})`;

}

/*========================*/

function openImage(index){

    current=index;

    modal.style.display="flex";

    modalImage.src=images[index].src;

    reset();

}

/*========================*/

function reset(){

    scale=1;

    translateX=0;

    translateY=0;

    updateTransform();

}

/*========================*/

images.forEach((img,index)=>{

    img.onclick=()=>openImage(index);

});

/*========================*/

closeBtn.onclick=()=>{

    modal.style.display="none";

};

/*========================*/

prevBtn.onclick=()=>{

    current=(current-1+images.length)%images.length;

    openImage(current);

};

nextBtn.onclick=()=>{

    current=(current+1)%images.length;

    openImage(current);

};

/*========================*/

zoomIn.onclick=()=>{

    scale+=0.2;

    updateTransform();

};

zoomOut.onclick=()=>{

    scale=Math.max(.2,scale-.2);

    updateTransform();

};

resetZoom.onclick=reset;

/*========================
Mouse Wheel
========================*/

modal.addEventListener("wheel",e=>{

    e.preventDefault();

    if(e.deltaY<0){

        scale+=0.1;

    }else{

        scale=Math.max(.2,scale-.1);

    }

    updateTransform();

},{passive:false});

/*========================
Dragging
========================*/

modalImage.addEventListener("mousedown",e=>{

    dragging=true;

    startX=e.clientX-translateX;

    startY=e.clientY-translateY;

});

window.addEventListener("mouseup",()=>{

    dragging=false;

});

window.addEventListener("mousemove",e=>{

    if(!dragging || scale<=1) return;

    translateX=e.clientX-startX;

    translateY=e.clientY-startY;

    updateTransform();

});

/*========================
Touch
========================*/

modalImage.addEventListener("touchstart",e=>{

    if(e.touches.length===1){

        dragging=true;

        startX=e.touches[0].clientX-translateX;

        startY=e.touches[0].clientY-translateY;

    }

    if(e.touches.length===2){

        initialDistance=Math.hypot(

            e.touches[0].clientX-e.touches[1].clientX,

            e.touches[0].clientY-e.touches[1].clientY

        );

    }

});

modalImage.addEventListener("touchmove",e=>{

    e.preventDefault();

    if(e.touches.length===1 && dragging && scale>1){

        translateX=e.touches[0].clientX-startX;

        translateY=e.touches[0].clientY-startY;

        updateTransform();

    }

    if(e.touches.length===2){

        const distance=Math.hypot(

            e.touches[0].clientX-e.touches[1].clientX,

            e.touches[0].clientY-e.touches[1].clientY

        );

        scale*=distance/initialDistance;

        initialDistance=distance;

        updateTransform();

    }

},{passive:false});

window.addEventListener("touchend",()=>{

    dragging=false;

    initialDistance=null;

});

/*========================
Keyboard
========================*/

document.addEventListener("keydown",e=>{

    if(modal.style.display!=="flex") return;

    switch(e.key){

        case "Escape":

            modal.style.display="none";

            break;

        case "+":

        case "=":

            scale+=0.2;

            break;

        case "-":

            scale=Math.max(.2,scale-.2);

            break;

        case "0":

            reset();

            break;

        case "ArrowLeft":

            prevBtn.click();

            return;

        case "ArrowRight":

            nextBtn.click();

            return;

    }

    updateTransform();

});
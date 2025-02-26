const body = document.querySelector("body");
const spanEl = document.querySelector("span");

body.addEventListener("mousemove", (e)=>{

    /*
For the demo and understanding purpose ONLY

        console.log("client");

        console.log(e.clientX);
        console.log(e.clientY);

        console.log("offsets")

        console.log(clientX);
        console.log(clientY);

    */

        let offsetY = e.offsetY  ; 
        let offsetX = e.offsetX ; 
        console.log(offsetX);
        // let offsetXplux = e.offsetX + 10 ; 
        // console.log(offsetXplux);
        
        const spanCreate = document.createElement("span");
        spanCreate.style.left = offsetX + "px";
        spanCreate.style.top  = offsetY + "px";
        
        const size = Math.random()*100;
        spanCreate.style.width = size + "px";
        spanCreate.style.height  = size + "px";



        body.appendChild(spanCreate);
         setTimeout(()=>{
            spanCreate.remove();
         },2000 )


    
        // console.log("This is offset X " ,offsetX );
        // console.log("This is offset Y " ,offsetY );

})
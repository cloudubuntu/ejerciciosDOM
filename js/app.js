 let aleatorio;
 let father=document.querySelector('#father');
 let validador=true;
 /*console.log(input);
 console.log(input.value);*/


 function init(){
    aleatorio=parseInt(Math.random()*10);
    console.log(aleatorio);
    father.innerHTML+=`  <div class="container">
    <h5 class="bg-dark text-center text-white-50 my-5">
      Intenta adivinar
    </h5>
    <input type="number" id="input" />
    <button class="btn btn-dark" onclick="probar()">Enviar</button>
  </div>`;
    
 }


 function pre(){
   if(validador){
       probar();
   }else{
    father.innerHTML+=`<h2>GANASTE!!</h2>`;
   }
     
 }

 function probar(){
     console.log('estoy en el boton de prueba');
     let input=document.querySelector('#input');
     let imp=parseInt(input.value);
     if(imp===aleatorio){
            alert("Adivinaste");
            father.innerHTML+=`<h2>GANASTE!!</h2>`;
            
        }else if(imp<aleatorio){
            alert("Prueba con un numero mas alto");
        }else{
            alert("Prueba con un numero mas bajo");
        }
    
            
     
 }



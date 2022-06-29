function init(nodeparam){

    if(nodeparam==null){
        console.log("No recibí parámetro, sigo mi camino normal...");
        getDatosCliente();
        construyePaypal();
    }else{
        console.log("Estoy en INIT:");
        console.log("Esto es verifNode:" + nodeparam);
        console.log("Y como el verifNode es correcto entonces la venta fue un éxito.");

        //Desaparece info inicial.
        const infoMain = document.getElementById('info_main');
        infoMain.style.display = 'none';

        //Aparece info final.
        const infoPost = document.getElementById('info_post');
        infoPost.style.display = 'block';

       
    }
 
    
}


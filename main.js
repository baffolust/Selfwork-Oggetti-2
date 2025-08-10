let rubrica = {
    
    contatti : [
        
        {Nome: 'Simone', Telefono: '3331234456'},
        {Nome: 'Marta', Telefono: '3471234567'},
        {Nome: 'Sara', Telefono: '3701234987'},
        {Nome: 'Sandra', Telefono: '3331234654'},
        
    ],
    
    mostraContatti : function(){
        
        rubrica.contatti.forEach((contatto)=>{
            console.log(`Nome: ${contatto.Nome} - Telefono: ${contatto.Telefono}`);
        });
    },
    
    mostraContatto : function(nome_contatto){
        
        let check_contact = false;
        
        rubrica.contatti.forEach((contatto)=>{
            if(contatto.Nome === nome_contatto){
                console.log(`Nome: ${contatto.Nome} - Telefono: ${contatto.Telefono}`);
                check_contact = true;
                
            }
            
        });
        
        if( check_contact == false ){
            
            console.log(`${nome_contatto} non presente in rubrica`);
            
        }
    }
    
    
}







rubrica.mostraContatti();
rubrica.mostraContatto('Simone');
rubrica.mostraContatto('Superman');
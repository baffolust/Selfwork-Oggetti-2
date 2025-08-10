let rubrica = {
    
    contatti : [
        
        {Nome: 'Simone', Telefono: '3331234456'},
        {Nome: 'Marta', Telefono: '3471234567'},
        {Nome: 'Sara', Telefono: '3701234987'},
        {Nome: 'Sandra', Telefono: '3331234654'},
        {Nome: 'Casper', Telefono: '3331234654'},
        
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
                console.log(`Nome: ${contatto.Nome}\nTelefono: ${contatto.Telefono}`);
                check_contact = true;
                
            }
            
        });
        
        if( check_contact == false ){
            
            console.log(`${nome_contatto} non presente in rubrica`);
            
        }
    },
    
    eliminaContatto : function(nome_contatto){
        
        let index = this.contatti.findIndex((contatto)=>contatto.Nome == nome_contatto);
        
        if ( index != -1){
            
            this.contatti.splice(index, 1);
            console.log(`${nome_contatto} eliminato dalla rubrica`);
            
        } else {
            
            console.log(`${nome_contatto} non presente in rubrica`);
            
        }
        
    },
    
    aggiungiContatto : function(nome_contatto, telefono_contatto){
        
        this.contatti.push({
            Nome: nome_contatto, 
            Telefono: telefono_contatto
        });
        
        console.log(`Contatto Nome: ${nome_contatto} - Telefono ${telefono_contatto} aggiunto a rubrica`);
        
        
    },
    
    modificaContatto : function(nome_contatto_esistente, nuovo_nome, nuovo_telefono){
        
        let index = this.contatti.findIndex((contatto)=>contatto.Nome == nome_contatto_esistente);
        
        if ( index != -1){
            
            if (nuovo_nome != ""){
                this.contatti[index].Nome = nuovo_nome;
            }
            
            if (nuovo_telefono != ""){
                this.contatti[index].Telefono = nuovo_telefono;
            }
            
            console.log(`Contatto ${nome_contatto_esistente} modificato. Contatto aggiornato \nNome : ${this.contatti[index].Nome} - Telefono : ${this.contatti[index].Telefono}`);

            

        } else {
            
            console.log(`Contatto ${nome_contatto_esistente} non presente in rubrica`);
            
        }
        
    }
    
}




console.log(rubrica);

rubrica.mostraContatti();
rubrica.mostraContatto('Simone');
rubrica.mostraContatto('Superman');
rubrica.eliminaContatto('GhostBusters');
rubrica.mostraContatti();
rubrica.eliminaContatto('GhostBusters');
rubrica.aggiungiContatto('Elena', 3451090341);
rubrica.mostraContatti();
rubrica.modificaContatto('Simone','Pippo',3451671231);

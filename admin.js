 function subject_qr(){
     let subject=document.getElementById('Subject').value;
     document.getElementById('after_verification').classList.add('d-none')
     console.log(subject)
    // console.log(subject);
     switch(subject)
     {
         case 'wt':
             document.getElementById('WTqr').classList.remove('d-none')
             document.getElementById('MPIqr').classList.add('d-none')
             document.getElementById('SEqr').classList.add('d-none')
             document.getElementById('ETCqr').classList.add('d-none')
             document.getElementById('ENSAqr').classList.add('d-none')
             document.getElementById('CISqr').classList.add('d-none')
             document.getElementById('DATqr').classList.add('d-none')
             document.getElementById('SPAqr').classList.add('d-none')
             break;
         case 'mpi':
             document.getElementById('MPIqr').classList.remove('d-none')
             document.getElementById('WTqr').classList.add('d-none')
             document.getElementById('SEqr').classList.add('d-none')
             document.getElementById('ETCqr').classList.add('d-none')
             document.getElementById('ENSAqr').classList.add('d-none')
             document.getElementById('CISqr').classList.add('d-none')
             document.getElementById('DATqr').classList.add('d-none')
             document.getElementById('SPAqr').classList.add('d-none')
             break;
                    
         case 'se':
             document.getElementById('SEqr').classList.remove('d-none')
             document.getElementById('MPIqr').classList.add('d-none')
             document.getElementById('WTqr').classList.add('d-none')
             document.getElementById('ETCqr').classList.add('d-none')
             document.getElementById('ENSAqr').classList.add('d-none')
             document.getElementById('CISqr').classList.add('d-none')
             document.getElementById('DATqr').classList.add('d-none')
             document.getElementById('SPAqr').classList.add('d-none')
             break;
                        
         case 'etc':
             document.getElementById('ETCqr').classList.remove('d-none')
             document.getElementById('MPIqr').classList.add('d-none')
             document.getElementById('SEqr').classList.add('d-none')
             document.getElementById('WTqr').classList.add('d-none')
             document.getElementById('ENSAqr').classList.add('d-none')
             document.getElementById('CISqr').classList.add('d-none')
             document.getElementById('DATqr').classList.add('d-none')
             document.getElementById('SPAqr').classList.add('d-none')
             break;
                           
         case 'ensa':
             document.getElementById('ENSAqr').classList.remove('d-none')
             document.getElementById('MPIqr').classList.add('d-none')
             document.getElementById('SEqr').classList.add('d-none')
             document.getElementById('ETCqr').classList.add('d-none')
             document.getElementById('WTqr').classList.add('d-none')
             document.getElementById('CISqr').classList.add('d-none')
             document.getElementById('DATqr').classList.add('d-none')
             document.getElementById('SPAqr').classList.add('d-none')
             break;
                               
         case 'cis':
             document.getElementById('CISqr').classList.remove('d-none')
             document.getElementById('MPIqr').classList.add('d-none')
             document.getElementById('SEqr').classList.add('d-none')
             document.getElementById('ETCqr').classList.add('d-none')
             document.getElementById('ENSAqr').classList.add('d-none')
             document.getElementById('WTqr').classList.add('d-none')
             document.getElementById('DATqr').classList.add('d-none')
             document.getElementById('SPAqr').classList.add('d-none')
             break; 
         case 'dat':
             document.getElementById('DATqr').classList.remove('d-none')
             document.getElementById('MPIqr').classList.add('d-none')
             document.getElementById('SEqr').classList.add('d-none')
             document.getElementById('ETCqr').classList.add('d-none')
             document.getElementById('ENSAqr').classList.add('d-none')
             document.getElementById('CISqr').classList.add('d-none')
             document.getElementById('WTqr').classList.add('d-none')
             document.getElementById('SPAqr').classList.add('d-none')
             break;
         case 'spa':
             document.getElementById('SPAqr').classList.remove('d-none')
             document.getElementById('MPIqr').classList.add('d-none')
             document.getElementById('SEqr').classList.add('d-none')
           document.getElementById('ETCqr').classList.add('d-none')
           document.getElementById('ENSAqr').classList.add('d-none')
           document.getElementById('CISqr').classList.add('d-none')
           document.getElementById('DATqr').classList.add('d-none')
           document.getElementById('WTqr').classList.add('d-none')
           break;  
          
         default:
             document.getElementById('qrcodeddisplay').innerHTML="please select a valid subject"
     }
    
 }
// function allow_qr_display(subject){

//    const a=subject.value
//    console.log(a)
// }
function verify_function(){
    a=document.getElementById('Subject').value;

    console.log(a)
    if(a==null){
        let a=document.getElementById('scan');
        document.getElementById('after_verification').classList.remove('d-none')
        a.ariaDisabled=true;
       
    }
}
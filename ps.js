var PS='mpi20101218';
var temp=1;
var attempt=0;

function myPasssword(){
    let myPS =prompt('Pleas enter password.');
    if(attempt >= 4){
        temp=2;fuckyou();
    }
    if(myPS !== PS){
        attempt++;myPasssword();
    }
}
function fuckyou(){
    if(temp==2){
        alert('Fuck You!');fuckyou();
    }
}

if(temp==1){
    myPasssword();
}



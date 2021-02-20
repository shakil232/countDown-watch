

let countDate = new Date ('21 Feb, 2021 10:00:00' ).getTime();


let setCountDown = setInterval(function(){
    let New = new Date().getTime();
    let diff = countDate - New ;
    
    let days = Math.floor(diff / (1000*60*60*24));
    
    let hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
   
    let minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    
    let seconds = Math.floor((diff % (1000*60)) / (1000));
   
    document.getElementById('countDown').innerHTML = days +  'day-'+ hours +  'hour-' + minutes +  'min-' + seconds +  'sec'

},1000);


export function Time( millSeconds ){
   let msec = millSeconds % 100
   let sec =  Math.floor((millSeconds /100)) %  60;
   let min = Math.floor( millSeconds / (60*100) ) %  60 ;
   let hr = Math.floor(millSeconds /(60*60 *100) );
    return `${hr!==0 ? `${hr <= 9 ? "0"+hr+"hr" :hr+"hrs"}` :`` } ${min !==0 ? `${min <= 9 ? "0"+min+"min" :min+"m"}` : ``}  ${sec <=9 ? "0"+sec+"s" : sec +"s"} ${msec <= 9 ? "0"+msec :msec}`    
}



export function Time_2( seconds ){
    
    let sec =  seconds  %  60;
    let min = Math.floor( seconds / 60 ) %  60 ;
    let hr = Math.floor(seconds /(60*60) );
     return `${hr <= 9 ? "0"+hr+"hr" :hr+"hrs"}  ${min <= 9 ? "0"+min+"min" :min+"mins"} ${sec <=9 ? "0"+sec+"sec" : sec +"secs"} `    
 }
 
 
function songDecoder(song){
  var w = 'W'; 
  var wlocation = [];
  for (let ii = 0; ii < song.length; ii ++){
  if (song[ii] === w ){wlocation.push(ii); }
  }
  for (let ii = 0; ii < song.length; ii ++){
    var u = 'U'; 
  var b = 'B'; 
if (song[ii+1] === u && song [ii + 2] === b){
    let c = ii + 3; 
    let d = song.length - c; 
    let e = song.length - ii ; 
    song = song.slice(0,-e) + " " + song.substr(c); 
    
    for (let ii = 0; ii < wlocation.length; ii ++){
       wlocation[ii] = wlocation[ii] - 2;
       }
  }
    }
  var space = " "; 
  if (song[0] === space){song=song.substr(1);
  }
  if (song[song.length-1]=== space){song = song.substr(0,song.length-1); }
song = song.replace(/\s+/g, ' '); 
return song
}



var array="WUBAWUBBWUBCWUB"; 
console.log(songDecoder(array));

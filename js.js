var clock = document.querySelector('.clock');
function addZero(i){
  if(i<10){
    return '0'+i;
  }else{
    return i;
  }
}
function ampm(){
  var t = new Date();
  var getAm = t.getHours();
  if(getAm<12){
    return 'AM';
  }else{
   return 'PM';
  }
}
function twilv(t){
  if(t==0){
    return 12;
  }else{
    return t;
  }
}
function setTime(){
  var time = new Date();
  clock.innerHTML = `${twilv(addZero(time.getHours()%12))}:${addZero(time.getMinutes())}:${addZero(time.getSeconds())} ${ampm()}`;
}

setInterval(setTime,1000);
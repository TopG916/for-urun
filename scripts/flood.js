/// urun.js
var num=prompt("How Times Do You Want This Page To Show Up In your History?");
done=false;
x = window.location.href;
for (var i=1; i<=num; i++){
  history.pushState(0, 0, i==num?x:i.toString());
  if(i==num){
    done=true
  }
}
if(done===true){
  alert("Flooding Successful!\n "+window.location.href+" \nIs Now In Your History "+num+(num==1?" time.":" Times."))
}

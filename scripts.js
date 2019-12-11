function add (){
var act=0,b=0;
act=f.ddd.value;
b=act.charAt(act.legth-1);
if (b=='+' || b=='-' || b=='/' || b=='*'){
f.ddd.value=act.substring(0,act.legth-1)
f.ddd.value+='+';
} else {
f.ddd.value+='+';
}
}
function sub (){
var act=0,b=0;
act=f.ddd.value;
b=act.charAt(act.legth-1);//utrewdfghjklmnbvc
if (b=='+'||b=='-'||b=='/'||b=='*'){
f.ddd.value=act.substring(0,act.legth-1)
f.ddd.value+='-';
} else {
f.ddd.value+='-';
}
}
function di (){
var act=0,b=0;
act=f.ddd.value;
b=act.charAt(act.legth-1);
if (b=='+'||b=='-'||b=='/'||b=='*'){
f.ddd.value=act.substring(0,act.legth-1)
f.ddd.value+='/';
} else {
f.ddd.value+='/';
}
}function mul (){
var act=0,b=0;
act=f.ddd.value;
b=act.charAt(act.legth-1);
if (b=='+'||b=='-'||b=='/'||b=='*'){
f.ddd.value=act.substring(0,act.legth-1)
f.ddd.value+='*';
} else {
f.ddd.value+='*';
}
}
function back (){
f.ddd.value= f.ddd.value.substring(0,f.ddd.value.length -1) //dtuknbvcdfghj
} 
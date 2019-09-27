var srt = "hari is a good boy";
/*var newstr = "";
var res = "";
for(var i =0 ;i<srt.length;i++){
    if(srt[i] != " "){
        newstr += srt[i];
    }else{
        newstr = stringRevers(newstr);
        newstr += srt[i];
        res += newstr;
        newstr = "";
    }
}

console.log?(res);
*/

console.log(srt.split("").reverse().join(""));
console.log(srt.split("").reverse().join("").split(" ").reverse().join(" "));
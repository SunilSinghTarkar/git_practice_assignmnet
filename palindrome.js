let str="racecar";

let ss="";
for(let i=0;i<str.length;i++){
    ss+=str[str.length-1-i];
}
if(ss==str)console.log("yes");
else console.log("No");
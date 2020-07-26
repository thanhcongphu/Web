// console.log("Hello world"); = printf();
var x=10; // khai bao bien, x co the thay doi kieu du lieu
console.log(x);
console.log(x+10);
x= "xin chao";
console.log(x);
console.log(x+10); // chuoi + so = chuoi
console.log("xin chao"+" t2005e") // cong chuoi
console.log(x.length); //hien thi do dai chuoi
var y="10a05"
console.log(y+10); //
y=parseInt(y); // =10; doi sang kieu int, lay tu so dau tien den khi gap chu
// neu ky tu dau tien ko phai la so thi bao NaN = not a number
// y=parseFloat(y); doi sang kieu float
console.log(y+10); //=20
var y="a10"
y=parseInt(y);
if(isNaN(y)){ //ham if else (isNan(y) : kiem tra y co phai la 1 so hay ko)
    console.log("khong co gia tri");
}
else{
    console.log(y+10);
}
for(var i=0;i<10;i++){ //vong lap
    console.log("i= "+i);
}
var a=[]; //khai bao mang
a[0]=1999;
a[1]="hello";
a[2]=[1,2,3,"xin chao",[4,5,6]];
console.log(a[2][3]); //in ra xin chao
console.log(a[2][4][1]); // in ra so 5
//neu chon phan tu ko chua co gia tri hien thi undefined
var s=[1,2,3,4,5,6,7]
for(var i=0; i<s.length;i++){ //s.length do dai mang
    console.log(s[i]);
}
var f=ham();
console.log(f);
function ham() { //cau truc ham, co the chay bat cu o dau
    console.log("day la ben trong ham");
    return "xin chao";
}
s.map(function (e) {
    console.log("s : " +e);
}) //duyet toan bo mang phan tu nao khong co bo qua
var b=[];
for (var i=0;i<10;i++){
    b.push(i*2+1); //ham dua them phan tu vao cuoi mang
}
b.splice(1,2); // xoa tu phan tu vi tri 1 va xoa 2 phan tu
b.map(function (e) {
    console.log("b: " +e); // gan gia tri b[i] vao e
})
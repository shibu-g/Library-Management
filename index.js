
// function fun(){
// //  alert("clicked");
// let tr=
//  let name=document.querySelector(".name").value;
//  let d=document.querySelector('.t');
//  name.value="";
//  d.innerHTML+=name;
// }
let arr=[];
 let d=document.querySelector('.t');
let a=document.querySelector(".issue");

let tbl=document.querySelector('tbody');
let count=0;
function fun(){
  let tr=document.createElement('tr');
let td1=tr.appendChild(document.createElement('td'));
let td2=tr.appendChild(document.createElement('td'));
let td3=tr.appendChild(document.createElement('td'));
let td4=tr.appendChild(document.createElement('td'));
let td5=tr.appendChild(document.createElement('td'));
let date=new Date().toLocaleString();
// alert(date);
     let name=document.querySelector(".name").value;
     let to=document.querySelector(".issued").value;
     let status="not returned";
     let id=arr.length+1;
   td2.innerHTML=name;
   td3.innerHTML=to;
   td1.innerHTML=id;
   td4.innerHTML=date;
   td5.innerHTML=status;
   td5.innerHTML+=' <a id=><span class="material-icons md-36">edit_square</span></a>';
   if(!name=="" && !to=="")
   tbl.append(tr);
   let obj={id,name,to,date,status};
 arr.push(obj);
 name.value="";
 to.value="";
}
function rander(){

}
a.addEventListener('click',fun);
let b=document.querySelector('a');
function f(){
alert("hi");
}
b.addEventListener('click',f);
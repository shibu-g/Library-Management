
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
     let name=document.querySelector(".name");
     let to=document.querySelector(".issued");
     let st=document.createElement('span');
     st.classList.add('red');
     st.innerHTML="Not Returned"
    //  let status=st;
    let nam=name.value;
 let issu=to.value;
     let id=arr.length+1;
     let obj={id,nam,issu,date,st};
 arr.push(obj);
   td2.innerHTML=name.value;
   td3.innerHTML=to.value;
   td1.innerHTML=id;
   td4.innerHTML=date;
   td5.appendChild(st);
 name.value="";
 to.value="";
  //  console.log(st);
  //  let a=document.createElement('a');
  //  a.id=id;
  //  a.innerHTML='<span class="material-icons md-36">edit_square</span>';
   td5.innerHTML+=' <a onclick="fun2('+id+')""><span class="material-icons md-36">edit_square</span></a>';
  if(!nam="" && !issu=="")
   tbl.append(tr);
}
function fun2(id){
  let st1=document.createElement('span');
  let curr=arr[id-1].st;
  // console.log(curr.classList);
  
  if(curr.innerHTML.includes('Not')){
    let st1=document.createElement('span');
    st1.classList.add('green');
    st1.innerHTML="Returned"
    arr[id-1].st=st1;
    console.log(st1);
  }
  else{
    let st1=document.createElement('span');
    st1.classList.add('red');
    st1.innerHTML="Not Returned"
    arr[id-1].st=st1;
  }
  
  rander();

}
function rander(){

  tbl.innerHTML='';
  arr.forEach(ele => {
    let tr=document.createElement('tr');
    let td1=tr.appendChild(document.createElement('td'));
    let td2=tr.appendChild(document.createElement('td'));
    let td3=tr.appendChild(document.createElement('td'));
    let td4=tr.appendChild(document.createElement('td'));
    let td5=tr.appendChild(document.createElement('td'));


         let name=ele.nam;
         let to=ele.issu;
         let status=ele.st;
         let id=ele.id;
         let date=ele.date;
         td1.innerHTML=id;
         td2.innerHTML=name;
       td3.innerHTML=to;
       td4.innerHTML=date;
       td5.appendChild(status);
       td5.innerHTML+=' <a onclick="fun2('+id+')"><span class="material-icons md-36">edit_square</span></a>';
       tbl.append(tr);
  });

}
a.addEventListener('click',fun);
// let b=document.querySelector('a');
function f(){
alert("hi");
}
// b.addEventListener('click',f);

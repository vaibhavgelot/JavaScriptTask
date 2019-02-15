/*let url=window.location.href;
let usertype=url.slice((url.indexOf('?')+1),url.length).split('&');
let trans_data=[];
for(let i in usertype){
 let data={} 
 let key=usertype[i].slice(0,usertype[i].indexOf('=')); 
 let value=usertype[i].slice(usertype[i].indexOf('=')+1,usertype[i].length);
 data[key]=value;
 trans_data.push(data);
}
for(let data of trans_data){console.log(data);}

document.getElementById('user').innerHTML=trans_data[1].email;
*/

function checkdatabase()
{   let retrivedatas=JSON.parse(localStorage.getItem("course"));
    console.log(retrivedatas);
    if(retrivedatas==null){
      return false;
    }else{
      return true;
    }
}


function courselist(){
 document.getElementById("remove_course").style.display ="none";
 document.getElementById("add_course").style.display ="none";
 
 document.getElementById("course_list").style.display ="block";
 let flagOfdb=checkdatabase();
   if(flagOfdb){
        let retrivedatas=JSON.parse(localStorage.getItem("course"));
        let tname=document.getElementById('table_1');
         var myNode = document.getElementById("tbody_1");
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        } 
       let len=tname.getElementsByTagName('tr').length;
        console.log(len);
        for(let i in retrivedatas){
      
        let row=document.createElement('tr');
        row.setAttribute("id","row__"+(len)) ;
        console.log(retrivedatas[i]);
        row.innerHTML=`<td>${len}</td><td>${retrivedatas[i]['name']}</td>`;
        let parent=document.getElementById('tbody_1')
        parent.append(row);
        len++;
        
        }
       }

    if(!flagOfdb){
    /*this.data={"email":this.email,"password":this.pwd,"usertype":this.usertype};
    this.retrivedatas.push(this.data);
    localStorage.setItem("account",JSON.stringify(this.retrivedatas));
    */alert("First, You Need to Enter Course");
    }
}



function addcourse(){
  document.getElementById("course_list").style.display ="none";
  document.getElementById("remove_course").style.display ="none";
  document.getElementById("add_course").style.display ="block";



let flagOfdb=checkdatabase();
 
   if(flagOfdb){
        let i = 0;
       let retrivedatas=JSON.parse(localStorage.getItem("course"));
        let tname=document.getElementById('table_2');
 
        var tbody_2 = document.getElementById("tbody_2");
        while (tbody_2.firstChild) {
         tbody_2.removeChild(tbody_2.firstChild);} 

       let len=tname.getElementsByTagName('tr').length;
        console.log(len);
        for(let i in retrivedatas){
      
        let row=document.createElement('tr');
        row.setAttribute("id","row__"+(len)) ;
        console.log(retrivedatas[i]);
        row.innerHTML=`<td>${len+1}</td><td>${retrivedatas[i]['name']}</td>`;
        let parent=document.getElementById('tbody_2')
        parent.append(row);
        len++;
        
        }
       }
    

    if(!flagOfdb){
    /*this.data={"email":this.email,"password":this.pwd,"usertype":this.usertype};
    this.retrivedatas.push(this.data);
    localStorage.setItem("account",JSON.stringify(this.retrivedatas));
    */alert("First, You Need to Enter Course");
    }

    len=0;

     
 
}


function removecourse(){
  
document.getElementById("add_course").style.display ="none"; 
document.getElementById("course_list").style.display ="none";
document.getElementById("remove_course").style.display ="block";
 

  let flagOfdb=checkdatabase();
      if(flagOfdb){
       let retrivedatas=JSON.parse(localStorage.getItem("course"));
     
        let myNode = document.getElementById("tbody_3");
         while (myNode.firstChild) {
         myNode.removeChild(myNode.firstChild);
         } 
        let tname=document.getElementById('table_3');
        let len=tname.getElementsByTagName('tr').length;
        console.log(len);
        for(let i in retrivedatas){
        let row=document.createElement('tr');
        row.setAttribute("id","row_"+(len)) ;
        console.log(retrivedatas[i]);
        row.innerHTML=`<td>${len+1}</td>
                       <td>${retrivedatas[i]['name']}</td>
                       <td><button type="button" onclick="removecoursename(${len})" class="btn btn-danger">Remove Course</button></td>`;
        
        let parent=document.getElementById('tbody_3')
        parent.append(row);
        len++;
        
    
       }
     }
   }

function removecoursename(id){
 
  console.log(id);
let tname=document.getElementById('table_3');
let row=document.getElementById("row_"+id);
  row.parentNode.removeChild(row);   


  let retrivedatas=JSON.parse(localStorage.getItem("course"));
      
  console.log(retrivedatas);
   console.log(typeof retrivedatas);
     delete   retrivedatas[1];
    retrivedatas.slice(id, 1);
  console.log(retrivedatas);
    localStorage.setItem("course", JSON.stringify(retrivedatas));
    
}




 
function addcoursename(){

  let value=document.getElementById("coursenametxt").value;

  let retrivedatas=JSON.parse(localStorage.getItem("course"));
  let len=retrivedatas.length;
   
  let data={"id":len,"name":value};
  retrivedatas.push(data);
  localStorage.setItem("course",JSON.stringify(retrivedatas));
  let row=document.createElement('tr');
  row.setAttribute("id","row__"+(len+1)) ;
  row.innerHTML=`<td>${len}</td><td>${data['name']}</td>`;
  let parent=document.getElementById('tbody_2')
  parent.append(row);
}



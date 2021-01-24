//console.log("index.js is working")
const emp_List = document.querySelector('.emp');
const searched_List = document.querySelector('.searched');
const logedOutLinks = document.querySelector(".logged-out");
const logedInLinks = document.querySelectorAll('.logged-in');
const Form =document.querySelector(".searchForm");
const d_excel=document.querySelector("#download_excel");

let Search_value=document.querySelector("#search");

myfucn=(data)=>{

  //data=JSON.stringify(data)
  //d_loadWord();
  //console.log(data);
  //("this is aditys file"); 
  get_Individual_data_by_ID(data);
}

get_Individual_data_by_ID = (id)=>{
  db.collection('employee').doc(id).get().then((snapshot)=>{
    generate(snapshot.data());
  })





}


del_indi=(data)=>{
  //deleting individual employee data
  
  db.collection('employee').doc(data).delete().then(()=>{
    alert('Deleted');
  })



  
}
const setupUI=(user)=>{

  if(user){
    logedInLinks.forEach(item =>item.style.display='block');
    logedOutLinks.style.display='none';

  }else{
   
    logedInLinks.forEach(item =>item.style.display='none');
    logedOutLinks.style.display='block';
  }

}

const setup_emp = data =>{
  if(data.length){
    
    console.log("this first running");
   
    let html ='';

    data.forEach(doc =>{
     let temp = doc.id;
      //console.log(temp)
      html +=  `<li>
      <div class="collapsible-header grey lighten-4">${doc.data().Name.toUpperCase()}</div>
      <div class="collapsible-body white">Position Applied For : ${doc.data().Position_applied_for.toUpperCase()}
      <br>Email : ${doc.data().Email}
      <br>Phone Number1 : ${doc.data().Phone1}
      <br>Phone Number2 : ${doc.data().Phone2}
      <br><br>
      <button id="in-doc" value="${temp}" onclick="myfucn(value)" class="btn waves-effect waves-light btn"><i class="material-icons center">download</i></button>
      <button id="indi_del" value="${temp}" onclick="del_indi(value)" class="btn red waves-effect waves-light btn"><i class="material-icons center">delete</i></button>
      </div>
    </li>`
    });
    emp_List.innerHTML=html;
  }
  else{
    console.log("this is running");
    emp_List.innerHTML='<h5 class="center-align">You Are Not Logged In</h5>';
  }
};

const Search_setup_emp = data =>{

  if(data){
    if(data==("LOGGEDOUT")){
      searched_List.innerHTML='<h5 class="center-align"></h5>';
    }
    else{
      console.log("Search_setup_emp running");
      console.log(data.id);
      let temp = data.id;
       let html ='';
       html +=  `<li>
       <div class="collapsible-header grey lighten-4">${data.data().Name.toUpperCase()}</div>
       <div class="collapsible-body white">Position Applied For : ${data.data().Position_applied_for.toUpperCase()}
       <br>Email : ${data.data().Email}
       <br>Phone Number1 : ${data.data().Phone1}
       <br>Phone Number2 : ${data.data().Phone2}
       <br><br>
       <button id="in-doc" value="${temp}" onclick="myfucn(value)" class="btn waves-effect waves-light btn"><i class="material-icons center">download</i></button>
       <button id="indi_del" value="${temp}" onclick="del_indi(value)" class="btn red waves-effect waves-light btn"><i class="material-icons center">delete</i></button>
       </div>
     </li>`
   
       // data.forEach(doc =>{
       //  let temp = doc.data().id;
       //   console.log(temp)
       //   html +=  `<li>
       //   <div class="collapsible-header grey lighten-4">${data.data().name}</div>
       //   <div class="collapsible-body white">${data.data().phone}
       //   <br>
       //   <button id="in-doc" value="${temp}" onclick="myfucn(value)" class="btn-floating waves-effect waves-light btn"><i class="material-icons left">download</i></button>
       //   </div>
       // </li>`
       // });
       searched_List.innerHTML=html;
    }
    
  
  }
  else{
    console.log("this is running");
    searched_List.innerHTML='<h5 class="center-align">Not Found</h5>';
  }
};


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});

Form.addEventListener('submit',e=>{
  e.preventDefault();
  get_Individual_data(Search_value.value);
})


d_excel.addEventListener('click',(e)=>{
  let all_data=[];
  e.preventDefault();
  console.log('excel button pressed');
 
  db.collection('employee').get().then((snapshot)=>{
    snapshot.docs.forEach((doc)=>{
      //console.log(doc.data())
      all_data.push( doc.data());
      
    });
    //console.log(all_data);
    d_loadExcel(all_data);
  }).catch((e)=>{console.log(e)});
})





// const btn =document.querySelector("#modal1 > div.modal-footer > a");

// btn.addEventListener('click',(e)=>{
//   e.preventDefault();
  
// console.log("modal button pressed");

// });

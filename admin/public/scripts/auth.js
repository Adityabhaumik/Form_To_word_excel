const logInForm =document.querySelector('#login-form');
const logOut =document.querySelector('#logout');




auth.onAuthStateChanged(user=>{
    
    if(user){
        console.log('user logged in: ',user);
        db.collection('employee').onSnapshot(data=>{
            console.log(data);
             setup_emp(data.docs);
             setupUI(user);
        })
    }
    else{
        // console.log("this is running in auth");
        console.log('user logged out');
        setup_emp([]);
        setupUI();
        Search_setup_emp("LOGGEDOUT");
    }
})


logInForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = logInForm['login-email'].value;
    const pass = logInForm['login-password'].value;
    auth.signInWithEmailAndPassword(email,pass).then(cred=>{
        console.log('user logged in ',cred);
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        logInForm.reset();
    });

})


logout.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log("loged out")
    });
})


//geting indivudual users

get_Individual_data=(Name)=>{
   // console.log("get indi ran")
    Name=Name.toUpperCase();
   db.collection("employee").where("Name","==",Name).get().then((querySnapshot) => {
    // console.log(querySnapshot);
    if(querySnapshot.docs.length>0){
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().Name}`);
            Search_setup_emp(doc);
        });
    }
    else{
        Search_setup_emp();

    }
  
});

}

   

//console.log("I am on biatch")
const form = document.querySelector('#create-form');
const submit_btn=document.querySelector("#submit > button");


let   category; 
let   position_applied_for;

//---------------personal details----------------
let   Applicants_name;
let   email;
let   phone1;
let   phone2;
let   marital_status;
let   nationality;
let   present_address;
let   permanent_address;
let   passport_number;
let   passport_validity;
let   dob;
let   age;
let   applying_time;

let   pan_number;
let   blood_group;

let   emergency_contact_name;
let   emergency_contact_realtion;
let   emergency_contact_phoneNumber;

//------------xxxpersonal details--------------------



//-----------family details

let   family_1_name;
let   family_1_relation;
let   family_1_occoupation;
let   family_1_DOB;


let   family_2_name;
let   family_2_relation;
let   family_2_occoupation;
let   family_2_DOB;




let   family_3_name;
let   family_3_relation;
let   family_3_occoupation;
let   family_3_DOB;



let   family_4_name;
let   family_4_relation;
let   family_4_occoupation;
let   family_4_DOB;

//---------------xxx----family details

//--------------------education
let   X_qualification;
let   X_From_to;
let   X_schoolName;
let   X_sub;
let   X_cgpa_marks ;

let   XII_qualification;
let   XII_From_to;
let   XII_schoolName;
let   XII_sub;
let   XII_cgpa_marks ;

let  grad_qualification;
let  grad_From_to;
let  grad_schoolName;
let  grad_sub;
let  grad_cgpa_marks ;


let  post_grad_qualification;
let  post_grad_From_to;
let  post_grad_schoolName;
let  post_grad_sub;
let  post_grad_cgpa_marks ;

let  special_achivements;
let  extra_ciricular;
let  training_and_special_coursed;

let  professional_insti_1_name;
let  professional_insti_1_address;
let  professional_insti_grade_1_member;
let  professional_insti_level_1_involvment;

let  professional_insti_2_name;
let  professional_insti_2_address;
let  professional_insti_grade_2_member;
let  professional_insti_level_2_involvment;

let  professional_insti_3_name;
let  professional_insti_3_address;
let  professional_insti_grade_3_member;
let  professional_insti_level_3_involvment;

//------------------xxxEducation

let pre_work_exp;
let why_apply;
let significant_contri;
let details_current_job;
let notice_period;
let expected_salry;

let position_held;
let how_know_us;
let location_constrains;

let prev_try_withUS;
let prev_try_withUS_position_year;
let prev_try_selected_interview;
let prev_try_ofer_made;
let prev_employe;
let prev_try_add_info;

let references;
let references_in_company;
let references_in_company_position;

let current_compensation_name;
let current_compensation_current_employer;
let current_compensation_current_position;
let current_compensation_current_location;

let current_compensation_monthly_basic_amount;
let current_compensation_monthly_basic_remark;

let current_compensation_monthly_hra_amount;
let current_compensation_monthly_hra_remark;

let current_compensation_monthly_allowences_amount;
let current_compensation_monthly_allowences_remark;


let current_compensation_monthly_provident_fund_amount;
let current_compensation_monthly_provident_fund_remark;


let current_compensation_monthly_anyOther_amount;
let current_compensation_monthly_anyOther_remark;


let current_compensation_monthly_total_amount;
let current_compensation_monthly_total_remark;


let current_compensation_monthly_total_anualized_amount;
let current_compensation_monthly_total_anualized_remark;

let current_compensation_annual_bonus;
let current_compensation_annual_bonus_remarks;

let current_compensation_annual_lta;
let current_compensation_annual_lta_remarks;

let current_compensation_annual_medical;
let current_compensation_annual_medical_remarks;

let current_compensation_annual_gratutity;
let current_compensation_annual_gratutity_remarks;


let current_compensation_annual_super_anuation;
let current_compensation_annual_super_anuation_remarks;

let current_compensation_annual_anyOther;
let current_compensation_annual_anyOther_remarks;

let current_compensation_annual_leave_encashment;
let current_compensation_annual_leave_encashment_remarks;

let current_compensation_annual_total;
let current_compensation_annual_total_remarks;


let current_compensation_vehical_repaire_maintain;

let current_compensation_vehical_repaire_maintain_remarks;

let current_compensation_petrol;
let current_compensation_petrol_remarks;

let current_compensation_driver_wages;
let current_compensation_driver_wages_remarks;

let current_compensation_total_car;
let current_compensation_total_ca_remarks;

let current_compensation_grand_total;
let current_compensation_grand_total_remarks;

let current_compensation_note_other_benifits;

submit_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    applying_time=new Date();
    category=document.querySelector('input[id="category"]:checked').value
    position_applied_for=document.querySelector("#position").value;

    //-----------personal details
    Applicants_name=document.querySelector("#name").value.trim().toUpperCase();
    email=document.querySelector("#email").value.trim()
    phone1=document.querySelector("#phoneNumber1").value.trim()
    phone2=document.querySelector("#phoneNumber2").value.trim()
    marital_status=document.querySelector("#marital_status").value.trim()
    nationality=document.querySelector("#nationality").value.trim()

    permanent_address=document.querySelector("#permanent_addres").value.trim()
    present_address=document.querySelector("#present_addres").value.trim()
    passport_number=document.querySelector("#passPort").value.trim()
    passport_validity=document.querySelector("#passPort_validity").value.trim()
    age=document.querySelector("#age").value.trim();
    dob=document.querySelector("#dob").value
    pan_number = document.querySelector("#pan_number").value;
    blood_group=document.querySelector("#blood_group").value;
    emergency_contact_name=document.querySelector("#emmercency_contact_name_1").value;
    emergency_contact_realtion=document.querySelector("#emmercency_contact_relation_1").value;
    emergency_contact_phoneNumber=document.querySelector("#emmercency_contact_Phone_1").value;
    //-----------xxx------personal details

    //------------------------family-details---------

    family_1_name=document.querySelector("#family_name_1").value;
    family_1_relation=document.querySelector("#family_relation_1").value;
    family_1_occoupation=document.querySelector("#family_occoupation_1").value;
    family_1_DOB=document.querySelector("#family_DOB_1").value;


    family_2_name=document.querySelector("#family_name_2").value;
    family_2_relation=document.querySelector("#family_relation_2").value;
    family_2_occoupation=document.querySelector("#family_occoupation_2").value;
    family_2_DOB=document.querySelector("#family_DOB_2").value;




    family_3_name=document.querySelector("#family_name_3").value;
    family_3_relation=document.querySelector("#family_name_3").value;
    family_3_occoupation=document.querySelector("#family_relation_3").value;
    family_3_DOB=document.querySelector("#family_DOB_3").value;



    family_4_name=document.querySelector("#family_name_4").value;
    family_4_relation=document.querySelector("#family_relation_4").value;
    family_4_occoupation=document.querySelector("#family_occoupation_4").value;
    family_4_DOB=document.querySelector("#family_DOB_4").value;




    //--------------------------xxx family details--------

    //-------------------------xxx Education---------------
   
    X_qualification=document.querySelector("#X_qualification_awarded").value.trim();
    X_From_to=document.querySelector("#X_years").value.trim();
    X_schoolName=document.querySelector("#X_schoolName").value.trim();
    X_sub=document.querySelector("#Xsub").value.trim()
    X_cgpa_marks =document.querySelector("#X_marks").value.trim()

    XII_qualification=document.querySelector("#XII_qualification_awarded").value.trim();;
    XII_From_to=document.querySelector("#XII_years").value.trim();
    XII_schoolName=document.querySelector("#XII_schoolName").value.trim();
    XII_sub=document.querySelector("#XIIsub").value.trim();
    XII_cgpa_marks =document.querySelector("#XII_marks").value.trim();
    
    grad_qualification=document.querySelector("#grad_qualification_awarded").value.trim();
    grad_From_to=document.querySelector("#grad_years").value.trim();
    grad_schoolName=document.querySelector("#grad_schoolName").value.trim();
    grad_sub=document.querySelector("#grad_sub").value.trim();
    grad_cgpa_marks =document.querySelector("#grad_marks").value.trim();


    post_grad_qualification=document.querySelector("#post_grad_qualification_awarded").value.trim();
    post_grad_From_to=document.querySelector("#post_grad_years").value.trim();
    post_grad_schoolName=document.querySelector("#post_grad_schoolName").value.trim();
    post_grad_sub=document.querySelector("#post_grad_sub").value.trim();
    post_grad_cgpa_marks =document.querySelector("#post_grad_marks").value.trim();

    special_achivements=document.querySelector("#sig_achivment").value.trim();
    extra_ciricular=document.querySelector("#e_c_activities").value.trim();
    training_and_special_coursed=document.querySelector("#sig_achivment").value.trim();
   
    professional_insti_1_name=document.querySelector("#professional_membership_name_1").value;
    professional_insti_1_address=document.querySelector("#professional_membership_address_1").value;
    professional_insti_grade_1_member=document.querySelector("#professional_membership_grade_1").value;
    professional_insti_level_1_involvment=document.querySelector("#professional_membership_Level_involvement_1").value;

    professional_insti_2_name=document.querySelector("#professional_membership_name_2").value;
    professional_insti_2_address=document.querySelector("#professional_membership_address_2").value;
    professional_insti_grade_2_member=document.querySelector("#professional_membership_grade_2").value;
    professional_insti_level_2_involvment=document.querySelector("#professional_membership_Level_involvement_2").value;

    professional_insti_3_name=document.querySelector("#professional_membership_name_3").value;
    professional_insti_3_address=document.querySelector("#professional_membership_address_3").value;
    professional_insti_grade_3_member=document.querySelector("#professional_membership_grade_3").value;
    professional_insti_level_3_involvment=document.querySelector("#professional_membership_Level_involvement_3").value;

    //--------------xxx-------education---------------------



    pre_work_exp=document.querySelector("#work_ex").value.trim();
    why_apply=document.querySelector("#c_vision").value.trim(); 
    significant_contri=document.querySelector("#s_contribution").value.trim(); 
    details_current_job=document.querySelector("#work_ex_details_current").value.trim();
    notice_period=document.querySelector("#notice_priod").value.trim();
    expected_salry=document.querySelector("#expected_salry").value.trim(); 
        
    position_held=document.querySelector("#work_ex_details").value.trim();
    how_know_us=document.querySelector("#KnowingUs").value.trim();
    location_constrains=document.querySelector("#location_constraints").value.trim(); 

    prev_try_withUS=document.querySelector("#prev_try").value.trim();
    prev_try_withUS_position_year=document.querySelector("#previous_try").value.trim();
    prev_try_selected_interview=document.querySelector("#prev_try_selected_interview").value.trim();
    prev_try_ofer_made=document.querySelector("#prev_try_offer_made").value.trim();
    prev_employe=document.querySelector("#prev_try_emp").value.trim();
    prev_try_add_info=document.querySelector("#previous_try_add_info").value.trim();
    references=document.querySelector("#references").value.trim();
    references_in_company=document.querySelector("#references_relatives_inCompany").value.trim();
    references_in_company_position=document.querySelector("#references_relatives_inCompany_yes").value.trim();
    current_compensation_name=document.querySelector("#current_name").value.trim();
    current_compensation_current_employer=document.querySelector("#current_org").value.trim();
    current_compensation_current_location=document.querySelector("#current_pos").value.trim();
    current_compensation_current_position=document.querySelector("#current_location").value.trim();

    current_compensation_monthly_basic_amount=document.querySelector("#monthly_basic").value.trim();
    current_compensation_monthly_basic_remark=document.querySelector("#monthly_basic_remarks").value.trim();

    current_compensation_monthly_hra_amount=document.querySelector("#monthly_HRA").value.trim();
    current_compensation_monthly_hra_remark=document.querySelector("#monthly_HRA_remarks").value.trim();

    current_compensation_monthly_allowences_amount=document.querySelector("#monthly_allowances").value.trim();
    current_compensation_monthly_allowences_remark=document.querySelector("#monthly_allowances_remarks").value.trim();

    current_compensation_monthly_provident_fund_amount=document.querySelector("#monthly_provident_fund").value.trim();
    current_compensation_monthly_provident_fund_remark=document.querySelector("#monthly_provident_fund_remarks").value.trim();

    current_compensation_monthly_anyOther_amount=document.querySelector("#monthly_anyOther").value.trim();
    current_compensation_monthly_anyOther_remark=document.querySelector("#monthly_anyOther_remarks").value.trim();

    current_compensation_monthly_total_amount=document.querySelector("#monthly_total").value.trim();
    current_compensation_monthly_total_remark=document.querySelector("#monthly_total_remarks").value.trim();

    current_compensation_monthly_total_anualized_amount=document.querySelector("#monthly_anualized").value.trim();
    current_compensation_monthly_total_anualized_remark=document.querySelector("#monthly_anualized_remarks").value.trim();


    current_compensation_annual_bonus=document.querySelector("#bonus_anualized").value.trim();
    current_compensation_annual_bonus_remarks=document.querySelector("#bonus_anualized_remarks").value.trim();
    
    current_compensation_annual_lta=document.querySelector("#LTA_anualized").value.trim();
    current_compensation_annual_lta_remarks=document.querySelector("#LTA_anualized_remarks").value.trim();
    
    current_compensation_annual_medical=document.querySelector("#medical_anualized").value.trim();
    current_compensation_annual_medical_remarks=document.querySelector("#medical_anualized_remarks").value.trim();
    
    current_compensation_annual_gratutity=document.querySelector("#Gratuity_anualized").value.trim();
    current_compensation_annual_gratutity_remarks=document.querySelector("#Gratuity_anualized_remarks").value.trim();
    
    current_compensation_annual_super_anuation=document.querySelector("#super_anuation_anualized").value.trim();
    current_compensation_annual_super_anuation_remarks=document.querySelector("#super_anuation_anualized_remarks").value.trim();
    
    current_compensation_annual_anyOther=document.querySelector("#anyOther_anualized").value.trim();
    current_compensation_annual_anyOther_remarks=document.querySelector("#anyOther_anualized_remarks").value.trim();
    
    current_compensation_annual_leave_encashment=document.querySelector("#leaveEncashment").value.trim();
    current_compensation_annual_leave_encashment_remarks=document.querySelector("#leaveEncashment_remarks").value.trim();
    
    current_compensation_annual_total=document.querySelector("#annual_total").value.trim();
    current_compensation_annual_total_remarks=document.querySelector("#annual_total_remarks").value.trim();

    current_compensation_vehical_repaire_maintain=document.querySelector("#vehicle_rep_maintain").value.trim();
    current_compensation_vehical_repaire_maintain_remarks=document.querySelector("#vehicle_rep_maintain_remarks").value.trim();

    current_compensation_petrol=document.querySelector("#vehicle_petrol").value.trim();
    current_compensation_petrol_remarks=document.querySelector("#vehicle_petrol_remarks").value.trim();

    current_compensation_driver_wages=document.querySelector("#vehicle_driver_wages").value.trim();
    current_compensation_driver_wages_remarks=document.querySelector("#vehicle_driver_wages_remarks").value.trim();

    current_compensation_total_car=document.querySelector("#car_total").value.trim();
    current_compensation_total_ca_remarks=document.querySelector("#car_total_remarks").value.trim();

    current_compensation_grand_total=document.querySelector("#grand_total").value.trim();
    current_compensation_grand_total_remarks=document.querySelector("#grand_total_remarks").value.trim();
    current_compensation_note_other_benifits= document.querySelector("#notes_Other_benifits").value.trim();



//     console.log(
        
//    category,
//    position_applied_for,
//    name,
//    email,
//    phone1,
//    phone2,
//    marital_status,
//    nationality,
//    present_address,
//    permanent_address,
//    passport_number,
//    passport_validity,
//    dob,
//    languages_can_speak,
//    languages_can_read,
//    languages_can_write,

//    fathers_name,
//    fathers_age,
//    fathers_edu,
//    fathers_emp,


//    mother_name,
//    mother_age,
//    mother_edu,
//    mother_emp,


//    spouse_name,
//    spouse_age,
//    spouse_edu,
//    spouse_emp,


//    child_name,
//    child_age,
//    child_edu,
//    child_emp,


//    X_qualification,
//    X_From_to,
//    X_schoolName,
//    X_sub,
//    X_cgpa_marks ,

//    XII_qualification,
//    XII_From_to,
//    XII_schoolName,
//    XII_sub,
//    XII_cgpa_marks ,

//   grad_qualification,
//   grad_From_to,
//   grad_schoolName,
//   grad_sub,
//   grad_cgpa_marks ,


//   post_grad_qualification,
//   post_grad_From_to,
//   post_grad_schoolName,
//   post_grad_sub,
//   post_grad_cgpa_marks ,

//   special_achivements,
//   extra_ciricular,
//   training_and_special_coursed,

//   professional_insti_name,
//   professional_insti_grade_member,
//   professional_insti_level_involvment,


//  pre_work_exp,
//  why_apply,
//  significant_contri,

//  position_held,
//  how_know_us,
//  location_constrains,

//  prev_try_withUS,
//  prev_try_withUS_position_year,
//  prev_try_selected_interview,
//  prev_try_ofer_made,
//  prev_employe,
//  prev_try_add_info,

//  current_compensation_name,
//  current_compensation_current_employer,
//  current_compensation_current_position,
//  current_compensation_current_location,

//  current_compensation_monthly_basic_amount,
//  current_compensation_monthly_basic_remark,

//  current_compensation_monthly_hra_amount,
//  current_compensation_monthly_hra_remark,

//  current_compensation_monthly_allowences_amount,
//  current_compensation_monthly_allowences_remark,


//  current_compensation_monthly_provident_fund_amount,
//  current_compensation_monthly_provident_fund_remark,


//  current_compensation_monthly_anyOther_amount,
//  current_compensation_monthly_anyOther_remark,


//  current_compensation_monthly_total_amount,
//  current_compensation_monthly_total_remark,


//  current_compensation_monthly_total_anualized_amount,
//  current_compensation_monthly_total_anualized_remark,

//  current_compensation_annual_bonus,
//  current_compensation_annual_bonus_remarks,

//  current_compensation_annual_lta,
//  current_compensation_annual_lta_remarks,

//  current_compensation_annual_medical,
//  current_compensation_annual_medical_remarks,

//  current_compensation_annual_gratutity,
//  current_compensation_annual_gratutity_remarks,


//  current_compensation_annual_super_anuation,
//  current_compensation_annual_super_anuation_remarks,

//  current_compensation_annual_anyOther,
//  current_compensation_annual_anyOther_remarks,

//  current_compensation_annual_leave_encashment,
//  current_compensation_annual_leave_encashment_remarks,

//  current_compensation_annual_total,
//  current_compensation_annual_total_remarks,


//  current_compensation_vehical_repaire_maintain,

//  current_compensation_vehical_repaire_maintain_remarks,

//  current_compensation_petrol,
//  current_compensation_petrol_remarks,

//  current_compensation_driver_wages,
//  current_compensation_driver_wages_remarks,

//  current_compensation_total_car,
//  current_compensation_total_ca_remarks,

//  current_compensation_grand_total,
//  current_compensation_grand_total_remarks,




//     )


    //console.log(pre_work_exp,why_apply,significant_contri);

//    console.log(category,position_applied_for,name,email,phone1,phone2,marital_status,nationality,permanent_address,present_address,passport_number,passport_validity,dob,languages_can_speak,languages_can_write,languages_can_read)
   
   

//    console.log(fathers_name,fathers_age,fathers_edu,fathers_emp,mother_name,mother_age,mother_edu,mother_emp,spouse_age,spouse_name,spouse_edu,spouse_emp,child_name,child_age,child_edu,child_emp)
   
  //console.log(X_qualification,X_From_to,X_cgpa_marks,X_schoolName,X_sub); 
   
//    console.log(grad_qualification,grad_From_to,grad_schoolName,grad_cgpa_marks,post_grad_From_to,post_grad_qualification,post_grad_schoolName,post_grad_cgpa_marks,special_achivements,extra_ciricular,training_and_special_coursed,professional_insti_level_involvment,professional_insti_grade_member,professional_insti_name);
   








   
   
   
   
   
    db.collection('employee').add({
        //------------------------------------------------------------------personal details
        Age:age,
        Applying_date:applying_time,
        Category:category,
        Position_applied_for:position_applied_for,
        Name:Applicants_name,
        Email:email,
        Phone1:phone1,
        Phone2:phone2,
        Marital_status:marital_status,
        Nationality:nationality,
        present_address:present_address,
        Permanent_address:permanent_address,
        DateOFBirth:dob,
        Passport_number:passport_number,
        Passport_validity:passport_validity,

        Pan_Number:pan_number,
        Blood_group:blood_group,
        Emergency_contact_Name:emergency_contact_name,
        Emergency_contact_Relation:emergency_contact_realtion,
        Emergency_contact_PhoneNumber:emergency_contact_phoneNumber,
        //-------------------------------------------------------------xxx---personal details
        //family--details
        Family_1_Name:family_1_name,
        Family_1_Relation:family_1_relation,
        Family_1_Occoupation:family_1_occoupation,
        Family_1_DOB:family_1_DOB,

        Family_2_Name:family_2_name,
        Family_2_Relation:family_2_relation,
        Family_2_Occoupation:family_2_occoupation,
        Family_2_DOB:family_2_DOB,

        Family_3_Name:family_3_name,
        Family_3_Relation:family_3_relation,
        Family_3_Occoupation:family_3_occoupation,
        Family_3_DOB:family_3_DOB,

        Family_4_Name:family_4_name,
        Family_4_Relation:family_4_relation,
        Family_4_Occoupation:family_4_occoupation,
        Family_4_DOB:family_4_DOB,

        
        //---xxxfamily details---------------------

        //---education -----------------


        X_Qualification_Award:X_qualification,
        X_From_To:X_From_to,
        X_SchoolName:X_schoolName,
        X_Subject_Specialization:X_sub,
        X_Grade:X_cgpa_marks,
        XII_Qualification_Award:XII_qualification,
        XII_From_To:XII_From_to,
        XII_SchoolName:XII_schoolName,
        XII_Subject_Specialization:XII_sub,
        XII_CGPA_Marks:XII_cgpa_marks,
        Graduation_Qualification_Award:grad_qualification,
        Graduation_From_To:grad_From_to,
        Graduation_SchoolName:grad_schoolName,
        Graduation_Subject_Specialization:grad_sub,
        Graduation_CGPA_Marks:grad_cgpa_marks,
        Post_Graduation_Qualification_Award:post_grad_qualification,
        Post_Graduation_From_To:post_grad_From_to,
        Post_Graduation_SchoolName:post_grad_schoolName,
        Post_Graduation_Subject_Specialization:post_grad_sub,
        Post_Graduation_CGPA_Marks:post_grad_cgpa_marks,
        Significant_Achievements:special_achivements,
        Extra_Ciricular_Activities:extra_ciricular,
        Training_Special_Courses:training_and_special_coursed,

        Professional_Membership_1_Name_insti:professional_insti_1_name,
        Professional_Membership_1_Addresss_insti:professional_insti_1_address,
        Professional_Membership_1_Grade_membership:professional_insti_grade_1_member,
        Professional_Membership_1_Level_involvement:professional_insti_level_1_involvment,

        Professional_Membership_2_Name_insti:professional_insti_2_name,
        Professional_Membership_2_Addresss_insti:professional_insti_2_address,
        Professional_Membership_2_Grade_membership:professional_insti_grade_2_member,
        Professional_Membership_2_Level_involvement:professional_insti_level_2_involvment,

        Professional_Membership_3_Name_insti:professional_insti_3_name,
        Professional_Membership_3_Addresss_insti:professional_insti_3_address,
        Professional_Membership_3_Grade_membership:professional_insti_grade_3_member,
        Professional_Membership_3_Level_involvement:professional_insti_level_3_involvment,

        //---xxx education---------------------

        //-----------work Experience
        Work_Experience:pre_work_exp,
        Why_Apply:why_apply,
        Significant_Contribution:significant_contri,
        Details_current_Job:details_current_job,
        Notice_period:notice_period,
        Expected_Salary:expected_salry,
        Details_Position:position_held,
        How_Know_Us:how_know_us,
        Locaion_Constrains:location_constrains,
        Previous_apply:prev_try_withUS,
        Previous_apply_Position_year:prev_try_withUS_position_year,
        Previous_Selected_interview:prev_try_selected_interview,
        Previous_Made_offer:prev_try_ofer_made,
        Previous_employee:prev_employe,
        Previous_additional_info:prev_try_add_info,

        Reference:references,
        Reference_relative:references_in_company,
        Reference_relative_position:references_in_company_position,

        Current_Compensation_Name:current_compensation_name,
        Current_Compensation_Employer:current_compensation_current_employer,
        Current_Compensation_Position:current_compensation_current_position,
        Current_Compensation_Location:current_compensation_current_location,
        Current_Compensation_Monthly_Basic_Amount:current_compensation_monthly_basic_amount,
        Current_Compensation_Monthly_Basic_Remark:current_compensation_monthly_basic_remark,
        Current_Compensation_Monthly_HRA_Amount:current_compensation_monthly_hra_amount,
        Current_Compensation_Monthly_HRA_Remark:current_compensation_monthly_hra_remark,
        Current_Compensation_Monthly_Allowances_Amount:current_compensation_monthly_allowences_amount,
        Current_Compensation_Monthly_Allowances_Remark:current_compensation_monthly_allowences_remark,
        Current_Compensation_Monthly_ProvidentFund_Amount:current_compensation_monthly_provident_fund_amount,
        Current_Compensation_Monthly_ProvidentFund_Remark:current_compensation_monthly_provident_fund_remark,
        Current_Compensation_Monthly_AnyOther_Amount:current_compensation_monthly_anyOther_amount,
        Current_Compensation_Monthly_AnyOther_Remark:current_compensation_monthly_anyOther_remark,
        Current_Compensation_Monthly_Total_Amount:current_compensation_monthly_total_amount,
        Current_Compensation_Monthly_Total_Remark:current_compensation_monthly_total_remark,
        Current_Compensation_Monthly_Total_Anualized_Amount:current_compensation_monthly_total_anualized_amount,
        Current_Compensation_Monthly_Total_Anualized_Remark:current_compensation_monthly_total_anualized_remark,
        Current_Compensation_Annual_Bonus_Amount:current_compensation_annual_bonus,
        Current_Compensation_Annual_Bonus_Remarks:current_compensation_annual_bonus_remarks,
        Current_Compensation_Annual_LTA_Amount:current_compensation_annual_lta,
        Current_Compensation_Annual_LTA_Remarks:current_compensation_annual_lta_remarks,
        Current_Compensation_Annual_Medical_Amount:current_compensation_annual_medical,
        Current_Compensation_Annual_Medical_remarks:current_compensation_annual_medical_remarks,
        Current_Compensation_Annual_Gratuity_Amount:current_compensation_annual_gratutity,
        Current_Compensation_Annual_Gratuity_Remark:current_compensation_annual_gratutity_remarks,
        Current_Compensation_Annual_SuperAnuation_Amount:current_compensation_annual_super_anuation,
        Current_Compensation_Annual_SuperAnuation_Remark:current_compensation_annual_super_anuation_remarks,
        Current_Compensation_Annual_AnyOther_Amount:current_compensation_annual_anyOther,
        Current_Compensation_Annual_AnyOther_Remark:current_compensation_annual_anyOther_remarks,
        Current_Compensation_Annual_LeaveEncashment_Amount:current_compensation_annual_leave_encashment,
        Current_Compensation_Annual_LeaveEncashment_Remarks:current_compensation_annual_leave_encashment_remarks,
        Current_Compensation_Annual_Total_Amount:current_compensation_annual_total,
        Current_Compensation_Annual_Total_Remark:current_compensation_annual_total_remarks,
        Current_Compensation_Car_Maintainence_Ammount:current_compensation_vehical_repaire_maintain,
        Current_Compensation_Car_Maintainence_Remark:current_compensation_vehical_repaire_maintain_remarks,
        Current_Compensation_Car_Petrol_Ammount:current_compensation_petrol,
        Current_Compensation_Car_Petrol_Remarks:current_compensation_petrol_remarks,
        Current_Compensation_Car_Driver_Ammount:current_compensation_driver_wages,
        Current_Compensation_Car_Driver_Remarks:current_compensation_driver_wages_remarks,
        Current_Compensation_Car_Total_Amount:current_compensation_total_car,
        Current_Compensation_Car_Total_Remarks:current_compensation_total_ca_remarks,
        Current_Compensation_GrandTotal_Amount:current_compensation_grand_total,
        Current_Compensation_GrandTotal_Remarks:current_compensation_grand_total_remarks,
        Current_Compensation_Note_OtherCompensation:current_compensation_note_other_benifits,
    }
       
    ).then((e)=>{
        
   age=null; 
   category=null; 
   position_applied_for=null;
   name=null;
   email=null;
   phone1=null;
   phone2=null;
   marital_status=null;
   nationality=null;
   present_address=null;
   permanent_address=null;
   passport_number=null;
   passport_validity=null;
   dob=null;



   family_1_name=null,
   family_1_relation=null,
   family_1_occoupation=null,
   family_1_DOB=null,
   

   family_2_name=null,
   family_2_relation=null,
   family_2_occoupation=null,
   family_2_DOB=null,
   

   family_3_name=null,
   family_3_relation=null,
   family_3_occoupation=null,
   family_3_DOB=null,
   

   family_4_name=null,
   family_4_relation=null,
   family_4_occoupation=null,
   family_4_DOB=null,


   X_qualification=null;
   X_From_to=null;
   X_schoolName=null;
   X_sub;
   X_cgpa_marks=null ;

   XII_qualification=null;
   XII_From_to=null;
   XII_schoolName=null;
   XII_sub=null;
   XII_cgpa_marks=null ;

  grad_qualification=null;
  grad_From_to=null;
  grad_schoolName=null;
  grad_sub=null;
  grad_cgpa_marks=null ;


  post_grad_qualification=null;
  post_grad_From_to=null;
  post_grad_schoolName=null;
  post_grad_sub=null;
  post_grad_cgpa_marks=null ;

  special_achivements=null;
  extra_ciricular=null;
  training_and_special_coursed=null;

  professional_insti_1_name=null,
  professional_insti_1_address=null,
  professional_insti_grade_1_member=null,
  professional_insti_level_1_involvment=null,

  
  professional_insti_2_name=null,
  professional_insti_2_address=null,
  professional_insti_grade_2_member=null,
  professional_insti_level_2_involvment=null,
  
  professional_insti_3_name=null,
  professional_insti_3_address=null,
  professional_insti_grade_3_member=null,
  professional_insti_level_3_involvment=null,

 pre_work_exp=null;
 why_apply=null;
 significant_contri=null;
 details_current_job=null;
 notice_period=null;
 expected_salry=null;

 position_held=null;
 how_know_us=null;
 location_constrains=null;

 prev_try_withUS=null;
 prev_try_withUS_position_year=null;
 prev_try_selected_interview=null;
 prev_try_ofer_made=null;
 prev_employe=null;
 prev_try_add_info=null;

 current_compensation_name=null;
 current_compensation_current_employer=null;
 current_compensation_current_position=null;
 current_compensation_current_location=null;

 current_compensation_monthly_basic_amount=null;
 current_compensation_monthly_basic_remark=null;

 current_compensation_monthly_hra_amount=null;
 current_compensation_monthly_hra_remark=null;

 current_compensation_monthly_allowences_amount=null;
 current_compensation_monthly_allowences_remark=null;


 current_compensation_monthly_provident_fund_amount=null;
 current_compensation_monthly_provident_fund_remark=null;


 current_compensation_monthly_anyOther_amount=null;
 current_compensation_monthly_anyOther_remark=null;


 current_compensation_monthly_total_amount=null;
 current_compensation_monthly_total_remark=null;


 current_compensation_monthly_total_anualized_amount=null;
 current_compensation_monthly_total_anualized_remark=null;

 current_compensation_annual_bonus=null;
 current_compensation_annual_bonus_remarks=null;

 current_compensation_annual_lta=null;
 current_compensation_annual_lta_remarks=null;

 current_compensation_annual_medical=null;
 current_compensation_annual_medical_remarks=null;

 current_compensation_annual_gratutity=null;
 current_compensation_annual_gratutity_remarks=null;


 current_compensation_annual_super_anuation=null;
 current_compensation_annual_super_anuation_remarks=null;

 current_compensation_annual_anyOther=null;
 current_compensation_annual_anyOther_remarks=null;

 current_compensation_annual_leave_encashment=null;
 current_compensation_annual_leave_encashment_remarks=null;

 current_compensation_annual_total=null;
 current_compensation_annual_total_remarks=null;


 current_compensation_vehical_repaire_maintain=null;

 current_compensation_vehical_repaire_maintain_remarks=null;

 current_compensation_petrol=null;
 current_compensation_petrol_remarks=null;

 current_compensation_driver_wages=null;
 current_compensation_driver_wages_remarks=null;

 current_compensation_total_car=null;
 current_compensation_total_ca_remarks=null;

 current_compensation_grand_total=null;
 current_compensation_grand_total_remarks=null;

 current_compensation_note_other_benifits=null;
        alert("Successfully Submitted")
        form.reset();
    }).catch((e)=>{
        alert("Failed!")
        console.log(e);
    })
});

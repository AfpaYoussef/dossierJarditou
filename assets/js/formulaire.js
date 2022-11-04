var validation = document.getElementById ("cliquons");

var nom = document.getElementById ("nom");
var nom_m = document.getElementById ("nom_manquant");
var nom_v = ("^[a-z]+[ \-']?[[a-z]+[ \-']?]*[a-z]+$", "gi");

var prenom = document.getElementById ("prenom");
var prenom_m = document.getElementById ("prenom_manquant");
var prenom_v = ("^[a-z]+[ \-']?[[a-z]+[ \-']?]*[a-z]+$", "gi");

var sexe1 = document.getElementById ("sexe1");
var sexe2 = document.getElementById ("sexe2");
var sexe_m = document.getElementById ("sexe_manquant");

var date1 = document.getElementById ("date1");
var date_m = document.getElementById ("date_manquant");

var codep = document.getElementById ("code_postale");
var codep_m = document.getElementById ("codep_manquant");

var adresse = document.getElementById ("adresse");
var adresse_m = document.getElementById ("adresse_manquante");

var ville = document.getElementById ("ville");
var ville_m = document.getElementById ("ville_manquante");

var email = document.getElementById ("email");
var email_m = document.getElementById ("email_manquant");

var sujet = document.getElementById ("Sujet");
var sujet_m = document.getElementById ("sujet_manquant");

var question = document.getElementById ("question");
var question_m = document.getElementById ("question_manquante");

var traitementinfo = document.getElementById ("traitementinfo");
var traitementinfo_m = document.getElementById ("traitement_manquant");



function validationform (e)  { 

    if (nom.validity.valueMissing) { 
        e.preventDefault();
        nom_m.textContent = "Nom manquant";
        nom_m.style.color = "red";
   
    }
     
     else if (nom_v.test(nom.value) == false) {
        e.preventDefault ();
        nom_m.textContent = "Format incorrect";
        nom_m.style.color = "orange";
    }  


    if (prenom.validity.valueMissing) { 
       e.preventDefault();
       prenom_m.textContent = "Prénom manquant";
       prenom_m.style.color = "red";
  
    }
    
    else if (prenom_v.test(prenom.value) == false) {
       e.preventDefault ();
       prenom_m.textContent = "Format incorrect";
       prenom_m.style.color = "orange";
      
    }

    if (((sexe1.checked)==false) && ((sexe2.checked)==false)) {
        e.preventDefault();
        sexe_m.textContent = "Sexe manquant";
        sexe_m.style.color = "red";
       
    }

    if (date1.validity.valueMissing) {
        e.preventDefault();
        date_m.textContent = "Date de naissance manquante";
        date_m.style.color = "red";
    }


    if (codep.validity.valueMissing) {
        e.preventDefault();
        codep_m.textContent = "Code postal manquant";
        codep_m.style.color = "red";
    }



    if (adresse.validity.valueMissing) {
        e.preventDefault();
        adresse_m.textContent = "Adresse manquante";
        adresse_m.style.color = "red";
    }

    if (ville.validity.valueMissing) {
        e.preventDefault();
        ville_m.textContent = "Ville manquante";
        ville_m.style.color = "red";
    }

    if (email.validity.valueMissing) {
        e.preventDefault();
        email_m.textContent = "Email manquant";
        email_m.style.color = "red";
    }

    if (sujet.validity.valueMissing) {
        e.preventDefault();
        sujet_m.textContent = "Sujet manquant";
        sujet_m.style.color = "red";
    }

    if (question.validity.valueMissing) {
        e.preventDefault();
        question_m.textContent = "Question manquante";
        question_m.style.color = "red";
    }

    if (traitementinfo.validity.valueMissing) {
        e.preventDefault();
        traitementinfo_m.textContent = "Veuillez cocher la case";
        traitementinfo_m.style.color = "red";
    }


}

validation.addEventListener("click", validationform);
// <---------Variables ----------------->

var validation = document.getElementById ("cliquons");

var nom = document.getElementById ("nom");
var nom_m = document.getElementById ("nom_manquant");
var nom_v = /[^ ][a-zA-Z '\-éèêëçäà]*[^ ]$/;

var prenom = document.getElementById ("prenom");
var prenom_m = document.getElementById ("prenom_manquant");
var prenom_v = /^[a-zA-Z '.-]*$/;

var sexe1 = document.getElementById ("sexe1");
var sexe2 = document.getElementById ("sexe2");
var sexe_m = document.getElementById ("sexe_manquant");

var date1 = document.getElementById ("date1");
var date_m = document.getElementById ("date_manquant");
var date_v = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

var codep = document.getElementById ("code_postale");
var codep_m = document.getElementById ("codep_manquant");
var codep_v = /^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$/;

var adresse = document.getElementById ("adresse");
var adresse_m = document.getElementById ("adresse_manquante");

var ville = document.getElementById ("ville");
var ville_m = document.getElementById ("ville_manquante");
var ville_v = /^[a-zA-Z]/;

var email = document.getElementById ("email");
var email_m = document.getElementById ("email_manquant");
var email_v = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;

var sujet = document.getElementById ("Sujet");
var sujet_m = document.getElementById ("sujet_manquant");

var question = document.getElementById ("question");
var question_m = document.getElementById ("question_manquante");

var traitementinfo = document.getElementById ("traitementinfo");
var traitementinfo_m = document.getElementById ("traitement_manquant");

// preventDefault va permettre de bloquer l'envoi des données si la vérification préalable (ou condition "if"), via les propriétés validity, valueMissing et la méthode test, est vérifiée
// La vérification va s'opérer en appelant les variables contenant les regex, spécifiquement créée pour les données sollicitées à l'utilisateur.



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

    if (((sexe1.checked) == false) && ((sexe2.checked) == false)) {
        e.preventDefault();
        sexe_m.textContent = "Sexe manquant";
        sexe_m.style.color = "red";
       
    }

    if (date1.validity.valueMissing) {
        e.preventDefault();
        date_m.textContent = "Date de naissance manquante";
        date_m.style.color = "red";
    }

    else if (date_v.test(date1.value) == false) {
        e.preventDefault();
        date_m.textContent = "Format incorrect";
        date_m.style.color = "orange";
    }    
    

    if (codep.validity.valueMissing) {
        e.preventDefault();
        codep_m.textContent = "Code postal manquant";
        codep_m.style.color = "red";
    }
    
    else if (codep_v.test(code_postale.value) == false) {
        e.preventDefault ();
        codep_m.textContent = "Format incorrect";
        codep_m.style.color = "orange";
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

    else if (ville_v.test(ville.value) == false) {
        e.preventDefault ();
        ville_m.textContent = "Format incorrect";
        ville_m.style.color = "orange";
    }    
    

    if (email.validity.valueMissing) {
        e.preventDefault();
        email_m.textContent = "Email manquant";
        email_m.style.color = "red";
    }

    else if (email_v.test(email.value) == false) {
        e.preventDefault ();
        email_m.textContent = "Format incorrect";
        email_m.style.color = "orange";
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

// <---------addEventListener permet de lier l'exécution de la fonction par l'intermédiaire de l'action du "click" sur le bouton submit 

validation.addEventListener("click", validationform);
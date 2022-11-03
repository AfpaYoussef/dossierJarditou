// Attention : Rafraichir entre deux alertes erreurs, deux utilisations ou deux tests erreurs


// Variables pour la fonction validation du formulaire

var nom = document.forms["form3"]["nom"];               
var prenom = document.forms["form3"]["prenom"];   
var sexe1 = document.getElementById ("sexe1");
var sexe2 = document.getElementById ("sexe2");
var datedenaissance = document.forms ["form3"]["date"]; 
var codepost = document.forms["form3"]["code_postale"];
var adresse =  document.forms["form3"]["adresse"]; 
var ville =  document.forms["form3"]["ville"]; 
var email= document.forms["form3"]["email"];  
var Sujet = document.getElementById("Sujet");
var question = document.getElementById("question");
var traitementinfo = document.getElementById ("traitementinfo");
var bouton1 = document.getElementById ("cliquons");


// variables avec Regex (pour tester les champs en astérisque)
var filtre_cp = new RegExp("^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$");
var resultat_cp = filtre_cp.test(codepost.value);

var filtre_ville = new RegExp("^[a-zA-Z]");
var resultat_ville = filtre_ville.test(ville.value);

var filtre_email = new RegExp("[a-z0-9!#$%&’*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&’*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
var resultat_email = filtre_email.test(email.value);

// variables des messages d'erreur
var paragrapheErreur1 = document.getElementById("erreur1");
var paragrapheErreur2 = document.getElementById("erreur2");
var paragrapheErreur3 = document.getElementById("erreur3");
var paragrapheErreur4 = document.getElementById("erreur4");
var paragrapheErreur5 = document.getElementById("erreur5");
var paragrapheErreur6 = document.getElementById("erreur6");
var paragrapheErreur7 = document.getElementById("erreur7");
var paragrapheErreur8 = document.getElementById("erreur8");
var paragrapheErreur9 = document.getElementById("erreur9");
var paragrapheErreur10 = document.getElementById("erreur10");
var paragrapheErreur11 = document.getElementById("erreur11");
var paragrapheErreur12 = document.getElementById("erreur12");
var paragrapheErreur13 = document.getElementById("erreur13");
var paragrapheErreur14 = document.getElementById("erreur14");

var event;

function validationform ()  { 
    if (nom.value == "")                                  
    { 
        paragrapheErreur1.innerHTML = "Le nom doit comporter au moins 1 caractère.";
        nom.focus(); 
        // return false; 
    }    
    if (prenom.value == "")                               
    { 
        paragrapheErreur2.innerHTML = "Le prénom doit comporter au moins 1 caractère."; 
        prenom.focus(); 
        // return false; 
    }        

    if(((sexe1.checked)==false) && ((sexe2.checked)==false))
    {
        paragrapheErreur3.innerHTML = "Veuillez indiquer votre sexe.";
        // sexe1.focus();
        // sexe2.focus();
        // return false;
        }

    if (datedenaissance.value == "")
    {
        paragrapheErreur4.innerHTML = "Veuillez Indiquer votre date de naissance.";
        datedenaissance.focus();
        // return false;
    }


    if (codepost.value == "")
    {
        paragrapheErreur5.innerHTML = "Le code postale doit comporter 5 caractères numériques.";
        codepost.focus();
        // return false;
    }

    else if(resultat_cp == false)
    {
        paragrapheErreur6.innerHTML = "Le code postale n'est pas conforme.";
        codepost.focus();
        // return false; 
    }  

     if (adresse.value == "") 
     {
        paragrapheErreur7.innerHTML = "Veuillez renseigner votre adresse.";
        adresse.focus();
        // return false; 
     }

    if (ville.value == "")                  
    { 
        paragrapheErreur8.innerHTML = "Le nom de la ville doit comporter au moins 1 caractère."; 
        ville.focus(); 
        // return false; 
    } 

    else if(resultat_ville == false)
    {
        paragrapheErreur9.innerHTML = "Le nom de la ville n'est pas conforme.";
        ville.focus();
        // return false; 
    }  
    
    if (email.value == "")                 
    { 
        paragrapheErreur10.innerHTML = "Mettez une adresse email valide."; 
        email.focus(); 
        // return false; 
    }      
    else if(resultat_email == false)
    {
        paragrapheErreur11.innerHTML = "L'adresse mail n'est pas conforme."; 
        email.focus(); 
        // return false; 
    }  

    if (Sujet.value == "")                 
    { 
        paragrapheErreur12.innerHTML = "Veuillez indiquer un sujet."; 
        Sujet.focus(); 
        // return false;
    }

    if (question == "")                 
    { 
        paragrapheErreur13.innerHTML = "Veuillez formuler votre question."; 
        question.focus(); 
        // return false;
    }

    if((traitementinfo.checked)==false)
    {
        paragrapheErreur14.innerHTML = "Veuillez accepter le traitement informatique du formulaire.";
        traitementinfo.focus();
        // return false;
        }

    return true; 
}

    bouton1.addEventListener("click",function(){
    validationform();
});


// PREVENTDEFAULT POUR EMPECHER L' ENVOI (ACTION)DU FORMULAIRE SUITE A UNE ALERTE

document.getElementById("cliquons").addEventListener("click", function(event){
    event.preventDefault()
  });
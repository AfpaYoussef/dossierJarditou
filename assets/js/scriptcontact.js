// Attention : Rafraichir entre deux alertes erreurs, deux utilisations ou deux tests erreurs


// Variables pour la fonction selection environnement


var bouton = document.getElementById("targetOption");
var option = document.getElementById ("targetOption");
var valtext = document.getElementById ("targetValue");

// Variables pour la fonction validation du formulaire


var nomsociete = document.forms["form3"]["societe"];               
var perscontact = document.forms["form3"]["perscontact"];    
var codepost = document.forms["form3"]["codepost"];  
var ville =  document.forms["form3"]["ville"]; 
var email= document.forms["form3"]["email"];  
var bouton1 = document.getElementById ("cliquons");





// variables avec Regex (pour tester code postal, ville et email)
var filtre_cp = new RegExp("^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$");
var resultat_cp = filtre_cp.test(codepost.value);

var filtre_ville = new RegExp("^[a-zA-Z]");
var resultat_ville = filtre_ville.test(ville.value);

var filtre_email = new RegExp("[a-z0-9!#$%&’*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&’*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
var resultat_email = filtre_email.test(email.value);


// Les fonctions

function menuToSpan(option) {
    valtext = document.getElementById("targetValue");
    valtext.value = option.value;
    valtext = document.getElementById("targetOption");
    valtext.value = option.text;
    }

    bouton.addEventListener("change",function(){
        menuToSpan(option);
    });

var event;

function validationform()   { 

    if (nomsociete.value == "")                                  
    { 
        alert("Le nom de la société doit comporter au moins un caractère"); 
        nomsociete.focus(); 
        return false; 
    }    
    if (perscontact.value == "")                               
    { 
        alert("Le nom de la personne à contacter doit comporter au moins 1 caractère"); 
        perscontact.focus(); 
        return false; 
    }        

    if (codepost.value == "")                              
    { 
        alert("Le code postale doit comporter 5 caractères numériques"); 
        codepost.focus(); 
        return false; 
    }
    else if(resultat_cp == false)
    {
        alert("Le code postale n'est pas conforme");
        codepost.focus();
        return false; 
    }  
    
    if (ville.value == "")                  
    { 
        alert("Le nom de la ville doit comporter au moins 1 caractère"); 
        ville.focus(); 
        return false; 
    } 
    else if(resultat_ville == false)
    {
        alert("Le nom de la ville n'est pas conforme");
        ville.focus();
        return false; 
    }  
    
    if (email.value == "")                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }      
    else if(resultat_email == false)
    {
        alert("L'adresse mail n'est pas conforme"); 
        email.focus(); 
        return false; 
    }  
    
    return true; 
}

    bouton1.addEventListener("click",function(){
    validationform();
});


// PREVENTDEFAULT POUR EMPECHER L' ENVOI (ACTION)DU FORMULAIRE SUITE A UNE ALERT

document.getElementById("cliquons").addEventListener("click", function(event){
    event.preventDefault()
  });
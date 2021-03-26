var express = require('express');
var router = express.Router();

/*GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

// Page d'accueil
router.get('/', function(requete,reponse){
    const titrePage = "Page d'accueil";
    reponse.render('index', {titre: titrePage});
})
// Page de présentation
.get('/presentation', function(requete,reponse){
    const titrePage = "Présentation";
    reponse.render('presentation', {titre: titrePage});
})
// Page Aventure Digitale
.get('/aventure', function(requete,reponse){
    const titrePage = "Aventure Digitale";
    reponse.render('aventure', {titre: titrePage});
})
// Page Réalisations
.get('/realisations', function(requete,reponse){
    const titrePage = "Réalisations";
    reponse.render('realisations', {titre: titrePage});
})
//Page Formulaire de Contact
.get('/contact',function(requete,reponse){
    const formulaire = "Formulaire";
    reponse.render('contact_form',{ titre: formulaire});
});
//Recevoir les données et afficher la page */
router.post('/traitement',function(requete,reponse,next){
    let lenom = requete.body.nom;
    let lemessage = requete.body.msg;
    
    reponse.render('traiter_form',{titre: "donnees", nom: lenom, msg: lemessage});
})
// Page d'erreur 404
.use(function(requete, reponse, next){
    const titrePage = "Erreur 404";
    const messageErreur = "La page demandée n'existe pas";
    reponse.status(404).render('erreur404', {msg: messageErreur, titre:titrePage});
});

module.exports = router; 



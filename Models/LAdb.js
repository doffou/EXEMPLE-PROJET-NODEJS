/* */
mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/kone");


var Utilisateur = mongoose.Schema({
    nomUtilisateur: String,
    prenomUtilisateur: String,
    Ecoleutilisateur: String,
    MotpassUtilisateur: String,
    EmailUtilisateur: String,
    Numerotelephone: String,
    Niveau: Number,
});

var Rubrique = mongoose.Schema({
    nomrubrique: String,
    logorubrique: String,

    details: [{ imagedetails: String, desciptiondetails: String, contenusdetails: String }]

})
var Temoignage = mongoose.Schema({
    nomTemoin: String,
    EcoleTemoin: String,
    NiveauTemoin: String,
    messageTemoignage: String,
    statusTemoignage: String
});






var Offrande = mongoose.Schema({
    nomOffrand: String,
    montant: String,
    date: { type: Date, default: Date.now }

});


var Ecole = mongoose.Schema({
    logoEcole: String,
    nomEcole: String,
    respoEcole: String,
    descriptionEcole: String,
    emailrespo: String,
    motpassecole: String,
    programme: [{ intituleprogramme: String, dateprogramme: Date, descriptionprogramme: String }],
    Enseignement: [{ intituleEnseignement: String, descriptionEnseignement: String, typeEnseignement: Number, filename: String }],
    Atelier: [{ intituleAtelier: String, descriptionAtelier: String, date: String, filenameAtelier: String }],
    Evaluation: [{ niveau: Number, fileEvaluation: String }],
    ChatGroupe: [{ pseudoName: String, Messagechat: [{ filenamepath: String, textemessage: String }] }],

});

var Evenement = mongoose.Schema({
    intituleEvenement: String,
    dateEvenement: Date,
    descriptionEvenement: String,
    lieu: String,
    Affiche: String,

});




var Administrateur = mongoose.Schema({
    nomAdministrateur: String,
    prenomAdministrateur: String,
    EmailAdministrateur: String,
    motPassAdministrateur: String,
    evenement: Evenement,
    ecole: Ecole,
    utilisateur: Utilisateur
});

var users = mongoose.model('users', Utilisateur);

var ecole = mongoose.model('Ecole', Ecole);
var event = mongoose.model('event', Evenement);
var offrande = mongoose.model('Offrande', Offrande);
var rubrique = mongoose.model('Rubrique', Rubrique);
var temoignage = mongoose.model('Temoignage', Temoignage);


module.exports = {
    users: users,
    ecole: ecole,
    event: event,
    offrande: offrande,
    rubrique: rubrique,
    temoignage: temoignage,
}
const users = require('../Models/LAdb').users;
const ecole = require('../Models/LAdb').ecole;
const evenement = require('../Models/LAdb').event;
const forum = require('../Models/LAdb').forum;
const offrande = require('../Models/LAdb').offrande
const user = require('../Models/LAdb').users;
const temoignage = require('../Models/LAdb').temoignage;
const rubrique = require('../Models/LAdb').rubrique;

var utilisateur = new users();


var getEcoleInformation = function(req, res) {

    ecole.find((err, school) => {

        console.log(school);
        if (err) {
            res.send(err);
        }

        res.send(school);

    })
};

var getrubrique = function(req, res) {

    rubrique.find((err, rubrique) => {

        console.log(rubrique);
        if (err) {
            res.send(err);
        }

        res.send(rubrique);

    })
};

var getusersInformation = function(req, res) {

    users.find((err, utilisateur) => {


        if (err) {
            res.send(err);
        }

        res.send(utilisateur);

    })

};


var getEvent = function(req, res) {
    evenement.find((err, ev) => {


        if (err) {
            res.send(err);
        }

        res.send(ev);


    })
};


var getOffrande = function(req, res) {
    offrande.find((err, of) => {


        if (err) {
            res.send(err);
        }

        res.send(of);

    })
};

var getDataForum = function(req, res) {
    forum.find((err, fo) => {


        if (err) {
            res.send(err);
        }

        res.send(fo);

    })
};


var userInfo = function(req, res) {
    utilisateur.nomUtilisateur = req.body.nomUtilisateur;
    utilisateur.prenomUtilisateur = req.body.prenomUtilisateur;
    utilisateur.Ecoleutilisateur = req.body.Ecoleutilisateur;
    utilisateur.MotpassUtilisateur = req.body.MotpassUtilisateur;
    utilisateur.EmailUtilisateur = req.body.EmailUtilisateur;
    utilisateur.Numerotelephone = req.body.Numerotelephone;
    utilisateur.Niveau = req.body.Niveau;

    utilisateur.save((err) => {
        if (err)
            console.log(err);
    });

}


var giveTemoignage = function(req, res) {
    temoignage1 = new temoignage();

    temoignage1.nomTemoin = req.body.nomTemoin;
    temoignage1.EcoleTemoin = req.body.EcoleTemoin;
    temoignage1.NiveauTemoin = req.body.NiveauTemoin;
    temoignage1.messageTemoignage = req.body.messageTemoignage;
    temoignage1.statusTemoignage = "private";



    /*A revoir dans quelque temps pour vous */
}


var getTemoignage = function(req, res) {

    temoignage.find({ statusTemoignage: "public" }, (err, te) => {


            if (err) {
                res.send(err);
            }

            res.send(te);

        })
        /*A revoir dans quelque temps pour vous */
}

var postforum = function(req, res) {


    forumpost = new forum();

    forumpost.reponseMessage.push({
        nomRepondeur: req.body.nomRepondeur,
        dateReponse: req.body.dateReponse,
        message: req.body.message,

    });

    forumpost.sujet.push({
        nomCreateur: req.body.nomCreateur,
        intituleSujet: req.body.intituleSujet,
        messasujet: req.body.messasujet,
        vote: req.body.vote,
    });
    /*A revoir dans quelque heure */


}

var doOffrande = function(req, res) {
    offrande1 = new offrande();
    offrande1.nomOffrand = req.body.nomOffrand;
    offrande1.montant = req.body.montant;
}





module.exports = {
    getusersInformation: getusersInformation,
    getEcoleInformation: getEcoleInformation,
    getrubrique: getrubrique,
    getEvent: getEvent,
    getOffrande: getOffrande,
    getDataForum: getDataForum,
    userInfo: userInfo,
    postforum: postforum,
    doOffrande: doOffrande,
    giveTemoignage: giveTemoignage,
}
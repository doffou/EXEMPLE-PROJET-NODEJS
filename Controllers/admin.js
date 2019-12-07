const users = require('../Models/LAdb').users;
const ecole = require('../Models/LAdb').ecole;
const evenement = require('../Models/LAdb').event;
const temoignage = require('../Models/LAdb').temoignage;
const rubrique = require('../Models/LAdb').rubrique;
const slash = require('slash');

var ev = new evenement();
var eco = new ecole();
var rub = new rubrique();
var creerEcole = function(req, res) {
    console.log(req.file.path);
    eco.logoEcole = slash(req.file.path);
    eco.nomEcole = req.body.nomEcole;
    eco.respoEcole = req.body.nomrespo;
    eco.descriptionEcole = req.body.descriptionEcole;

    eco.emailrespo = req.body.emailrespo;
    eco.motpassecole = req.body.motpassEcole;

    console.log(req.body.nomEcole);
    console.log(req.body.emailrespo);
    /* A revoir apres revision */

    eco.save((err) => {
        if (err)
            console.log(err);
    })
    res.redirect("/admin")
}

var getindex = function(req, res) {

    ecole.find((err, school) => {

        console.log(school);
        if (err) {
            res.send(err);
        }


        rubrique.find((err, rubrique) => {

            console.log(rubrique);
            if (err) {
                res.send(err);
            }


            evenement.find((err, ev) => {


                if (err) {
                    res.send(err);
                }




                res.render('Acceuil.ejs', { evenement: ev, rubrique: rubrique, eco: school });

            })





        })





    })

}

var getEcole = function(req, res) {

    res.render('Ecole.ejs')
}
var ajouterEnseignement = function(req, res) {
    var eco = new ecole();

}


var effacerEnseignement = function(req, res) {



}

var updateEnseignement = function(req, res) {
    var eco = new ecole();

    eco.findOne({ _id: req.params.Ecole_id }, function(err, ecole) {
            eco.Enseignement.push({ intituleEnseignement: req.body.intituleEnseignement, })

            produit.save(function(err, ) {
                if (err) {
                    res.send(err);
                }
                res.redirect("/");

            })


        }


    );

}
var ajouterProgramme = function(req, res) {
    var eco = new ecole();

}

var effacerProgramme = function(req, res) {
    var eco = new ecole();

}

var additemrubrique = function(req, res) {
    console.log(req.body.clevalue);
    rubrique.findOne({ _id: req.body.clevalue }, function(err, rub) {
        rub.details.push({ imagedetails: req.file.path, desciptiondetails: req.body.descriptionItem, contenusdetails: req.body.ContenuItem })
        rub.save(function(err, ) {
            if (err) {
                res.send(err);
            }
            res.redirect("/admin");

        })


    })
}



var updateProgramme = function(req, res) {
    var eco = new ecole();

    prod.findOne({ _id: req.params.produit_id }, function(err, produit) {
            produit.new = req.body.new;
            produit.save(function(err, ) {
                if (err) {
                    res.send(err);
                }
                res.redirect("/");

            })


        }


    )









}



var creerEvenement = function(req, res) {


    ev.intituleEvenement = req.body.nomevent;
    ev.dateEvenement = req.body.dateevent;
    ev.descriptionEvenement = req.body.descriptionEvt;
    ev.lieu = req.body.nomlieu;
    /*A revoir apres revision */
    ev.Affiche = slash(req.file.path);


    ev.save((err) => {
        if (err)
            console.log(err);
    })
    res.redirect("/admin");
}







var creerRubrique = function(req, res) {

    rub.nomrubrique = req.body.nomrubrique;
    rub.logorubrique = slash(req.file.path);
    console.log(req.file.path);
    rub.save((err) => {
        if (err)
            console.log(err);
    });

    res.redirect('/admin');
};


var effacerEvenement = function(req, res) {




}

var updateEvenement = function(req, res) {


    prod.findOne({ _id: req.params.produit_id }, function(err, produit) {
            produit.new = req.body.new;
            produit.save(function(err, ) {
                if (err) {
                    res.send(err);
                }
                res.redirect("/");

            })


        }


    )

}


var creerEvaluation = function(req, res) {



}



var effacerEvaluation = function(req, res) {




}

var updateEvaluation = function(req, res) {

    prod.findOne({ _id: req.params.produit_id }, function(err, produit) {
            produit.new = req.body.new;
            produit.save(function(err, ) {
                if (err) {
                    res.send(err);
                }
                res.redirect("/");

            })


        }


    )

}

var creerAtelier = function(req, res) {



}



var effacerAtelier = function(req, res) {




}

var updateAtelier = function(req, res) {

    prod.findOne({ _id: req.params.produit_id }, function(err, produit) {
            produit.new = req.body.new;
            produit.save(function(err, ) {
                if (err) {
                    res.send(err);
                }
                res.redirect("/");

            })


        }


    )

}

var validerTemoignage = function(req, res) {

    prod.findOne({ _id: req.params.produit_id }, function(err, produit) {
            produit.new = req.body.new;
            produit.save(function(err, ) {
                if (err) {
                    res.send(err);
                }
                res.redirect("/");

            })


        }


    )



}






var getTemoignage = function(req, res) {

    temoignage.find((err, te) => {


            if (err) {
                res.send(err);
            }

            res.send(te);

        })
        /*A revoir dans quelque temps pour vous */
}

module.exports = {
    getindex: getindex,
    creerEcole: creerEcole,
    getEcole: getEcole,
    ajouterEnseignement: ajouterEnseignement,
    effacerEnseignement: effacerEnseignement,
    updateEnseignement: updateEnseignement,
    creerEvaluation: creerEvaluation,
    effacerEvaluation: effacerEvaluation,
    updateEvaluation: updateEvaluation,
    creerEvenement: creerEvenement,
    effacerEvenement: effacerEvenement,
    updateEvenement: updateEvenement,
    ajouterProgramme: ajouterProgramme,
    effacerProgramme: effacerProgramme,
    updateProgramme: updateProgramme,
    creerRubrique: creerRubrique,
    additemrubrique: additemrubrique



}
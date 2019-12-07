const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/admin');
const userController = require('../Controllers/users');

var multer = require("multer");
var storage = multer.diskStorage({

    destination: function(req, file, cb) {

        cb(null, 'uploads')

    },
    filename: function(req, file, cb) {

        cb(null, Date.now() + '-' + file.originalname);

    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }

}

var upload = multer({
    storage: storage,

    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter

});



router.get('/', adminController.getindex);
router.get('/Ecole', adminController.getEcole);
router.post('/doffou', upload.single('logoEcole'), adminController.creerEcole);
router.post('/rubrique', upload.single('logorubique'), adminController.creerRubrique);
router.post('/evenement', upload.single('AfficheEvt'), adminController.creerEvenement);
router.post('/item', upload.single('imageitem'), adminController.additemrubrique);
/*Application link with root 

router.get('/',adminController.getindex);
exemple:

router.get('/',adminController.getindex); its important
two parameters
router.post('/productsend/',upload.single("productImage"),adminController.uploadfile);


*/

module.exports = router
const express = require("express")
const router = express.Router();
const userController = require('../Controllers/users');
router.get('/Ecole', userController.getEcoleInformation);
router.get('/utilisateur', userController.getusersInformation);
router.get('/evenement', userController.getEvent);
router.get('/forum', userController.getDataForum);
router.get('/offrande', userController.getOffrande);
router.get('/Rubrique', userController.getrubrique);
router.post('/userInformation', userController.userInfo);
router.post('/postforum', userController.postforum);
router.post('/doOffrande', userController.doOffrande);
router.post('/giveTemoignage', userController.giveTemoignage);


/*Application link with root 

exemple:

router.get('/',usersController.getindex); its important
two parameters
router.post('/productsend/',upload.single("productImage"),adminController.uploadfile);
router.get('/',shopController.getindex);


*/
module.exports = router;
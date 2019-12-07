const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const ejs = require("ejs");


/*fichier de configuration avant ca */
app.set('view engine', 'ejs');
app.use('/uploads', express.static("uploads"))
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());
app.use(express.static("publics/"));
const userRoute = require('./Routes/users');
app.use("/", userRoute);
const adminRoutes = require('./Routes/admin');

app.use("/admin/", adminRoutes);





const port = process.env.PORT || 8080;
app.listen(port, () => console.log('serveur lancer sur le port 8080'));
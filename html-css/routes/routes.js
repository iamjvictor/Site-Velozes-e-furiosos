const routes = require("express").Router();
const controller = require("../controller/controller")

routes.get("/", controller.getPage );
routes.get("/fotosvf.ejs", controller.getPic);
routes.get("/homenagem.ejs", controller.getHom);
routes.get("/community.ejs", controller.getCom);
routes.get("/register.ejs", controller.getRegister);
routes.post("/register", controller.sendRegister);
routes.post("/login", controller.sendLogin);



module.exports = routes ;
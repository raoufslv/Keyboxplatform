const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/formateur",
    [authJwt.verifyToken, authJwt.isFormateur],
    controller.formateurBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.get(
    "/api/test/adult",
    [authJwt.verifyToken, authJwt.isAdult],
    controller.adultBoard
    );

    app.get(
      "/api/test/enfant",
      [authJwt.verifyToken, authJwt.isEnfant],
      controller.enfantBoard
      );
};
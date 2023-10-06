exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.formateurBoard = (req, res) => {
  res.status(200).send("Formateur Content.");
};

exports.adultBoard = (req, res) => {
  res.status(200).send("Adult Content.");
};

exports.enfantBoard = (req, res) => {
  res.status(200).send("Enfant Content.");
};

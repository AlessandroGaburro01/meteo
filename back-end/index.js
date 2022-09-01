const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/meteo", function (req, res) {
  var citta = req.query.citta;
  var n1 = Math.floor(Math.random() * 3);

  console.log("città arrivata: ", citta);
  console.log("numero associato: ", n1);

  // switch (n1) {              --> switch non so perchè non funzionante e quindi fatto con if sotto 
  //   case (n1 == 0):
  //     res.send(JSON.stringify("sole"));
  //     break;
  //   case (n1 == 1):
  //     res.send(JSON.stringify("pioggia"));
  //     break;
  //   case (n1 == 2):
  //     res.send(JSON.stringify("neve"));
  //     break;
  // }

  if (n1 == 0) {
    res.send(JSON.stringify("sole"));
  } else {
    if (n1 == 1) {
      res.send(JSON.stringify("pioggia"));
    } else {
      if (n1 == 2) {
        res.send(JSON.stringify("neve"));
      }
    }
  }
});

app.listen(3000);

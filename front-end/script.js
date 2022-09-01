              //2 problemi: 
              //1---> da riga 5 a riga 12 c'è qualcosa che non va in queanto mi da errore in console ma sembra funzionare comunque 
              //2--> problema nel confronto a riga 28 tra due stringhe. Dove data, stringa che ci dice il meteo 
              //     passato dal server, deve essere confrontata per capire se è sole, pioggia o neve e in base
              //     al risultato del confronto viene assegnata alla variabile "d" l'URL dell'immagine del meteo
              //     corrispondente. 


var img0 = document.createElement("img");
img0.src = "image/sole.jpeg";

var img1 = document.createElement("img");
img1.src = "image/pioggia.jpeg";

var img2 = document.createElement("img");
img2.src = "image/neve.jpeg";

var d;

// var sole = "sole";
// var pioggia = "pioggia";
// var neve = "neve";
// JSON.parse(JSON.stringify(sole));
// JSON.parse(JSON.stringify(pioggia));
// JSON.parse(JSON.stringify(neve));



$("#btn1").click(function () {
  var index = $("#citta").val();
  console.log("la città è: ", index);
  console.log("la città passata è:", index);

  $.ajax({
    url: "http://localhost:3000/meteo?citta=" + index,
    method: "GET",
    success: function (data) {
      console.log("tempo passato da server: ", data);
      JSON.stringify(data);   //data è una stringa 

      if (data == sole) {
        d = img0;
      }else{
        if (data == pioggia) {
          d = img1;
        }
        else {
          d = img2;
        }
      }
      console.log("la stringa è: ", d);
      console.log("la stringa è: ", data);
      $("#image").show("fast", function () {
        console.log("l'immagine è: ", d);
        $(this).attr(
          d
        );
      });
    },
    error: function (err) {
      console.log("errore", err);
    },
  });
});
 
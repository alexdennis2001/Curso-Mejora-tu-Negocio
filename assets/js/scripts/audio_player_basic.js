function play(elm) {
  let etiquetaAudio = document.createElement("audio");
  let $aud = $(elm).children("audio").first();
  let urlAudio=$aud.attr("src");
  etiquetaAudio.setAttribute("src", urlAudio);
  etiquetaAudio.play();
}
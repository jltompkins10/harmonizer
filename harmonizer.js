function harmonize() {
  var melody = document.getElementById("melody");
  var melodyValue = parseInt(melody.options[melody.selectedIndex].value);

  var bass = document.getElementById("bass");
  var bassValue = parseInt(bass.options[bass.selectedIndex].value);

  var bassNote = new Array ("C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B");
  var chord = new Array ();
  /* 1      */ chord[0] = new Array ("null");
  /* 7      */ chord[1] = new Array ("M7", "6", "mM7", "m6", "+M7", "dim");
  /* b7/#13 */ chord[2] = new Array ("m7", "7", "sus7", "+7", "m7b5");
  /* 13/6   */ chord[3] = new Array ("M7", "6", "m7", "mM7", "m6", "7", "sus7", "+7", "dim");
  /* b13/#5 */ chord[4] = new Array ("7", "sus7", "+7", "+M7", "m7b5", "dim");
  /* 5      */ chord[5] = new Array ("null");
  /* #11/b5 */ chord[6] = new Array ("M7", "6", "7", "+7", "+M7", "m7b5", "dim");
  /* 11     */ chord[7] = new Array ("m7", "mM7", "m6", "sus7", "m7b5", "dim");
  /* b11/3  */ chord[8] = new Array ("M7", "6", "7", "sus7", "+7", "+M7");
  /* #9/b3  */ chord[9] = new Array ("m7", "mM7", "m6", "7", "sus7", "+7", "m7b5", "dim");
  /* 9      */ chord[10] = new Array ("M7", "6", "m7", "mM7", "m6", "7", "sus7", "+7", "+M7", "m7b5", "dim");
  /* b9     */ chord[11] = new Array ("7", "sus7", "+7");

  var interval = bassValue - melodyValue;
  if (interval < 0) {interval += 12;}

  var intervalName = new Array ("unison", "7", "b7 or #13", "13 or 6", "b13 or #5", "perfect fifth", "#11 or b5", "11", "b11 or 3", "#9 or b3", "9", "b9");
  document.getElementById("interval").innerHTML = intervalName[interval];

  var resultString = "";
  switch (interval) {
    case 0:
      resultString = "Any " + bassNote[bassValue] + " chord will work. Consider a different interval besides a unison."
      break;
    case 5:
      resultString = "Any " + bassNote[bassValue] + " chord will work. Consider a different interval besides a perfect fifth."
      break;
    default:
      var i;
      for (i = 0; i < chord[interval].length; i++) {
        resultString += bassNote[bassValue] + chord[interval][i] + "<br/>";
      }
  }

  document.getElementById("chords").innerHTML = resultString;
}

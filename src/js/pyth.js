function alerter (num, textBox) {
  var xpos = $('#' + textBox).position().left;
  $('#alerter').animate({'left': xpos.toString()});
  $('#alerter').fadeIn();
  $('#estimate').text(Math.round(Math.sqrt(num) * 100) / 100);
  $('#exact').text(num);
}

$('button').click(function () {
  var a = Number($('#a').val());
  var b = Number($('#b').val());
  var c = Number($('#c').val());
  var cc = Math.pow(a, 2) + Math.pow(b, 2);
  var bb = Math.pow(c, 2) - Math.pow(a, 2);
  var aa = Math.pow(c, 2) - Math.pow(b, 2);
  if (a === 0 && b !== 0 && c !== 0){
    $('#a').val((Math.round(Math.sqrt(aa) * 100) / 100).toString());
    alerter(aa, 'a');
  }
  else if (a !== 0 && b === 0 && c !== 0) {
    $('#b').val((Math.round(Math.sqrt(bb) * 100) / 100).toString());
    alerter(bb, 'b');
  }
  else if (a !== 0 && b !== 0 && c === 0) {
    $('#c').val((Math.round(Math.sqrt(cc) * 100) / 100).toString());
    alerter(cc, 'c');
  }
});

$('a').click(function () {
  $('#alerter').fadeOut();
});

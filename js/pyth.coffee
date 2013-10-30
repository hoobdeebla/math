alerter = (num, tbox) ->
  xpos = $("##{tbox}").position().left
  $("#alerter").animate "left":xpos.toString()
  $("#alerter").fadeIn()
  $("#estimate").text Math.round(Math.sqrt(num) * 100) / 100
  $("#exact").text num

$("button").click () ->
  a = Number $("#a").val()
  b = Number $("#b").val()
  c = Number $("#c").val()
  cc = Math.pow(a, 2) + Math.pow(b, 2)
  bb = Math.pow(c, 2) - Math.pow(a, 2)
  aa = Math.pow(c, 2) - Math.pow(b, 2)
  if a is 0 and b isnt 0 and c isnt 0
    $("#a").val (Math.round(Math.sqrt(aa) * 100) / 100).toString()
    alerter aa, "a"
  else if a isnt 0 and b is 0 and c isnt 0
    $("#b").val (Math.round(Math.sqrt(bb) * 100) / 100).toString()
    alerter bb, "b"
  else if a isnt 0 and b isnt 0 and c is 0
    $("#c").val (Math.round(Math.sqrt(cc) * 100) / 100).toString()
    alerter cc, "c"

$("a").click () ->
  $("#alerter").fadeOut()

$(".btn").click () ->
  $("#ofresults").hide()
  $("#addresults").hide()
  $("#minusresults").hide()
  $("##{@.id}results").show()

$("input").keyup () ->
  fraction = (num, den) ->
    "<sup>#{num}</sup>⁄<sub>#{den}</sub>"

  m = Number $("#m").val()
  n = Number $("#n").val()
  k = Number $("#k").val()
  l = Number $("#l").val()
  if m and n and k and l
    $("#ofdescription").html "Find #{fraction "m", "n"} of #{fraction "k", "l"} (#{fraction m, n} × #{fraction k, l})"
    $("#ofexplanation").html "Partition [0, #{fraction "k", "l"}] ([0, #{fraction k, l}]) into n (#{n}) equal parts, then concatenate m (#{m}) of those parts"
    $("#ofanswer").html "#{fraction "m", "n"} of #{fraction "k", "l"} (#{fraction m, n} × #{fraction k, l}) is #{fraction "k × m", "l × n"} (#{fraction k * m, l * n})"

    $("#adddescription").html "Find #{fraction "m", "n"} + #{fraction "k", "l"} (#{fraction m, n} + #{fraction k, l})"
    $("#addexplanation").html "Starting at #{fraction "m", "n"} (#{fraction m, n}), concatenate #{fraction "m", "n"} (#{fraction k, l})"
    $("#addanswer").html "#{fraction "m", "n"} + #{fraction "k", "l"} (#{fraction m, n} + #{fraction k, l}) = #{fraction "m × l + k × n", "n × l"} (#{fraction m * l + k * n, n * l})"

    $("#minusdescription").html "Find #{fraction "m", "n"} − #{fraction "k", "l"} (#{fraction m, n;} − #{fraction k, l})"
    $("#minusexplanation").html "Truncate #{fraction "k", "l"} (#{fraction k, l}) from #{fraction "m", "n"} (#{fraction m, n})"
    $("#minusanswer").html "#{fraction "m", "n"} − #{fraction "k", "l"} (#{fraction m, n} − #{fraction k, l}) = #{fraction "m × l − k × n", "n × l"} (#{fraction m * l - k * n, n * l})"

    if k % n is 0
      # m/n of k/l if k is evenly divisible by n
      $("#ofsolution").html "The first step is to partition #{fraction "k", "l"} (#{fraction k, l}) into n (#{n}) equal parts, which is #{fraction "k ÷ n", "l"} (#{fraction k / n, l}). Then, concatenate m (#{m}) of these parts."
    else
      # m/n of k/l if k is not evenly divisible by n
      $("#ofsolution").html "The first step is to partition #{fraction "k", "l"} (#{fraction k, l}) into n (#{n}) equal parts, but we can't, so we must force #{fraction "k", "l"} (#{fraction k, l}) into being able to be split into n (#{n}) equal parts. 
In order to do that, we must use equivalent fractions to make k (#{k}) into a multiple of n (#{n}): #{fraction "k", "l"} = #{fraction "k × n", "l × n"} = #{fraction "kn", "ln"} (#{fraction k, l} = #{fraction k + " × " + n, l + " × " + n} = #{fraction k * n, l * n}). 
The next step is to split this fraction into n (#{n}) equal parts, which makes each equal part have a value of #{fraction "k", "ln"} (#{fraction k, l * n}). All that is left is to concatenate m (#{m}) of these parts."

    if n is l
      # if denoms are the same, add / subtract this
      $("#addsolution").html "Count k (#{k}) spaces to the right of #{fraction "m", "n"} (#{fraction m, n})"
      $("#minussolution").html "Count k (#{k}) spaces to the left of #{fraction "m", "n"} (#{fraction m, n})"
      $("#addanswer").html "#{fraction "m", "n"} + #{fraction "k", "l"} (#{fraction m, n} + #{fraction k, l}) = #{fraction "m + k", "n"} or #{fraction "m + k", "l"} (#{fraction m + k, n})"
      $("#minusanswer").html "#{fraction "m", "n"} − #{fraction "k", "l"} (#{fraction m, n} − #{fraction k, l}) = #{fraction "m − k", "n"} or #{fraction "m − k", "l"} (#{fraction m - k, n})"
    else
      $("#addsolution").html "Count k (#{k}) spaces to the right of #{fraction "m", "n"} (#{fraction m, n}), but we can't because the fractions don't have the same denominator. So, we must do equivalent fractions: #{fraction m * l, n * l} and #{fraction k * n, l * n}. Now, we can concatenate the two fractions."
      $("#minussolution").html "Count k (#{k}) spaces to the left of #{fraction "m", "n"} (#{fraction m, n}), but we can't because the fractions don't have the same denominator. So, we must do equivalent fractions: #{fraction m * l, n * l} and #{fraction k * n, l * n}. Now, we can truncate the two fractions."

window.onresize = () ->
  if window.innerWidth >= 768
    $(".btn-group").addClass "btn-group-lg"
  else
    $(".btn-group").removeClass "btn-group-lg"

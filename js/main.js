
var insults = [];
$(document).ready(function() {
  document.form.zimas.focus();

  initInsults()
      // chelsea click handler
      $("#too-many-btn").click(function() {
        var number = Number($("#zima-count").val())
        if (number === 0) {
          showResponse("giddy up, ya<span class='insult'> maroon</span>")
          document.form.zimas.focus();
        }
        else {
          showResponse(" no such thing, ya..." + "<span class='insult'> " + insults[getRandom(insults.length)] + "</span>")   
          document.form.zimas.focus();
        }
      })


      // enter key listener
      $("#zima-count").keypress(function(e) {
        if(e.which == 13) {
          $("#too-many-btn").click()
        }
        return isNumberKey(e)
      })



      // block enter form submission
      $("form").on("keyup keypress", function(e) {
        var code = e.keyCode || e.which
        if (code  == 13) {               
          e.preventDefault()
          return false
        }
      })
    })



$('#try-again-btn').click(function(evt) {
  $('form').show();
  showResponse('')
});

function showResponse(text) {
  $("#response-lbl").fadeOut(175, function(){
     $("#response-lbl").empty().append(text).fadeIn(175);
  });
}

function initInsults() {
  insults = [
  "dingus",
  "philanthropist",
  "john wilkes doof",
  "polyamorous relationship",
  "lynard skynard",
  "wheres waldo",
  "our lady peace",
  "nelson",
  "momento",
  "danny tanner",
  "s thing we all drew in school",
  "grimace",
  "morrissey",
  "clifford the big red dog",
  "thomas jefferson airplane",
  "instagram filter",
  "smooth jazz spotify playlist",
  "gannon",
  "dehumidifier",
  "mr. yuck's neighbor",
  "bear trap",
  "skinny weiner",
  "hurricane sandy",
  "temptress",
  "ancient loofah",
  "rookie card",
  "david the gnome",
  "melissa joan fart",
  "short music for short people",
  "sting operation",
  "criterion collection",
  ]
}

function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode != 46 && charCode > 31
    && (charCode < 48 || charCode > 57))
    return false
  return true
}

function getRandom(max) {
  return Math.floor(Math.random() * max)
}
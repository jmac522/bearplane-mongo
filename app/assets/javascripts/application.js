// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require jquery.turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });
$(document).ready(function() {
  $(".store").prettyPhoto({
    social_tools: false
  });
  $("[href]").each(function() {
  if (this.href == window.location.href) {
      $(this).parent('div').addClass("active");
      }
  });
});

$(function () {
    $('#sal-generator').on('click', function (e) {
        e.preventDefault();
        $(".sal-compliment").removeClass("sal-compliment-neon");
        $(".sal-compliment").removeClass("sal-compliment-vintage");
        $(".sal-compliment").removeClass("sal-compliment-anaglyphic");
        $(".sal-compliment").removeClass("sal-compliment-fire");
        $(".sal-compliment").removeClass("sal-compliment-emboss");
        $(".sal-compliment").removeClass("sal-compliment-stitched");
        $(".sal-compliment").removeClass("sal-compliment-lobster");
        $(".sal-compliment").removeClass("sal-compliment-rough");
        var subjects = [ "godking",
      "wizard",
      "president",
      "soldier",
      "arbiter",
      "demigod",
      "sultan",
      "guru",
      "dragon",
      "emperor",
      "commander",
      "ambassador",
      "conquistador",
      "high Priest",
      "kingpin",
      "mastermind",
      "czar",
      "master",
      "cheiftan",
      "general",
      "overlord",
      "maestro",
      "champion",
      "virtuoso",
      "undead Sharkenbear",
      "sage",
      "genius",
      "defender",
      "hero",
      "guardian",
      "vindicator",
      "nonpareil",
      "warrior",
      "rrotector",
      "scientist",
      "ace",
      "paladin",
      "knight"
      ];

      var adjectives = [
      "shining",
      "golden",
      "cosmic",
      "etherial",
      "planetary",
      "infinite",
      "luminous",
      "universal",
      "gleaming",
      "glistening",
      "luminous",
      "radiant",
      "shimmering",
      "lustrous",
      "omnipotent",
      "benevolent",
      "magnanimous",
      "supernatural",
      "celestial",
      "angelic",
      "immortal",
      "otherworldly",
      "spiritual",
      "sublime",
      "hallowed",
      "transcendental",
      "holy",
      "mystical",
      "enigmatic",
      "incomprehensible",
      "sphinxlike",
      "Delphian",
      "oracular",
      "clairvoyant",
      "glorious",
      "dazzling",
      "triumphant",
      "remarkable",
      "marvelous",
      "magnificent",
      "distinguished",
      "preeminent",
      "esteemed",
      "resplendent",
      "blazing",
      "gorgeous",
      "beaming",
      "irradiant",
      "refulgent",
      "splendiferous",
      "splendorous",
      "brilliant",
      "scintillating",
      "sparkling",
      "clinquant",
      "gilded" ];

      var conclusionPhrases = [
      "of the cosmic tribunal",
      "dancing on the song of the wind",
      "vigilantly watching the realm",
      "from the council of galactic elders",
      "endowed with the powers of Zeus",
      "peacefully ruling the cosmos",
      "by the power Greyskull",
      "responsible for something",
      "making in on your own in the city",
      "to bring about the dawn of days",
      "respected by the tech wizards",
      "trapped in the refrierator",
      "only spoken about in whipsers",
      "on the top of the totem pole of your mind, or other various locations within.",
      "with all powers be to Odin",
      "submerged in the fourth-dimentional puddle",
      "caught up in some serious wiz biz",
      "who is good with two basses",
      "serving Buddha a Muai Thai",
      "effortlessly recovering knowledge from the Old Age",
      "releasing Excalibur from its geological imprisonment",
      "catching them all",
      "being the very best there ever was",
      "punching Kanye West in the face",
      "flying the metaphorical mind plane of the masses",
      "driving the areal delivery truck of the future",
      "carrying humanity into a new age of snacks",
      "...too fly",
      "gracing us with your presence",
      "pulling the rotten teeth of poverty from the countryside",
      "bringing about massive change from a global perspective",
      ", curer of all ills",
      "correcting time paradoxes and making excellent buffalo chicken wraps",
      "who is pretty much the shit",
      "riding around and getting it",
      "inventor of facebook",
      "born of the stars and beyond",
      "proveyor of the finest cheeses",
      "who is classier than a Duke or a Count or something",
      "holder of the world record of the thing where you put clothespins on your face. Have you seen people do that? It's weird.",
      "Connasoir, adored by all"
    ];

      var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
      var subject = subjects[Math.floor(Math.random()*subjects.length)];
      var conclusionPhrase = conclusionPhrases[Math.floor(Math.random()*conclusionPhrases.length)];

      var compliment = "You are a " + adjective + " " + subject + " " + conclusionPhrase + ".";
      var textClasses = ["sal-compliment-vintage", "sal-compliment-neon", "sal-compliment-anaglyphic", "sal-compliment-fire", "sal-compliment-emboss","sal-compliment-stitched","sal-compliment-lobster","sal-compliment-rough"];
      var textClass = textClasses[Math.floor(Math.random()*textClasses.length)];
      $(".sal-compliment").addClass(textClass);
      $(".sal-compliment").text(compliment);
    });

});

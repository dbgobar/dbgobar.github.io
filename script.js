$(document).ready(function(){
    $('#fullpage').fullpage({

      //Navigation
      menu: '#myMenu',
      lockAnchors: false,
      anchors:['welcome', 'about', 'projects', 'contact'],
      navigation: false,
      navigationPosition: 'right',
      // navigationTooltips: ['introSlide', 'LRN-Quiz', 'Dreamscape', 'FemiList', 'TrumpyCat', 'ComingSoon'],
      showActiveTooltip: false,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',

      //background colors
      sectionsColor: ['#76C6D9', 'black', 'black', '#7CC8C3']

      //  video
      //  afterRender: function(){
      //    $('video').get(0).play();
      //  }


    });

});



    // icon hover effects
    // $(".art").hover(function(){
    //   $("#altFaves").html(" art.");
    //   $("#altFaves").toggle("slow");
    // });
    // $(".song").hover(function(){
    //   $("#altFaves").html(" Singing classical opera..and really all things musical.");
    //   $("#altFaves").toggle("slow");
    // });
    // $(".travel").hover(function(){
    //   $("#altFaves").html("Traveling around the world!");
    //   $("#altFaves").toggle("slow");
    // });
    // $(".yoga").hover(function(){
    //   $("#altFaves").html(" Yoga and meditation.");
    //   $("#altFaves").toggle("slow");
    // });
    // $(".animals").hover(function(){
    //   $("#altFaves").html("Animal rights and environmental causes.");
    //   $("#altFaves").toggle("slow");
    // });
    // $(".book").hover(function(){
    //   $("#altFaves").html(" Fairytale stories");
    //   $("#altFaves").toggle("slow");
    // });
    // $(".chocolate").hover(function(){
    //   $("#altFaves").html(" Food! Trying every type of food on the planet.");
    //   $("#altFaves").toggle("slow");
    // });
    // $(".diy").hover(function(){
    //   $("#altFaves").html(" Any and all DIY projects. I'm a handy person!");
    //   $("#altFaves").toggle("slow");
    // });

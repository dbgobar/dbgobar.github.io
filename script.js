$(document).ready(function(){
    $('#fullpage').fullpage({

      //Navigation
      menu: '#myMenu',
      lockAnchors: false,
      anchors:['welcome', 'about', 'projects', 'contact'],
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: ['introSlide', 'LRN-Quiz', 'Dreamscape', 'FemiList', 'TrumpyCat', 'ComingSoon'],
      showActiveTooltip: false,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',


      //background colors
      sectionsColor: ['#F95F69', '#F95F69', '#B3CEED', 'beige']
    });

    // icon hover effects
    $(".art").hover(function(){
      $("#altFaves").html(" art.");
      $("#altFaves").toggle("slow");
    });
    $(".song").hover(function(){
      $("#altFaves").html(" Singing classical opera..and really all things musical.");
      $("#altFaves").toggle("slow");
    });
    $(".typography").hover(function(){
      $("#altFaves").html(" Hand-lettering and Typography.");
      $("#altFaves").toggle("slow");
    });
    $(".yoga").hover(function(){
      $("#altFaves").html(" Yoga and meditation.");
      $("#altFaves").toggle("slow");
    });
    $(".animals").hover(function(){
      $("#altFaves").html("Animal rights and environmental causes.");
      $("#altFaves").toggle("slow");
    });
    $(".book").hover(function(){
      $("#altFaves").html(" Fairytale stories");
      $("#altFaves").toggle("slow");
    });
    $(".chocolate").hover(function(){
      $("#altFaves").html(" Chocolate, chocolate, chocolate!.");
      $("#altFaves").toggle("slow");
    });
    $(".diy").hover(function(){
      $("#altFaves").html(" Any and all DIY projects. I'm a handy person!");
      $("#altFaves").toggle("slow");
    });

  });

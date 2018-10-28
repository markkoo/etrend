(function() {
  var __sections__ = {};
  (function() {
    for(var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
      __sections__[s[i]] = true;
  })();
  (function() {
  if (!__sections__["about-us"]) return;
  try {
    


jQuery(document).ready(function() {

$(".inline").colorbox({inline:true, width:"50%"});
});

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["client-logos"] && !window.DesignMode) return;
  try {
    



$(document).ready(function() {

//Sort random function
function random(owlSelector){
owlSelector.children().sort(function(){
return Math.round(Math.random()) - 0.5;
}).each(function(){
$(this).appendTo(owlSelector);
});
}

jQuery("#client-car").owlCarousel({   
      navigation: false,
      items : 8,
 	  itemsDesktop : [1200,6],
      itemsTablet: [767,4],
      itemsTabletSmall: [721,4],
	  itemsMobile : [479,2],
    });
  });





  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["home-sidebar-category"]) return;
  try {
    
$(document).ready(function(){
  $(".dt-menu-expand").click(function(event){
    event.preventDefault();
    if( $(this).hasClass("dt-mean-clicked") ){
      $(this).text("+");
      if( $(this).prev('ul').length ) {
        $(this).prev('ul').slideUp(400);
      } else {
        $(this).prev('.megamenu-child-container').find('ul:first').slideUp(600);
      }
    } else {
      $(this).text("-");
      if( $(this).prev('ul').length ) {
        $(this).prev('ul').slideDown(400);
      } else{
        $(this).prev('.megamenu-child-container').find('ul:first').slideDown(2000);
      }
    }

    $(this).toggleClass("dt-mean-clicked");
    return false;
  });

});
      

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["home-sidebar-deals"]) return;
  try {
    
 $(document).ready(function(){
     var homeSidedeals = $(".sidebar-deal-products");
      homeSidedeals.owlCarousel({
      items:1,
         loop:true,              
         dots: false,
         navContainer: ".home_sidebar--deal-nav",
         navText: [' <a class="prev active btn"><i class="icon-arrow-left icons"></i></a>','<a class="next btn"><i class="icon-arrow-right icons"></i></a>'],
         responsive:{
           0:{
             items: 1
           },
           600:{
             items:1
           },
           700:{
             items:1
           },
           
           1000:{
             items: 1
           }
         }
  			});
        });

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["home-sidebar-featured-post"]) return;
  try {
    
	var home_sidebar_featured_post_count = $('.home-sidebar-featured-post.blog-section ul li.grid__item').length;    
    if(home_sidebar_featured_post_count > 2 ) { $('.nav_blog').css('display','block');}
    else {$('.nav_blog').css('display','none');}
    var home_sidebar_featured_post = $(".home-sidebar-featured-post__inner.blog-section ul");
    home_sidebar_featured_post.owlCarousel({
      items: 1,
      itemsCustom: false,
      itemsDesktop: [1199, 1],
      itemsDesktopSmall: [980, 1],
      itemsTablet: [630, 1],
      itemsTabletSmall: false,
      itemsMobile: [479, 1],
      singleItem: false,
      itemsScaleUp: false,
      responsive: true,
      responsiveRefreshRate: 200,
      responsiveBaseWidth: window,
      autoPlay: false,
      stopOnHover: false,
      navigation: false,
      pagination:false
    });
    // Custom Navigation Events
    $(".nav_blog .next").click(function(){
      home_sidebar_featured_post.trigger('owl.next');
    })
    $(".nav_blog .prev").click(function(){
      home_sidebar_featured_post.trigger('owl.prev');
    }) 
  
  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["home-sidebar-promoimage"]) return;
  try {
    
$(document).ready(function(){
$("#promo-carousel").owlCarousel({ 
autoPlay: 3000, //Set AutoPlay to 3 seconds 
items : 1,
iitemsDesktop: [1199, 1],
itemsDesktopSmall: [980, 1],
itemsTablet: [630, 1],
itemsTabletSmall: false,
itemsMobile: [479, 1],
singleItem: true,
animation: "fade",
pagination: true

});
});


  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["product-sidebar-deals"]) return;
  try {
    
$(document).ready(function(){
var   count = $('.sidebar-deal-products li').length;
      if(count > 1) { $('.home_sidebar--deal-nav').css('display','block');}
      else {$('.home_sidebar--deal-nav').css('display','none');}
      var homeSidedeals = $(".sidebar-deal-products");
      homeSidedeals.owlCarousel({
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [630, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false,
        pagination:false
      });
      // Custom Navigation Events
      $(".home_sidebar--deal-nav .next").click(function(){
        homeSidedeals.trigger('owl.next');
      })
      $(".home_sidebar--deal-nav .prev").click(function(){
        homeSidedeals.trigger('owl.prev');
      })             
});
      

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["sidebar-bestsellers"]) return;
  try {
    
/* $(document).ready(function(){
var top_products_count = $('.home-sidebar-bestsellers .top-products li').length;
      if(top_products_count > 1) { $('.home-sidebar-bestsellers .top_products_nav').css('display','block');}
      else {$('.home-sidebar-bestsellers .top_products_nav').css('display','none');}
      var top_products = $(".home-sidebar-bestsellers .top-products");
      top_products.owlCarousel({
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [630, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false,
        pagination:false
      });
      // Custom Navigation Events
      $(".home-sidebar-bestsellers .top_products_nav .next").click(function(){
        top_products.trigger('owl.next');
      })
      $(".home-sidebar-bestsellers .top_products_nav .prev").click(function(){
        top_products.trigger('owl.prev');
      })             
});
     */ 

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["sidebar-category"]) return;
  try {
    
$(document).ready(function(){
  $(".dt-menu-expand").click(function(event){
    event.preventDefault();
    if( $(this).hasClass("dt-mean-clicked") ){
      $(this).text("+");
      if( $(this).prev('ul').length ) {
        $(this).prev('ul').slideUp(400);
      } else {
        $(this).prev('.megamenu-child-container').find('ul:first').slideUp(600);
      }
    } else {
      $(this).text("-");
      if( $(this).prev('ul').length ) {
        $(this).prev('ul').slideDown(400);
      } else{
        $(this).prev('.megamenu-child-container').find('ul:first').slideDown(2000);
      }
    }

    $(this).toggleClass("dt-mean-clicked");
    return false;
  });

});
      

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["sidebar-promoimage"]) return;
  try {
    
$(document).ready(function(){
     $("#promo-carousel").owlCarousel({ 
      autoPlay: 3000, //Set AutoPlay to 3 seconds 
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [630, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false,
        pagination:true
 
  });
});
      

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["top-bar"]) return;
  try {
    

if (jQuery.cookie('headerTop') == 'closed') {
jQuery('.header-top').fadeOut();
}

jQuery('.header-top a.close').bind('click',function(){
jQuery('.header-top').fadeOut();
jQuery.cookie('headerTop', 'closed', {expires:-1, path:'/'});
});  

  } catch(e) { console.error(e); }
})();

})();

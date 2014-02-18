jQuery(document).ready(function() {   
	/**Для IE9 и ниже**/
    $(function() {
        if (window.PIE) {
            $('.border-r').each(function() {
                PIE.attach(this);
            });
        }
    });
	/**Поддержка placeholder**/
    $('input[placeholder], textarea[placeholder]').placeholder();
    $('.ask-b').hover(function() {
        $(this).find('.open-ask').fadeIn(200);
    }, function () {
        $(this).find('.open-ask').hide();
    });
    $('.ask-link').click(function() {
    	return false;
    });
    /****/
     $('.main-menu li.select').hover(function(){
        $(this).children('.drop-menu').fadeIn(200);
     }, function() {
            var child = $(this).find('.drop-menu').not(':animated').fadeOut();
            $('.drop-menu').each(function(){
                if(!$(this).is(child)) $(this).hide(); 
            });
     });    

    $('.drop-menu li a').live({
    	mouseenter: function()
    	   {   
    	       if ($(this).attr("id")) {
    	       		var that = this;
                    //$(this).parents('.drop-menu').children('.menu').children('li').children('a').removeClass('active');    	                                             
                    $('.drop-menu li a').removeClass('active');
    	            $(this).addClass('active');                          
        			var clickId = $(this).attr('id');                                              
        			$(this).parents('.drop-menu').find('.img').stop().css({ opacity: 1 });
        			$(this).parents('.drop-menu').find('.img').hide(0,function()                                   
        			{         
        				$(this).parents('.drop-menu').find('.img').css({"background-image": "url(images/menu-img/" + clickId + ".png)"})
        			}).show(); 
                }
    	   }
    });
    /****/
    $('.open-filter').click(function() {
        if ($(this).hasClass('active')) {
              $(this).removeClass('active');
              $(this).parents('.news-b').find('.hidden-list').stop().slideUp(200);
              return false;
          } 
          else {
            $(this).addClass('active');
              $(this).parents('.news-b').find('.hidden-list').stop().slideDown(300);
              return false;
          }
    })  
    /****/
    $(window).scroll(function(){
      if ($(window).scrollTop()<="90") $(".fixed-head").hide()
      else $(".fixed-head").show()
    });

    var contentDiv = $('#page');
    var mobileNav = $('#mobilenav');
    var winHeight = $(window).height();
    var subnavHeight = null;

    //sets the height of the menus to the largest submenu
    /*var getSubnavHeight = function() {

      subnavHeight = winHeight;

      if ($('#mobtopnav').height() > subnavHeight) {
        subnavHeight = $('#mobtopnav').height();
      }

      $('.mobsubnav').each(function(i, el) {
        var thisHeight = $(el).height();
        if (thisHeight > subnavHeight) {
          subnavHeight = thisHeight;
        }
      });

      if (subnavHeight > winHeight) {
        subnavHeight = subnavHeight + $('#mobsearch').outerHeight();
      }

    };*/
    var resetSubmenu = function() {
      $('#mobtopnav').removeClass('subnavon');
      $('.mobilecart').removeClass('second');
      //$('#mobilenav').scrollTop(0);
      setTimeout(function() {
        $('#mobtopnav li, .mobilecart .cart-form').removeClass('active');
      }, 400);
    };
    var toggleMenu = function() {
      contentDiv.toggleClass('mobilemenu');
      $('.button-menu').toggleClass('active');
      $('body').toggleClass('mobilebody');
      if (!contentDiv.hasClass('mobilemenu')) {
        $('#page').removeAttr('style');
        resetSubmenu();

        setTimeout(function() {
          mobileNav.removeClass('active');
        }, 400);
      } else {

        mobileNav.addClass('active');

        /*if (subnavHeight == null) {
          getSubnavHeight();
        }*/

        contentDiv.height(subnavHeight);

      }
    };

    $('.mobtopnavitem .mobtoplink').click(function() {
      var parentLi = $(this).parents('li');
      if (parentLi.hasClass('active')) {
        parentLi.removeClass('active');
        $('#mobtopnav').removeClass('subnavon');
        resetSubmenu();
      } else {
        parentLi.addClass('active');
        $('#mobtopnav').addClass('subnavon');
        $('html, body').animate({
          scrollTop : 0
        });
      }
      return false;
    });

    $('.button-menu').click(function() {
      toggleMenu();
      $('html, body').animate({
          scrollTop : 0
        });
      return false;
    });

    $('#page').click(function(event) {
      if (contentDiv.hasClass('mobilemenu')) {
        event.preventDefault();
        toggleMenu();
        return false;
      }
      $(this).removeClass('mobcart');
      setTimeout(function() {
          $('.mobilecart, .mobilecart .cart-form').removeClass('active');
        }, 400);
      $('.link-cart').removeClass('active');
      $('.mobilecart').removeClass('second');
      $('body').removeClass('mobilebody');
    });

    $('.mobilecart .backlink, #mobtopnav .backlink').click(function() {
      resetSubmenu();
      return false;
    });
    /****/
    $('.popup .next-step').click(function() {
      $('.cartF').addClass('active');
      return false;
    });
    $('.popup .backlink').click(function() {
      $('.cartF').removeClass('active');
      return false;
    });
    /****/

function siteR(){
  var cur_width = parseInt($(window).width());
  var brandsCarousel = $('.brands-block').hasClass('owl-carousel');
  var bodyDesktop = $('body').hasClass('desktop');
  if( cur_width <= 751) {
    if (bodyDesktop) {
      window.location.reload();
    }
    $('.link-cart').click(function() {
      if ($(this).hasClass('active')) {
        $('.mobilecart').removeClass('second');
        $('.wrap-page').removeClass('mobcart');
        $('.link-cart').removeClass('active');
        $('body').removeClass('mobilebody');
        setTimeout(function() {
          $('.mobilecart, .mobilecart .cart-form').removeClass('active');
        }, 400);
        return false;
      }
      else {
        $('.wrap-page').addClass('mobcart');
        $('.link-cart').addClass('active');
        $('.mobilecart').addClass('active');
        $('body').addClass('mobilebody');
        $('html, body').animate({
            scrollTop : 0
          });
        return false;
      }
    });
    $('.mobilecart .cart-next-link').click(function() {
      $('.mobilecart').addClass('second');
      $('.mobilecart .cart-form').addClass('active');
      return false;
    });
    /****/
    $(".brands-block").owlCarousel({
      items : 1,
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsTabletSmall: false,
      itemsMobile : false,
      navigation:true,
      autoHeight : true
    }); 
    $(".about-img").owlCarousel({
      items : 1,
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsTabletSmall: false,
      itemsMobile : false,
      navigation:true,
      autoHeight : true
    }); 
    /****/
    
  } 
  else if (cur_width > 751 && brandsCarousel) {
    window.location.reload();
  } 
  else if (cur_width > 751) {
    $('body').addClass('desktop');
    $(".link-cart").fancybox({
        minWidth  : 560,
        minHeight : 200,
        maxWidth : 900,
        padding : 0,
        margin  : 30,
        fitToView   : false,
        width       : '80%',
        height      : 'auto',
        autoSize    : false,
        openEffect  : 'none',
        prevEffect      : 'none',
        nextEffect      : 'none'
    });
  } 
  
}
$(function(){
    siteR();
});
$(window).resize(function(){
    siteR();
    
});


});


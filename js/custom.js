$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('html').addClass('ios');
	};
	$('body').removeClass('loaded');
});

$(function(){

    /* ---------------------------------------------- /*
	 * MaskedInput
	/* ---------------------------------------------- */
    if($('.tel-mask').length){
	    $(".tel-mask").mask("+7 (999) 999-99-99");
	}

	/* ---------------------------------------------- /*
	 * Fancybox
	/* ---------------------------------------------- */

    if($('[data-fancybox]').length){
	    $("[data-fancybox]").fancybox({
			autoFocus: false,
			// touch: false,
			buttons: [
				// "zoom",
				//"share",
				// "slideShow",
				//"fullScreen",
				//"download",
				// "thumbs",
				"close"
			],
			
		});
	}

	/* ---------------------------------------------- /*
	 * Slick slider
	/* ---------------------------------------------- */

    if($('.slider-for').length){
	    $('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav',
			adaptiveHeight:  true,
		});
		$('.slider-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			centerMode: true,
			focusOnSelect: true,
			centerPadding: '0px',
			appendArrows: '.slider-nav-button',
			prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-down-sign-to-navigate"><use xlink:href="#icon-arrow-down-sign-to-navigate"></use></svg></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-down-sign-to-navigate"><use xlink:href="#icon-arrow-down-sign-to-navigate"></use></svg></button>',
			responsive: [
        		
        		{
        			breakpoint: 575,
        			settings: {
        				slidesToShow: 3
        			}
        		},
        		

        	]
		});
	}

    if($('.news-preview-slider').length){
        $('.news-preview-slider').slick({
        	slidesToShow: 1,
        	slidesToScroll: 1,
        	asNavFor: '.other-stocks-slider',
        	arrows: false,
        	fade: true,
        	adaptiveHeight:  true,
        });
    };

    if($('.project-navigation-slider').length){
        $('.project-navigation-slider').slick({
        	slidesToShow: 2,
        	slidesToScroll: 2,
 
        	adaptiveHeight:  true,
        	prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-down-sign-to-navigate"><use xlink:href="#icon-arrow-down-sign-to-navigate"></use></svg></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-down-sign-to-navigate"><use xlink:href="#icon-arrow-down-sign-to-navigate"></use></svg></button>',
        	responsive: [
        		
        		{
        			breakpoint: 767,
        			settings: {
        				centerMode: true,
        				slidesToShow: 3,
        				slidesToScroll: 1,
        				arrows: false,
        				variableWidth: true,
        				centerPadding: '30px',
        			}
        		},
        		

        	]
        });
    };


    if($('.other-stocks-slider').length){
        $('.other-stocks-slider').slick({
        	slidesToShow: 6,
        	slidesToScroll: 1,
        	asNavFor: '.news-preview-slider',
        	appendArrows: '.other-stocks-button',
        	prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-down-sign-to-navigate"><use xlink:href="#icon-arrow-down-sign-to-navigate"></use></svg></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-down-sign-to-navigate"><use xlink:href="#icon-arrow-down-sign-to-navigate"></use></svg></button>',
        	focusOnSelect: true,
        	responsive: [
        		{
        			breakpoint: 1230,
        			settings: {
        				slidesToShow: 5
        			}
        		},
        		{
        			breakpoint: 991,
        			settings: {
        				slidesToShow: 4
        			}
        		},
        		{
        			breakpoint: 767,
        			settings: {
        				slidesToShow: 3
        			}
        		},
        		{
        			breakpoint: 575,
        			settings: {
        				slidesToShow: 2
        			}
        		},
        		{
        			breakpoint: 360,
        			settings: {
        				slidesToShow: 1
        			}
        		}

        	]
        });
    };

   
    
	/* ---------------------------------------------- /*
	 * Base
	/* ---------------------------------------------- */
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});



	// $('.navbar-menu__arrow').on('click', function(){
	// 	$(this).toggleClass('active')
	// 	$(this).parent().toggleClass('open').find('.dropdown-menu').toggleClass('open')
	// })
	$('.navbar-toggle').on('click', function(){
		$(this).toggleClass('active')
		$('.navbar-mobile').toggleClass('open')
		$('.navbar-mobile-overlay').toggleClass('open')
		return false;
	})

	$('.navbar-mobile-overlay').on('click', function(){
		$('.navbar-toggle').removeClass('active')
		$('.navbar-mobile').removeClass('open')
		$('.navbar-mobile-overlay').removeClass('open')
		return false;
	})

	$('.dropdown-item > .navbar-mobile-menu__link').on('click', function(){
		$(this).toggleClass('active').next().slideToggle();
		return false;
	})

	

	$('.close-map').on('click', function(){
		$('#map').slideToggle(200);
		$(this).toggleClass('active')
		namebl = $(this).find('span').html();
        if(namebl == 'СКРЫТЬ КАРТУ'){
            $(this).find('span').html('Показать КАРТУ');
        }else{
           $(this).find('span').html('СКРЫТЬ КАРТУ');
        }
		return false
	})

	$('.price-list__head').on('click', function(){
		var el = $(this);
		el.next('.price-list__body').slideToggle();
		el.toggleClass('active');
		return false;
	});

	
	$('.video__play').on('click', function(){
		var dataYoutubeLink = $(this).parents('.js-video').attr('data-youtube-link');
		$(this).parents('.js-video').html('<iframe class="video-frame" src="https://www.youtube.com/embed/'+ dataYoutubeLink +'?autoplay=1" allow="autoplay" allowfullscreen></iframe>');
		$('.js-video').addClass('active');
		return false;
	});

	

	if($('ul.photos').length){
		jQuery.fn.spectragram.accessData = {
			accessToken: '2136707.12e2743.9576ae17af4e4ad4aebf6b72433c01fd'
		};

		$('ul.photos').spectragram('getUserFeed',{
			max: 12,
			size: "medium",
			wrapEachWith: "<li class='col-xl-3 col-lg-4 col-sm-6'></li>"
		});
	}
	
	if($('.lazy').length){
		$('.lazy').Lazy();
	}
	if($('.twentytwenty-container').length){
		$(".twentytwenty-container").twentytwenty();
	}
});


window.onload = function () {
	setTimeout( function(){
		ymaps.ready(init); 
		var myMap; 
		function init () { 
		   var myMap = new ymaps.Map("map", {
		    center: [55.786456, 37.881606], 
		    zoom: 15,
		    controls: ['geolocationControl', 'zoomControl']
			});
			myMap.behaviors.disable('scrollZoom', 'drag'); 

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

		    }, {
		        iconLayout: 'default#image',

		        
		    })

			myMap.geoObjects.add(myPlacemark);
		}
	}, 2000);
}




/* ---------------------------------------------- /*
 * Filter gallery
/* ---------------------------------------------- */


jQuery(document).ready(function($){
	//open/close lateral filter
	$('.cd-filter-trigger').on('click', function(){
		triggerFilter(true);
	});
	$('.cd-filter .cd-close').on('click', function(){
		triggerFilter(false);
	});

	function triggerFilter($bool) {
		var elementsToTrigger = $([$('.cd-filter-trigger'), $('.cd-filter'), $('.cd-tab-filter'), $('.cd-gallery')]);
		elementsToTrigger.each(function(){
			$(this).toggleClass('filter-is-visible', $bool);
		});
	}

	//mobile version - detect click event on filters tab
	var filter_tab_placeholder = $('.cd-tab-filter .placeholder a'),
		filter_tab_placeholder_default_value = 'Выберите категорию',
		filter_tab_placeholder_text = filter_tab_placeholder.text();
	
	$('.cd-tab-filter li').on('click', function(event){
		//detect which tab filter item was selected
		var selected_filter = $(event.target).data('type');
			
		//check if user has clicked the placeholder item
		if( $(event.target).is(filter_tab_placeholder) ) {
			(filter_tab_placeholder_default_value == filter_tab_placeholder.text()) ? filter_tab_placeholder.text(filter_tab_placeholder_text) : filter_tab_placeholder.text(filter_tab_placeholder_default_value) ;
			$('.cd-tab-filter').toggleClass('is-open');

		//check if user has clicked a filter already selected 
		} else if( filter_tab_placeholder.data('type') == selected_filter ) {
			filter_tab_placeholder.text($(event.target).text());
			$('.cd-tab-filter').removeClass('is-open');	

		} else {
			//close the dropdown and change placeholder text/data-type value
			$('.cd-tab-filter').removeClass('is-open');
			filter_tab_placeholder.text($(event.target).text()).data('type', selected_filter);
			filter_tab_placeholder_text = $(event.target).text();
			
			//add class selected to the selected filter item
			$('.cd-tab-filter .selected').removeClass('selected');
			$(event.target).addClass('selected');
		}
	});

	buttonFilter.init();
	$('.cd-gallery ul').mixItUp({
	    controls: {
	    	enable: false
	    },
	    callbacks: {
	    	onMixStart: function(){
	    		$('.cd-fail-message').fadeOut(200);
	    	},
	      	onMixFail: function(){
	      		$('.cd-fail-message').fadeIn(200);
	    	}
	    }
	});
	
});

/*****************************************************
	MixItUp - Define a single object literal 
	to contain all filter custom functionality
*****************************************************/
var buttonFilter = {
  	// Declare any variables we will need as properties of the object
  	$filters: null,
  	groups: [],
  	outputArray: [],
  	outputString: '',
  
  	// The "init" method will run on document ready and cache any jQuery objects we will need.
  	init: function(){
    	var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.
    
    	self.$filters = $('.cd-main-content');
    	self.$container = $('.cd-gallery ul');
    
	    self.$filters.find('.cd-filters').each(function(){
	      	var $this = $(this);
	      
		    self.groups.push({
		        $inputs: $this.find('.filter'),
		        active: '',
		        tracker: false
		    });
	    });
	    
	    self.bindHandlers();
  	},
  
  	// The "bindHandlers" method will listen for whenever a button is clicked. 
  	bindHandlers: function(){
    	var self = this;

    	self.$filters.on('click', 'a', function(e){
	      	self.parseFilters();
    	});
	    self.$filters.on('change', function(){
	      self.parseFilters();           
	    });
  	},
  
  	parseFilters: function(){
	    var self = this;
	 
	    // loop through each filter group and grap the active filter from each one.
	    for(var i = 0, group; group = self.groups[i]; i++){
	    	group.active = [];
	    	group.$inputs.each(function(){
	    		var $this = $(this);
	    		if($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]')) {
	    			if($this.is(':checked') ) {
	    				group.active.push($this.attr('data-filter'));
	    			}
	    		} else if($this.is('select')){
	    			group.active.push($this.val());
	    		} else if( $this.find('.selected').length > 0 ) {
	    			group.active.push($this.attr('data-filter'));
	    		}
	    	});
	    }
	    self.concatenate();
  	},
  
  	concatenate: function(){
    	var self = this;
    
    	self.outputString = ''; // Reset output string
    
	    for(var i = 0, group; group = self.groups[i]; i++){
	      	self.outputString += group.active;
	    }
    
	    // If the output string is empty, show all rather than none:    
	    !self.outputString.length && (self.outputString = 'all'); 
	
    	// Send the output string to MixItUp via the 'filter' method:    
		if(self.$container.mixItUp('isLoaded')){
	    	self.$container.mixItUp('filter', self.outputString);
		}
  	}
};
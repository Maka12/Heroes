jQuery(document).ready(function() {
	
	var  _win    = jQuery(window),
	_sidebar_bar = jQuery('#sidebar'),
	_win_height  = _win.height();



	//** call Lightbox 
	if(jQuery('.lightbox').length){
		jQuery('.lightbox').attr("data-lightbox", "image-1");
	}
	
	//** init isotope
	var ux_ts = new ThemeIsotope;
	ux_ts.init();
	
	//** Mp3 Player
	var player_wrap = jQuery("#jquery_jplayer");
	var audio_format_post = jQuery('.audio-format-post .audiobutton');
	
	if(audio_format_post.length){
		player_wrap.jPlayer({
			ready: function () {
				jQuery(this).jPlayer("setMedia", {
					mp3:""
				});
			},
			swfPath: JS_PATH,
			supplied: "mp3",
			wmode: "window"
		});
		
		audio_format_post.each(function(){
            var _this = jQuery(this);
			var _this_id = _this.attr("id");
			
			_this.click(function(){
				player_wrap.jPlayer("stop");
				if(_this.is('.pause')){
					jQuery('.audiobutton').removeClass('play').addClass('pause');
					_this.removeClass('pause').addClass('play');
					player_wrap.jPlayer("setMedia", {
						mp3: _this.attr("rel")
					});
					player_wrap.jPlayer("play");
					player_wrap.bind(jQuery.jPlayer.event.ended, function(event) {
						jQuery('#'+_id).removeClass('play');
						jQuery('#'+_id).addClass('pause');
					});
					
				}else if(_this.is('.play')){
					_this.removeClass('play').addClass('pause');
					player_wrap.jPlayer("stop");
				}
			});
        });
	}
	
	// Responsive condition 
	if( jQuery('.responsive-ux').length ){ 	
		var _responsive = true;
	}else{
		var _responsive = false;
	}
	
	
	// Set min height for content area
	if(jQuery('#content_wrap').length){
		jQuery('#content_wrap').parent('.row-fluid').css('min-height',_win_height);
		jQuery('#content_wrap').parent('#content').css('min-height',_win_height);
	}

	// Slider wrap
 	
	


	// Float bar set width
	if(jQuery("#float-bar-triggler").length) {
		  
		   jQuery("#float-bar-triggler").click(function(e){

				if(Modernizr.touch){

					if(jQuery(this).parent('#float-bar').hasClass('float-hover')){

						jQuery(this).parent('#float-bar').removeClass('float-hover');
						jQuery('html,body').animate({scrollTop:0},500);

					}else{

						jQuery(this).parent('#float-bar').addClass('float-hover');

					}

				}else{
					jQuery('html,body').animate({scrollTop:0},500);
				}

				return false;
				
		   });

	}


	// Call galleria slider

	if(jQuery('.galleria').length){

		// Page fullwidth slider template. Fix height issue in ios7 ipad landscape mode. 
		if(jQuery('.page-portfolio-template').length){		
			if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)) {
			    jQuery('html').addClass('ipad ios7');
			} 
		}

		jQuery('.galleria').each(function(){
				
			var 
			slider_h = window.innerHeight,
			crop        = jQuery(this).data('crop'),
			transition  = jQuery(this).data('transition'),
			interval    = jQuery(this).data('interval');

			jQuery(this).galleria({
				idleMode     : false,
				transition   : transition, //fade, slide
				autoplay	 : interval, //timer
				responsive   : true,
				thumbnails   : false,
				showImagenav : true,
				imageCrop    : crop, // fit: false, fill: true
				height       : slider_h
			});
			console.log(slider_h);

		});

		var screen_size = _win.width();

		_win.resize(function() {
			var before_resize = screen_size;
			screen_size = _win.width();
			width_change = Math.abs(before_resize - screen_size);

			if ( width_change > 150 ) {
				window.setTimeout('location.reload()', 10);
			}

		});	
		
	}

	// Slider wrap size
	
	function top_slider(){

		var 
		slider_h = window.innerHeight,
		top_wrap = jQuery('#top-slider');

		top_wrap.css('height', slider_h);

		if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)) {
		    jQuery('html').addClass('ipad ios7');
		} 

		_win.resize(function(){
			top_wrap.css('height',slider_h);
		});

	}//End function

	if(jQuery('#top-slider').length){	

		top_slider();
	}	
	

	// Gallery content info box fixed
	function domPos(){
		var wordCont = jQuery(".gallery-info-wrap"); //col text
		var imagesCont = jQuery(".gallery-images-wrap"); //col images
        var wordContHeight = wordCont.height();
        var wordContWidth = wordCont.outerWidth();
        var clientHeight = _win.height();
        var isImagesCenter = jQuery('#content_wrap').children().children(":first-child").hasClass("pull-right");
        var wordContHideHeight = jQuery(document).scrollTop();
        
		wordCont.parent().css("position","relative");
		function domPosition(){
			var fix = {"position":"fixed","width":"35%"};
        	var sta = {"position":"static"};
        	var rel = {'position':"relative","left":"35%"};
	        wordCont.css(fix);
	        if(wordContHideHeight>wordContHeight){
	        	wordCont.css("bottom",0);
	        }
	        imagesCont.css(rel);
            if(wordContHeight > clientHeight){
                wordCont.css(sta);
                imagesCont.css(sta);
                _win.scroll(function(){
                    wordContHideHeight = jQuery(document).scrollTop();
                    if(wordContHideHeight >= (wordContHeight-clientHeight)){
                        wordCont.css(fix).css("bottom",0);
                        imagesCont.css(rel);
                    }else{
                        wordCont.css(sta);
                        imagesCont.css(sta);
                    }
                });
            }
        }

        function domPosition2(){
        	var fix = {"position":"fixed","right":0};
        	var sta = {"position":"static"};
        	var rel = {'position':"relative"};
        	wordCont.css(fix);
        	if(wordContHideHeight>wordContHeight){
	        	wordCont.css("bottom",0);
	        }
	        imagesCont.css(rel);
            if(wordContHeight > clientHeight){
                wordCont.css(sta);
                imagesCont.css(sta);
                _win.scroll(function(){
                    wordContHideHeight = jQuery(document).scrollTop();
                    if(wordContHideHeight >= (wordContHeight-clientHeight)){
                        wordCont.css(fix).css("bottom",0);
                        imagesCont.css(rel);
                    }else{
                        wordCont.css(sta);
                        imagesCont.css(sta);
                    }
                });
            }
        }

        if(isImagesCenter){

        	domPosition2();

        }else{

        	domPosition();
        }
	}

	if ( !Modernizr.touch && jQuery('.gallery-wrap-sidebar').length && jQuery('.sidebar_hide').length ) {
		
		_win.resize(function(){

			if(_win.width() > 768 ) {
				domPos();
			}else{
				_win.unbind("scroll");
			}
		});
	}	

	if( _win.width() > 768 &&  !Modernizr.touch && jQuery('.gallery-wrap-sidebar').length && jQuery('.sidebar_hide').length){
		
		jQuery('#content_wrap').imagesLoaded(function(){
			domPos();
		});

	}


	
	// Theme: Responsive Mobile Menu 
	function ux_responsive_menu(){
		 
		var header = jQuery('#header');
		
		if(!header.length) return;

			var 
			menu               =  _sidebar_bar.find('#navi ul.menu'),
			first_level_items  =  menu.find('>li').length;
		
			var switchWidth = 770;
         
		var  
		container            = jQuery('#wrap'),
		show_menu            = jQuery('<a id="advanced_menu_toggle" href="#"><i class="icon-m-menu"></i></a>'),
		//hide_menu          = jQuery('<a id="advanced_menu_hide" href="#"><i class="m-close-circle"></i></a>'),
		show_meta		     = jQuery('<a id="advanced_menu_toggle2" href="#"><i class="icon-m-grid"></i></a>'),
		mobile_advanced      = menu.clone().attr({id:"mobile-advanced", "class":""}),
		mobile_meta_advanced = jQuery('#mobile-header-meta'),
		menu_added           = false,
		meta_added			 = false,
		body_wrap            = jQuery('body');


		show_menu.click(function(){
							
			if(body_wrap.is('.show_mobile_menu')){
				body_wrap.removeClass('show_mobile_menu');
				body_wrap.removeClass('show_mobile_meta');
				body_wrap.css({'height':'auto'});
			
			}else{
				body_wrap.addClass('show_mobile_menu');
				body_wrap.removeClass('show_mobile_meta');
				set_height();
			}
			
			return false;
			
        });

		show_meta.click(function(){
							
			if(body_wrap.is('.show_mobile_meta')){
				body_wrap.removeClass('show_mobile_meta');
				body_wrap.removeClass('show_mobile_menu');
				body_wrap.css({'height':"auto"});
			
			}else{
				body_wrap.addClass('show_mobile_meta');
				body_wrap.removeClass('show_mobile_menu');
				set_height_meta();
			}
			
			return false;
			
		});

		var set_visibility = function(){
		
			if(_win.width() > switchWidth){
			
				body_wrap.removeClass('show_mobile_menu');
				body_wrap.removeClass('show_mobile_meta');
				header.removeClass('mobile_active');
				jQuery('body').css({'height':"auto"});

				//HALF PAGE layout (feature image template)
				if(jQuery('#page-feaured-image-layout').length ){
					jQuery('#featured-img-wrap, #page-feaured-image-entry').css('height',_win_height);
				}
			
			}else{
			
				header.addClass('mobile_active');
				jQuery('body').css({'height':"auto"});
			
				if(!menu_added){
					show_menu.appendTo(header);
					mobile_advanced.prependTo(body_wrap);
					menu_added = true;
				}
				
				if(!meta_added){
					show_meta.appendTo(header);
					meta_added = true;
				}
			
				if(body_wrap.is('.show_mobile_menu')){
				  set_height();
				}
				
				if(body_wrap.is('.show_mobile_meta')){
				  set_height_meta();
				}

				//HALF PAGE layout (feature image template)
				if(jQuery('#page-feaured-image-layout').length ){
					jQuery('#featured-img-wrap, #page-feaured-image-entry').css('height','auto');
				}
			}
		},
					
		set_height = function() {
			var height = mobile_advanced.css({position:'relative'}).outerHeight(true),
			win_h  = _win_height;
			
			if(height < win_h) height = win_h;
			mobile_advanced.css({position:'absolute'});
			body_wrap.css({'height':height,'overflow-y':'hidden','top':'0'});
		},
				   
		set_height_meta = function() {
			var height = mobile_meta_advanced.css({position:'relative'}).outerHeight(true),
			win_h  = _win_height;
			
			if(height < win_h) height = win_h;
			mobile_meta_advanced.css({position:'absolute'});
			jQuery('body').css({'height':height,'overflow-y':'hidden','top':'0'});
		};/**/

		_win.on("debouncedresize", set_visibility);
		set_visibility();
         
    }
	
	if( _responsive == true ){
		ux_responsive_menu();
	}
	
	
	// For Touch Devices 

	if(Modernizr.touch){

		if(_sidebar_bar.hasClass('sidebar_hide')){
	
			jQuery('#hot-close-sidebar-touch').click(function(e){
				if(_sidebar_bar.hasClass('sidebar-hover')){
					_sidebar_bar.removeClass('sidebar-hover');
				}
				e.preventDefault();
			});

			jQuery('#sidebar-trigger').on({ 'touchstart click' : function(){ 
				if(!_sidebar_bar.hasClass('sidebar-hover')){
					_sidebar_bar.addClass('sidebar-hover');
				}
				//e.preventDefault();
				return false;
			} });

		}

		jQuery( '#navi li:has(ul)' ).doubleTapToGo();
	} 

	//Sidebar position when logined
	if(jQuery('#wpadminbar').length && jQuery('#wpadminbar').is(":visible")){
		jQuery('#sidebar').css('top','30px');
		jQuery('.filter-floating-fixed').css('top','50px');
	}
	
	//Set transform-origin
	function main_transform_origin(){

		var origin_value  =  function(){
			
			var 
			st         = _win.scrollTop(), 
			pageHeight = jQuery('#main').height(),
			orgin_y    = '400px',
			win_Height = _win_height;

			if( st < win_Height ){
				orgin_y = win_Height/1.2;
			}else{
				orgin_y = pageHeight - (win_Height/1.2);
			}

			jQuery('#main').css('transform-origin','50% '+ orgin_y+'px');
			
		};
		_win.scroll(origin_value);

	    origin_value();	
	};

	if( _win.width() > 768 && !Modernizr.touch ) {
		main_transform_origin();
	}

	//** Site Loading
	var _site_loading = jQuery('.site-loading');

	if(_site_loading.length){
		
		jQuery("html, body").css({height:_win_height});

		jQuery('#wrap').imagesLoaded(setTimeout(function(){
			
			_site_loading.addClass('visible');
			
			//jQuery('.sidebar-main,#sidebar-widget,#content_wrap').animate({opacity: 1}, 100);

			jQuery("html, body").css({height: "auto"});

		},1500));

	}
	
	//** Page Loading
	var _page_loading = jQuery('.page-loading');
	if( _page_loading.length ){
		
		//** page loading event
		function ux_page_loading_event(el){
			if(el.is('.lightbox')){}else if(el.is('.liquid_list_image')){}else{
				var _url = el.attr('href');
				if(_url){
					jQuery('#sidebar').addClass('sidebar-out');
					_page_loading.fadeIn(300, function(){
						_page_loading.addClass('visible');
						window.location.href = _url;
					});
				}
				return false;
			}
		}
		
		if(!Modernizr.touch){

		//** sidebar menu
		jQuery('#sidebar').find('#navi ul.menu a').click(function(){
			if(!jQuery(this).parent().hasClass('current-menu-anchor')){
				ux_page_loading_event(jQuery(this));
			}
		});
		
		//** all search form
		jQuery('.submitsearch').parents('form').submit(function(){
			jQuery('#sidebar').addClass('sidebar-out');
			jQuery("html, body").css({height:_win_height, overflow:"hidden"});
			_page_loading.fadeIn(300, function(){
				_page_loading.addClass('visible');
			});
		});
		
		//** Logo
		jQuery('#logo a').click(function(){
			ux_page_loading_event(jQuery(this));
		});

		//** WPML
		if(jQuery('.wpml-language-flags').length) {
			jQuery('.wpml-language-flags a').click(function(){
				ux_page_loading_event(jQuery(this));
			});
		}


		//** post navi
		jQuery('#post-navi a').click(function(){
			ux_page_loading_event(jQuery(this));
		});
		
		//** archive unit
		jQuery('.archive-unit a').click(function(){
			ux_page_loading_event(jQuery(this));
		});
		
		//** main title
		jQuery('#main-title a').click(function(){
			ux_page_loading_event(jQuery(this));
		});
		
		//** sidebar widget
		jQuery('.widget_archive a, .widget_recent_entries a, .widget_search a, .widget_pages a, .widget_nav_menu a, .widget_tag_cloud a, .widget_calendar a, .widget_text a, .widget_meta a, .widget_categories a, .widget_recent_comments a, .widget_tag_cloud a').click(function(){
			ux_page_loading_event(jQuery(this));
		});
		
		//** Module
		//jQuery('.moudle .iterlock-caption a, .moudle .tab-content a, .moudle .accordion-inner a, .moudle .blog-item a, .moudle .isotope a, .moudle .ux-btn, .moudle .post-carousel-item a, .moudle .caroufredsel_wrapper a').click(function(){
		//	ux_page_loading_event(jQuery(this));
		//});

		//** Porfolio template
		jQuery('.related-post-unit a').click(function(){	
			ux_page_loading_event(jQuery(this));
		});

		}

		
		jQuery("html, body").css({height:_win_height});
		
		jQuery('#wrap').imagesLoaded(function(){
			
			//_page_loading.fadeOut(1300, function(){
				_page_loading.removeClass('visible');
			//});
				
			jQuery("html, body").css({height: "auto"});
			
		});
		
		
	}
});
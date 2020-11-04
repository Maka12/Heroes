function ThemePageBuilder(){
	var ux_ts = new ThemeIsotope;
	var ux_pb = this;
	var theme_wrap = jQuery('#wrap');
	var theme_wrap_width = Number(theme_wrap.width());
	var theme_content = jQuery('#content');
	var theme_content_width = Number(theme_content.width());
	var theme_win = jQuery(window);
	var player_wrap = jQuery("#jquery_jplayer");
	
	ux_ts.init();
	
	//pb init
	this.init = function(){
		//Pagebuild: Reload page for some special moduel when window resize e.g. Testimenials, Fullwidth wrap
		var screen_size = ux_pb.getSizeName();
		
		//Tab-v responsive
		var _moudle_tabs_v = jQuery('.moudle .tabs-v');
		if(_moudle_tabs_v.length){
			ux_pb.tabresponsive();
			theme_win.on("debouncedresize", ux_pb.tabresponsive);
		}

		//Contact form
		var _moudle_contactform = jQuery('.moudle .contact_form');
		if(_moudle_contactform.length){
			ux_pb.contactform();
		}
		
		//Tabs Moudle Call
		var _moudle_tabs = jQuery('.moudle .nav-tabs');
		if(_moudle_tabs.length){
			_moudle_tabs.each(function(){
				var _this = jQuery(this);
				var _this_link = _this.find('a');
				ux_pb.tabcall(_this_link);
			})
		}
		
		//Icon box Plus
		var _moudle_iconbox = jQuery('.moudle .iconbox-plus');
		if(_moudle_iconbox.length){
			ux_pb.iconboxplus();
		}
		
		//Call Lightbox 
		if(jQuery('.lightbox').length){
			jQuery('.lightbox').attr("data-lightbox", "image-1");
            //data-lightbox="image-1" data-title="My caption"
		}
		
		//AccordionToggle Moudle Call
		var _moudle_accordion_toggle = jQuery('.moudle .accordion-ux');
		if(_moudle_accordion_toggle.length){
			ux_pb.accordiontoggle();
		}
		
		//Pagebuild: Separator 
		var _moudle_separator = jQuery('.moudle .separator');
		if(_moudle_separator.length){
			ux_pb.separator();
		}
		//Pagebuild: Remove the Margin-bottom in Blank-divider Moudle 
		jQuery('.moudle:has(.blank-divider)').css('margin-bottom','0');
		
		//Pagebuild: Promote centered
		var _moudle_promote_center = jQuery('.moudle .promote-wrap-2c');
		var _moudle_promote_button = jQuery('.moudle .promote-button-wrap');
		if(_moudle_promote_center.length > 0 && _moudle_promote_button.length > 0){ 
			ux_pb.promotecentered(); 
			theme_win.on("debouncedresize", ux_pb.promotecentered);
		}
		
		//Pagebuild: Social Share
		var _moudle_post_social = jQuery('.post_social');
		if(_moudle_post_social.length){
			ux_pb.postsocial();
		}
		
		//Pagebuild: Message Box Moudle	Close	
		var _moudle_message_box = jQuery('.moudle .message-box');	
		if(_moudle_message_box.length){
			ux_pb.messagebox();
		}
		
		//Pagebuild: Countdown	
		var _moudle_countdown = jQuery('.moudle .countdown');	
		if(_moudle_countdown.length){
			ux_pb.countdown();
		}
		
		//Pagebuild: Client Moudle
		var _moudle_clients = jQuery('.moudle .clients_wrap');
		if(_moudle_clients.length){
			ux_pb.clients();
			ux_pb.clientsbtn();
			theme_win.on("debouncedresize", ux_pb.clients);
		}
		
		//Pagebuild: Call jCarouselLite
		var _moudle_testimonials = jQuery('.moudle .testimonials-wrap');	
		if(_moudle_testimonials.length){
			ux_pb.testimonial();
		}
		
		//Pagebuild: Image Box Moudle
		var _moudle_imagebox = jQuery('.moudle .image-box-svg-wrap');	
		if(_moudle_imagebox.length){
			ux_pb.imagebox();
		}
		
		//Pagebuild: GoogleMap Moudle
		var _moudle_googlemap = jQuery('.moudle .module-map-canvas');	
		if(_moudle_googlemap.length){
			ux_pb.googlemap();
		}
		
		//Pagebuild: Post Carousel Moudle
		var _moudle_postcarousel = jQuery('.moudle .post-carousel-wrap');	
		if(_moudle_postcarousel.length){
			ux_pb.postcarousel();
			theme_win.on("debouncedresize", ux_pb.postcarousel);
		}
		
		//Pagebuild: Standard Blog Moulde responsive
		var _moudle_blog = jQuery('.moudle .blog-wrap');
		if(_moudle_blog.length){
			ux_pb.standardblog();
			theme_win.on("debouncedresize", ux_pb.standardblog);
		}
		
		//Fullwrap init
		//ux_pb.fullwrapsize();
		ux_pb.fullwraptabs();
		//parallax
		if(jQuery('html').hasClass('no-touch') && theme_win.width()>768){
			var ux_pb_parallax = jQuery('.parallax');
			if(ux_pb_parallax.length){
				ux_pb.fullparallax();
			}
		}
		
		//Pagebuild: image module shadow
		var _moudle_imageshadow = jQuery('.moudle .shadow');
		if(_moudle_imageshadow.length){
			ux_pb.imageshadow();
		}
		
		//Pagebuild: Call Carousel Slider, Content slider responsive
		var _moudle_listitemslider = jQuery('.moudle .listitem_slider');
		if(_moudle_listitemslider.length){
			ux_pb.contentslider();
			theme_win.on("debouncedresize", ux_pb.contentslider);
		}
		
		//Pagebuild: Flex Slider
		var _moudle_flexslider = jQuery('.moudle .flex-slider-wrap');
		if(_moudle_flexslider.length){
			ux_pb.flexslider();
		}
		
		//Pagebuild: Pagnition/twitter style
		var _moudle_twitter_link = jQuery('.pagenums.page_twitter a');
		if(_moudle_twitter_link.length){
			_moudle_twitter_link.each(function(){
				ux_pb.pagenumstwitter(jQuery(this));
			})
			
		}
		
		//Pagebuild: Liquid List
		var _moudle_liquidlist = jQuery('.moudle .isotope-liquid-list');
		if(_moudle_liquidlist.length){
			ux_pb.liquidlist();
		}
		
		//Pagebuild: Liquid Click
		var _moudle_liquidimage = jQuery('.moudle .liquid_list_image');
		if(_moudle_liquidimage.length){
			_moudle_liquidimage.each(function(){
				jQuery(this).css('cursor','pointer');
				ux_pb.liquidclick(jQuery(this));
			})
		}
		
		//Pagebuild: Pagenums Click
		var _moudle_pagenums = jQuery('.moudle .pagenums .select_pagination');
		if(_moudle_pagenums.length){
			_moudle_pagenums.each(function(){
				ux_pb.pagenums(jQuery(this));
			})
		}
		
		//Pagebuild: Liquid Responsive
		var _moudle_liquid_list = jQuery('.moudle .isotope-liquid-list');
		if(_moudle_liquid_list.length){
			ux_pb.liquidresponsive();
			theme_win.on("debouncedresize", ux_pb.liquidresponsive);
		}
		
		if(jQuery('.testimenials').length || jQuery('.custom_fullwidth_wrap').length){
			jQuery(window).resize(function() {
				var before_resize = screen_size;
				screen_size = ux_pb.getSizeName();
				if ( before_resize != screen_size ) {
					window.setTimeout('location.reload()', 10);
				}
			});
		}
		
		//Portfolio: mouseover mask
		if( jQuery('.mask-hover').length){
			jQuery(' .mask-hover ').each( function() { 
				jQuery(this).find('.mask-hover-inn').hoverdir(); 
			});
		}

		//if(!Modernizr.touch){
			//pagebuild: animation scroll
			var _moudle_hasanimation = jQuery('.moudle_has_animation');
			if(_moudle_hasanimation.length){
				jQuery(window).load(function(){
					ux_pb.animationscroll();
				});
			}
		//}	

		//Modernizr.touch
		if(Modernizr.touch){

			if(jQuery('.fullwidth-wrap').length>0){
				jQuery('.fullwidth-wrap').each(function(){
					jQuery(this).css('background-attachment','scroll');
				})
			}
	
			// Pagebuild: portfolio caption hover -  For Touch Devices 
			
			/*function classReg( className ) {
				return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
			}
	
			var hasClass, addClass, removeClass;
	
			if ( 'classList' in document.documentElement ) {
				hasClass = function( elem, c ) {
					return elem.classList.contains( c );
				};
				addClass = function( elem, c ) {
					elem.classList.add( c );
				};
				removeClass = function( elem, c ) {
					elem.classList.remove( c );
				};
			}else {
				hasClass = function( elem, c ) {
					return classReg( c ).test( elem.className );
				};
				addClass = function( elem, c ) {
					if ( !hasClass( elem, c ) ) {
							elem.className = elem.className + ' ' + c;
					}
				};
				removeClass = function( elem, c ) {
					elem.className = elem.className.replace( classReg( c ), ' ' );
				};
			}
	
			function toggleClass( elem, c ) {
				var fn = hasClass( elem, c ) ? removeClass : addClass;
				fn( elem, c );
			}
	
			var classie = {
				// full names
				hasClass: hasClass,
				addClass: addClass,
				removeClass: removeClass,
				toggleClass: toggleClass,
				// short names
				has: hasClass,
				add: addClass,
				remove: removeClass,
				toggle: toggleClass
			};
	
			// transport
			if ( typeof define === 'function' && define.amd ) {
				// AMD
				define( classie );
			} else {
				// browser global
				window.classie = classie;
			}
			
			//Pagebuild: Portfolio Module Hover - Folding
			[].slice.call( document.querySelectorAll( '.inside > figure' ) ).forEach( function( el, i ) {
				el.querySelector( 'figcaption a' ).addEventListener( 'touchstart', function(e) {
					e.stopPropagation();
				}, false );
				el.querySelector( '.btn_wrap a.lightbox' ).addEventListener( 'touchstart', function(e) {
					e.stopPropagation();
				}, false );
				el.querySelector( '.btn_wrap a.more' ).addEventListener( 'touchstart', function(e) {
					e.stopPropagation();
				}, false );
				el.addEventListener( 'touchstart', function(e) {
					classie.toggle( this, 'cs-hover' );
				}, false );
			} );
			
			//Pagebuild: Portfolio Module Hover - Flip
			
			[].slice.call( document.querySelectorAll( 'div.container3d' ) ).forEach( function( el, i ) {
				el.querySelector( '.back a' ).addEventListener( 'touchstart', function(e) {
					e.stopPropagation();
				}, false );
				[].slice.call( el.querySelectorAll( '.hover_thumb_unit' ) ).forEach( function( t, i ) {
					t.querySelector( 'a' ).addEventListener( 'touchstart', function(e) {
						e.stopPropagation();
					}, false );
				} );
				el.addEventListener( 'touchstart', function(e) {
					classie.toggle( this, 'hover3d' );
				}, false );
			} );
			
			//Pagebuild: Team Module Hover 
			[].slice.call( document.querySelectorAll( '.team-item' ) ).forEach( function( el, i ) {
				el.querySelector( '.team-item-con-back a' ).addEventListener( 'touchstart', function(e) {
					e.stopPropagation();
				}, false );
				el.addEventListener( 'touchstart', function(e) {
					classie.toggle( this, 'team-hover3d' );
				}, false );
			} );*/
			
	
		} // End if Modernizr.touch
	}
	
	//Pagebuild: Pagenums Click
	this.pagenums = function(el){
		el.click(function(){
			var _this       = jQuery(this),
			    module_post = _this.data('post'),
			    post_id     = _this.data('postid'),
				paged       = _this.data('paged'),
                aurl        = _this.data('aurl'),
				module_id   = _this.data('module');
			
			_this.parent().find('.select_pagination').removeClass('current');
			_this.addClass('current');
			_this.text('Loading');
			
			var ajax_data = {
				'module_id'   : module_id,
				'module_post' : module_post,
				'paged'       : paged,
				'post_id'     : post_id,
				'mode'        : 'pagenums',
                'aurl'        : aurl
			}
			console.log(ajax_data['aurl']);
			ux_pb.moduleload(ajax_data, jQuery('[data-post='+module_post+']').not('.not_pagination'));
			return false;
		});
	}
	
	//Pagebuild: Module Load Ajax
	this.moduleload = function(data, container){
		jQuery.post(data['aurl'], {
			'mode': 'module',
			'data': data
		}).done(function(content){

			if(container.is('.container-isotope')){

				var newElems = jQuery(content).css({ opacity: 0 }),
				    oldElems = container.find('.isotope-item');
					
				switch(data['mode']){
					case 'pagenums': 
						var this_pagenums = jQuery('.pagination a[data-post='+data["module_post"]+'][data-paged='+data["paged"]+']');
						this_pagenums.text(data["paged"]);
						container.find('.isotope').isotope( 'remove', oldElems );
						jQuery('html,body').animate({
							scrollTop: container.offset().top - 40
						},
						1000); 
					break;
					case 'twitter': 
						var this_twitter = jQuery('.page_twitter a[data-post='+data["module_post"]+']');
						this_twitter.data('paged',data['paged'] + 1).text('Load More');
						if(data['paged'] == this_twitter.data('count')){
							this_twitter.fadeOut(300);
							this_twitter.parent('.page_twitter').css('margin-top','0');
						}
					break;
				}
				newElems.imagesLoaded(function(){
					container.find('.isotope').isotope('insert', newElems);
					var image_size = container.find('.isotope').data('size');
					ux_ts.setWidths(image_size, container.find('.isotope'));

					//3Dflip hover center IE8 hack
					
					if( jQuery('.container3d').length > 0 ) {
		
						if( (jQuery.browser.msie == true && parseInt(jQuery.browser.version) < 9)){
							
							ux_ts.flipcenterie();
							//ux_ts.flipie();
						}
					}
					
					container.find('.isotope').isotope({
						masonry: {
							columnWidth: ux_ts.getUnitWidth(image_size, container.find('.isotope'))
						}
					});
					ux_pb.liquidlist();
					ux_pb.liquidclick(newElems.find('.liquid_list_image'));
					
				});
				
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
				
				player_wrap.jPlayer("stop");
				
				
				function _audio_play_click(){
				newElems.find('.pause').click(function(){
					var _id = jQuery(this).attr("id");
					newElems.find('.audiobutton').removeClass('play');
					newElems.find('.audiobutton').addClass('pause');
					jQuery(this).removeClass('pause')
					jQuery(this).addClass('play');
					player_wrap.jPlayer("setMedia", {
						mp3: jQuery(this).attr("rel")
					});
					player_wrap.jPlayer("play");
					player_wrap.bind(jQuery.jPlayer.event.ended, function(event) {
						jQuery('#'+_id).removeClass('play');
						jQuery('#'+_id).addClass('pause');
					});
					_audio_pause_click();
					_audio_play_click();
				})
				
				}
			
				function _audio_pause_click(){
					newElems.find('.play').click(function(){
						jQuery(this).removeClass('play')
						jQuery(this).addClass('pause');
						player_wrap.jPlayer("stop");
						_audio_play_click();
					})
					
				}
				
				_audio_play_click();
				
				function _toolTip_call(){
					if(newElems.find('.songtitle').length>0 ){
						newElems.find('.songtitle').tooltip({
							track: true
						});
					}
				}
				
				_toolTip_call();

			}else{

				var newElems = jQuery(content); 

				switch(data['mode']){
					case 'pagenums': 
						var this_pagenums = jQuery('.pagination a[data-post='+data["module_post"]+'][data-paged='+data["paged"]+']');
						this_pagenums.text(data["paged"]);
						jQuery('html,body').animate({
							scrollTop: container.offset().top - 40
						},
						1000); 

						container.html(content);

					break;
					case 'twitter': 
						var this_twitter = jQuery('.page_twitter a[data-post='+data["module_post"]+']');
						this_twitter.data('paged',data['paged'] + 1).text('Load More');
						if(data['paged'] == this_twitter.data('count')){
							this_twitter.fadeOut(300);
							this_twitter.parent('.page_twitter').css('margin-top','0');
						}

						container.append(newElems);

						if(jQuery('.nicescroll-ux').length){
							jQuery("html").getNiceScroll().resize();
						}

					break;
				}

				//Fadein theitems of next page 
				newElems.animate({opacity:1}, 1000); 

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
				
				player_wrap.jPlayer("stop");
				
				
				function _audio_play_click(){
				container.find('.pause').click(function(){
					var _id = jQuery(this).attr("id");
					container.find('.audiobutton').removeClass('play');
					container.find('.audiobutton').addClass('pause');
					jQuery(this).removeClass('pause')
					jQuery(this).addClass('play');
					player_wrap.jPlayer("setMedia", {
						mp3: jQuery(this).attr("rel")
					});
					player_wrap.jPlayer("play");
					player_wrap.bind(jQuery.jPlayer.event.ended, function(event) {
						jQuery('#'+_id).removeClass('play');
						jQuery('#'+_id).addClass('pause');
					});
					_audio_pause_click();
					_audio_play_click();
				})
				
			}
			
			function _audio_pause_click(){
				container.find('.play').click(function(){
					jQuery(this).removeClass('play')
					jQuery(this).addClass('pause');
					player_wrap.jPlayer("stop");
					_audio_play_click();
				})
				
			}
			
			_audio_play_click();

			}
			

		});
	}
	
	//Pagebuild: Liquid Responsive
	this.liquidresponsive = function(){/*
		var _moudle_liquid_list = jQuery('.moudle .isotope-liquid-list');
		_moudle_liquid_list.each(function(){
			var liquid_width = jQuery(this).width();
			if( liquid_width < 480 ){
				jQuery('head').append('<style>.liquid-more-icon i{ display:none; }</style>');				   
			}									 
		});*/
	}
	
	//Pagebuild: Liquid Column
	this.liquidcolumn = function(_this_isotope_item){
		var _target = false;
		var _this_parents = _this_isotope_item.parents('.isotope-liquid-list');
		var _isotope_item = _this_parents.find('isotope-item');
		var _this_isotope_num = _this_isotope_item.data('num');
		var _this_size = _this_parents.data('size');
		var _this_width = _this_parents.data('width');
		var _column = _this_parents.width() / ux_ts.getUnitWidth(_this_size, _this_parents) / 2,
			_column = parseInt(_column);
		var _base_num = _this_isotope_num%_column;
		
		switch(_column){
			case 5:
				if(_this_size == 'small' && _this_width == 'width8'){
					if(_base_num%3 == 0){
						_target = _this_isotope_num + 2;
					}
					if(_base_num%4 == 0){
						_target = _this_isotope_num + 1;
					}
				}
			break;
			
			case 4:
				if((_this_size == 'small' && _this_width == 'width8') || (_this_size == 'medium' && _this_width == 'width8')){
					if(_base_num%2 == 0){
						_target = _this_isotope_num + 3;
					}
					if(_base_num%3 == 0){
						_target = _this_isotope_num + 2;
					}
					if(_base_num%4 == 0){
						_target = _this_isotope_num + 1;
					}
				}
				if((_this_size == 'small' && _this_width == 'width6') || (_this_size == 'medium' && _this_width == 'width6')){
					if(_base_num%3 == 0){
						_target = _this_isotope_num + 2;
					}
				}
			break;
			
			case 3:
				if((_this_size == 'small' && _this_width == 'width8') || (_this_size == 'small' && _this_width == 'width6') || (_this_size == 'medium' && _this_width == 'width8') || (_this_size == 'medium' && _this_width == 'width6') || (_this_size == 'large' && _this_width == 'width6')){
					if(_base_num%2 == 0){
						_target = _this_isotope_num + 2;
					}
					if(_base_num%3 == 0){
						_target = _this_isotope_num + 1;
					}
				}
				if((_this_size == 'small' && _this_width == 'width8') || _this_size == 'medium' && _this_width == 'width8'){
					_this_isotope_item.removeClass('width8');
					_this_isotope_item.addClass('width6');
				}
			break;
			
			case 2:
				if((_this_size == 'medium' && _this_width == 'width8') || (_this_size == 'medium' && _this_width == 'width6') || (_this_size == 'medium' && _this_width == 'width4') || (_this_size == 'large' && _this_width == 'width6') || (_this_size == 'large' && _this_width == 'width4')){
					if(_base_num%2 == 0){
						_target = _this_isotope_num + 1;
					}
				}
				if(_this_size == 'medium' && _this_width == 'width8'){
					_this_isotope_item.removeClass('width8');
					_this_isotope_item.addClass('width4');
				}
				if(_this_size == 'medium' && _this_width == 'width6'){
					_this_isotope_item.removeClass('width6');
					_this_isotope_item.addClass('width4');
				}
				
				if(_this_size == 'large' && _this_width == 'width6'){
					_this_isotope_item.removeClass('width6');
					_this_isotope_item.addClass('width2');
				}
			break;
		}
		
		return _target;
		
	}
	
	//Pagebuild: Liquid Ajax
	this.liquidajax = function(_this){
		var _this_parents = _this.parents('.isotope-liquid-list');
		var _isotope_item = _this_parents.find('.isotope-item');
		var _isotope_length = _this_parents.find('.isotope-item').length;
		var _this_isotope_item = _this.parents('.isotope-item');
		var _this_liquid_inside = _this.parents('.liquid_inside');
		var _this_liquid_item = _this_liquid_inside.find('.liquid-item');
		var _this_liquid_loading = _this_liquid_inside.next('.liquid-loading-wrap');
		var _this_liquid_hide = _this_liquid_loading.find('.liquid-hide');
		var _this_post_id = _this.attr('data-postid');
		var _this_type = _this.attr('data-type');
		var _this_block_words = _this_parents.attr('data-words');
		var _this_show_social = _this_parents.attr('data-social');
		var _this_image_ratio = _this_parents.attr('data-ratio');
		var _this_width = _this_parents.attr('data-width');
		var _this_space = _this_parents.attr('data-space');
		var _this_size = _this_parents.attr('data-size');
		
		var _this_liquid_expand, _this_post_social, _this_liquid_close;
		var _target = ux_pb.liquidcolumn(_this_isotope_item);
				
		if(_this_type == 'magazine'){
			_this_liquid_hide.html(_this_liquid_item.clone());
		}
	
		_this_liquid_inside.hide(0,function(){
			_this_liquid_loading.fadeIn(500);
		});
		
		jQuery.post('portfolio-grid-ajax-content-box.html', {
			'mode': 'liquid',
			'data': {
				'post_id'     : _this_post_id,
				'block_words' : _this_block_words,
				'show_social' : _this_show_social,
				'image_ratio' : _this_image_ratio
			}
		}).done(function(content){
			_this_isotope_item.append(content);
			_this_liquid_expand = _this_isotope_item.find('.liquid-expand-wrap');
			_this_liquid_close = _this_liquid_expand.find('.liquid-item-close');
			_this_post_social = _this_liquid_expand.find('.post_social');
			_this_post_social.addClass('post_social_inzoomed');
			_this_isotope_item.removeClass('width2').addClass(_this_width);
			
			_this_liquid_expand.css({'padding': _this_space + ' 0 0 ' + _this_space});
			
			_this_isotope_item.imagesLoaded(function(){
				if(_target){
					var _isotope_item = _this_parents.find('.isotope-item[data-num='+_target+']');
					if(_isotope_item.length == 0){
						_this_parents.find('.isotope-item[data-num='+_isotope_length+']').after(_this_isotope_item);
					}else{
						_this_parents.find('.isotope-item[data-num='+_target+']').after(_this_isotope_item);
					}
					_this_parents.isotope('appended', _this_isotope_item);
				}
				_this_liquid_loading.hide(0,function(){
					ux_pb.liquidremove(_this_isotope_item, 'other');
					ux_ts.setWidths(_this_size, _this_parents);
					_this_liquid_expand.fadeIn(300);
					//_this_parents.isotope('reLayout');
					_this_parents.isotope({
						masonry: {
							columnWidth: ux_ts.getUnitWidth(_this_size, _this_parents)
						}
					});
					jQuery('.liquid_handler').removeClass('liquid_handler');
					
					if(jQuery.browser.msie == true && parseInt(jQuery.browser.version) < 9){}else{
						setTimeout(function(){
							var _html_top = jQuery('html').css('margin-top');
							_this_space = _this_space.replace('px','');
							_html_top = _html_top.replace('px','');
							if(jQuery.browser.msie == true && parseInt(jQuery.browser.version) < 9){
								if(_html_top == 'auto'){
									_html_top = 0;
								}
							}
							_offset_top = _this_isotope_item.offset().top
							jQuery('html,body').animate({
								scrollTop: _offset_top - _this_space - _html_top
							}, 500);
						}, 1000);
					}
				});
			});
			//jQuery('.lightbox').lightbox();
			
			player_wrap.jPlayer({
				ready: function () {
					jQuery(this).jPlayer("setMedia", {
						mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
					});
				},
				swfPath: JS_PATH,
				supplied: "mp3",
				wmode: "window"
			});
			
			function _audio_play_click(){
				_this_isotope_item.find('.pause').click(function(){
					var _id = jQuery(this).attr("id");
					_this_isotope_item.find('.audiobutton').removeClass('play');
					_this_isotope_item.find('.audiobutton').addClass('pause');
					jQuery(this).removeClass('pause')
					jQuery(this).addClass('play');
					player_wrap.jPlayer("setMedia", {
						mp3: jQuery(this).attr("rel")
					});
					player_wrap.jPlayer("play");
					player_wrap.bind(jQuery.jPlayer.event.ended, function(event) {
						jQuery('#'+_id).removeClass('play');
						jQuery('#'+_id).addClass('pause');
					});
					_audio_pause_click();
					_audio_play_click();
				})
			}
			
			function _audio_pause_click(){
				_this_isotope_item.find('.play').click(function(){
					jQuery(this).removeClass('play')
					jQuery(this).addClass('pause');
					player_wrap.jPlayer("stop");
					_audio_play_click();
				})
			}
			
			_audio_play_click();
			ux_pb.postsocial();
			
			_this_liquid_close.click(function(){
				ux_pb.liquidremove(_this_isotope_item, 'this');
			});
		});
		
	}
	
	//Pagebuild: Liquid Remove
	this.liquidremove = function(_this_isotope_item, _mode){
		var _this_parents = _this_isotope_item.parents('.isotope-liquid-list');
		var _this_width = _this_parents.attr('data-width');
		var _this_size = _this_parents.attr('data-size');
		var _this_space = _this_parents.attr('data-space');
		var _this_isotope_num = _this_isotope_item.attr('data-num');
		var _isotope_item = _this_parents.find('.isotope-item');
		var _target;
		
		_isotope_item.each(function(index, element) {
            var _this = jQuery(this);
			var _this_num = _this.attr('data-num');
			var _this_liquid_inside = _this.find('.liquid_inside');
			var _this_liquid_expand = _this.find('.liquid-expand-wrap');
			
			switch(_mode){
				case 'this' :
					if(_this_isotope_num == _this_num){
						jQuery(this).removeClass(_this_width).addClass('width2');
						
						_this_liquid_expand.fadeOut(100, function(){
							_this_liquid_inside.fadeIn(300);
							_this_liquid_inside.css('overflow','visible');
							_this_liquid_expand.remove();
							ux_ts.setWidths(_this_size, _this_parents);
							if(_this_isotope_num > 1){
								_target = _this_isotope_num - 1;
								_this_parents.find('.isotope-item[data-num='+_target+']').after(_this_isotope_item);
							}else if(_this_isotope_num == 1){
								_target = _this_isotope_num + 1;
								_this_parents.find('.isotope-item[data-num='+_target+']').before(_this_isotope_item);
							}
							_this_parents.isotope('appended', _this_isotope_item);
							_this_parents.isotope('reLayout');
							
							if(jQuery.browser.msie == true && parseInt(jQuery.browser.version) < 9){}else{
								setTimeout(function(){
									var _html_top = jQuery('html').css('margin-top');
									_this_space = _this_space.replace('px','');
									_html_top = _html_top.replace('px','');
									if(jQuery.browser.msie == true && parseInt(jQuery.browser.version) < 9){
										if(_html_top == 'auto'){
											_html_top = 0;
										}
									}
									_offset_top = _this.offset().top
									jQuery('html,body').animate({
										scrollTop: _offset_top - _this_space - _html_top
									}, 500);
								}, 1000);
							}
						});
					}
				break;
				
				case 'other':
					if(_this_isotope_num != _this_num){
						if(_this_liquid_expand.length > 0){
							_this.removeClass(_this_width).addClass('width2');
							_this_liquid_expand.fadeOut(100, function(){
								_this_liquid_inside.fadeIn(300);
								_this_liquid_inside.css('overflow','visible');
								_this_liquid_expand.remove();
								if(_this_num > 1){
									_target = _this_num - 1;
									_this_parents.find('.isotope-item[data-num='+_target+']').after(_this);
								}else if(_this_num == 1){
									_target = _this_num + 1;
									_this_parents.find('.isotope-item[data-num='+_target+']').before(_this);
								}
								_this_parents.isotope('appended', _this);
								_this_parents.isotope('reLayout');
							});
						}
					}
				break;
			}
        });
	}
	
	//Pagebuild: Liquid Click
	this.liquidclick = function(el){
		el.click(function(){
			var _this = jQuery(this);
			player_wrap.jPlayer("stop");
			
			var _this_liquid_handler = jQuery('.liquid_handler');
			if(_this_liquid_handler.length == 0){
				_this.addClass('liquid_handler');
				if(_this.is('.flip_wrap_back')){
					ux_pb.liquidajax(_this.find('a.liquid_list_image'));
				}else{
					ux_pb.liquidajax(_this);
				}
			}
			return false;
		});
	}
	
	//Pagebuild: Liquid List
	this.liquidlist = function(){
		var _moudle_liquidlist = jQuery('.moudle .isotope-liquid-list');
		_moudle_liquidlist.each(function(i, element) {
			var _this = jQuery(this);
			var _isotope_item = _this.find('.isotope-item');
			
			_isotope_item.each(function(index, element) {
				jQuery(this).attr('data-num', index + 1);
			});
			
		});
	}
	
	//Pagebuild: Pagnition/twitter style
	this.pagenumstwitter = function(el){
		el.click(function(){
			var _this       = jQuery(this),
			    module_post = _this.data('post'),
			    post_id     = _this.data('postid'),
				paged       = _this.data('paged'),
				module_id   = _this.data('module'),
				aurl   = _this.data('aurl');
			_this.html('<div class="ux-loading"></div><div class="ux-loading-transform"><div class="loading-dot1">&nbsp;</div><div class="loading-dot2">&nbsp;</div></div>');
			
			var ajax_data = {
				'module_id'   : module_id,
				'module_post' : module_post,
				'paged'       : paged,
				'post_id'     : post_id,
				'mode'        : 'twitter',
                'aurl'        : aurl
			}
			
			ux_pb.moduleload(ajax_data, jQuery('[data-post='+module_post+']').not('.not_pagination'));
			return false;
		});
		
	}
	
	//Pagebuild: Flex Slider
	this.flexslider = function(){
		var _moudle_flexslider = jQuery('.moudle .flex-slider-wrap');
		_moudle_flexslider.each(function(){
			var _this = jQuery(this);
			var _this_direction = _this.data('direction');
			var _this_control = _this.data('control');
			var _this_speed = _this.data('speed');
			var _this_animation = _this.data('animation');
			
			_this.find('.flexslider').flexslider({
				animation: ''+_this_animation+'', //String: Select your animation type, "fade" or "slide"
				animationLoop: true,
				slideshow: true, 
				smoothHeight: true,  
				controlNav: _this_control, //Dot Nav
				directionNav: _this_direction,  // Next\Prev Nav
				touch: true, 
				slideshowSpeed: _this_speed * 1000 
				//itemWidth: 210,
				//itemMargin: 5
			});
		});
	}
	
	//Pagebuild: Call Carousel Slider, Content slider responsive
	this.contentslider = function(){
		var _moudle_listitemslider = jQuery('.moudle .listitem_slider');
		_moudle_listitemslider.each(function(){
			
			var slider_width = jQuery(this).width();
			var slider_img_height = slider_width*0.57;
			var slider_title = jQuery(this).find('.slider-title').height();
			var slider_des = jQuery(this).find('.slider-des').height();
			var slider_panel_height =  slider_title + slider_des;
			
			
			if (slider_width < 561) {
				
				jQuery(this).find('.item').css({'height':'auto'});
				jQuery(this).find('.carousel-img-wrap').css({'height':slider_img_height,'width':'100%','float':'none'});
				jQuery(this).find('.slider-panel').css({'width':'100%','float':'none','height':'400px'});
				jQuery(this).find('img').css({'width':'100%','height':'auto'});
				jQuery(this).find('.carousel-indicators').css({'width':'100%'});
				jQuery(this).find('h2.slider-title').css({'font-size':'18px','line-height':'20px'});
				
				
			} else if ( slider_width > 562 &&  slider_width < 725) {
				
				jQuery(this).find('.item').css({'height':'400px'});
				jQuery(this).find('.carousel-img-wrap').css({'height':'400px','width':'60%','float':'left'});
				jQuery(this).find('.slider-panel').css({'width':'40%','float':'left','height':'400px'});
				jQuery(this).find('img').css({'width':'auto','height':'100%'});
				jQuery(this).find('.carousel-indicators').css({'width':'40%'});
				jQuery(this).find('h2.slider-title').css({'font-size':'18px','line-height':'20px'});
				
			} else {
				jQuery(this).find('.item').css({'height':'400px'});
				jQuery(this).find('.carousel-img-wrap').css({'height':'400px','width':'60%','float':'left'});
				jQuery(this).find('.slider-panel').css({'width':'40%','float':'left','height':'400px'});
				jQuery(this).find('img').css({'width':'100%','height':'auto'});
				jQuery(this).find('.carousel-indicators').css({'width':'40%'});
				jQuery(this).find('h2.slider-title').css({'font-size':'30px','line-height':'40px'});
			
			}
		});	
	}
	
	//Pagebuild: Fullwrap Parallax
	this.fullparallax = function(){
		var ux_pb_parallax = jQuery('.parallax');
		var parallaxImages = [];
		ux_pb_parallax.each(function(){
			var parallaxImage = {};
			parallaxImage.element = jQuery(this);
			//var  _this = jQuery(this);

			parallaxImages.push(parallaxImage);
		});

		theme_win.on('scroll', function() {
			
			var requestAnimationFrame = window.requestAnimationFrame || 
			                            window.mozRequestAnimationFrame || 
			                            window.webkitRequestAnimationFrame ||
			                            window.msRequestAnimationFrame;

			var scrollHandler = function(){

				jQuery.each(parallaxImages, function(index, parallaxImage) {

					var scrollTop, yPosition;
				
					if(document.documentElement.scrollTop == 0){
						scrollTop = document.body.scrollTop;
					}else{
						scrollTop = document.documentElement.scrollTop;
					}
					
					yPosition = (scrollTop - parallaxImage.element.offset().top) * parallaxImage.element.data('ratio');

					setTranslate3DTransform(parallaxImage.element, 0, yPosition);

				});
			}

			requestAnimationFrame(scrollHandler);
			
		});
		

		//setTranslate3DTransform
		function setTranslate3DTransform(el, xPosition, yPosition){
			var value = "translate3d(" + xPosition + "px" + ", " + yPosition + "px" + ", 0)";
			el.css({
				'transform': value,
				'msTransform': value,
				'webkitTransform': value,
				'mozTransform': value,
				'oTransform': value,
			});
		}


	}
	
	//Pagebuild: Fullwrap Size
	this.fullwrapsize = function(){
		/*var ux_pb_fullwrap_moudle = jQuery('.fullwrap_moudle');
		var ux_pb_fullwrap_wrap = jQuery('.custom_fullwidth_wrap')
		if(ux_pb_fullwrap_moudle.length){
			ux_pb_fullwrap_moudle.each(function(){
				var _this = jQuery(this);
				var _this_marginleft = (theme_wrap_width - theme_content_width) / 2;
				
				_this.css({
					'margin-left': - _this_marginleft
				});
				_this.width(theme_wrap_width);
			});
		}
		
		if(ux_pb_fullwrap_wrap.length){
			ux_pb_fullwrap_wrap.each(function(){
				jQuery(this).animate({'opacity':1},500);
			})
		}
		*/
	}
	//Pagebuild: Fullwrap Tab
	this.fullwraptabs = function(){
		var ux_pb_fullwrap_withtab = jQuery('.fullwrap-with-tab-nav');
		if(ux_pb_fullwrap_withtab.length){
			ux_pb_fullwrap_withtab.each(function(){
				var _this = jQuery(this);
				var _this_link = _this.find('> a');
				var _this_itemid = _this.data('itemid');
				var _this_parents = _this.parents('.fullwidth-wrap');
				var _this_row = _this_parents.find('.row-fluid');
				
				_this.find('> a:first').addClass('full-nav-actived');
				_this.contents().filter(function() {
					return this.nodeType === 3;
				}).remove();
				
				_this_row.each(function(i){
					jQuery(this).attr('id', 'tabs-' + _this_itemid + '-' + i);
					jQuery(this).addClass('fullwrap-with-tab-inn');
					if(i == 0){
						jQuery(this).addClass('enble');
					}else{
						jQuery(this).addClass('disble');
					}
				});
				
				_this_link.each(function(i){
					var target = 'tabs-' + _this_itemid + '-' + i;
					jQuery(this).attr('data-target', target);
					
					jQuery(this).click(function(){
						var target_parents = jQuery(this).parents('.fullwidth-wrap');
						
						target_parents.find('.fullwrap-with-tab-inn').removeClass('enble').addClass('disble');
						target_parents.find('[id=' + target + ']').removeClass('disble').addClass('enble');
						
						if(jQuery(this).hasClass('full-nav-actived')){
						}else{
							jQuery(this).addClass('full-nav-actived');
						}
						
						jQuery(this).siblings('a').removeClass('full-nav-actived');
					});
				});
			});
		}
	}
	
	//Pagebuild: Tab-v responsive
	this.tabresponsive = function(el){
		var _tabs_v = jQuery('.moudle .tabs-v');
		_tabs_v.each(function(){
			var _this = jQuery(this)
			var _this_width = _this.width();
				
			if(_this_width < 561){
				_this.find('.nav-tabs-v').css('width','45%');
				_this.find('.tab-content-v').css({width:'55%'});
			}else{
				_this.find('.nav-tabs-v').css('width','25%');
				_this.find('.tab-content-v').css({width:'75%'});
			}
		});
	}
	//Pagebuild: Tabs Moudle Call
	this.tabcall = function(el){
		el.click(function(e){
			e.preventDefault();
			jQuery(this).tab('show');
		});
	}
	
	//Pagebuild: AccordionToggle Moudle	Call
	this.accordiontoggle = function(){
		var _moudle_accordion_toggle = jQuery('.moudle .accordion-ux');
		_moudle_accordion_toggle.each(function(){
			var _this = jQuery(this);
			var _this_collapse = _this.find('.collapse');
			var _this_accordion = _this.find('.accordion');
			
			if(_this.hasClass('accordion_toggle')){
				_this_collapse.collapse({ toggle: false});
			}

		    _this.find('.accordion-body.in').prev().addClass("active");

			_this.find('.accordion-toggle').click(function(e){
    
			    if (jQuery(this).parent().hasClass('active')) {
			        jQuery(this).parent().toggleClass('active');
			       _this.find(".accordion-heading").removeClass("active");
			    } else {
			        _this.find(".accordion-heading").removeClass("active");
			        jQuery(this).parent().toggleClass('active');             
			    }

			    e.preventDefault;
			    e.stopPropagation;

			});

		});
	}
	
	//Pagebuild: Icon box Plus
	this.iconboxplus = function(){
		var _moudle_iconbox = jQuery('.moudle .iconbox-plus');
		_moudle_iconbox.each(function(){
			var _this = jQuery(this);
			var _this_animation = _this.data('animation');
			var _this_svg = _this.find('.iconbox-plus-svg-wrap');
			
			if(Modernizr.touch){
				_this_svg.addClass('breath').addClass(_this_animation);
			}else{
				_this.waypoint(function(){
					if(_this_animation == "rorate"){
						_this_svg.addClass('breath');
						_this_svg.addClass(_this_animation);
					}else{
						_this_svg.addClass('breath').addClass(_this_animation); 
					}
				}, { offset: '120%'});
			}
		}); 
	}
	
	//Pagebuild: Separator 
	this.separator = function(){
		var _moudle_separator = jQuery('.moudle .separator');
		_moudle_separator.each(function(){
			var _this = jQuery(this);
			var _this_title = _this.find('h4');
			var _this_title_width = _this_title.outerWidth();
			var _this_inn = _this.find('.separator_inn');
			
			if(_this.hasClass('title_on_left')){
				_this_inn.css({'margin-left': _this_title_width + 'px'});
			}else if(_this.hasClass('title_on_right')){
				_this_inn.css({'margin-right': _this_title_width + 'px'});
			}
			
			_this_inn.css({zIndex: 0});
			_this.animate({ opacity:'1'}, 200);
		})
	}
	
	//Pagebuild: Promote centered
	this.promotecentered = function(){
		var _moudle_promote_center = jQuery('.moudle .promote-wrap-2c');
		_moudle_promote_center.each(function(){	
			var btn_W  = jQuery(this).find('.promote-button-wrap').width();
			var wrap_W = jQuery(this).width();
			
			if( wrap_W < 300 ){
				jQuery(this).removeClass('promote-wrap-2c');
				jQuery(this).find('.promote-text').css('margin-right','0');
			}else{
				jQuery(this).addClass('promote-wrap-2c');
				jQuery(this).find('.promote-text').css('margin-right',btn_W);
			}
			
		});
		
	}
	
	//Pagebuild: Social Share
	this.postsocial = function(){
		var _moudle_post_social = jQuery('.share-icon-wrap');
		_moudle_post_social.each(function(index, element){
			var _this = jQuery(this);
			var _this_url = _this.find('input[name="url"]').val();
			var _this_title = _this.find('input[name="title"]').val();
			var _this_featured = _this.find('input[name="media"]').val();
			
			var _social_facebook = _this.find('a.postshareicon-facebook-wrap');
			var _social_twitter = _this.find('a.postshareicon-twitter-wrap');
			var _social_pinterest = _this.find('a.postshareicon-pinterest-wrap');
			
			_social_facebook.click(function(){
				ux_pb.socialpopitup('http://www.facebook.com/sharer.php?u=' + _this_url);													   
			});
			
			_social_twitter.click(function(){
				ux_pb.socialpopitup('http://twitter.com/share?text=' + _this_title + '&url=' + _this_url);													   
			});
			
			_social_pinterest.click(function(){
				ux_pb.socialpopitup('http://pinterest.com/pin/create/button/?url=' + _this_url + '&media=' + _this_featured + '&description=' + _this_title);													   
			});
			
			ux_pb.socialcount(_this_url, _this_title, _this_featured);
		});
	}
	
	//Pagebuild: Social popitup
	this.socialpopitup = function(url){
		var height = 400;
		var width = 500;
		var left = (screen.width/2)-(width/2);
		var top = (screen.height/2)-(height/2);
		var options = "height="+height+",width="+width+",top="+top+", left="+left;
		newwindow=window.open(url,'title',options);
		if (window.focus){newwindow.focus()}
		return false;
	}
	
	//Pagebuild: Social count
	this.socialcount = function(url, page_title, featured_image_url){
		jQuery.ajax({
			dataType: "json",
			url: "http://graph.facebook.com/?id=" + url
			}).done(function(data) {
			jQuery('.share-icon-wrap a.postshareicon-facebook-wrap .count').html(data.shares);
		});
		
		jQuery.ajax({
			dataType: "json",
			url: "http://cdn.api.twitter.com/1/urls/count.json?url=" + url +'&&callback=?'
			}).done(function(data) {
			jQuery('.share-icon-wrap a.postshareicon-twitter-wrap .count').html(data.count);
		});
	
		jQuery.ajax({
			crossDomain: true,
			dataType: "jsonp",
			url: "http://api.pinterest.com/v1/urls/count.json?&url="+url
			}).done(function(data) {
			jQuery('.share-icon-wrap a.postshareicon-pinterest-wrap .count').html(data.count);
		});
	}
	
	//Pagebuild: Message Box Moudle	Close	
	this.messagebox = function(){
		var _moudle_message_box = jQuery('.moudle .message-box');					
		_moudle_message_box.each(function(){
			var _this = jQuery(this);
			_this.find('.box-close').click(function(){
				_this.slideUp(400);
			});
		});	
	}
	
	//Pagebuild: Countdown	
	this.countdown = function(){
		var _moudle_countdown = jQuery('.moudle .countdown');	
		_moudle_countdown.each(function(){
			var 
			dateUntil   = jQuery(this).data('until'),
			dateFormat  = jQuery(this).data('dateformat'),
			
			dateYears   = Number(jQuery(this).data('years')),
			dateMonths  = Number(jQuery(this).data('months')),
			dateDays    = Number(jQuery(this).data('days')),
			dateHours   = Number(jQuery(this).data('hours')),
			dateMinutes = Number(jQuery(this).data('minutes')),
			dateSeconds = Number(jQuery(this).data('seconds'));
			
			austDay = new Date(dateYears, dateMonths - 1, dateDays, dateHours, dateMinutes, dateSeconds);
			jQuery(this).countdown({until: austDay, format:dateFormat});
		
		});
	}
	
	//Pagebuild: Client Moudle
	this.clientsbtn = function(){
		var _moudle_clients = jQuery('.moudle .clients_wrap');	
		_moudle_clients.each(function(){
            var _this = jQuery(this),
				column = _this.data('column'),
				carousel_btn = _this.find('.carousel-btn'),
				item_count = _this.find('ul li').length;
			
			if(column >= item_count){
				carousel_btn.hide();
			}else{
				carousel_btn.show();
			}
		});
	}
	
	//Pagebuild: Call jCarouselLite
	this.testimonial = function(){
		var _moudle_testimonials = jQuery('.moudle .testimonials-wrap');	
		
		_moudle_testimonials.each(function() {
			var carousele_li = jQuery(this).find('li');
			carousele_li.css({"margin-right": carousele_li.css("margin-left"), "margin-left" : 0});
			
			jQuery(this).jCarouselLite({
				speed: 500,					   
				btnPrev: function() { return jQuery(this).find('.prev');},
				btnNext: function() { return jQuery(this).find('.next');}
				
			}).width('100%').find('li').css({'min-height':'100%','height':'auto'});//carousel_width
		});
	}
	
	//Pagebuild: Image Box Moudle
	this.imagebox = function(){
		var _moudle_imagebox = jQuery('.moudle .image-box-svg-wrap');	
		_moudle_imagebox.each(function(){
			if(Modernizr.touch){
				jQuery(this).addClass('shown');
			}else{
				jQuery(this).waypoint(function(){ jQuery(this).addClass('shown'); }, { offset: '120%'});
			}
		});
	}
	
	//Pagebuild: Client Moudle
	this.clients = function(){
		var _moudle_clients = jQuery('.moudle .clients_wrap');
		_moudle_clients.each(function(){			  
			var  _this = jQuery(this),column = _this.data('column');
				//clients_wrap_width = _this.width();
				//clients_item_width = _this.find("li:first-child img").height();
			
			_this.find("li:first-child img").imagesLoaded(function(){
				
				//var clients_item_width = _this.find("li:first-child img").height();
			
				//if( clients_wrap_width > 481 ){
					
					//var column = _this.data('column');	
					
				//}else if( clients_wrap_width > 300 && clients_wrap_width < 480 ){
					
				//	var column = 2;
				
				//}else if( clients_wrap_width < 299 ){
					
				//	var column = 1; 
				
				//}
				
				//theme_win.load(function() {
	
					_this.find('ul').carouFredSel({
		
						responsive : true,
						width      : '100%',
						items      : column,
						scroll     : column,
						prev       : function() { return _this.find('.prev');},
						next       : function() { return _this.find('.next');},
						auto       : false
					
					});
					
					_this.find('img').imagesLoaded(function(){
						var liHeight = _this.find('img').height();
						_this.find('li').css('height',liHeight);
						_this.find('ul').css('height',liHeight);
						_this.find('.caroufredsel_wrapper').css('height',liHeight);
						_this.css('height',liHeight);
					});
				 
				//}); 
			});
		});
	}
	
	//Pagebuild: Post Carousel Moudle
	this.postcarousel = function(){
		var _moudle_postcarousel = jQuery('.moudle .post-carousel-wrap');	
		_moudle_postcarousel.each(function() { 
			var _this        = jQuery(this),
				wrap_width   = _this.width(),
				carousel_btn = _this.find('.post-carousel-pagination'),
				item_count   = _this.find('section').length,
				item_width   = _this.find("li:first-child").height();
			
			
			if(wrap_width > 1500){
				var column = 6;
			}else if(wrap_width > 1100 && wrap_width < 1499){
				var column = 5;	
			}else if(wrap_width > 768 && wrap_width < 1099){
				var column = 4;	
			}else if(wrap_width > 300 && wrap_width < 767){
				var column = 2;
			}else if(wrap_width < 299){
				var column = 1; 
			}
			
			if(column >= item_count){
				carousel_btn.hide();
			}else{
				carousel_btn.show();
			}
			
			theme_win.load(function(){
				_this.find('.post-carousel').carouFredSel({
					responsive : true,
					width      : '100%',
					items      : column,
					scroll     : column,
					swipe      : {
							onTouch : true, 
							onMouse : true 
					},
					pagination : function() { return _this.find('.post-carousel-pagination');},
					//prev       : function() { return _this.find('.prev');},
					//next       : function() { return _this.find('.next');},
					auto       : false
				
				});
				
				var _getmax = new Array();
				_this.find('section').each(function(index, element){
					_getmax.push(jQuery(this).height());
				});
				
				ulHeight = eval("Math.max("+_getmax.toString()+")") + 40;
				_this.find('section').css('height',ulHeight);
				//_this.find('ul').css('height',ulHeight);
				_this.find('.caroufredsel_wrapper').css('height',ulHeight);
				_this.css('height',ulHeight);
				_this.find('.post-carousel').animate({'opacity':1 },300);
			 
			}); 

		});
				
			
	}
	
	//Pagebuild: GoogleMap Moudle
	this.googlemap = function(){
		var _moudle_googlemap = jQuery('.moudle .module-map-canvas');	
		_moudle_googlemap.each(function(index, element) {
            var _this    = jQuery(this);
			
			var l        = Number(_this.data('l'));
			var r        = Number(_this.data('r'));
			var zoom     = Number(_this.data('zoom'));
			var pin      = _this.data('pin');
			var view     = _this.data('view');
			var dismouse = _this.data('dismouse');
			
			ux_pb.mapinitialize(element, l, r, zoom, pin, view, dismouse);
        });
		
	}
	//Pagebuild: GoogleMap initialize
	this.mapinitialize = function(element, l, r, zoom, pin, view, dismouse) {
		var geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(l, r);
		var dismouse = dismouse == 't' ? true : false;
		var markers = [];
		var map_type;
		switch(view){
			case 'map': map_type = google.maps.MapTypeId.ROADMAP; break;
			case 'satellite': map_type = google.maps.MapTypeId.SATELLITE; break;
			case 'map_terrain': map_type = google.maps.MapTypeId.TERRAIN; break;
		}
		
		var mapOptions = {
			zoom: zoom,
			center: latlng,
			mapTypeId: map_type,
			scrollwheel: dismouse
		}
		var google_map = new google.maps.Map(element, mapOptions);
		
		if(pin == 't'){
			var marker = new google.maps.Marker({
				position: latlng,
				map: google_map
			});
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	}
	
	this.getSizeName = function(){
		var screen_size = '',
			screen_w = jQuery(window).width();
		
		if ( screen_w > 1170 ) {
			screen_size = "desktop_wide";
		}
		else if ( screen_w > 960 && screen_w < 1169 ) {
			screen_size = "desktop";
		}
		else if ( screen_w > 768 && screen_w < 959 ) {
			screen_size = "tablet";
		}
		else if ( screen_w > 480 && screen_w < 767 ) {
			screen_size = "mobile";
		}
		else if ( screen_w < 479 ) {
			screen_size = "mobile_portrait";
		}
		return screen_size;
	}
	
	//Pagebuild: Standard Blog Moulde responsive
	this.standardblog = function(){
		var _moudle_blog = jQuery('.moudle .blog-wrap');
		_moudle_blog.each(function(){  
			/*
			var blog_width = jQuery(this).width();
			if ( blog_width < 759) {
				if( jQuery(window).width() > 767 ){
					jQuery(this).find('.blog-item-main').removeClass('blog-item-main-clear-mobile');
				}else {
					jQuery(this).find('.blog-item-main').addClass('blog-item-main-clear-mobile');
				}
			}else{
				jQuery(this).find('.blog-item-main').removeClass('blog-item-main-clear-mobile');
			}
			*/
		});	
	}
	
	//Pagebuild: image module shadow
	this.imageshadow = function(){
		var _moudle_imageshadow = jQuery('.moudle .shadow');
		_moudle_imageshadow.each(function(){
			jQuery(this).imagesLoaded(function(){
				jQuery(this).css('opacity','1');
			});
		});
	}
	
	//Captcha
	this.captcha = function(el){
		el.find('img').click(function(){
			jQuery.post(AJAX_M, {
				'mode': 'captcha',
				'data': ''
			}).done(function(content){
				el.html(content);
				ux_pb.captcha(el);
			});
		});
	}
	
	//Contact Form Verification and Ajax Send
	this.contactform = function(){
		var _moudle_contactform = jQuery('.moudle .contact_form')
			
			_moudle_contactform.each(function(){
				
				var 
				_this      = jQuery(this),
				message    = _this.find('input[type="hidden"].info-tip').data('message'),
				sending    = _this.find('input[type="hidden"].info-tip').data('sending'),
				errortip   = _this.find('input[type="hidden"].info-tip').data('error');
				verifywrap = _this.find('.verify-wrap');
				
				ux_pb.captcha(verifywrap);
				
				_this.submit(function() {
				
					var hasError = false;
					
					_this.find('.requiredField').each(function() {
					
						if(jQuery.trim(jQuery(this).val()) == '' || jQuery.trim(jQuery(this).val()) == 'Name*' || jQuery.trim(jQuery(this).val()) == 'Email*' || jQuery.trim(jQuery(this).val()) == 'Required' || jQuery.trim(jQuery(this).val()) == 'Invalid email') {
						
							jQuery(this).attr("value","Required");
							
							hasError = true;
							
						}else if(jQuery(this).hasClass('email')) {
		
						
							var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
							
							if(!emailReg.test(jQuery.trim(jQuery(this).val()))) {
							
								jQuery(this).attr("value","Invalid email");
								
								hasError = true;
								
							}
						
						}else if(jQuery(this).hasClass('captcha')) {
							
							var captchaReg = jQuery(this).prev('[name=ux_captcha_word]');
							if(jQuery(this).val().toUpperCase() != captchaReg.val()) {
							
								jQuery(this).attr("value","Error Captcha");
								
								hasError = true;
								
							}
						}

					});

					//After verification, print some infos. 
					if(!hasError) {
											
						if(_this.hasClass('single-feild')){
							
							_this.find('#idi_send').val(sending).attr('disabled','disabled');
						
						}else{	
						
							jQuery(this).find('#idi_send').fadeOut('normal', function() {
								
								jQuery(this).parent().append('<p class="sending">'+sending+'</p>');
								
							});
						}
						var formInput = _this.serialize();
						
						jQuery.post(_this.attr('action'),formInput, function(data){
																					
							_this.slideUp("fast", function() {
								
								if(_this.hasClass('single-feild')){
									
									_this.before('<p class="success" style=" text-align:center">'+message+'</p>');
								
								}else{
									_this.before('<p class="success">'+message+'</p>');
									
									_this.find('.sending').fadeOut();
								
								}
							});
						});
					}
					
					return false;
			
				});
				
		});//End each
			
	}
	
	//pagebuild: animation scroll class B
	this.animationscrollclassb = function(_this){
		var _this_classb;
		
		if(_this.is('.zoomin')){
				
			_this_classb = 'zoomined';
			
		}else if(_this.is('.from-left-translate')){
			
			_this_classb = 'translated';
			
		}else if(_this.is('.from-right-translate')){
			
			_this_classb = 'translated';
			
		}else if(_this.is('.from-top-translate')){
			
			_this_classb = 'translated';
			
		}else if(_this.is('.from-bottom-translate')){
			
			_this_classb = 'translated';
			
		}else if(_this.is('.bouncdein-left-translate')){
			
			_this_classb = 'bouncdein-left-ed';
			
		}else if(_this.is('.bouncdein-right-translate')){
			
			_this_classb = 'bouncdein-right-ed';
			
		}else if(_this.is('.bouncdein-up-translate')){
			
			_this_classb = 'bouncdein-up-ed';
			
		}else if(_this.is('.bouncdein-down-translate')){
			
			_this_classb = 'bouncdein-down-ed';
			
		}else if(_this.is('.flip-x-translate')){
			
			_this_classb = 'flip-x-ed';
			
		}else if(_this.is('.flip-y-translate')){
			
			_this_classb = 'flip-y-ed';
			
		}else if(_this.is('.rotate-downleft-translate')){
			
			_this_classb = 'rotate-downleft-ed';
			
		}else if(_this.is('.rotate-downright-translate')){
			
			_this_classb = 'rotate-downright-ed';
			
		}else{
			_this_classb = 'fadeined';
		}
		
		return _this_classb;
	}
	
	//pagebuild: animation scroll
	this.animationscroll = function(){
		var _moudle_hasanimation = jQuery('.moudle_has_animation');
		_moudle_hasanimation.imagesLoaded(function(){
			_moudle_hasanimation.each(function(){
				var _this = jQuery(this);
				var _this_classb = ux_pb.animationscrollclassb(_this);
				var _moudle_scroll = _this.find('.animation-scroll-ux');
				
				if(_moudle_scroll.length){
					_moudle_scroll.each(function(index){
						var _item = jQuery(this);
						var _item_classb = ux_pb.animationscrollclassb(_item);
						
						_item.waypoint(function(){
							_this.css({'opacity': 1});
							_item.css('transform', null);
							setInterval(function(){
								_item.addClass(_item_classb);
							}, index * 50);
						}, {
							offset: '120%',
							triggerOnce: true
						});
					});
					_this.addClass(_this_classb);
				}else{
					_this.waypoint(function(){
						_this.css({'opacity': 1});
						_this.addClass(_this_classb);
					}, {
						offset: '100%',
						triggerOnce: true
					});
				}
			});
		})
	}
}
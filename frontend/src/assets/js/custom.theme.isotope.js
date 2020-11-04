function ThemeIsotope(){
	var ux_ts = this;
	var theme_win = jQuery(window);
	
	//ts init
	this.init = function(){
		//ThemeIsotope: isotope list double width
		var _isotope_width4 = jQuery('.isotope .width4');
		if(_isotope_width4.length){
			ux_ts.isotopewidth4();
		}
		
		//ThemeIsotope: Portfolio #3D Flip Mouseover IE HACK
		var _container3d = jQuery('.container3d');
		if(_container3d.length){
			if((jQuery.browser.msie == true && parseInt(jQuery.browser.version) < 9)){
				ux_ts.flipcenterie();
				//ux_ts.flipie();
			}
		}
		
		//ThemeIsotope: Run isotope
		$allcontainer = jQuery('.container-fluid.main');
		
		//ThemeIsotope: Call isotope
		var _isotope = jQuery('.isotope');
		if(_isotope.length){
			ux_ts.callisotope();
		}
		
		//ThemeIsotope: isotope filter
		var _filters = jQuery('.filters');
		if(_filters.length){
			ux_ts.isotopefilters();
		}
		
		//win smartresize
		theme_win.smartresize(function(){
			ux_ts.refresh();
		}).resize();
		
		theme_win.load(function(){
			ux_ts.refresh();
		});
	}
	
	this.refresh = function(){
		var _isotope = jQuery('.isotope');
		if(_isotope.length){
			_isotope.each(function(index, element) {
				var _this = jQuery(this),
					image_size = jQuery(this).data('size');
				
				ux_ts.setWidths(image_size, _this);
				_this.isotope({
					masonry: {
						columnWidth: ux_ts.getUnitWidth(image_size, _this)
					}
				});
			})
		}
	}
	
	//ThemeIsotope: isotope list double width
	this.isotopewidth4 = function(){
		var _isotope_width4 = jQuery('.isotope .width4');
		_isotope_width4.each(function(index, element) {
			var width = jQuery(this).find('.fade_wrap').width();
			jQuery(this).find('img').width(width);
		});
	}
	
	//ThemeIsotope: isotope list responsive
	this.getUnitWidth = function(size, container){
		var width;
		switch(size){
			case 'medium':
				if (container.width() <= 320) {
					width = Math.floor(container.width() / 2);
				} else if (container.width() >= 321 && container.width() <= 480) {
					width = Math.floor(container.width() / 2);
				} else if (container.width() >= 481 && container.width() <= 768) {
					width = Math.floor(container.width() / 4);
				} else if (container.width() >= 769 && container.width() <= 979) {
					width = Math.floor(container.width() / 4);
				} else if (container.width() >= 980 && container.width() <= 1200) {
					width = Math.floor(container.width() / 8);
				} else if (container.width() >= 1201 && container.width() <= 1600) {
					width = Math.floor(container.width() / 8);
				} else if (container.width() >= 1601 && container.width() <= 1824) {
					width = Math.floor(container.width() / 10);
				} else if (container.width() >= 1825) {
					width = Math.floor(container.width() / 12);
				}
			break;
			
			case 'large':
				if (container.width() <= 320) {
					width = Math.floor(container.width() / 2);
				} else if (container.width() >= 321 && container.width() <= 480) {
					width = Math.floor(container.width() / 2);
				} else if (container.width() >= 481 && container.width() <= 768) {
					width = Math.floor(container.width() / 4);
				} else if (container.width() >= 769 && container.width() <= 979) {
					width = Math.floor(container.width() / 4);
				} else if (container.width() >= 980 && container.width() <= 1200) {
					width = Math.floor(container.width() / 6);
				} else if (container.width() >= 1201 && container.width() <= 1600) {
					width = Math.floor(container.width() / 6);
				} else if (container.width() >= 1601 && container.width() <= 1824) {
					width = Math.floor(container.width() / 10);
				} else if (container.width() >= 1825) {
					width = Math.floor(container.width() / 12);
				}
			break;
			
			case 'small':
				if (container.width() <= 320) {
					width = Math.floor(container.width() / 2);
				} else if (container.width() >= 321 && container.width() <= 480) {
					width = Math.floor(container.width() / 2);
				} else if (container.width() >= 481 && container.width() <= 768) {
					width = Math.floor(container.width() / 6);
				} else if (container.width() >= 769 && container.width() <= 979) {
					width = Math.floor(container.width() / 8);
				} else if (container.width() >= 980 && container.width() <= 1200) {
					width = Math.floor(container.width() / 12);
				} else if (container.width() >= 1201 && container.width() <= 1600) {
					width = Math.floor(container.width() / 10);
				} else if (container.width() >= 1601 && container.width() <= 1824) {
					width = Math.floor(container.width() / 10);
				} else if (container.width() >= 1825) {
					width = Math.floor(container.width() / 12);
				}
			break;
			
			case 'brick':
				if (container.width() > 1440) {
					width = Math.floor(container.width() / 7);
				} else if (container.width() > 1365) {
					width = Math.floor(container.width() / 5);
				} else if (container.width() > 1279) {
					width = Math.floor(container.width() / 5);
				} else if (container.width() > 1023) {
					width = Math.floor(container.width() / 5);
				} else if (container.width() > 767) {
					width = Math.floor(container.width() / 3);
				} else if (container.width() > 479) {
					width = Math.floor(container.width() / 2);
				} else {
					width = Math.floor(container.width() / 1);
				}
			break;
		}
		return width;
	}
	
	this.setWidths = function(size,container){
		var unitWidth = ux_ts.getUnitWidth(size,container) - 0;
		container.children(":not(.width2)").css({
			width: unitWidth
		});
		
		if (container.width() <= 480) {
			container.children(".width2").css({
				width: unitWidth * 1
			});
			container.children(".width4").css({
				width: unitWidth * 2
			});
			container.children(".width6").css({
				width: unitWidth * 2
			});
			container.children(".width8").css({
				width: unitWidth * 2
			});
			
			//brick
			container.children(".width-and-small").css({ width: unitWidth * 1, height: unitWidth * 1 });
			container.children(".width-and-big").css({ width: unitWidth * 1, height: unitWidth * 1 });
			container.children(".width-and-long").css({ width: unitWidth * 1, height: unitWidth / 2 });
			container.children(".width-and-height").css({ width: unitWidth * 1, height: unitWidth * 2 });
		}
		if (container.width() >= 481) {
			container.children(".width8").css({
				width: unitWidth * 8
			});
			container.children(".width6").css({
				width: unitWidth * 6
			});
			container.children(".width4").css({
				width: unitWidth * 4
			});
			container.children(".width2").css({
				width: unitWidth * 2
			});
			
			//brick --- thumb small
			container.children(".width-and-small").css({ width: unitWidth * 1, height: unitWidth * 1 });
			container.find(".width-and-small img").css({ width: unitWidth * 1 });
			
			//brick --- thumb big
			container.children(".width-and-big").css({ width: unitWidth * 2, height: unitWidth * 2 });
			container.find(".width-and-big img").css({ width: unitWidth * 2, });
			
			//brick --- thumb long
			container.children(".width-and-long").css({ width: unitWidth * 2, height: unitWidth * 1 });
			container.find(".width-and-long img").css({ width: unitWidth * 2 });
			
			//brick --- thumb height
			container.children(".width-and-height").css({ width: unitWidth * 1, height: unitWidth * 2 });
			container.find(".width-and-height img").css({ width: unitWidth * 1 });
			
			//brick set height
			if(size == 'brick'){
				container.children().each(function(){
					var _this = jQuery(this);
					var _this_height = jQuery(this).height();
					
					if(Math.floor(_this.find('img').height()) < Math.floor(_this_height)){
						_this.find('img').css({
							width: 'auto',
							height: _this_height
						});
					}
				});
			}
			
		} else {
			container.children(".width2").css({
				width: unitWidth
			});
		}
	}
	
	//ThemeIsotope: Call isotope
	this.callisotope = function(){
		var _isotope = jQuery('.isotope');
		
		_isotope.each(function(index, element) {
			var _this = jQuery(this);
			var image_size = _this.data('size');
			
			
			if(image_size != 'brick'){
				ux_ts.setWidths(image_size, _this);
			}
				
			_this.imagesLoaded(function(){
				if(_this.is('.masonry')){
					_this.isotope({
						animationEngine : 'css',
						//resizable: false,
						masonry: {
							columnWidth: ux_ts.getUnitWidth(image_size, _this)
						}
					});
				}else if(_this.is('.grid_list')){
					_this.isotope({
						layoutMode : 'fitRows',
						animationEngine : 'css',
						//resizable: false,
						masonry: {
							columnWidth: ux_ts.getUnitWidth(image_size, _this)
						}
					});
				}
			});
			
			_this.addClass('isotope_fade');
			_this.siblings('#isotope-load').fadeOut(300);
		});
	}
	
	//ThemeIsotope: isotope filter
	this.isotopefilters = function(){
		var _filters = jQuery('.filters');
		_filters.delegate('a', 'click', function() {
			$container = jQuery(this).parent().parent().parent().next().find('.isotope');
			jQuery(this).parent().parent().find('li').removeClass('active');
			jQuery(this).parent().addClass('active');
			var selector = jQuery(this).attr('data-filter');
			$container.isotope({
				filter: selector
			});
			return false;
		});

		if( _filters.find('.filter-floating-triggle').length ){

			_filters.find('ul').contents().filter(function() {
				return this.nodeType === 3;
			}).remove();

		}
	}
	
	//ThemeIsotope: Portfolio #3D Flip Mouseover IE HACK
	/*this.flipie = function(){
		var _card = jQuery('.card');
		var _container3d = jQuery('.container3d');
		_card.live("mouseenter", function(e){
			e.preventDefault();
			jQuery(this).find('.front').stop().animate({"opacity": 0}, 300);
			jQuery(this).find('.back').stop().animate({"opacity": 1}, 300).css( { 'z-index' : 100,'display':'block'});	
		});  
	
		_container3d.live("mouseleave", function(e){
			e.preventDefault();
			var $this = jQuery(this);
				$this.find('.back').stop().css( { 'opacity' : 0, 'z-index' : 0});
				$this.find('.front').stop().animate({"opacity": 1}, 300);
		});
	
		jQuery('div.container3d .card .face.back').css( { 'display' : 'none'});
	}	*/
	//Flip centered IE8 hack
	this.flipcenterie = function(){
		var _flipback = jQuery('.flip_wrap_back_con');
		_flipback.each(function(){
			var 
			flipTitHeight  = jQuery(this).find('h2').height(),
			flipMarginTop  = -((flipTitHeight + 60 )/2);
			
			jQuery(this).css({'margin-top':+flipMarginTop,'left':'0' });
		});
	}
}
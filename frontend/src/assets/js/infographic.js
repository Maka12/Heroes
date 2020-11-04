jQuery(document).ready(function($){ 
		
	//infographic Call Code
	
	//Pagebuild: InfoGarphic - Bignumber
	jQuery('.bignumber-item').each(function(){
	
		var digit = jQuery(this).data('digit');
		
		if( Modernizr.touch ) {
			jQuery(this).animateNumbers(digit, false, 1000);
		}else{
			jQuery(this).waypoint(function() {jQuery(this).animateNumbers(digit, false, 1000);}, { offset: '100%'});
		} 
		
	});
	
	//Pagebuild: InfoGarphic -  Columns
	jQuery('.infrographic.columns').each(function(index, element) {
        var 
		_this = jQuery(this),
		vbar_items  = _this.find('.vbar-item').length,
		vbar_item_width = 100/vbar_items;
		_this.find('.vbar-item').css({width:vbar_item_width+'%'});
		
		
		_this.waypoint(function(){
			_this.find('.vbar').each(function(){
				jQuery(this).jqbar({ label: jQuery(this).attr('data-lbl'), value: jQuery(this).attr('data-val'), barColor: jQuery(this).attr('data-clr'), barWidth:160, orientation: 'v' });
			});
		}, {
			offset: '100%',
			triggerOnce: true
		});
		
		
	});
	
	//Pagebuild: InfoGarphic -  Pictorial
	jQuery('.infrographic.pictorial').each(function(index, element) {
        var _this     = jQuery(this),
		    _thisIcon = _this.find("i");
		
		if(_thisIcon.hasClass('m-people-male')||_thisIcon.hasClass('m-people-female') || _thisIcon.hasClass('m-up-arrow')|| _thisIcon.hasClass('m-down-arrow')|| _thisIcon.hasClass('m-dot') ){
			_this.find('.bar').css({width:'46px'})	
		}
		_this.waypoint(function(){
			_this.find('.progress_bars_with_image_content .bar').each(function(i, element) {
                var bar = jQuery(this);
				if(i < bar.parent().attr('data-number')){
					var $this = this;
					setTimeout(function(){$this.setAttribute("class", "bar active");}, (i + 1) * 300);
				}
            });
		}, {
			offset: '100%',
			triggerOnce: true
		});
    });
	
	//Pagebuild: InfoGarphic -  Pie
	jQuery('.infrographic.pie').each(function(index, element) {
        var _this = jQuery(this);
		var _knob = _this.find('.knob');
		var progress = _knob.attr("data-val");
		
		_knob.knob();
		_knob.val(0);
		_this.waypoint(function(){
			if(_knob.val() == 0){
				jQuery({value: 0}).animate({value: progress}, {
					duration: 2000,
					easing:'swing',
					step: function() 
					{
						_knob.val(Math.ceil(this.value)).trigger('change');
					},
					complete: function(){
						_knob.val(progress + '%');
					}
				})
			}
		}, {
			offset: '100%', 
			triggerOnce: true
		});
		
	});
	
	//Pagebuild: InfoGarphic -  Bar
	jQuery('.infrographic.bar').each(function(index, element) {
		var _this = jQuery(this);
		
		if( Modernizr.touch ) {
			moveProgressBar(_this);
		}else{
			_this.waypoint(function(){
				moveProgressBar(_this);
			}, {
				offset: '100%',
				triggerOnce: true
			});
		}
	});
	
	function moveProgressBar(o) {
		var getPercent = (o.data('progress-percent') / 100);
		var getProgressWrapWidth = o.width();
		var progressTotal = getPercent * getProgressWrapWidth;
		var progressTotalPercent = progressTotal -30;
		var animationLength = 1500;
		if (o.hasClass('v')) {
			var getPercent =1 - (o.data('progress-percent') / 100);
			var getProgressWrapWidth = o.height();
			var progressTotal = getPercent * getProgressWrapWidth;
			o.find('.progress-bar').stop().animate({
				top: progressTotal-getProgressWrapWidth
			}, animationLength);
			
			return false;
		}
		// on page load, animate percentage bar to data percentage length
		// .stop() used to prevent animation queueing
		o.waypoint(function(){
			o.find('.progress-bar').stop().animate({
				left: progressTotal
			}, animationLength);
		}, {
			offset: '100%',
			triggerOnce: true
		})
		
		//o.find('.bar-percent').stop().animate({
		//	left: progressTotalPercent
		//}, animationLength);
	}
	jQuery(window).resize(function() {
		jQuery(".progress-wrap").each(function() {
			var me = jQuery(this);
			moveProgressBar(me);
		});
	});
});

/*********************************************

jquery Bar
Author : EGrappler.com
URL    : http://www.egrappler.com
License: http://www.egrappler.com/license.

*********************************************/
(function ($) {
    $.fn.extend({
        jqbar: function (options) {
            var settings = $.extend({
                animationSpeed: 2000,
                barLength: 200,
                orientation: 'h',
                barWidth: 10,
                barColor: 'red',
                label: '&nbsp;',
                value: 100
            }, options);

            return this.each(function () {

                var valueLabelHeight = 0;
                var progressContainer = $(this);

                if (settings.orientation == 'h') {

                    progressContainer.addClass('jqbar horizontal').append('<span class="bar-label"></span><span class="bar-level-wrapper"><span class="bar-level"></span></span><span class="bar-percent"></span>');

                    var progressLabel = progressContainer.find('.bar-label').html(settings.label);
                    var progressBar = progressContainer.find('.bar-level').attr('data-value', settings.value);
                    var progressBarWrapper = progressContainer.find('.bar-level-wrapper');

                    progressBar.css({ height: settings.barWidth, width: 0, backgroundColor: settings.barColor });

                    var valueLabel = progressContainer.find('.bar-percent');
                    valueLabel.html('0');
                }
                else {

                    progressContainer.addClass('jqbar vertical').append('<span class="bar-level-wrapper"><span class="bar-level"></span></span><span class="bar-percent"></span><span class="bar-label"></span>');

                    var progressLabel = progressContainer.find('.bar-label').html(settings.label);
                    var progressBar = progressContainer.find('.bar-level').attr('data-value', settings.value);
                    var progressBarWrapper = progressContainer.find('.bar-level-wrapper');

                    progressContainer.css('height', settings.barLength);
                    progressBar.css({ height: settings.barLength, top: settings.barLength, backgroundColor: settings.barColor });
                    progressBarWrapper.css({ height: settings.barLength});

                    var valueLabel = progressContainer.find('.bar-percent');
                    valueLabel.html('0');
                    valueLabelHeight = parseInt(valueLabel.outerHeight());
                    //valueLabel.css({ top: (settings.barLength - valueLabelHeight) + 'px' });
                }

                animateProgressBar(progressBar);

                function animateProgressBar(progressBar) {

                    var level = parseInt(progressBar.attr('data-value'));
                    if (level > 100) {
                        level = 100;
                        alert('max value cannot exceed 100 percent');
                    }
                    var w = settings.barLength * level / 100;

                    if (settings.orientation == 'h') {
                        progressBar.animate({ width: w }, {
                            duration: 2000,
                            step: function (currentWidth) {
                                var percent = parseInt(currentWidth / settings.barLength * 100);
                                if (isNaN(percent))
                                    percent = 0;
                                progressContainer.find('.bar-percent').html(percent + '%');
                            }
                        });
                    }
                    else {

                        var h = settings.barLength - settings.barLength * level / 100;
                        progressBar.animate({ top: h }, {
                            duration: 2000,
                            step: function (currentValue) {
                                var percent = parseInt((settings.barLength - parseInt(currentValue)) / settings.barLength * 100);
                                if (isNaN(percent))
                                    percent = 0;
                                progressContainer.find('.bar-percent').html(Math.abs(percent) + '%');
                            }
                        });

                        //progressContainer.find('.bar-percent').animate({ top: (h - valueLabelHeight) }, 2000);

                    }
                }

            });
        }
    });

})(jQuery);
/***********
jquery animateNumbers
	Animates element's number to new number with commas
	Parameters:
		stop (number): number to stop on
        commas (boolean): turn commas on/off (default is true)
		duration (number): how long in ms (default is 1000)
		ease (string): type of easing (default is "swing", others are avaiable from jQuery's easing plugin
	Examples:
        $("#div").animateNumbers(1234, false, 500, "linear"); // half second linear without commas
		$("#div").animateNumbers(1234, true, 2000); // two second swing with commas
		$("#div").animateNumbers(4321); // one second swing with commas
	This fully expects an element containing an integer
	If the number is within copy then separate it with a span and target the span
	Inserts and accounts for commas during animation by default
***********/

(function($) {
    $.fn.animateNumbers = function(stop, commas, duration, ease) {
        return this.each(function() {
            var $this = $(this);
            var start = parseInt($this.text().replace(/,/g, ""));
			commas = (commas === undefined) ? true : commas;
            $({value: start}).animate({value: stop}, {
            	duration: duration == undefined ? 1000 : duration,
            	easing: ease == undefined ? "swing" : ease,
            	step: function() {
            		$this.text(Math.floor(this.value));
					if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
            	},
            	complete: function() {
            	   if (parseInt($this.text()) !== stop) {
            	       $this.text(stop);
					   if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
            	   }
            	}
            });
        });
    };
})(jQuery);
/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.0 (15/07/2012)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */

(function($){"use strict";var k={},max=Math.max,min=Math.min;k.c={};k.c.d=$(document);k.c.t=function(e){return e.originalEvent.touches.length-1;};k.o=function(){var s=this;this.o=null;this.$=null;this.i=null;this.g=null;this.v=null;this.cv=null;this.x=0;this.y=0;this.$c=null;this.c=null;this.t=0;this.isInit=false;this.fgColor=null;this.pColor=null;this.dH=null;this.cH=null;this.eH=null;this.rH=null;this.run=function(){var cf=function(e,conf){var k;for(k in conf){s.o[k]=conf[k];}
s.init();s._configure()._draw();};if(this.$.data('kontroled'))return;this.$.data('kontroled',true);this.extend();this.o=$.extend({min:this.$.data('min')||0,max:this.$.data('max')||100,stopper:true,readOnly:this.$.data('readonly'),cursor:(this.$.data('cursor')===true&&30)||this.$.data('cursor')||0,thickness:this.$.data('thickness')||0.35,width:this.$.data('width')||200,height:this.$.data('height')||200,displayInput:this.$.data('displayinput')==null||this.$.data('displayinput'),displayPrevious:this.$.data('displayprevious'),fgColor:this.$.data('fgcolor')||'#87CEEB',inline:false,draw:null,change:null,cancel:null,release:null},this.o);if(this.$.is('fieldset')){this.v={};this.i=this.$.find('input')
this.i.each(function(k){var $this=$(this);s.i[k]=$this;s.v[k]=$this.val();$this.bind('change',function(){var val={};val[k]=$this.val();s.val(val);});});this.$.find('legend').remove();}else{this.i=this.$;this.v=this.$.val();(this.v=='')&&(this.v=this.o.min);this.$.bind('change',function(){s.val(s.$.val());});}
(!this.o.displayInput)&&this.$.hide();this.$c=$(document.createElement('canvas')).attr({width:this.o.width,height:this.o.height});this.$.wrap($('<div style="'+(this.o.inline?'display:inline;':'')+'width:'+this.o.width+'px;height:'+
this.o.height+'px;"></div>')).before(this.$c);if(typeof G_vmlCanvasManager!=='undefined'){G_vmlCanvasManager.initElement(this.$c[0]);}
this.c=this.$c[0].getContext("2d");if(this.v instanceof Object){this.cv={};this.copy(this.v,this.cv);}else{this.cv=this.v;}
this.$.bind("configure",cf).parent().bind("configure",cf);this._listen()._configure()._xy().init();this.isInit=true;this._draw();return this;};this._draw=function(){var d=true;s.g=s.c;s.clear();s.dH&&(d=s.dH());(d!==false)&&s.draw();};this._touch=function(e){var touchMove=function(e){var v=s.xy2val(e.originalEvent.touches[s.t].pageX,e.originalEvent.touches[s.t].pageY);if(v==s.cv)return;if(s.cH&&(s.cH(v)===false))return;s.change(v);s._draw();};this.t=k.c.t(e);touchMove(e);k.c.d.bind("touchmove.k",touchMove).bind("touchend.k",function(){k.c.d.unbind('touchmove.k touchend.k');if(s.rH&&(s.rH(s.cv)===false))return;s.val(s.cv);});return this;};this._mouse=function(e){var mouseMove=function(e){var v=s.xy2val(e.pageX,e.pageY);if(v==s.cv)return;if(s.cH&&(s.cH(v)===false))return;s.change(v);s._draw();};mouseMove(e);k.c.d.bind("mousemove.k",mouseMove).bind("keyup.k",function(e){if(e.keyCode===27){k.c.d.unbind("mouseup.k mousemove.k keyup.k");if(s.eH&&(s.eH()===false))return;s.cancel();}}).bind("mouseup.k",function(e){k.c.d.unbind('mousemove.k mouseup.k keyup.k');if(s.rH&&(s.rH(s.cv)===false))return;s.val(s.cv);});return this;};this._xy=function(){var o=this.$c.offset();this.x=o.left;this.y=o.top;return this;};this._listen=function(){if(!this.o.readOnly){this.$c.bind("mousedown",function(e){e.preventDefault();s._xy()._mouse(e);}).bind("touchstart",function(e){e.preventDefault();s._xy()._touch(e);});this.listen();}else{this.$.attr('readonly','readonly');}
return this;};this._configure=function(){if(this.o.draw)this.dH=this.o.draw;if(this.o.change)this.cH=this.o.change;if(this.o.cancel)this.eH=this.o.cancel;if(this.o.release)this.rH=this.o.release;if(this.o.displayPrevious){this.pColor=this.h2rgba(this.o.fgColor,"0.4");this.fgColor=this.h2rgba(this.o.fgColor,"0.6");}else{this.fgColor=this.o.fgColor;}
return this;};this._clear=function(){this.$c[0].width=this.$c[0].width;};this.listen=function(){};this.extend=function(){};this.init=function(){};this.change=function(v){};this.val=function(v){};this.xy2val=function(x,y){};this.draw=function(){};this.clear=function(){this._clear();};this.h2rgba=function(h,a){var rgb;h=h.substring(1,7)
rgb=[parseInt(h.substring(0,2),16),parseInt(h.substring(2,4),16),parseInt(h.substring(4,6),16)];return"rgba("+rgb[0]+","+rgb[1]+","+rgb[2]+","+a+")";};this.copy=function(f,t){for(var i in f){t[i]=f[i];}};};k.Dial=function(){k.o.call(this);this.startAngle=null;this.xy=null;this.radius=null;this.lineWidth=null;this.cursorExt=null;this.w2=null;this.PI2=2*Math.PI;this.extend=function(){this.o=$.extend({bgColor:this.$.data('bgcolor')||'#EEEEEE',angleOffset:this.$.data('angleoffset')||0,angleArc:this.$.data('anglearc')||360,inline:true},this.o);};this.val=function(v){if(null!=v){this.cv=this.o.stopper?max(min(v,this.o.max),this.o.min):v;this.v=this.cv;this.$.val(this.v);this._draw();}else{return this.v;}};this.xy2val=function(x,y){var a,ret;a=Math.atan2(x-(this.x+this.w2),-(y-this.y-this.w2))-this.angleOffset;if(this.angleArc!=this.PI2&&(a<0)&&(a>-0.5)){a=0;}else if(a<0){a+=this.PI2;}
ret=~~(0.5+(a*(this.o.max-this.o.min)/this.angleArc))
+this.o.min;this.o.stopper&&(ret=max(min(ret,this.o.max),this.o.min));return ret;};this.listen=function(){var s=this,mw=function(e){e.preventDefault();var ori=e.originalEvent,deltaX=ori.detail||ori.wheelDeltaX,deltaY=ori.detail||ori.wheelDeltaY,v=parseInt(s.$.val()||s.o.min)+(deltaX>0||deltaY>0?1:deltaX<0||deltaY<0?-1:0);if(s.cH&&(s.cH(v)===false))return;s.val(v);},kval,to,m=1,kv={37:-1,38:1,39:1,40:-1};this.$.bind("keydown",function(e){var kc=e.keyCode;if(kc>=96&&kc<=105){kc=e.keyCode=kc-48;}
kval=parseInt(String.fromCharCode(kc));if(isNaN(kval)){(kc!==13)&&(kc!==8)&&(kc!==9)&&(kc!==189)&&e.preventDefault();if($.inArray(kc,[37,38,39,40])>-1){e.preventDefault();var v=parseInt(s.$.val())+kv[kc]*m;s.o.stopper&&(v=max(min(v,s.o.max),s.o.min));s.change(v);s._draw();to=window.setTimeout(function(){m*=2;},30);}}}).bind("keyup",function(e){if(isNaN(kval)){if(to){window.clearTimeout(to);to=null;m=1;s.val(s.$.val());}}else{(s.$.val()>s.o.max&&s.$.val(s.o.max))||(s.$.val()<s.o.min&&s.$.val(s.o.min));}});this.$c.bind("mousewheel DOMMouseScroll",mw);this.$.bind("mousewheel DOMMouseScroll",mw)};this.init=function(){if(this.v<this.o.min||this.v>this.o.max)this.v=this.o.min;this.$.val(this.v);this.w2=this.o.width/2;this.cursorExt=this.o.cursor/100;this.xy=this.w2;this.lineWidth=this.xy*this.o.thickness;this.radius=this.xy-this.lineWidth/2;this.o.angleOffset&&(this.o.angleOffset=isNaN(this.o.angleOffset)?0:this.o.angleOffset);this.o.angleArc&&(this.o.angleArc=isNaN(this.o.angleArc)?this.PI2:this.o.angleArc);this.angleOffset=this.o.angleOffset*Math.PI/180;this.angleArc=this.o.angleArc*Math.PI/180;this.startAngle=1.5*Math.PI+this.angleOffset;this.endAngle=1.5*Math.PI+this.angleOffset+this.angleArc;var s=max(String(Math.abs(this.o.max)).length,String(Math.abs(this.o.min)).length,2)+2;this.o.displayInput&&this.i.css({'width':((this.o.width/2+4)>>0)+'px','height':((this.o.width/3)>>0)+'px','position':'absolute','vertical-align':'middle','margin-top':((this.o.width/3)>>0)+'px','margin-left':'-'+((this.o.width*3/4+2)>>0)+'px','border':0,'background':'none','font':'300 26px Arial','text-align':'center','color':this.o.fgColor,'padding':'0px','-webkit-appearance':'none'})||this.i.css({'width':'0px','visibility':'hidden'});};this.change=function(v){this.cv=v;this.$.val(v);};this.angle=function(v){return(v-this.o.min)*this.angleArc/(this.o.max-this.o.min);};this.draw=function(){var c=this.g,a=this.angle(this.cv),sat=this.startAngle,eat=sat+a,sa,ea,r=1;c.lineWidth=this.lineWidth;this.o.cursor&&(sat=eat-this.cursorExt)&&(eat=eat+this.cursorExt);c.beginPath();c.strokeStyle=this.o.bgColor;c.arc(this.xy,this.xy,this.radius,this.endAngle,this.startAngle,true);c.stroke();if(this.o.displayPrevious){ea=this.startAngle+this.angle(this.v);sa=this.startAngle;this.o.cursor&&(sa=ea-this.cursorExt)&&(ea=ea+this.cursorExt);c.beginPath();c.strokeStyle=this.pColor;c.arc(this.xy,this.xy,this.radius,sa,ea,false);c.stroke();r=(this.cv==this.v);}
c.beginPath();c.strokeStyle=r?this.o.fgColor:this.fgColor;c.arc(this.xy,this.xy,this.radius,sat,eat,false);c.stroke();};this.cancel=function(){this.val(this.v);};};$.fn.dial=$.fn.knob=function(o){return this.each(function(){var d=new k.Dial();d.o=o;d.$=$(this);d.run();}).parent();};})(jQuery);
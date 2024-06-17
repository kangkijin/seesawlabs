// scrollEvent
function scrollEvent(){

	// main_section1 세로박스
	$('.video_hidebox .box_row span').each(function(){
		var target = $(this);
		var targetWidth = target.width();

		$(window).on('scroll',function(){
			var scrArea = $('.main_section1').outerHeight() * 0.1;
			var ratio = 1 - $(this).scrollTop() / scrArea;
	
			target.css( 'width', targetWidth * ratio );
		});
	});

	// main_section1 가로박스
	$('.video_hidebox .box_col span').each(function(){
		var target = $(this);
		var targetHeight = target.height();

		$(window).on('scroll',function(){
			var scrArea = $('.main_section1').outerHeight() * 0.1;
			var ratio = 1 - $(this).scrollTop() / scrArea;
	
			target.css( 'height', targetHeight * ratio );
			$('.video_hidebox .box_col.box2, .video_hidebox .box_col.box3').css('transform','scale(1.08)');
		});
	});

	// main_section1 텍스트
	$(window).on('scroll',function(){
		var scrArea = $('.main_section1').outerHeight() * 0.1;
		var ratio = 1 - $(this).scrollTop() / scrArea;

		$('.main_section1 h3').css( 'opacity', ratio );
		$('.main_section1 .sec1_subtxt').css({
			opacity : 1 - ratio,
			top : 0
		});
	});

	// 스크롤 패럴럭스
	function setScrollEffect(selector, extra) {
		checkVisibility();
		$(window).on('scroll resize', function() {
			checkVisibility();
		});

		function checkVisibility() {
			$(selector).each(function(){
				var target = $(this);
				var scrollTop = $(document).scrollTop();
				var minShow = target.offset().top - $(window).height() * extra;

				if ( scrollTop >= minShow ){
					target.addClass('on');
				}
			});
		}
	}

	setScrollEffect('.fadeup', 1.1);
	setScrollEffect('.fadein', 1.1);
	setScrollEffect('.txtslide', 1.1);

}

// header
function headerStyle(){
	var windowWidth = $(window).outerWidth();
	var windowHeight = $(window).outerHeight();

	// reset
	if ( $('.page_wrap').height() < windowHeight ){
		$('.page_wrap').height( windowHeight - $('.header_wrap').height() );
	}
	$('.subcontent_novisual').siblings('.subpage_visual').addClass('no_visual');

	if (windowWidth < 1025) {
		//console.log('모바일,태블릿');

		// reset
		$('.select_lang').appendTo('.gnb_wrap');

		// gnb
		$('.btn_menu').on('click', function(e){
			e.stopImmediatePropagation();
			$('body').toggleClass('on');
			$('.gnb_wrap').fadeToggle(80);
		});

	} else {
		//console.log('PC');

		// reset
		$('.select_lang').insertAfter('.gnb_wrap');

		// gnb
		$('.gnb_1depth li').on({
			'mouseenter focus':function(){
				if ( $(this).children('.gnb_2depth').length ){
					$(this).children('.gnb_2depth').stop().slideDown(200);
				}
			},
			'mouseleave blur':function(){
				if ( $(this).children('.gnb_2depth').is(':visible') ){
					$(this).children('.gnb_2depth').stop().slideUp(200);
				}
			}
		});
	}
}

// responsive
function responsiveEvent(){
	var windowWidth = $(window).outerWidth();
	if (windowWidth < 690) {
		// mobile
		$('.main_section3 .btn_more').insertAfter('.main_section3 .grid_row_md');

	} else if (windowWidth < 1025) {
		// tablet
		$('.main_section3 .btn_more').appendTo('.main_section3 .inner');
	} else {
		// pc
	}
}

// swiper (Business-Metaverse)
function swiperSlide1() {
	var swiper = new Swiper('.platform_wrap .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		loop: false,
		loopFillGroupWithBlank: true,
	});
}

// toggle class 'on'
function toggleOn(){
	$('.on_js').on('click',function(e){
		e.preventDefault();
		$(this).toggleClass('on');
	});
}

// tab 기능 : '.tab_js' 안에 '.tab_list_js' 와 '.tab_cnt_js'로 구분지어 사용.
function tab(){
	$('.tab_js').each(function(){
		var tabs = $(this).children('.tab_list_js').children('li');
		var panels = $(this).children('.tab_cnt_js').children('div');
		var lastTab = tabs.filter('.on');
		var lastPanel = $(lastTab.children('a').attr('href'));
		panels.hide();
		lastPanel.show();
		tabs.on('click',function(e){
			e.preventDefault();
			var thisTab = $(this);
			var thisPanel = $(thisTab.children('a').attr('href'));
			lastTab.removeClass('on');
			thisTab.addClass('on');
			lastPanel.hide();
			thisPanel.show();
			lastTab = thisTab;
			lastPanel = thisPanel;
		});
	})
}

// tab 모양만
function tabSwitch(){
	$('.tab_switch_js').each(function(){
		var tab = $(this).children('li');

		tab.on('click',function(e){
			e.preventDefault();
			tab.removeClass('on');
			$(this).addClass('on');
		})
	})
}

// main - business area 
function BusinessCardHover(){
	var windowWidth = $(window).outerWidth();
	if (windowWidth > 1024) {
		// pc
		$('.business_list > li').on({
			'mouseover focus':function(){
				$(this).addClass('hover');
			},
			'mouseleave blur':function(){
				$(this).removeClass('hover');
			}
		});
		$('.business_list .btn_round').on({
			'mouseover focus':function(){
				$(this).parents('li').addClass('hover_bg');
			},
			'mouseleave blur':function(){
				$(this).parents('li').removeClass('hover_bg');
			}
		});
	}
}

// Business - Blockchain - DID
function tabForDID(){

	var windowWidth = $(window).outerWidth();
	var tabList = $('.didbenefit_list').find('li');
	var tabCnt = $('.phone_frame');

	if (windowWidth < 1025) {
		// tablet, mobile
		tabList.on('click', function(e){
			e.preventDefault();
			var tabNo = $(this).index();

			// tab list
			tabList.removeClass('on');
			$(this).addClass('on');

			// tab content
			tabCnt.removeAttr('class');
			tabCnt.addClass(function(){
				return 'phone_frame frame_' + tabNo;
			});
		});
	} else {
		// pc
		tabList.on({
			'mouseenter focus':function(){
				var tabNo = $(this).index();
				
				// tab list
				tabList.removeClass('on');
				$(this).addClass('on');

				// tab content
				tabCnt.removeAttr('class');
				tabCnt.addClass(function(){
					return 'phone_frame frame_' + tabNo;
				});
			}
		});
	}
}

// Business - Metaverse
function platformHover(){
	var windowWidth = $(window).outerWidth();

	if (windowWidth > 1024) {
		// tablet, mobile
		$('.platform_wrap').find('.swiper-slide').on({
			'mouseenter focus':function(){
				$(this).addClass('on');
			},
			'mouseleave blur':function(){
				$(this).removeClass('on');
			}
		});
	}
}

// 브라우저 알림창
function browserAlert(){
	$(".browseralert_close").on("click", function() {
		$("#browseralert").slideUp();
	});
}

// IE 버전 체크 (UserAgent)
var ua = navigator.userAgent.toLowerCase();
// IE7엔 브라우저 엔진명인 Trident가 없고 IE11엔 MSIE란 문자열이 없으므로 두 가지 경우를 모두 체크.
if( ua.indexOf( 'msie' ) != -1 || ua.indexOf( 'trident' ) != -1 ) {
	var version = 11;
	ua = /msie ([0-9]{1,}[\.0-9]{0,})/.exec( ua );
	if( ua )
	{
		version = parseInt( ua[ 1 ] );
	}
	var classNames = '';
	// 기존 방식에 is-ie 라는 클래스 추가
	classNames += ' is-ie';
	// 기존 방식에 현재 버전 클래스 추가
	classNames += ' ie' + version;
	for( var i = version + 1; i <= 11; i++ ) {
		classNames +=  ' lt-ie' + i;
	}
	// html 태그에 클래스 추가
	document.getElementsByTagName( 'html' )[ 0 ].className += classNames;
}

$(document).ready(function () {

	// scrollEvent
	scrollEvent();

	// header
	headerStyle();

	// responsive
	responsiveEvent();

	// swiper (Business-Metaverse)
	swiperSlide1();

	// tab 기능
	tab();

	// tab 모양만
	tabSwitch();

	// main - business area 
	BusinessCardHover();

	// Business - Blockchain - DID
	tabForDID();

	// Business - Metaverse
	platformHover();

	// 브라우저 알림창
	browserAlert();

	// 이미지 라이트박스
	$('.openimg').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		callbacks: {
			resize: changeImgSize,
			imageLoadComplete: changeImgSize,
			change: changeImgSize
		}
	});
	function changeImgSize() {
		var img = this.content.find('img');
		img.css('max-height', '100%');
		img.css('height', 'auto');
		img.css('width', 'auto');
		img.css('max-width', '810px');
	}

});

$(window).on('resize', function() {

	// header
	headerStyle();

	// responsive
	responsiveEvent();
	
	// Business - Blockchain - DID
	tabForDID();

	// Business - Metaverse
	platformHover();
	
});


// Scroll.js

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
		if(target != ""){
			$('html, body').stop().animate({
				'scrollTop': $(target).offset().top
			}, 1000, 'swing', function () {
				window.location.hash = target;
			});
		}
	});
});

$(window).resize(function(){
	resizeVideo();
	showMenuBtn();
});

$(window).trigger("resize");

// open menu on mobile

function showMenuBtn(){
	if($(window).width()<=1200){
		$(".open_menu").addClass("visible");
		$("header nav").addClass("hidden");
	}else{
		$(".open_menu").removeClass("visible");
		$("header nav").removeClass("hidden");
	}
}

$(".open_menu").click(function(){
	$(".navigation_mobile").addClass("opened");
});

$(".close_menu").click(function(){
	$(".navigation_mobile").removeClass("opened");
});

// Enable AOS plugin (blocks animations)

if(typeof(AOS) !== 'undefined'){
	AOS.init({
		easing: 'ease-in-out-sine'
	});
}

// AJAX send form
	
$("form").submit(function(event){
	event.preventDefault();
 
	var form = $(this),
		term = form.serialize(),
		url = form.attr("action"),
		required_fields_filled = true;
		
	form.find("input, textarea, select").each(function(){
		if($(this).prop("required") && $(this).val()==""){
			required_fields_filled = false;
		}
	});

	if(required_fields_filled){
		var posting = $.post(url, term);
		posting
		.done(function(data){
			if(data=="ok"){
				$(".alert-form-success").fadeIn(200).delay(5000).fadeOut(200);
			}else{
				$(".alert-form-error").fadeIn(200).delay(5000).fadeOut(200);
			}
		})
		.fail(function(){
			$(".alert-form-error").fadeIn(200).delay(5000).fadeOut(200);
		});
	}else{
		$(".alert-form-check-fields").fadeIn(200).delay(5000).fadeOut(200);
	}
});

// Function to add style to form, when user clicks to input inside it

function focusForm(formID){
	var form = $("#"+formID);
	if(form.hasClass("focused")){
		form.removeClass("focused");
	}else{
		form.addClass("focused");
	}
}

// Resize video, saving aspect ratio

function resizeVideo(){
	var width, height, ratio;
	$(".video").each(function(){
		ratio = $(this).data("ratio");
		ratio = ratio.split("/");
		ratio = ratio[0]/ratio[1];
		width = $(this).width();
		height = width/ratio;
		$(this).height(height);
	});
}

resizeVideo();

// Play video

$(".video .play").click(function(){
	var video = $(this).parent().parent().find("video");
	$(this).closest(".poster").fadeOut(300,function(){
		video.fadeIn(300,function(){
			video[0].play();
		});
	});
});

// Pause video

$("video").each(function(){
	$(this)[0].addEventListener("pause", function(){
		$(this).fadeOut(300,function(){
			$(this).parent().find(".poster").delay(100).fadeIn(300);
		});
	});
});

// Play video in background (after clicking on play button)
/* 
if($(".background_video").length>0){
	var block_start_height = 0;
	var video_container = $('.play_background_video').data('container-id');
	var video_containers_data = [];

	$('.background_video').each(function(){
		video_container = $(this).data('container-id');
		video_containers_data[video_container] = $('#'+video_container).outerHeight();
		$(this).find('video').get(0).addEventListener("pause", function(){
			video_container = $(this).parent().data('container-id');
			$('#'+video_container).animate({height:video_containers_data[video_container]},300);
			$('#'+video_container+' .container, nav').fadeIn(300);
			$('#'+video_container+' .background_video').fadeOut(300);
		});
	});

	$('.play_background_video').click(function(){
		video_container = $(this).data('container-id');
		block_start_height = $('#'+video_container).outerHeight();
		var windowHeight=$(window).height();
		var windowWidth=$(window).width();
		$('#'+video_container).animate({height:windowHeight},300);
		$('#'+video_container+' .container, nav').fadeOut(300);
		$('#'+video_container+' .background_video').height(windowHeight).width(windowWidth).fadeIn(300);
		$('#'+video_container+' .background_video video').fadeIn(300);
		$('#'+video_container+' video').height(windowHeight).width(windowWidth).get(0).play();
		// check if device is mobile in portrait orientetion
		if(windowWidth<=windowHeight){
			var koeff = $('#'+video_container+' video').get(0).videoWidth/windowWidth;
			var height = $('#'+video_container+' video').get(0).videoHeight/koeff;
			$('#'+video_container).animate({height:height},300);
			$('#'+video_container+' .background_video').height(height).width(windowWidth).fadeIn(300);
			$('#'+video_container+' video').height(height).width(windowWidth).get(0).play();
		}
	});
}
 */
 
// Open video in popup

$(".play_popup_video").click(function(event){
	event.preventDefault();
	var url = $(this).attr("href");
	$(".video_popup .iframe_container").html('<iframe src="'+url+'" allowfullscreen></iframe>');
	$(".video_popup, .overlay").fadeIn(300);
});

// Close video popup

$(".video_popup .close, .overlay").click(function(e){
	$(".video_popup, .overlay").fadeOut(300);
	setTimeout(function() {
		$(".video_popup .iframe_container").html('');
	},300);
});
 
// Video in block's background

if($(".bg_video").length>0){
	if($(".youtube_video").length>0){
		function onYouTubeIframeAPIReady() {
			var player, video_container_id, videoId, ratio;
			$(".youtube_video").each(function(){
				video_container_id = $(this).attr("id");
				videoId = $(this).attr("data-videoId");
				player = new YT.Player(video_container_id, {
					videoId: videoId,
					playerVars:{
						'autoplay':1,
						'color':'white',
						'controls':0,
						'iv_load_policy':3,
						'loop':1,
						'mute':1,
						'modestbranding':1,
						'playlist':videoId,
						'rel':0,
						'showinfo':0
					},
					events: {
						'onReady': onPlayerReady,
						'onStateChange': onPlayerStateChange
					}

				});
			});
		}
		var video_iframe, ratio, container_width, container_height, video_width, video_height, player_start, player_end, players_timeouts;
		players_timeouts = [];
		function onPlayerReady(event) {
			video_iframe = $(event.target.getIframe());
			player_start = video_iframe.attr("data-start");
			if(player_start!=undefined){
				player_start = parseInt(player_start);
				event.target.seekTo(player_start);				
			}
			event.target.playVideo();
			ratio = video_iframe.attr("data-ratio").split(":");
			container_width = video_iframe.parent().width();
			container_height = video_iframe.parent().outerHeight(true);
			if(container_width/ratio[0]*ratio[1] < container_height){
				video_width = container_width/ratio[1]*ratio[0] + 20;
				video_iframe.width(video_width);
			}else{
				video_height = container_width/ratio[0]*ratio[1] + 20;
				video_iframe.height(video_height);				
			}
		}
		function onPlayerStateChange(event) {
			video_iframe = $(event.target.getIframe());
			player_start = video_iframe.attr("data-start");
			player_end = video_iframe.attr("data-end");
			if(player_start!=undefined){
				player_start = parseInt(player_start);
				if(player_end==undefined){
					player_end = event.target.getDuration();
				}else{
					player_end = parseInt(player_end);
				}
				if (event.data == YT.PlayerState.PLAYING){
					var player_timeout_id = video_iframe.attr("id");
					players_timeouts[player_timeout_id] = setTimeout(function(){
						event.target.pauseVideo().seekTo(player_start).playVideo();
					},((player_end-player_start)*1000));
				}
			}
		} 
		$(window).resize(function(){
			video_iframe = $(".bg_video").find("iframe");
			ratio = video_iframe.attr("data-ratio").split(":");
			container_width = video_iframe.parent().width();
			container_height = video_iframe.parent().outerHeight(true);
			if(container_width/ratio[0]*ratio[1] < container_height){
				video_width = container_width/ratio[1]*ratio[0] + 20;
				video_iframe.width(video_width);
			}else{
				video_height = container_width/ratio[0]*ratio[1] + 20;
				video_iframe.height(video_height);				
			}
		}); 
	}
}


// Opening tabs

function openTab(tab){
	if(tab.hasClass("opened")){
		$(".tab_text").animate({height:0},300);
		tab.removeClass("opened");
	}else{
		var nextTabHeight = tab.next().find("div").outerHeight(true);
		$(".tab_text").not(tab.next()).animate({height:0},300);
		tab.next().animate({height:nextTabHeight},300);
		$(".tab_opener").removeClass("opened");
		tab.addClass("opened");
	}
}

$(".tab_opener").click(function(){
	openTab($(this));
});

if($(".opening_tabs").length > 0){
	$(".tab_opener").each(function(){
		if($(this).hasClass("opened")){
			var nextTabHeight = $(this).next().find("div").outerHeight(true);
			$(this).next().css("height",nextTabHeight);
		}
	});
}

// Copy text from block

if($("#copy_from_me").length > 0){
	new Clipboard('.copy_btn');
}

// Disable / enable blocks in Form 13

$(".form_13 input[type=radio]").change(function(){
	var enabled_form = $("."+$(this).val());	
	$(".form_block").not(enabled_form).addClass("disabled");
	enabled_form.removeClass("disabled");
	$(".form_block").not(enabled_form).find("input").not("input[type=radio]").prop("disabled","disabled");
	enabled_form.find("input").prop("disabled",false);
});

// Add mask ro inputs in Form 13

if($("#form_13_card").length > 0){
	$("#form_13_card").mask("9999 9999 9999 9999");
}
if($("#form_13_expiration").length > 0){
	$("#form_13_expiration").mask("99 / 9999");
}

// Add mask ro inputs in Form 14

if($("#form_14_card").length > 0){
	$("#form_14_card").mask("9999 9999 9999 9999");
}
if($("#form_14_expiration").length > 0){
	$("#form_14_expiration").mask("99 / 9999");
}
if($("#form_14_cvv").length > 0){
	$("#form_14_cvv").mask("999");
}

// Add mask ro inputs in Form 15

if($("#form_15_cvv").length > 0){
	$("#form_15_card").mask("9999 9999 9999 9999");
}
if($("#form_15_cvv").length > 0){
	$("#form_15_expiration").mask("99 / 9999");
}
if($("#form_15_cvv").length > 0){
	$("#form_15_cvv").mask("999");
}

// Function to simple validate inputs

function validateInput(input,minLength,type){
	var is_valid_icon = input.next();
	var val = input.val();
	if(val.length >= minLength){
		if(type=="email"){
			if(val.indexOf("@")!=-1 && val.indexOf(".")!=-1){
				var val_array = val.split(".");
				if(val_array[val_array.length-1].length>=2){
					valid();
				}else{
					not_valid();
				}
			}else{
				not_valid();
			}
		}else{
			valid();
		}
	}else{
		not_valid();
	}
	function valid(){
		is_valid_icon.animate({opacity:1},300);
	}
	function not_valid(){
		is_valid_icon.animate({opacity:0},300);
	}
}

// Google maps initialisation

if($(".google_map").length>0){
	$(".google_map").each(function(){
		
		var map;
		var map_container = this;
		if($(map_container).attr("data-coords")!=undefined){
			var coords = $(map_container).attr("data-coords").replace(" ","").split(",");
			coords = new google.maps.LatLng(parseFloat(coords[0]), parseFloat(coords[1]));
		}else{
			var coords = new google.maps.LatLng(38.897710, -77.036530);
		}
		if($(map_container).attr("data-marker")!=undefined && $(map_container).attr("data-marker-size")!=undefined){
			var marker_image = $(map_container).attr("data-marker");
			var marker_size = $(map_container).attr("data-marker-size").split("*");
		}
		if($(map_container).attr("data-zoom")!=undefined){
			var zoom = parseInt($(map_container).attr("data-zoom"));
		}else{
			var zoom = 10;
		}

		function init() {
			var mapOptions = {
					zoom: zoom,
					center: coords,				},
				map = new google.maps.Map(map_container, mapOptions);
			if(marker_image){	
				var marker_icon = {
					url: marker_image, 
					scaledSize: new google.maps.Size(marker_size[0], marker_size[1]),
					origin: new google.maps.Point(0,0), 
					anchor: new google.maps.Point(marker_size[0]/2, marker_size[1])
				},
				marker = new google.maps.Marker({
					position: coords,
					map: map,
					icon: marker_icon
				});
			}

		}
		
		init();

	});
}

/*
	Sliders
*/

// Slider in Header 4

if($(".header_4 .slider").length>0){
	$(".header_4 .slider").slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
	});
}

// Slider in Header 8

if($(".header_8 .slider").length>0){
	$(".header_8 .slider").slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		responsive: [
			{
			  breakpoint: 481,
			  settings: {
				arrows:false
			  }
			}
		]
	});
}

// Slider in Header 19

if($(".header_19 .slider").length>0){
	$(".header_19 .slider").slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		//vertical: true,
		fade: true,
		cssEase: 'linear',
	});
}

if($(".content_22 .slider").length>0){
	$(".content_22 .slider").slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
	});
}

if($(".content_23_slider").length>0){
	$(".content_23_slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.content_23_slider_nav',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				asNavFor: null,
				dots:true,
			  }
			}
		]
	});
	
	$('.content_23_slider_nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.content_23_slider',
		dots: false,
		arrows: false,
		vertical:true,
		focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				vertical:false,
				slidesToShow: 4
			  }
			}
		]
	});
}

if($(".content_27 .slider").length>0){
	$(".content_27 .slider").slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 1,
			  }
			},
			{
			  breakpoint: 620,
			  settings: {
				slidesToShow: 1,
				arrows:false,
				dots:true,
			  }
			}
		]
	});
}

if($(".content_29 .slider").length>0){
	$(".content_29 .slider").slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
	});
}

if($(".content_31 .slider").length>0){
	$(".content_31 .slider").slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				arrows:false
			  }
			}
		]
	});
}

if($(".feature_19 .slider").length>0){
	$(".feature_19 .slider").slick({
		dots: false,
		arrows: false,
		fade: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade:true,
		asNavFor: '.feature_19_menu'
	});
	
	$('.feature_19_menu').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.feature_19 .slider',
		dots: false,
		arrows: false,
		focusOnSelect: true,
		variableWidth: true,
	});
}

if($(".feature_29 .slider").length>0){
	$(".feature_29 .slider").slick({
		dots: true,
		arrows: false,
		fade: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
	});
}

if($(".form_4 .slider").length>0){
	$(".form_4 .slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		adaptiveHeight: true,
		asNavFor: '.form_4_menu',
	});
	
	$('.form_4_menu').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.form_4 .slider',
		dots: false,
		arrows: false,
		focusOnSelect: true,
	});
}

if($(".form_15 .slider").length>0){
	$(".form_15 .slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		adaptiveHeight: true,
		asNavFor: '.form_15_menu',
	});
	
	$('.form_15_menu').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.form_15 .slider',
		dots: false,
		arrows: false,
		focusOnSelect: true,
	});
}

if($(".pricing_table_6 .slider").length>0){
	$(".pricing_table_6 .slider").slick({
		dots: false,
		arrows: false,
		fade: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	
	$(".pricing_table_6 .slider").on('beforeChange',function(){
		if($(".change_slide").hasClass("switched")){
			$(".change_slide").removeClass("switched");
			$(".change_slide i").animate({left:0},300);
		}else{
			var animate_to = $(".change_slide").width() - $(".change_slide i").outerWidth(true) - parseInt($(".change_slide i").css("margin-left").replace("px",""));
			$(".change_slide").addClass("switched");
			$(".change_slide i").animate({left:animate_to},300);
		}
	});
	
	$(".change_slide").click(function(){
		$(".pricing_table_6 .slider").slick("slickNext");
	});
}


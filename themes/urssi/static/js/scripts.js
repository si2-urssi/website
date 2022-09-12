// Set background image from data-bg-src and data-bg-src-2x attributes
function setBackgrounds(){
	var bgSrc,
		bgElements = document.querySelectorAll("*[data-bg-src]");
	if(bgElements.length){
		// if it's a regular screen
		bgElements.forEach(function(el) {
			bgSrc = el.getAttribute("data-bg-src");
			if(bgSrc!="" && bgSrc!="false" && bgSrc && bgSrc!=undefined){
				el.style.backgroundImage = "url("+bgSrc+")";
			}else{
				el.style.backgroundImage = "";
			}
		});
		// if the device has a retina screen
		if(window.devicePixelRatio>1.1){
			bgElements = document.querySelectorAll("*[data-bg-src-2x]");
			bgElements.forEach(function(el) {
				bgSrc = el.getAttribute("data-bg-src-2x");
				if(bgSrc=="" || bgSrc=="false" || bgSrc===false || bgSrc==undefined){
					bgSrc = el.getAttribute("data-bg-src");
				}
				if(bgSrc!="" && bgSrc!="false" && bgSrc && bgSrc!=undefined){
					el.style.backgroundImage = "url("+bgSrc+")";
				}else{
					el.style.backgroundImage = "";
				}
			});
		}
	}
}

// Use Switch element to control Slider (Carousel). Used in Pricing category
function switchControlSlider(){
	var switches = document.querySelectorAll(".form-switch input[data-bs-target]"),
		sliderEl,
		sliderInstance,
		sliderInstances = {};
	if(switches.length){
		switches.forEach(function(_switch) {
			sliderEl = document.querySelector(_switch.getAttribute("data-bs-target"));
			sliderInstance = new bootstrap.Carousel(sliderEl,{interval:false, touch:false});
			sliderInstances[_switch.getAttribute("data-bs-target")] = sliderInstance;
			_switch.addEventListener("change", function(event){
				sliderInstances[this.getAttribute("data-bs-target")].next();
				sliderInstances[this.getAttribute("data-bs-target")].pause();
			});
		});
	}
}

// Stop playing youtube videos in modal while closing it
function stopYouTubeOnModalClose(){
	var modals = document.querySelectorAll(".modal"),
		iframe;
	if(modals.length){
		modals.forEach(function(modal) {
			iframe = modal.querySelector("iframe");
			if(iframe){
				if(iframe.src.indexOf("youtube.com")!=-1 || iframe.src.indexOf("youtu.be")!=-1){
					modal.addEventListener('hide.bs.modal', function (event) {
						var iframe = this.querySelector("iframe");
						iframe.setAttribute("data-src",iframe.src);
						iframe.src = "";
						setTimeout(function(){
							iframe.src = iframe.getAttribute("data-src");
						},100);
					})
				}
			}
		});
	}
}

// Init AOS plugin (blocks animations)
function initAnimations(duration){
	if(typeof(AOS) !== 'undefined'){
		if(!duration){duration=500;}
		AOS.init({
			easing: 'ease-out-cubic',
			once: true,
			offset: 50,
			duration: duration
		});
	}
}

// Init AJAX forms submit
function ajaxFormInit(){
	var forms = document.querySelectorAll("form.js-ajax-form");
	if(forms.length){
		forms.forEach(function(form) {
			form.addEventListener("submit", function(event){
				event.preventDefault();
				if(form.getAttribute("data-sitekey")){ // if the form is protected with gRecapcha V3
					var gRecapchaInput = form.querySelector("input[name='g-recaptcha-response']");
					if(gRecapchaInput){ // We have an input for gRecaptcha token inside form
						document.querySelector(".grecaptcha-badge").style.display = "block";
						// Generate gRecaptcha token
						grecaptcha.execute(form.getAttribute("data-sitekey"), {action: 'submit'}).then(function(token) {
							gRecapchaInput.setAttribute("value",token);
							ajaxFormSubmit(form);
						});
					}else{ // No input for gRecaptcha token inside form = we need to create it
						var gRecapchaScript = document.getElementById("grecaptcha-"+form.getAttribute("data-sitekey"));
						if(!gRecapchaScript){ // Load gRecaptcha JS file
							var head = document.querySelector("head");
							gRecapchaScript = document.createElement("script");
							gRecapchaScript.setAttribute("src","https://www.google.com/recaptcha/api.js?render="+form.getAttribute("data-sitekey"));
							gRecapchaScript.setAttribute("id","grecaptcha-"+form.getAttribute("data-sitekey"));
							gRecapchaScript.addEventListener("load",function(){
								grecaptcha.ready(function() {
									// Generate gRecaptcha token, create input, send form
									grecaptcha.execute(form.getAttribute("data-sitekey"), {action: 'submit'}).then(function(token) {
										gRecapchaInput = document.createElement("input");
										gRecapchaInput.setAttribute("type","hidden");
										gRecapchaInput.setAttribute("name","g-recaptcha-response");
										gRecapchaInput.setAttribute("value",token);
										form.append(gRecapchaInput);
										ajaxFormSubmit(form);
									});
								});
							});
							head.append(gRecapchaScript);
						}else{
							document.querySelector(".grecaptcha-badge").style.display = "block";
							// Generate gRecaptcha token, create input, send form
							grecaptcha.execute(form.getAttribute("data-sitekey"), {action: 'submit'}).then(function(token) {
								gRecapchaInput = document.createElement("input");
								gRecapchaInput.setAttribute("type","hidden");
								gRecapchaInput.setAttribute("name","g-recaptcha-response");
								gRecapchaInput.setAttribute("value",token);
								form.append(gRecapchaInput);
								ajaxFormSubmit(form);
							});
						}
					}
				}else{ // no gRecaptcha protection - just submit the form
					ajaxFormSubmit(form);
				}
			});
		});
	}
}
// Submit AJAX form data
function ajaxFormSubmit(form){
	var	formData = new FormData(form);
		
	if(form.method.toLowerCase()!="post"){
		ajaxFormSubmitResult('AJAX form submit works only with the "post" method set.',form);
		return false;
	}
	
	// form fields validation
	var fields = form.querySelectorAll("input, textarea, select");
	fields.forEach(function(field) {
		if(
			field.required && field.value=="" || 
			field.required && field.type=="checkbox" && field.checked===false || 
			field.validity.valid!==true
		){
			ajaxFormSubmitResult('Not all required fields were filled or filled incorrectly.',form);
			return false;
		}
	});
	
	// Make a request
	var request = new XMLHttpRequest();
	request.addEventListener("loadend", function(){
		if(request.status!=200){
			ajaxFormSubmitResult("Error: HTTP status code is "+request.status,form);
		}else{
			ajaxFormSubmitResult(request.responseText,form);
		}
	});
	request.addEventListener("timeout", function(){
		ajaxFormSubmitResult("Request timed out, data was not sent.",form);
	});
	request.open(form.method, form.action);
    request.send(formData);
}

// Handle response of the AJAX form submit
function ajaxFormSubmitResult(response,form){
	var alerts = form.querySelectorAll(".js-form-result");
	var text = '';
	try{
        JSON.parse(response);
    }catch(e){
		// show error - response is string (not a valid json)
		console.error(response);
		text = response;
		ajaxFormShowResult(false, text, alerts);
        return false;
    }
	response = JSON.parse(response);
	if(response.success){ // no errors in form-handler file
		if(response.success===true){
			var el = form.querySelector(".js-form-result[data-result='success'] .js-form-alert-text");
			text = el.getAttribute("data-default-text");
			ajaxFormShowResult(true, text, alerts);
		}else{
			text = response.success;
			ajaxFormShowResult(true, text, alerts);
		}
	}else if(response.error){ // there are some errors in form-handler file
		text = response.error;
		console.error(response);
		ajaxFormShowResult(false, text, alerts);
	}else{
		text = "Unknown error. Please, check if your hosting supports PHP.";
		console.error(text);
		ajaxFormShowResult(false, text, alerts);
	}
}

// Show success / error alert with the response text after the form submit.
function ajaxFormShowResult(success, text, alerts){
	if(alerts.length){
		alerts.forEach(function(_alert){
			if(
				success && _alert.getAttribute("data-result")=="success" || 
				!success && _alert.getAttribute("data-result")=="error"
			){
				_alert.classList.remove("invisible");
				_alert.classList.add("show");
				var el = _alert.querySelector(".js-form-alert-text");
				el.innerText = text;
				setTimeout(function(){ // auto-hide after 5 seconds
					_alert.classList.remove("show");
					_alert.addEventListener("transitionend", function(){
						if(!this.classList.contains("show")){
							this.classList.add("invisible");							
						}
					});
					if(document.querySelector(".grecaptcha-badge")){
						document.querySelector(".grecaptcha-badge").style.display = "none";						
					}
				},5000);
			}else{
				_alert.classList.add("invisible");
				_alert.classList.remove("show");
			}
		});
	}
} 

// document.ready section
document.addEventListener("DOMContentLoaded", function(){
	setBackgrounds();
	switchControlSlider();
	stopYouTubeOnModalClose();
	initAnimations();
	ajaxFormInit();
});
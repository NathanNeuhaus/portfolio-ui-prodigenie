var SIGN_UP_IN_VALUE = 1;





function signin(){
  trySignin();
  loadingImage( true, 200 );
  //simulateLoginSuccess();
  simulateLoginFail();
}


function signup2( event ){
   
    
}

function signup(){
  trySignup();
  loadingImage( true, 200 );
  //simulateSignupSuccess();
  simulateSignupFailure();

  //alert();
}


function signupinSwitch( val ){
    var signin_el = document.getElementById("fields-1"); 
    var signup_el = document.getElementById("fields-2"); 
    var underl_el = document.getElementById("selection1"); 
    var signup_text_el = document.getElementById("signup");
    var signin_text_el = document.getElementById("signin");
    if( val === SIGN_UP_IN_VALUE )
        return;
    
    if( val === 1 ){
        underl_el.style.left = "16px";
        SIGN_UP_IN_VALUE = 1;
        signin_text_el.className = "selected";
        signup_text_el.className = "unselected";
        moveX2( underl_el, 101, 16, -20 ); 
        signUpSlideOut();
    }
    if( val === 2 ){
        SIGN_UP_IN_VALUE = 2;
        signup_text_el.className = "selected";
        signin_text_el.className = "unselected";
        moveX2( underl_el, 16, 101, inc = 20, dur = 2 ); 
        signInSlideOut();
    }
}

function popup(){
  dimscreen( true, 100 );
  dimAlertShow( 200 );
  // dimscreen( false );
}
function trySignin(){
    var signin_el = document.getElementById("fields-1"); 
    moveX2(   signin_el, 16, -300, inc = -20, dur = 2 ); 
    fadeOut(  signin_el, 0 ); 
}

function trySignup(){
    var signin_el = document.getElementById("fields-2"); 
    moveX2(   signin_el, 16, -300, inc = -20, dur = 2 ); 
    fadeOut(  signin_el, 0 ); 
}

function simulateLoginSuccess(){
    var el1    = document.getElementById("rings");
    el1.style.backgroundImage = "url(imgs/rings.svg?" + Math.random() + ")";
    el1.style.display = "block";
    el1.style.backgroundSize = "100%";
    el1.style.opacity = "1";
    
    var el3    = document.getElementById("successtext");
        el3.style.display = "block";
        el3.style.backgroundSize = "0";
   
    var el4    = document.getElementById("logintextG");
        el4.style.display = "block";
        el4.style.backgroundSize = "0";
        el4.style.opacity = "1";   

    
  window.setTimeout(function() {
    var el    = document.getElementById("rings");
    shrinkOut( el );
    
    var el    = document.getElementById("loginsuccess");
    growIn( el, 20  );
    
    
    
    
    growIn( el3, 50, 3  );
    growIn( el4, 50, 3  );
    
    //setStyleAtTime( el4, "display", "none", 1800 );

  }, 4000 );
}

function signupFailure(){
 
    

        var el1    = document.getElementById("rings");

    
    var el2    = document.getElementById("signupfailure");
    var el3    = document.getElementById("failtext");
    
    var el4 = document.getElementById("signuptextR");    
      
        
        
        el2.style.display = "block";
        
        el2.style.opacity = "1";
        el2.style.backgroundSize = "0%";
        
        
      
      

  
    
    shrinkOut( el1 );
    
    
    el2.style.color = "red";
    growIn( el2, 28 );
    shakeLoginBox( 200 );
    growIn( el3, 30, 10  );
    growIn( el4, 60, 5  );
    
    fadeOut( el2, 1800 );
    fadeOut(  el1, 1800 );
    
        
    fadeOut( el3, 1750  );
    fadeOut( el4, 1750  );
    
    
    
    var signin_el = document.getElementById("fields-2"); 
    signin_el.style.left = "16px";
    signin_el.style.display = "block";
    fadeIn( signin_el, 1680 );
    
    setStyleAtTime( el3, "display", "none", 1800 );
    setStyleAtTime( el4, "display", "none", 1800 );
    setStyleAtTime( el1, "display", "none", 1800 ); 
    setStyleAtTime( el2, "display", "none", 1800 ); 
    setStyleAtTime( el2, "color", "transparent", 1800 ); 
    

    
  
  
}
function signupSuccess(){
   var el    = document.getElementById("rings");
    shrinkOut( el );
    
    var el    = document.getElementById("signupsuccess");
    growIn( el, 26  );
    el.style.color = "white";
    
      
    SIGN_UP_IN_VALUE = 1;
    var signin_el = document.getElementById("fields-1"); 
    var signup_el = document.getElementById("fields-2"); 
    var underl_el = document.getElementById("selection1");
        underl_el.style.left = "16px";
    var signup_text_el = document.getElementById("signup");
    var signin_text_el = document.getElementById("signin");
        signin_text_el.className = "selected";
        signup_text_el.className = "unselected";
  
  
    var el1    = document.getElementById("rings");
    var el2    = document.getElementById("signupsuccess");      
        el1.style.display = "block";
        el2.style.display = "block";
        el1.style.opacity = "1";
        el2.style.opacity = "1";
        el2.style.backgroundSize = "0%";
        el1.style.backgroundSize = "100%";
        el1.style.backgroundImage = "url(imgs/rings.svg?" + Math.random() + ")";
        
    var el3    = document.getElementById("successtext");
        el3.style.display = "block";
        el3.style.backgroundSize = "0";
        el3.style.opacity = "1";
        growIn( el3, 50, 5  );
        
    var el4 = document.getElementById("signuptextG");    
        el4.style.display = "block";
        el4.style.backgroundSize = "0";
        el4.style.opacity = "1";
        growIn( el4, 50, 5  );
    
    
    shrinkOut( el1 );
    growIn( el2, 28 );
    fadeOut( el2, 1800 );
    fadeOut(  el1, 1800 );
    fadeOut(  el3, 1700 )
    fadeOut(  el4, 1700 )
    
    
    signin_el.style.left = "16px";
    signin_el.style.display = "block";
    fadeIn( signin_el, 1800 );
    
    setStyleAtTime( el1, "display", "none", 1800 ); 
    setStyleAtTime( el2, "display", "none", 1800 ); 
    setStyleAtTime( el3, "display", "none", 1800 ); 
    setStyleAtTime( el4, "display", "none", 1800 ); 
    setStyleAtTime( el2, "color", "transparent", 1800 ); 
  
}
function simulateSignupSuccess(){
    var el1    = document.getElementById("rings");
    el1.style.backgroundImage = "url(imgs/rings.svg?" + Math.random() + ")";
    el1.style.display = "block";
    el1.style.backgroundSize = "100%";
    el1.style.opacity = "1";
  window.setTimeout(function() {
   signupSuccess();

  }, 4000 );
}

function simulateSignupFailure(){
    var el1    = document.getElementById("rings");
    el1.style.backgroundImage = "url(imgs/rings.svg?" + Math.random() + ")";
    el1.style.display = "block";
    el1.style.backgroundSize = "100%";
    el1.style.opacity = "1";
    
          var el3    = document.getElementById("failtext");
          el3.style.display = "block";
          el3.style.backgroundSize = "0";
          el3.style.opacity = "1";

    
    
        var el4 = document.getElementById("signuptextR");    
        el4.style.display = "block";
        el4.style.backgroundSize = "0";
        el4.style.opacity = "1";
        
    
  window.setTimeout(function() {
    
    signupFailure();
  
    
  }, 4000 );
}
function simulateLoginFail(){
  var el1    = document.getElementById("rings");
  var el2    = document.getElementById("loginfail");
      el1.style.display = "block";
      el2.style.display = "block";
      el1.style.opacity = "1";
      el2.style.opacity = "1";
      el2.style.backgroundSize = "0%";
      el1.style.backgroundSize = "100%";
      el1.style.backgroundImage = "url(imgs/rings.svg?" + Math.random() + ")";
      
      var el3    = document.getElementById("failtext");
          el3.style.display = "block";
          el3.style.backgroundSize = "0";
          el3.style.opacity = "1";
      var el4    = document.getElementById("logintextR");
          el4.style.display = "block";
          el4.style.backgroundSize = "0";
          el4.style.opacity = "1";   
          
          
            
      
  window.setTimeout(function() {
    
    shrinkOut( el1 );
    
    
    el2.style.color = "red";
    growIn( el2, 28 );
    shakeLoginBox( 250 );
    
    growIn( el3, 30, 10  );
    growIn( el4, 60, 5  );
    
    
    fadeOut( el2, 1500 );
    fadeOut(  el1, 1800 );
    
    
    fadeOut( el3, 1500  );
    fadeOut( el4, 1500  );
    
    var signin_el = document.getElementById("fields-1"); 
    signin_el.style.left = "16px";
    signin_el.style.display = "block";
    fadeIn( signin_el, 1900 );
    
    setStyleAtTime( el1, "display", "none", 1800 ); 
    setStyleAtTime( el2, "display", "none", 1800 ); 
    
    setStyleAtTime( el3, "display", "none", 1800 );
    setStyleAtTime( el4, "display", "none", 1800 );
    setStyleAtTime( el2, "color", "transparent", 1800 ); 
    
    

    
  }, 4000 );
  
}






function setStyleAtTime( el, style, val, time ){
  window.setTimeout(function() {
      el.style[style] = val;
  }, time );
}

function noDisplayTime( el, time ){
  window.setTimeout(function() {
      el.style.display = "none";
  }, time );
}
function growIn( el, growth, dur ){
el.style.display = "block";
if(dur === undefined ) dur = 10;
var inc = 3;
var test = 0;
var left = 0;
var amt = 0;
  for( var i = 0; i < growth; i++ ){
    time = dur * i;
    window.setTimeout(function() {
      amt = inc*test++;
      size = amt;
      el.style.backgroundSize = size + "px";
      test++;
    }, time);
  }      
}

function shrinkOut( el, delay ){
  
  if(delay === undefined) delay = 0;
 window.setTimeout(function() {  
var dur = 20;
var inc = 30;
var size = 0;
var test = 0;
var left = 0;
var amt = 0;
  for( var i = 0; i < 31; i++ ){
    time = dur * i;
    window.setTimeout(function() {
      amt = inc*test++;
      size = 300 - amt;
      el.style.backgroundSize = size + "px";
      test++;
    }, time);
  }      
  }, delay);
   
   
 }


function loadingImage( bool, delay ){
  
  
  var el    = document.getElementById("rings");
  
  if( delay === undefined ) delay = 0;
    window.setTimeout(function() {

  if( bool )
      el.style.display = "block";
  
  
  else
      el.style.display = "none";


  }, delay);
    
  

  
  
  
}

function dimAlertShow( delay ){
  var el  = document.getElementById("notif"); 
  if( delay === undefined ) delay = 0;
    window.setTimeout(function() {
        el.style.top = "-200px";
        el.style.display = "block";
        moveY( el, -100, 200, 50, 2  );
    }, delay);
}


function dimscreen( bool, delay ){
  var loginbox  = document.getElementById("blanket"); 
  if( delay === undefined ) delay = 0;
  window.setTimeout(function() {
    
    
      
      if( bool )
        loginbox.style.display = "block";
      else
        loginbox.style.display = "none";
    
    
    
    
  }, delay );

}


function shakeLoginBox( starttime ){
  var loginbox  = document.getElementById("login"); 
  //var firstX    = getNums(loginbox.style.width);
  var pos0 = "calc(50% - 150px)";
  var pos1 = "calc(50% - 160px)";
  var pos2 = "calc(50% - 150px)";
  var pos3 = "calc(50% - 140px)";
  
   var pos1B = "calc(50% - 155px)";
   var pos3B = "calc(50% - 145px)";
  
  if(starttime === undefined ) starttime = 0;
  var time = starttime;
  var t = 30;
  
  window.setTimeout(function() {
    loginbox.style.left = pos1;
  }, time += t);
  
  window.setTimeout(function() {
    loginbox.style.left = pos2;
  }, time += t);
  
  window.setTimeout(function() {
    loginbox.style.left = pos3;
  }, time += t);

  window.setTimeout(function() {
    loginbox.style.left = pos0;
  }, time += t);        
        
  window.setTimeout(function() {
    loginbox.style.left = pos1;
  }, time += t);   
        
  window.setTimeout(function() {
    loginbox.style.left = pos2;
  }, time += t);      

  window.setTimeout(function() {
    loginbox.style.left = pos3;
  }, time += t);

  window.setTimeout(function() {
    loginbox.style.left = pos0;
  }, time += t); 
  
         
  window.setTimeout(function() {
    loginbox.style.left = pos1B;
  }, time += t);   
        
  window.setTimeout(function() {
    loginbox.style.left = pos2;
  }, time += t);      

  window.setTimeout(function() {
    loginbox.style.left = pos3B;
  }, time += t);

  window.setTimeout(function() {
    loginbox.style.left = pos0;
  }, time += t);        
}


function signInSlideOut(){
    var signin_el = document.getElementById("fields-1"); 
    var signup_el = document.getElementById("fields-2"); 
    moveX2(   signin_el, 16, -300, inc = -20, dur = 2 ); 
    fadeOut(  signin_el, 0 ); 
    signup_el.style.left = "16px";
    signup_el.style.display = "block";
    fadeIn( signup_el, 220 );
    signup_el.style.opacity = 0.0;
    signup_el.style.display = "block";
}

function signUpSlideOut(){
    var signin_el = document.getElementById("fields-1"); 
    var signup_el = document.getElementById("fields-2"); 
        moveX2(   signup_el, 16, -300, inc = -20, dur = 2 ); 
        fadeOut(  signup_el, 0 );
        signin_el.style.left = "16px";
        signin_el.style.display = "block";
        fadeIn( signin_el, 220 );
        signup_el.style.opacity = 0.0;
        signup_el.style.display = "block";
}


function fadeOut( ele, delay ){
 
    window.setTimeout(function() {
        callbackCreate( ele, "opacity", 1.0, 0.0, -0.2, 10 );
    }, delay);
}

function fadeIn( ele, delay ){

        window.setTimeout(function() {
            callbackCreate( ele, "opacity", 0.0, 1.0, 0.2, 10 );
        }, delay);
}

function moveX2( el, from, to, by, dur ){
  callbackCreate( el, "left", from, to, by, dur, "px"); 
  // el, styl, start, end, inc, dur, unit
}

function moveY( el, from, to, by, dur, unit ){
  if( unit === undefined ) unit = "px";
  callbackCreate( el, "top", from, to, by, dur, unit ); 
  // el, styl, start, end, inc, dur, unit
}
function callbackCreate( el, styl, start, end, inc, dur, unit ){
  var times   = [];
  var values  = [];
  var fcns    = [];
  
  if( unit === undefined ) unit = "";
  
  var ob = {}
      ob.styl = undefined;
      ob.tims = [];
      ob.vals = [];
      ob.fcns = [];
  
  var len = Math.ceil((end - start) / inc);
  
  for(var i = 0 ; i < len; i++ ){
    ob.tims.push( i * dur ); 
    ob.vals.push( start + ( i * inc ) ); 
    ob.fcns.push(function( val ){
      el.style[styl] = val + unit;
      console.log( val ); 
    });
  }
  
    ob.tims.push( len * dur ); 
    ob.vals.push( end ); 
    ob.fcns.push(function( val ){
      el.style[styl] = val + unit;
      console.log( val ); 
    });
  
  
  callback( ob ); 
}

function callback( ob ){
  // * fcns     - array of functions to be run at the corresponding index in the time array
  // * times    - start times for corresponding function indices - times scale: 1000 equals 1 second, 1 equals a millisecond
  // * example  - callback([fnc1, fnc2], [time1 = 200, time2 = 700]); 
   var fcns = ob.fcns;
   var times = ob.tims;
   if (fcns.length <= 0)
        return;
    (function chain(i) {
        if (i >= fcns.length || typeof fcns[i] !== 'function')
            return;
        window.setTimeout(function() {
            fcns[i]( ob.vals[i] );
            chain(i + 1);
        }, times[i]);
    })(0);
  }
  
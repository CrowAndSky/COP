"use strict";

/* ------------------ ### wwwwwwww ### ------------------\

151, 203, 210 SW 9046 Gentle Aquamarine
132, 180, 190 SW 6493 Ebbtide
153, 160, 178 SW 6542 Vesper Violet
110, 194, 196  SW 6766 Mariner

var styles = getComputedStyle(document.documentElement);
var colorValue = styles.getPropertyValue('--color');
document.documentElement.style.setProperty('--color', 'green');
OR
body.style.setProperty('--foo-bar', newValue);
var fooBar = bodyStyles.getPropertyValue('--foo-bar');
*/

$(document).ready( function(){

const $appWrapper = $( '#app-wrapper' );
let loopState = "top",
    pauseTransitions = false;

window.setInterval( function() {
    if ( !pauseTransitions ) {
        switch ( loopState ) {
            case "top":
                $appWrapper.attr( 'class', 'state-detail' );
                loopState = 'detail';
                break;
            case "detail":
                $appWrapper.attr( 'class', 'state-lower-room' );
                loopState = 'lower';
                break;
            case "lower":
                $appWrapper.attr( 'class', 'state-lower-room state-detail' );
                loopState = 'bottomDetail';
                break;
            case "bottomDetail":
                $appWrapper.attr( 'class', '' );
                loopState = 'top';
                break;
        }
    }
}, 8000);

$appWrapper.click( function(){ pauseTransitions = !pauseTransitions; });
});
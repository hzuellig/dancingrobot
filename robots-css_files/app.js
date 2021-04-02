/**
 * Created by hzuellig on 17.03.21.
 */
/**
 * Created by hzuellig on 10.03.21.
 */
'use strict';

// Auxiliary method. Retrieves and sanitises the value of a custom property.
var getVariable = function(styles, propertyName) {
    return String(styles.getPropertyValue(propertyName)).trim();
};

// Auxiliary method. Sets the value of a custom property at the document level.
var setDocumentVariable = function(propertyName, value) {
    document.documentElement.style.setProperty(propertyName, value);
};



// Initialise page controls.
window.addEventListener('load', function() {
    // Get the styles for the document.
    // This is where we've chosen to store all the global variables we use.
    var styles = getComputedStyle(document.documentElement);

    var tempoarm = document.getElementById('tempoarm');
    var tempokopf = document.getElementById('tempokopf');


    // Retrieve initial custom property values and update controls.
    tempokopf.value = getVariable(styles, '--tempokopf').replace('s', '');
    tempoarm.value = getVariable(styles, '--tempoarm').replace('s', '');

    // Set up event handlers for having the sliders update the custom properties
    // at the document level.
    tempokopf.addEventListener('input', function() {
        console.log(tempokopf.value);
        setDocumentVariable('--tempokopf', tempokopf.value + 's');
    });

    tempoarm.addEventListener('input', function() {
        console.log(tempoarm.value);
        setDocumentVariable('--tempoarm', tempoarm.value + 's');
    });


});

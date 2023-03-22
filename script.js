let states = document.getElementById('states');
states.onchange = function() {
    
    // Logs the index number of the state selected
    console.log('states index:' + states.selectedIndex);
    
    // Logs the name of the state chosen 
    console.log('states index:' + states.options[states.selectedIndex].text);
    
    // Logs the image link - img/(chosen state's abbreviation)@2x.jpg
    console.log('img/' + states.value + '@2x.jpg');

    // Selects HTML element with id of #postcard and changes the background image to the state chosen
    document.getElementById('postcard').style.backgroundImage = 'url(img/' + states.value + '@2x.jpg)';

    // Selects HTML element with id of #state-heading and changes the text to the name of the selected index (state name)
    document.getElementById('state-heading').innerHTML = states.options[states.selectedIndex].text

    // Selects HTML element with id of #greeting and changes the text to "Greetings from:"
    document.getElementById('greeting').innerHTML = 'Greetings from:'
}
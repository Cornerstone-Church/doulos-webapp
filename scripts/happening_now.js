
function checkDay() {

    var noEvent = document.getElementById('no-event-hn');
    var sunday = document.getElementById('sunday-hn');
    var monday = document.getElementById('monday-hn');
    var tuesday = document.getElementById('tuesday-hn');
    var wednesday = document.getElementById('wednesday-hn');
    var thrusday = document.getElementById('thursday-hn');
    var friday = document.getElementById('friday-hn');
    var saturday = document.getElementById('saturday-hn');
    var jsError = document.getElementById('javascript-error');

    // Dissable the error
    try {
        jsError.style.display = 'none';
    } catch (error) {
        console.log('Unable to load the Javascript Error element: ' + error);
    }

    // Try to set an object to inline if it exists. If the object returns null, catch the error
    // and display the noEvent element.
    try {
        if (getDate() == 'sunday') {
            // Enable Date
            sunday.style.display = 'inline';
        } else if (getDate() == 'monday') {
            // Enable Date
            monday.style.display = 'inline';
        } else if (getDate() == 'tuesday') {
            // Enable Date
            tuesday.style.display = 'inline';
        } else if (getDate() == 'wednesday') {
            // Enable Date
            wednesday.style.display = 'inline';
        } else if (getDate() == 'thursday') {
            // Enable Date
            thrusday.style.display = 'inline';
        } else if (getDate() == 'friday') {
            // Enable Date
            friday.style.display = 'inline';
        } else if (getDate() == 'saturday') {
            // Enable Date
            saturday.style.display = 'inline';
        }
    } catch (error) {
        try{
            noEvent.style.display = 'inline';
        } catch (error) {
            alert('Oh no! Something broke. Give this to someone smart: ' + error);
        }
    }

}

function getDate() {
    var date = new Date();
    var weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return weekday[date.getDay()];
}
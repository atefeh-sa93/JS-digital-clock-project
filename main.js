window.onload = function() {

    showClock = () =>{
        let date = new Date();

        let dayOfMonth = date.getDate();


        // Days of week
        let days = date.getDay();
        const weekdays = new Array(7);
        weekdays[0] = "SUN";
        weekdays[1] = "MON";
        weekdays[2] = "TUE";
        weekdays[3] = "WED";
        weekdays[4] = "THR";
        weekdays[5] = "FRI";
        weekdays[6] = "SAT";

        let showDays = weekdays[days];

        // Month of year
        let month = date.getMonth();
        const yearMonth = new Array(12);
        yearMonth[0] = "JAN";
        yearMonth[1] = "FEB";
        yearMonth[2] = "MAR";
        yearMonth[3] = "APR";
        yearMonth[4] = "MAY";
        yearMonth[5] = "JUN";
        yearMonth[6] = "JUL";
        yearMonth[7] = "AUG";
        yearMonth[8] = "SEP";
        yearMonth[9] = "OCT";
        yearMonth[10] = "NOV";
        yearMonth[11] = "DEC";

        let showMonth = yearMonth[month];

        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        
        let ampm = hr < 12 ? 'AM' : 'PM';

        hr = (hr < 10) ? "0" + hr : hr;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

        let time = hr + ':' + min + ':' + sec;

        document.querySelector('.clock-display-days').innerHTML = showDays + ',' + ' ' + showMonth + ' ' + dayOfMonth;
        document.querySelector('.clock-display-time').innerHTML = time + ' ' + ampm ;

        setTimeout(showClock, 1000);
    }


    showClock();
}
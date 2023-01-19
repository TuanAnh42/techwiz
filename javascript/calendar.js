
        function clock() {
            var month =document.getElementById("month");        
            var hour = document.getElementById("hour");
            var minute = document.getElementById("minute");
            var second = document.getElementById("second");
            var hour_today = new Date().getHours();
            var minute_today = new Date().getMinutes();
            var second_today = new Date().getSeconds();
            var month_cal = new Date().toDateString()   
            month.innerHTML = month_cal;
            hour.innerHTML = hour_today;
            minute.innerHTML = minute_today;
            second.innerHTML = second_today;
        }
        var time = setInterval(clock, 1000);


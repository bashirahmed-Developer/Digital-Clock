function Clock(){

      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };

      const pakistanTime =
      new Date().toLocaleTimeString('en-US', options);

      document.getElementById("time").innerHTML = pakistanTime;
    }

    Clock();

    setInterval(Clock,1000);

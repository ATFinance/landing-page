/* Countdown */
class Countdown {
  static init() {
    const countdown = () => {
      const countDate = new Date("May 29, 2021 07:08:00 UTC").getTime();
      const now = new Date().getTime();
      const gap = countDate - now;

      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      const textDay = Math.floor(gap / day),
        textHour = Math.floor((gap % day) / hour),
        textMinute = Math.floor((gap % hour) / minute),
        textSecond = Math.floor((gap % minute) / second);

      document.querySelector(".day").innerText = textDay;
      document.querySelector(".hour").innerText = textHour;
      document.querySelector(".minute").innerText = textMinute;
      document.querySelector(".second").innerText = textSecond;
    };

    setInterval(countdown, 1000);
  }
}

export default Countdown;

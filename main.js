var elements_to_watch = document.querySelectorAll('.watch');
var callback = function (items) {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("in-page");
    } else {
      item.target.classList.remove("in-page");
    }
  });
}
var observer = new IntersectionObserver(callback, { threshold: 0.5 });
elements_to_watch.forEach((element) => {
  observer.observe(element);
});
// tempo 
document.addEventListener("DOMContentLoaded", () => {
  function timeToSeconds(time) {
    const [minutes, seconds] = time.split(':').map(Number);
    return minutes * 60 + seconds;
  }

  const musicItems = document.querySelectorAll(".music-item");

  musicItems.forEach(item => {
    const times = item.querySelectorAll(".time");

    // Verifica che ci siano almeno due tempi (corrente e massimo)
    if (times.length >= 2) {
      const currentTime = timeToSeconds(times[0].innerText); // Tempo corrente
      const maxTime = timeToSeconds(times[1].innerText);     // Tempo totale
      const percentage = (currentTime / maxTime) * 100;      // Percentuale

      // Imposta la larghezza della barra di progresso in base alla percentuale
      const progressBar = item.querySelector(".progress");
      progressBar.style.width = `${percentage}%`;
    }
  });
});



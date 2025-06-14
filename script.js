document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("jingle");
    const toggleBtn = document.getElementById("toggle-audio");
    const playIcon = document.getElementById("play-icon");
    const pauseIcon = document.getElementById("pause-icon");
    const barLeft = document.getElementById("bar-left-fill");
    const barRight = document.getElementById("bar-right-fill");

    toggleBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            toggleBtn.classList.add("playing");
            playIcon.style.display = "none";
            pauseIcon.style.display = "block";
        } else {
            audio.pause();
            toggleBtn.classList.remove("playing");
            playIcon.style.display = "block";
            pauseIcon.style.display = "none";
        }
    });

    audio.addEventListener("timeupdate", () => {
        const percent = audio.currentTime / audio.duration;
        const barHeight = 40 * percent;
        const y = 52 - barHeight;

        barLeft.setAttribute("y", y);
        barRight.setAttribute("y", y);
        barLeft.setAttribute("height", barHeight);
        barRight.setAttribute("height", barHeight);
    });

    audio.addEventListener("ended", () => {
        toggleBtn.classList.remove("playing");
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
        barLeft.setAttribute("y", 52);
        barRight.setAttribute("y", 52);
        barLeft.setAttribute("height", 0);
        barRight.setAttribute("height", 0);
    });

    // Safari-compatible gradient animation
    const gradient = document.getElementById("rainbow-gradient");
    let offset = 100;

    function animateGradient() {
        offset -= 1;
        if (offset < -100) offset = 100;
        gradient.setAttribute("gradientTransform", `translate(${offset} 0)`);
        requestAnimationFrame(animateGradient);
    }

    animateGradient();
});

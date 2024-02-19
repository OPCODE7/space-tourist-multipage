export default function setBackgroundResponsive(target,bg,bgMD,bgLG) {
    if (window.innerWidth < 767) {
        target.classList.add(bg);
        if (target.classList.contains(bgMD)) target.classList.remove(bgMD);
        if (target.classList.contains(bgLG)) target.classList.remove(bgLG);
    }
    if (window.innerWidth >= 767) {
        target.classList.add(bgMD);
        if (target.classList.contains(bg)) target.classList.remove(bg);
        if (target.classList.contains(bgLG)) target.classList.remove(bgLG);
    }
    if (window.innerWidth >= 1024) {
        target.classList.add(bgLG);
        if (target.classList.contains(bg)) target.classList.remove(bg);
        if (target.classList.contains(bgMD)) target.classList.remove(bgMD);
    }
}
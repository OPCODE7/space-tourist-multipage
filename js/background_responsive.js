export default function setBackgroundResponsive(target,bg) {
    if (window.innerWidth < 767) {
        target.classList.add(bg[0]);
        if (target.classList.contains(bg[1])) target.classList.remove(bg[1]);
        if (target.classList.contains(bg[2])) target.classList.remove(bg[2]);
    }
    if (window.innerWidth >= 767) {
        target.classList.add(bg[1]);
        if (target.classList.contains(bg[0])) target.classList.remove(bg[0]);
        if (target.classList.contains(bg[2])) target.classList.remove(bg[2]);
    }
    if (window.innerWidth >= 1024) {
        target.classList.add(bg[2]);
        if (target.classList.contains(bg[0])) target.classList.remove(bg[0]);
        if (target.classList.contains(bg[1])) target.classList.remove(bg[1]);
    }
}
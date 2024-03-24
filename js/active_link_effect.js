export default function navigationEffects(targetActive, nav, effect) {
    targetActive.classList.add(effect);
    nav.forEach(link => {
        if (link.classList.contains(effect) && link !== targetActive) link.classList.remove(effect);
    });
}
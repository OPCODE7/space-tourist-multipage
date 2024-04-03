export default async function includeHtml (el, url){
    try {
        let res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "text/html; charset= utf-8"
            }
        }),
            html = await res.text();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        el.outerHTML = html;

    } catch (err) {
        let message = err.statusText ||
            "Error al cargar el archivo, verifica que estas haciendo la petición por http o https";
        el.outerHTML = `<div><p>Error ${err.status}: ${message}</p></div>`;
    }
}

// document.querySelectorAll("[data-include]").forEach(el => includeHtml(el, el.getAttribute("data-include")));
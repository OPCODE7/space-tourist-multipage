export default async function getData(){
    try {
        let res = await fetch("../assets/data.json"),
            json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        return json;
    } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        return message;
    } 

}
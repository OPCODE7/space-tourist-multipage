import getData from "../js/get_data.js";
import navigationEffects from "../js/active_link_effect.js";

export default function loadDataCrew() {
    const d = document,
        $crewName = d.getElementById("crew-name"),
        $crewRol = d.getElementById("crew-rol"),
        $crewBio = d.getElementById("crew-bio"),
        $imgCrew = d.getElementById("crew-image"),
        $linksCrews = d.querySelectorAll(".link-crew");


    const setData = (index) => {
        getData().then(data => {
            $crewRol.textContent = data.crew[index].role;
            $crewName.textContent = data.crew[index].name;
            $crewBio.textContent = data.crew[index].bio;
            $imgCrew.src = data.crew[index].images.png;
            $imgCrew.alt = data.crew[index].name;
        });
    }

    setData(0);

    d.addEventListener("click", e => {
        if (e.target.matches("#crew-1")) {
            setData(0);
            navigationEffects(e.target, $linksCrews, "is-active-crew");
        }
        if (e.target.matches("#crew-2")) {
            navigationEffects(e.target, $linksCrews, "is-active-crew");
            setData(1);
        }
        if (e.target.matches("#crew-3")) {
            navigationEffects(e.target, $linksCrews, "is-active-crew");
            setData(2);
        }
        if (e.target.matches("#crew-4")) {
            navigationEffects(e.target, $linksCrews, "is-active-crew");
            setData(3);
        }
    });



}
import getData from "../js/get_data.js";
import setBackgroundResponsive from "../js/background_responsive.js";
import navigationEffects from "../js/active_link_effect.js";

const d = document,
    $background = d.querySelector(".bg-technology"),
    $technologyName = d.getElementById("technology-name"),
    $technologyDescription = d.getElementById("tech-description"),
    $imgTechnology = d.getElementById("technology-image"),
    $linksTechnology = d.querySelectorAll(".link-technology");

const setData = (index) => {
    getData().then(data => {
        $technologyName.textContent = data.technology[index].name;
        $technologyDescription.textContent = data.technology[index].description;
        $imgTechnology.src = data.technology[index].images.portrait;
        $imgTechnology.alt = data.technology[index].name;
    });
}

setData(0);

d.addEventListener("click", e => {
    if (e.target.matches("#tech-1")) {
        setData(0);
        navigationEffects(e.target, $linksTechnology, "is-active-tech");
    }
    if (e.target.matches("#tech-2")) {
        navigationEffects(e.target, $linksTechnology, "is-active-tech");
        setData(1);
    }
    if (e.target.matches("#tech-3")) {
        navigationEffects(e.target, $linksTechnology, "is-active-tech");
        setData(2);
    }
});



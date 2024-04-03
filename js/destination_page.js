import getData from "../js/get_data.js";
import navigationEffects from "../js/active_link_effect.js";

export default function loadDataDestination() {
    const d = document,
        $destinationName = d.getElementById("destination-name"),
        $destinationInfo = d.getElementById("destination-info"),
        $avgDistance = d.getElementById("avg-distance"),
        $travelTime = d.getElementById("travel-time"),
        $imgDestination = d.getElementById("destination-image"),
        $linksDestinations = d.querySelectorAll(".link-destination");

    const setData = (index) => {
        getData().then(data => {
            $destinationName.textContent = data.destinations[index].name;
            $destinationInfo.textContent = data.destinations[index].description;
            $avgDistance.textContent = data.destinations[index].distance;
            $travelTime.textContent = data.destinations[index].travel;
            $imgDestination.src = data.destinations[index].images.png;
            $imgDestination.alt = data.destinations[index].name;
        });
    }

    setData(0);

    d.addEventListener("click", e => {
        if (e.target.matches("#moon-destination")) {
            setData(0);
            navigationEffects(e.target, $linksDestinations, "is-active-destination");
        }
        if (e.target.matches("#mars-destination")) {
            navigationEffects(e.target, $linksDestinations, "is-active-destination");
            setData(1);
        }
        if (e.target.matches("#europa-destination")) {
            navigationEffects(e.target, $linksDestinations, "is-active-destination");
            setData(2);
        }
        if (e.target.matches("#titan-destination")) {
            navigationEffects(e.target, $linksDestinations, "is-active-destination");
            setData(3);
        }
    });
}

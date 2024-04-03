import getData from "../js/get_data.js";
import navigationEffects from "../js/active_link_effect.js";

export default class DataDestination {
    constructor(destName, destInfo, avgDistance, travelTime, destImg, links) {
        this.name = destName;
        this.info = destInfo;
        this.avgDistance = avgDistance;
        this.travelTime = travelTime;
        this.image = destImg;
        this.links = links;
    }


    setData(index) {
        getData().then(data => {
            this.name.textContent = data.destinations[index].name;
            this.info.textContent = data.destinations[index].description;
            this.avgDistance.textContent = data.destinations[index].distance;
            this.travelTime.textContent = data.destinations[index].travel;
            this.image.src = data.destinations[index].images.png;
            this.image.alt = data.destinations[index].name;
        });
    }

    loadDataDestination() {
        this.setData(0);

        document.addEventListener("click", e => {
            if (e.target.matches("#moon-destination")) {
                this.setData(0);
                navigationEffects(e.target, this.links, "is-active-destination");
            }
            if (e.target.matches("#mars-destination")) {
                navigationEffects(e.target, this.links, "is-active-destination");
                this.setData(1);
            }
            if (e.target.matches("#europa-destination")) {
                navigationEffects(e.target, this.links, "is-active-destination");
                this.setData(2);
            }
            if (e.target.matches("#titan-destination")) {
                navigationEffects(e.target, this.links, "is-active-destination");
                this.setData(3);
            }
        });
    }
}


import getData from "../js/get_data.js";
import navigationEffects from "../js/active_link_effect.js";

export default class DataCrew {
    constructor(crewName, crewRole, crewBio, imgCrew, links) {
        this.name = crewName;
        this.role = crewRole;
        this.Bio = crewBio;
        this.image = imgCrew;
        this.links = links;

    }

    setData = (index) => {
        getData().then(data => {
            this.role.textContent = data.crew[index].role;
            this.name.textContent = data.crew[index].name;
            this.Bio.textContent = data.crew[index].bio;
            this.image.src = data.crew[index].images.png;
            this.image.alt = data.crew[index].name;
        });
    }
    loadDataCrew() {
        this.setData(0);
        document.addEventListener("click", e => {
            if (e.target.matches("#crew-1")) {
                this.setData(0);
                navigationEffects(e.target, this.links, "is-active-crew");
            }
            if (e.target.matches("#crew-2")) {
                navigationEffects(e.target, this.links, "is-active-crew");
                this.setData(1);
            }
            if (e.target.matches("#crew-3")) {
                navigationEffects(e.target, this.links, "is-active-crew");
                this.setData(2);
            }
            if (e.target.matches("#crew-4")) {
                navigationEffects(e.target, this.links, "is-active-crew");
                this.setData(3);
            }
        });
    }
}
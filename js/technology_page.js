import getData from "../js/get_data.js";
import navigationEffects from "../js/active_link_effect.js";


export default class DataTechnology {
    constructor(techName, techDescription, techImg, links) {
        this.name = techName;
        this.description = techDescription;
        this.image = techImg;
        this.links = links;
    }

    setData = (index) => {
        getData().then(data => {
            this.name.textContent = data.technology[index].name;
            this.description.textContent = data.technology[index].description;
            this.image.src = data.technology[index].images.portrait;
            this.image.alt = data.technology[index].name;
        });
    }


    loadDataTech() {
        this.setData(0);

        document.addEventListener("click", e => {
            if (e.target.matches("#tech-1")) {
                this.setData(0);
                navigationEffects(e.target, this.links, "is-active-tech");
            }
            if (e.target.matches("#tech-2")) {
                navigationEffects(e.target, this.links, "is-active-tech");
                this.setData(1);
            }
            if (e.target.matches("#tech-3")) {
                navigationEffects(e.target, this.links, "is-active-tech");
                this.setData(2);
            }
        });
    }
}



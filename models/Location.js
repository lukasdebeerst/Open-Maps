import { makeObservable, observable, action, configure} from "mobx";

class Location {

    constructor({lat="", lon="", title, osm_id="", active=false}){
        this.title = title;
        this.lat = lat;
        this.lon = lon;
        this.osm_id = osm_id;
        this.localName = undefined;
        this.countryCode = undefined;
        this.type = undefined;
        this.population = undefined;
        this.wikidata = undefined;
        this.wikipedia = undefined;
        this.description = undefined;
        this.active = active;
        // this.getDescription();
        this.getDetails();

        makeObservable(this, {
            description: observable,
            getDescription: action,
        })
    }

    getDescription = () => {
        if(this.localName){
            console.log("getDescription");
            const url = `https://nl.wikipedia.org/w/api.php?action=query&redirects=resolve&format=json&prop=extracts&titles=${this.localName}&exsentences=3&origin=*&piprop=original`
            console.log(this.shortTitle, url);
            try {
                fetch(url)
                .then(res => res.json())
                .then(res => {
                    const key = Object.keys(res.query.pages);
                    console.log(res.query.pages[key[0]].extract);
                    this.description = res.query.pages[key[0]].extract;
                    console.log("description", this.description);
                })
            } catch (err){
                console.error(err);
            }
          
        }
       

    }

    getDetails = () => {

        if(this.osm_id){
            try{
                fetch(`https://nominatim.openstreetmap.org/details.php?osmtype=R&osmid=${this.osm_id}&class=boundary&addressdetails=1&hierarchy=0&group_hierarchy=1&format=json`)
                .then(resDet => resDet.json())
                .then(res => {
                    console.log(res);
                    if(res.country_code){
                        this.countryCode =  res.country_code;
                        this.type = res.extratags.linked_place;
                        this.population = res.extratags.population;
                        this.wikidata = res.extratags.wikidata;
                        this.wikipedia = res.extratags.wikipedia;
                        this.population = res.extratags.population;
                        this.localName = res.localName;
                        this.getDescription();

                    }
                })
            } catch(err){
                console.log(err);
            }
        }

        console.log(this);
    }

}

export default Location;
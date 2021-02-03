// import axios from "axios"
import ADUNJson from "@/assets/json/adun_persons.json"
import MPJson from "@/assets/json/mp_persons.json"

export default {
    namespace: true,
    state() {
        return {
            persons: ADUNJson.concat(MPJson)
        }
    },
    getters: {
        persons(state){
            return state.persons;
        },
        mpPersons(state) {
            return state.persons.filter(
                (person) =>
                    person.federalseatcode != null &&
                    person.stateseatcode == null
            );
        },
        adunPersons(state) {
            return state.persons.filter(
                (person) =>
                    person.federalseatcode != null &&
                    person.stateseatcode != null
            );
        }
    },
    actions: {
    },
    mutations: {
    }
}
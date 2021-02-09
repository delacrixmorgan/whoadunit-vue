import ADUNJson from "@/assets/json/adun_persons.json"
import MPJson from "@/assets/json/mp_persons.json"

export default {
    namespace: true,
    state() {
        return {
            persons: MPJson.concat(ADUNJson)
        }
    },
    getters: {
        persons(state) {
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
        findPersonById(context, payload) {
            const filteredPerson = context.state.persons.filter(
                (person) =>
                    person.id == payload.id
            );
            return filteredPerson[0];
        },
        findPersonBySeat(context, payload) {
            const federalSeatCode = payload.seat.federalseatcode;
            const stateSeatCode = payload.seat.stateseatcode;

            const filteredPerson = context.state.persons.filter(
                (person) =>
                    person.federalseatcode == federalSeatCode &&
                    person.stateseatcode == stateSeatCode
            );
            return filteredPerson[0];
        }
    },
    mutations: {
    }
}
// import axios from "axios"
import ADUNJson from "@/assets/json/adun_seats.json"
import MPJson from "@/assets/json/mp_seats.json"

export default {
    namespace: true,
    state() {
        return {
            mpSeats: MPJson,
            adunSeats: ADUNJson
        }
    },
    getters: {
        mpSeats(state) {
            return state.mpSeats;
        },
        adunSeats(state) {
            return state.adunSeats;
        }
    },
    actions: {
    },
    mutations: {

    }
}
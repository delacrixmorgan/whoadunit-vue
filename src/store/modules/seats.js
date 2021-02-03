// import axios from "axios"
import ADUNJson from "@/assets/json/adun.json"
import MPJson from "@/assets/json/mp.json"

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
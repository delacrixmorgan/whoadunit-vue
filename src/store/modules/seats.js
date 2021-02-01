// import axios from "axios"
import ADUNJson from "@/assets/json/adun.json"
import MPJson from "@/assets/json/mp.json"

export default {
    namespace: true,
    state() {
        return {
            seats: ADUNJson.concat(MPJson)
        }
    },
    getters: {
        seats(state) {
            return state.seats;
        }
    },
    actions: {
    },
    mutations: {

    }
}
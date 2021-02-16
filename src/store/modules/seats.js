import ADUNJson from "@/assets/json/adun_seats.json"
import MPJson from "@/assets/json/mp_seats.json"

export default {
    namespace: true,
    state() {
        return {
            seats: MPJson.concat(ADUNJson)
        }
    },
    getters: {
        mpSeats(state) {
            return state.seats.filter(
                (seat) =>
                    seat.federalseatcode != null &&
                    seat.stateseatcode == null
            );
        },
        adunSeats(state) {
            return state.seats.filter(
                (seat) =>
                    seat.federalseatcode != null &&
                    seat.stateseatcode != null
            );
        }
    },
    actions: {
        findSeatByCode(context, payload) {
            const federalSeatCode = payload.federalSeatCode;
            const stateSeatCode = payload.stateSeatCode;

            const filteredSeat = context.state.seats.filter(
                (seat) => seat.federalseatcode == federalSeatCode &&
                    seat.stateseatcode == stateSeatCode
            );

            return filteredSeat[0];
        }
    },
    mutations: {

    }
}
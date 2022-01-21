import moment from "moment";

const getDayOfWeek = () => {
    return moment().format('dddd');
}

export { getDayOfWeek }
export function validateCity(city) {
    if (city.length > 0) {
        return city.toLowerCase();
    } else {
        return "";
    }
}
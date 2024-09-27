export function extractTime (dateString){
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    // const year = padZero(date.getFullYear())
    // const day = padZero(date.getDay())
    // const month = padZero(date.getMonth())
    return `${hours} : ${minutes} `;

    // Helper function to pad single-digits number with a leading zero
    function padZero(number){
        return number.toString().padStart(2, "0")
    }
}

export function extractDate (dateString){
    const date = new Date(dateString);
    const year = padZero(date.getFullYear())
    const day = padZero(date.getDay())
    const month = padZero(date.getMonth())
    return `${day} - ${month} - ${year} `;

    // Helper function to pad single-digits number with a leading zero
    function padZero(number){
        return number.toString().padStart(2, "0")
    }
}
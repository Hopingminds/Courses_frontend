export function formatDate(dateString) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = `${day} ${months[monthIndex]} ${year}`;
    return formattedDate;
}

export const cropString = (str, num) => {
    // console.log(str);
    var newstr;
    if (str.length > num) {
        if (window.innerWidth > 700) {
            newstr = str.slice(0, num + 10);
        } else {
            newstr = str.slice(0, num + 5);
        }
        // console.log(newstr);
        const result = newstr.concat("...");

        return result;
    } else return str;
};
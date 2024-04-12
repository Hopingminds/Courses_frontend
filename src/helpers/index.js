

export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const collegeRegex = /^[a-zA-Z0-9\s(),:-]+$/;

export const validateCollege = (name) => {
    if (collegeRegex.test(name)) {
        return true;
    } else {
        return false;
    }
}

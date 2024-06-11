function checkPassword(str)
{
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}

const validate = (value, type) => {
    switch(type) {
        case "email":
            if(value.includes("@") && value.includes(".")) {
                return true;
            }
            break;
        case "password":
            return checkPassword(value);
    }
    return false;
}

export { validate }
export const checkValidData = (email, password) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,20}$/.test(password);

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPassword) return "Password is not valid";

    return null;
}
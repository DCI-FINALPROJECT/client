const logout = () => {
    window.open("https://smartshopdcifinal.herokuapp.com/auth/logout", "_self");
    localStorage.removeItem("userToken"); // With this statement if user logout click, userToken will be deleted in localStorage.
  };


module.exports = {logout};
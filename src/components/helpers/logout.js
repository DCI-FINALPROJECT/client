const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
    localStorage.removeItem("userToken"); // With this statement if user logout click, userToken will be deleted in localStorage.
  };


module.exports = {logout};
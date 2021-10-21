function addUser() {
    user_namme = document.getElementById("user_name").ariaValueMax;

    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
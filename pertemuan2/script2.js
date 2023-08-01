loadContent = () => {
    const xhr = new XMLHttpRequest();
    const url = "https://api.github.com/users/vendot";
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("hasil").innerHTML = this.responseText;
        } else {
            document.getElementById("hasil").innerHTML = this.status
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}
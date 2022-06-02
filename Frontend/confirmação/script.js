var exxx = document.getElementById("aaa");
var host = localStorage.getItem("userdata");

exxx.addEventListener("click", () => {
    fetch("http://10.87.207.4:3000/nota/" + host.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            "body": data
        })
        .then(response => { return response.json() })
        .then(data => {
            alert(data + "Excluído com sucesso")
        })
})
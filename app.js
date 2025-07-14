function navigate(page) {
    document.getElementById("main-content").innerHTML = "<h2>" + page + " sayfası</h2>";
    console.log("Navigated to", page);
}
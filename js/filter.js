function filter(filter) {
    if (filter === "all") {
        filter = "filter"
    }
    let elements = document.getElementsByClassName("filter");
    for (let i = 0; i < elements.length; i++){
        if (!elements[i].classList.contains(filter)) {
            elements[i].classList.add("filter-hide");
        } else {
            elements[i].classList.remove("filter-hide");

        }
    }
}

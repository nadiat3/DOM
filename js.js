function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");

    if (filterForm.style.display === "none") {
        filterForm.style.display = "block";
        newForm.style.display = "none";
    } else {
        filterForm.style.display = "none";
    }
}

function showAddNew() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");

    if (newForm.style.display === "none" || newForm.style.display === "") {
        newForm.style.display = "flex";
        filterForm.style.display = "none";
    } else {
        newForm.style.display = "none";
    }
}

function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {
        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
        }
        if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "block" : "none";
        }
        if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "block" : "none";
        }
    });
}

function addNewArticle() {
    const title = document.getElementById("inputHeader").value.trim();
    const text = document.getElementById("inputArticle").value.trim();

    const opinionRadio = document.getElementById("opinionRadio");
    const recipeRadio = document.getElementById("recipeRadio");
    const lifeRadio = document.getElementById("lifeRadio");

    if (title === "" || text === "") return;

    let type = "";
    let label = "";

    if (opinionRadio.checked) {
        type = "opinion";
        label = "Opinion";
    } else if (recipeRadio.checked) {
        type = "recipe";
        label = "Recipe";
    } else if (lifeRadio.checked) {
        type = "update";
        label = "Update";
    } else {
        return;
    }

    const article = document.createElement("article");
    article.classList.add(type);

    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = label;

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const p = document.createElement("p");
    p.textContent = text;

    const linkP = document.createElement("p");
    const link = document.createElement("a");
    link.href = "moreDetails.html";
    link.textContent = "Read more...";
    linkP.appendChild(link);

    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(linkP);

    document.getElementById("articleList").appendChild(article);

    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    opinionRadio.checked = false;
    recipeRadio.checked = false;
    lifeRadio.checked = false;
}

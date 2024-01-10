let tabPastProjectsSkills = ["pJava","pHTML-CSS","pGit","pSQL","pJS","pPHP","pGML","pMA","pAutre"];
let type = "tous";

function pastProjectsSkillsUpdate (e) {
    if (e.checked && !tabPastProjectsSkills.includes(e.id)) {
        tabPastProjectsSkills.push(e.id);
    } else if (!e.checked && tabPastProjectsSkills.includes(e.id)) {
        const i = tabPastProjectsSkills.indexOf(e.id);
        tabPastProjectsSkills.splice(i,1);
    }
    pastProjectsListUpdate();
}

function pastProjectsListUpdate () {
    let selector = ".projectsContainer.pPast .projectContainer";

    let elements = document.querySelectorAll(selector);
    let i = 0;

    elements.forEach(function (e) {
        e.style.display = "none";
    })

    if (type!=="tous") {
        selector += "."+type ;
    }

    elements = document.querySelectorAll(selector);

    tabPastProjectsSkills.forEach(function (skill) {
        elements.forEach( function (e){
            if (e.classList.contains(skill)) {
                e.style.display = "flex";
                i++;
            }
        })
    })

    if (i===0) {
        document.querySelector('div.hidden').removeAttribute("hidden");
    } else {
        document.querySelector('div.hidden').setAttribute("hidden","hidden");
    }
}

document.getElementById("type").addEventListener('change' , function (e) {
    type = e.target.value;
    pastProjectsListUpdate();
})

document.querySelector("form").addEventListener("reset" , reset);

function reset() {
    tabPastProjectsSkills = ["pJava","pHTML-CSS","pGit","pSQL","pJS","pPHP","pGML","pMA","pAutre"];
    type = "tous";
    pastProjectsListUpdate();
}
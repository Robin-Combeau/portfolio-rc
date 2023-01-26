function project_hover(i) {
    let project_id = ("project_".concat(i));
    let project_background = document.getElementById(project_id).getElementsByClassName("project_background")[0];
    //T2C
    i == 1 ? project_background.style.backgroundImage = "url('../images/projects/project_list_background/T2C.png')" : false;
    //Portfolio
    i == 2 ? project_background.style.backgroundImage = "url('../images/projects/project_list_background/Portfolio.png')" : false;
    //Hiphen
    i == 3 ? project_background.style.backgroundImage = "url('../images/projects/project_list_background/hiphen.webp')" : false;
    //Unity
    i == 4 ? project_background.style.backgroundImage = "url('../images/projects/project_list_background/Default.png')" : false;
    project_background.classList.toggle('fade');
}

// ca marche !
console.log(document.getElementById("project_1").getElementsByClassName("project_title")[0].innerHTML);
fetch('./projects/t2c.json')
    // get the JSON data
    .then(response => response.json())
    // use (display) the JSON data
    //.then(data => console.log(data.title))
    .then((data) => {
        //const data = response.data;
        console.log(data.title)
        document.getElementById("project_1").getElementsByClassName("project_title")[0].innerHTML = data.title;
    });

// fetch('./projects/t2c.json')
//     .then(res => res.json())
//     .then((res) => {
//         const data = res.data;
//         document.getElementById("project_1").getElementsByClassName("project_title")[0].innerHTML = data.title;
//         // do the rest here
//     });
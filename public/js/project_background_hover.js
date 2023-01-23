function project_hover(i){
    let project_id = ("project_".concat(i));
    let project_background =  document.getElementById(project_id).getElementsByClassName("project_background")[0];
    //T2C
    i==1 ? project_background.style.backgroundImage = "url('../images/projects/project_list_background/T2C.png')" : false;
    //Portfolio
    i==2 ? project_background.style.backgroundImage = "url('../images/projects/project_list_background/Portfolio.png')" : false;
    //Hiphen
    i==3 ? project_background.style.backgroundImage = "url('../images/projects/project_list_background/hiphen.webp')" : false;
    //Unity
    i==4 ? project_background.style.backgroundImage = "url('../images/projects/project_list_background/Default.png')" : false;
    project_background.classList.toggle('fade');
}
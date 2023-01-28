let project_click = 0;
let scroll_height = 0;
const main = document.getElementById("main");
//const projects = document.getElementById("projects");
const socials = document.getElementById("socials");
//const transition_animation = "visibility 0.4s, opacity 0.4s linear";

function show_project(i) {
    let project_page_id = ("project_page_".concat(i));
    let project_page = document.getElementById(project_page_id);
    let project_go_back = project_page.getElementsByClassName("project_page_go_back")[0];
    
    scroll_height = document.documentElement.scrollTop;
    console.log(scroll_height)
    main.style.transition = transition_animation;
    projects.style.transition = transition_animation;
    socials.style.transition = transition_animation;
    project_page.style.transition = transition_animation;
    
    if (project_click == 0) {
        main.style.opacity = 0;
        projects.style.opacity = 0;
        socials.style.opacity = 0;
        setTimeout(() => {
            project_page.style.display ='grid';
            main.style.display = 'none';
            projects.style.display = 'none';
            socials.style.display = 'none';
        }, 400) 
        setTimeout(() => {
        project_page.style.visibility ='visible';
        project_page.style.opacity = 1;
        project_click = 1;
        }, 450) 
    }
}

function go_back_to_index(i) {
    console.log(scroll_height)
    let project_page_id = ("project_page_".concat(i));
    let project_page = document.getElementById(project_page_id);
    
    main.style.transition = transition_animation;
    projects.style.transition = transition_animation;
    socials.style.transition = transition_animation;
    project_page.style.transition = transition_animation;
    
    if (project_click == 1) {
        project_page.style.opacity = 0;
        project_page.style.visibility = 'hidden';
        setTimeout(() => {
            project_page.style.display = 'none';
            main.style.display = 'grid';
            projects.style.display = 'grid';
            socials.style.display = 'grid';
            window.scrollTo(0, scroll_height);
            main.style.opacity = 1;
            projects.style.opacity = 1;
            socials.style.opacity = 1;
            project_click = 0;
        }, 450)  
    }

}

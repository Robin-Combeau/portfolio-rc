let about_button_click = 0;
const about_button = document.getElementById("about_button");
const main_subtitle = document.getElementById("main_subtitle");
const projects = document.getElementById("projects");
const index_lines = document.getElementById("index_lines");
const about_lines = document.getElementById("about_lines");
const projects_button = document.getElementById("projects_button");
const transition_animation = "visibility 0.4s, opacity 0.4s linear";


function show_about() {
    main_subtitle.style.transition = transition_animation;
    projects.style.transition = transition_animation;
    projects_button.style.transition = transition_animation;
    index_lines.style.transition = transition_animation;
    about_lines.style.transition = transition_animation;
    if (about_button_click == 0) {
        about_button.classList.add("selected_menu");
        main_subtitle.style.opacity = 0;
        projects_button.style.opacity = 0;
        index_lines.style.opacity = 0;
        projects.style.opacity = 0;
        setTimeout(() => {
            projects_button.style.display = 'none';
            index_lines.style.display = 'none';
            projects.style.display = 'none';
            about_button.innerHTML = "Retour"
            main_subtitle.innerHTML = "A propos.";
            main_subtitle.style.opacity = 1;
            about_lines.style.visibility = 'visible';
            about_lines.style.opacity = 1;
            about_button_click = 1;
        }, 450) 
    }
    else {
        about_button.classList.remove("selected_menu");
        about_lines.style.visibility = 'hidden';
        about_lines.style.opacity = 0;
        main_subtitle.style.opacity = 0;
        projects_button.style.display = 'block';
        index_lines.style.display = 'block';
        projects.style.display = 'grid';
        setTimeout(() => {
            main_subtitle.innerHTML = "Dev & Design.";
            about_button.innerHTML = "A propos"
            main_subtitle.style.opacity = 1;
            projects_button.style.opacity = 1;
            index_lines.style.opacity = 1;
            projects.style.opacity = 1;
            about_button_click = 0;
        }, 450)  
    }
}


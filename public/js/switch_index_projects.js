const index = document.getElementById('index');
const projects = document.getElementById('projects');
const transition_screen = document.getElementById('transition_screen');
const projects_hook = document.getElementById('projects_hook');
let switchOver = true;

projects_hook.addEventListener('click', (e) => switchToProjects(e));
const scrollup = index.addEventListener('wheel', (e) => switchToProjects(e));
const scrolldown = projects.addEventListener('wheel', (e) => switchToIndex(e));

function switchToProjects(e) {
    if(((e.deltaY && e.deltaY > 0) || !e.deltaY) && switchOver == true){
        console.log('switchToProjects');
        switchOver = false;
        index.style.zIndex = 0;
        projects.style.zIndex = 2;
        transition_screen.style.transform ="translateY(0%)";
        setTimeout(() => {  
            projects.style.transform ="translateY(0%)";
        }, 250);
        setTimeout(() => {  
            index.style.display = 'none';
            projects.style.display = 'grid';
        }, 5000);
        setTimeout(() => {  
            transition_screen.style.transform ="translateY(-100%)";
            switchOver = true;
            projects.addEventListener('wheel', (e) => switchToIndex(e));
        }, 1000);
    }
}

function switchToIndex(e) {
    if(((e.deltaY && e.deltaY < 0) || !e.deltaY) && switchOver == true){
        switchOver = false;
        console.log('switchToIndex');
        index.style.zIndex = 2;
        projects.style.zIndex = 0;
        transition_screen.style.transform ="translateY(0%)";
        setTimeout(() => {  
            projects.style.transform ="translateY(0%)";
        }, 250);
        setTimeout(() => {  
            index.style.display = 'grid';
            projects.style.display = 'none';
        }, 350);
        setTimeout(() => {  
            transition_screen.style.transform ="translateY(100%)";
            projects.style.transform ="translateY(100%)";
            switchOver = true;
            index.addEventListener('wheel', (e) => switchToProjects(e));
        }, 500);
    }
}


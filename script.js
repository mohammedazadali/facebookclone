var set=document.querySelector('.drop-down');

function setting(){
    set.classList.toggle('drop-down-height');
}

var dark=document.getElementById('dark');

dark.onclick=function (){
    dark.classList.toggle('dark-on');
    document.body.classList.toggle('dark-theme');

    if(localStorage.getItem('theme')=='light'){
        localStorage.setItem('theme','dark');
}
else{
    localStorage.setItem('theme','light');
}
    }

if(localStorage.getItem('theme')=='light'){
    dark.classList.remove('dark-on');
    document.body.classList.remove('dark-theme');
}
else if(localStorage.getItem('theme')=='dark'){
    dark.classList.add('dark-on');
    document.body.classList.add('dark-theme');
}
else{
    localStorage.setItem('theme','light');
}







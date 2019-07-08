function loader() {
    let counter = 0;
    let progresser = 0;
    let count = document.getElementById('count');
    let progress = document.getElementById('progress');
    let loading = setInterval(() => {
        if (counter ==100&&progresser==500) {
            clearInterval(loading)
        } else {
            counter+=1;
            progresser+=5;
            count.innerHTML = counter+'%';
            progress.style.width = progresser+'px';
        }
    }, 50);
}
loader();
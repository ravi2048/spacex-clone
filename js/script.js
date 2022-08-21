
window.onload = function() {
    const btn = document.getElementById('menu-button');
    const overlay = document.getElementById('overlay');
    const side_menu = document.getElementById('mobile-menu');
    if(btn) {
        btn.addEventListener("click", toggleIcon);    
    }

    // document.addEventListener('click', (e) => {
    //     const isClickedInsideElement = side_menu.contains(e.target);
    //     if(!isClickedInsideElement) {
    //         side_menu.classList.toggle('hide-menu');
    //     }
    // })
    function toggleIcon() {
        btn.classList.toggle('open');
        overlay.classList.toggle('overlay-show');
        side_menu.classList.toggle('show-menu');
    }
}

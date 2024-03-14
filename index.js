window.addEventListener('scroll', function() {
    const header = document.getElementsByClassName('sticky_header');
    const bannerPos = this.document.getElementsByClassName('banner_container');
    if (header && bannerPos[0]?.offsetHeight) {
        if (window.scrollY >= bannerPos[0]?.offsetHeight) {
            header[0].style.backgroundColor = '#FFD6D9';
        } else {
            header[0].style.backgroundColor = '#FFF2F3';
        }
    }
});
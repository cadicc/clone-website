window.addEventListener('scroll', function() {
    const header = this.document.getElementsByClassName('sticky_header');
    const bannerPos = this.document.getElementsByClassName('banner_container');
    if (window.scrollY > 82) {
        bannerPos[0].style.paddingTop = '82px';
        header[0].style.position = 'fixed';
        if (header && bannerPos[0]?.offsetHeight) {
            if (window.scrollY >= bannerPos[0]?.offsetHeight) {
                console.log('dcm');
                header[0].style.backgroundColor = '#FFG4D6';
                header[0].style.boxShadow = 'rgba(0, 0, 0, 0.07) 0px 13px 20px 0px;'
            } else {
                header[0].style.backgroundColor = '#FFF2F3';
            }
        }
    } else if (window.scrollY <= 82) {
        bannerPos[0].style.paddingTop = null;
        header[0].style.position = 'sticky';
    }
});

let isOpen;

window.addEventListener('resize', () => {
    const headerHamburger = this.document.getElementsByClassName('header_hamburger');
    const headerOpened = this.document.getElementsByClassName('header_opened')
    
    if (screen.width >= 860) {
        headerOpened[0].style.display = 'none';
        headerHamburger[0].children[0].style.width = null;
        headerHamburger[0].children[0].style.left = null;
        headerHamburger[0].children[1].style.transform = null;
        headerHamburger[0].children[2].style.transform = null;
        headerHamburger[0].children[3].style.width = null;
        headerHamburger[0].children[3].style.left = null;
        window.onscroll = function () { };
        isOpen = false;
    }
})

const handleOpenHeader = () => {
    const headerHamburger = this.document.getElementsByClassName('header_hamburger');
    const headerOpened = this.document.getElementsByClassName('header_opened')

    if (headerHamburger[0].children[1].style.transform?.length === 0 && !isOpen) {
        const bodyHeight = this.document.getElementsByTagName('body')[0]?.offsetHeight;

        headerHamburger[0].children[0].style.width = '0px';
        headerHamburger[0].children[0].style.left = '50%';
        headerHamburger[0].children[1].style.transform = 'rotate(-45deg)';
        headerHamburger[0].children[2].style.transform = 'rotate(45deg)';
        headerHamburger[0].children[3].style.width = '0px';
        headerHamburger[0].children[3].style.left = '50%';
        headerOpened[0].style.display = 'block';
        headerOpened[0].style.height = `${bodyHeight}px`;
        isOpen = true;
    } else {
        headerHamburger[0].children[0].style.width = null;
        headerHamburger[0].children[0].style.left = null;
        headerHamburger[0].children[1].style.transform = null;
        headerHamburger[0].children[2].style.transform = null;
        headerHamburger[0].children[3].style.width = null;
        headerHamburger[0].children[3].style.left = null;
        headerOpened[0].style.display = 'none';
        isOpen = false;
    }

    if (isOpen) {
        const scrollTop = document.documentElement.scrollTop;
        const scrollLeft = document.documentElement.scrollLeft;

        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
    } else {
        window.onscroll = function () { };
    }
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
scrollToTop();
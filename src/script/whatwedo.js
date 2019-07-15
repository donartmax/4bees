import Glide from '@glidejs/glide';

const glideLogos = new Glide('.glide-trust-us', {
    autoplay: 2000,
    type: 'carousel',
    perView: 4,
    breakpoints: {
        800: {
            perView: 2
        },
        480: {
            perView: 1
        }
    }
})

glideLogos.mount()
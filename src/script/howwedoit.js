import Glide from '@glidejs/glide';


const glideTech = new Glide('.glide-technologies', {
    autoplay: 2500,
    type: 'carousel',
    perView: 4,
    focusAt: 'center',
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  })
  
  glideTech.mount()
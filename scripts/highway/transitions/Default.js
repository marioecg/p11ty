import Highway from '@dogstudio/highway'

import gsap from 'gsap'

class DefaultTransition extends Highway.Transition {
  in({ from, to, done }) {
    gsap.timeline().to('.js-mask', {
      duration: 0.35,
      autoAlpha: 0,
      ease: 'linear',
    })

    from.remove()
    done()
  }

  out({ done }) {
    gsap.to('.js-mask', {
      duration: 0.35,
      autoAlpha: 1,
      ease: 'linear',
      onComplete: () => {
        done()
      },
    })
  }
}

export default DefaultTransition

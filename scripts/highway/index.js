import Highway from '@dogstudio/highway'

Highway.initial = false

import { DefaultRenderer } from './renderers'
import { DefaultTransition } from './transitions'

export default new Highway.Core({
  renderers: {
    default: DefaultRenderer,
  },

  transitions: {
    default: DefaultTransition,
  },
})

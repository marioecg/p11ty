import Highway from '@dogstudio/highway'

class DefaultRenderer extends Highway.Renderer {
  constructor(opts) {
    super(opts)
  }

  onEnter() {
    this.el = this.wrap.lastElementChild
  }

  onLeave() {}

  onEnterCompleted() {}

  onLeaveCompleted() {}
}

export default DefaultRenderer

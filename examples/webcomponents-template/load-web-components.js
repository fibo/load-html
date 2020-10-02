import { MyComponentsFactory } from '../my-components.js'

window.addEventListener('load', function () {
  loadHtml(function (nodes) {
    const componentsFactory = new MyComponentsFactory()

    nodes.forEach(node => {
      if (node.getAttribute('error')) {
        return
      }

      node.childNodes.forEach(childNode => {
        if (childNode.tagName != 'TEMPLATE') return

        const id = childNode.id
        const template = childNode.content

        componentsFactory.defineElement({ id, template })
      })
    })
  });
})

// https://g14n.info/load-html
// License: MIT
function loadHtml (callback) {
  var nodes = document.querySelectorAll('load-html:not([loaded])');
  var toBeLoaded = nodes.length;
  nodes.forEach(function (node) {
    try {
      var loader = new XMLHttpRequest();
      loader.addEventListener('load', function loadHtml () {
        if (loader.status == 200) {
          node.innerHTML = loader.responseText;
        }
        node.setAttribute('data-loaded', true);
        toBeLoaded--;

        if (toBeLoaded == 0) {
          if (typeof callback == 'function') {
            callback(nodes)
          }

          loadHtml(callback);
        }
      });
      loader.open('GET', node.getAttribute('src'), true);
      loader.send();
    } catch (error) {
      console.error(error);
      node.setAttribute('data-error', error.message);
      node.setAttribute('data-loaded', true);
    }
  })
}
window.loadHtml = loadHtml;

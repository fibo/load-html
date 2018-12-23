// https://g14n.info/include-html License: MIT
function includeHtml () {
  var nodes = document.querySelectorAll('include-html:not([loaded])');
  var toBeLoaded = nodes.length;
  nodes.forEach(function (node) {
    try {
      var loader = new XMLHttpRequest();
      loader.addEventListener('load', function loadHtml () {
        if (loader.status == 200) {
          node.innerHTML = loader.responseText;
        }
        node.setAttribute('loaded', true);
        toBeLoaded--;
        if (toBeLoaded == 0) {
          includeHtml();
        }
      });
      loader.open('GET', node.getAttribute('src'), true);
      loader.send();
    } catch (e) {
      console.error(e);
      node.setAttribute('error', e);
      node.setAttribute('loaded', true);
    }
  })
}

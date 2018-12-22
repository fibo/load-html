# include-html
include HTML code inside HTML pages using a custom tag `include-html` to load content dynamically

## Usage

Start with your *index.html*

```html
<!doctype html>
<html>
  <head>
  </head>
  <body>
    <include-html src="helloWorld.html">Loading...</include-html>
  </body>
</html>
```

Content inside `<include-html>` custom HTML tag is optional.

Create an *helloWorld.html* file in the same folder, for instance,

```html
<h1>Hello World</h1>
```

## Annotated source

```javascript
function includeHtml () {
  document.querySelectorAll('include-html').forEach(function (node) {
    var src = node.getAttribute('src');
    var loader = new XMLHttpRequest();
    loader.addEventListener('load', function loadHtml () {
      if (loader.status == 200) {
        node.innerHTML = loader.responseText;
      }
    });
    looader.open('GET', src, true);
    loader.setRequestHeader('Content-type', 'text/html; charset=utf-8');
    loader.send();
  })
}
```

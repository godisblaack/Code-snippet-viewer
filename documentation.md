# Code Snippet Viewer Documentation

## HTML Structure

The HTML file `index.html` contains the structure of the web page. Here's a detailed breakdown of the main elements:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Topic's Name - Codes</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark.min.css">
</head>
```

1. The `<!DOCTYPE html>` declaration specifies the HTML version.
2. The `<html>` element with the `lang="en"` attribute sets the language of the page to English.
3. The `<head>` element contains metadata about the page, such as character encoding and viewport settings.
4. The `<title>` element sets the title of the web page, which appears in the browser's title bar or tab.
5. The `<link>` elements include the CSS file `styles.css` and the highlight.js library for syntax highlighting.

```html
<body>
  <header>
    <h1>Topic's Name</h1>
  </header>
```

6. The `<body>` element contains the visible content of the web page.
7. The `<header>` element holds the main heading of the page, which is displayed at the top.

```html
  <div class="container">
    <div class="language-buttons">
      <button class="lang-btn active" onclick="showCode('c')">C</button>
      <button class="lang-btn" onclick="showCode('cpp')">C++</button>
      <button class="lang-btn" onclick="showCode('csharp')">C#</button>
      <button class="lang-btn" onclick="showCode('java')">Java</button>
      <button class="lang-btn" onclick="showCode('python')">Python</button>
      <button class="lang-btn" onclick="showCode('javascript')">JavaScript</button>
    </div>
```

8. The `<div>` with the class `container` holds the main content of the page.
9. Inside the container, there is a `<div>` with the class `language-buttons` that holds the language selection buttons.
10. Each language button is a `<button>` element with the class `lang-btn` and an `onclick` attribute that calls the `showCode()` function with the corresponding language as an argument.
11. The `active` class is initially applied to the C language button to indicate that it is the default selection.

```html
    <div class="code-container" id="codeContainer">
      <div class="code-block-selector" id="code-block-selector" style="display: none;">
        <button class="code-btn active" onclick="showCodeBlock(0)">Approach 1</button>
        <button class="code-btn" onclick="showCodeBlock(1)">Approach 2</button>
        <button class="code-btn" onclick="showCodeBlock(2)">Approach 3</button>
      </div>
```

12. The `<div>` with the class `code-container` holds the code snippet and the "Approach" buttons.
13. Inside the code container, there is a `<div>` with the class `code-block-selector` and `id="code-block-selector"` that holds the "Approach" buttons.
14. The `style="display: none;"` attribute initially hides the code block selector.
15. Each "Approach" button is a `<button>` element with the class `code-btn` and an `onclick` attribute that calls the `showCodeBlock()` function with the corresponding index as an argument.
16. The `active` class is initially applied to the first "Approach" button.

```html
      <pre><code class="language-c" id="code-block-0"></code></pre>
      <pre><code class="language-c" id="code-block-1" style="display: none;"></code></pre>
      <pre><code class="language-c" id="code-block-2" style="display: none;"></code></pre>
```

17. The `<pre><code>` elements hold the actual code snippets for each approach.
18. The `class="language-c"` attribute specifies the language for syntax highlighting.
19. The `id` attributes uniquely identify each code block.
20. The `style="display: none;"` attribute initially hides the second and third code blocks.

```html
      <button class="copy-btn" onclick="copyCode()">Copy</button>
    </div>
  </div>
```

21. The `<button>` element with the class `copy-btn` and `onclick="copyCode()"` allows users to copy the selected code snippet.
22. The code container and language buttons are wrapped inside the main container `<div>`.

```html
  <footer>
    <p>&copy; 2024 Data structures and algorithms All rights reserved.</p>
  </footer>
```

23. The `<footer>` element displays the copyright information at the bottom of the page.

```html
  <script src="script.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      showCode('c');
    });
  </script>
</body>
</html>
```

24. The `<script>` elements include the JavaScript file `script.js` and the highlight.js library.
25. The JavaScript code block at the end of the `<body>` element listens for the `DOMContentLoaded` event, which fires when the initial HTML document has been completely loaded and parsed.
26. When the `DOMContentLoaded` event occurs, the `showCode('c')` function is called to display the C language code snippet and the first approach by default.

## CSS Styling

The CSS file `styles.css` defines the visual appearance of the web page. Here's a detailed breakdown of the main styles:

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #121212;
  color: #ffffff;
}
```

1. The `body` styles set the font family, remove default margins and padding, and define the background and text colors.

```css
header {
  background-color: #1e1e1e;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}
```

2. The `header` styles set the background color, text color, padding, and center the text.
3. A box shadow is added to create a subtle depth effect.
4. Margin-bottom is used to separate the header from the main content.

```css
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
}
```

5. The `.container` class centers the content horizontally and sets a maximum width of 800 pixels.

```css
.language-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.lang-btn {
  background-color: #1e90ff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.lang-btn:hover,
.lang-btn.active {
  background-color: #1473c7;
}
```

6. The `.language-buttons` class styles the language selection buttons container, centering the buttons horizontally and adding some spacing between them.
7. The `.lang-btn` class styles the individual language buttons, including the background color, text color, border, border radius, padding, font size, cursor, and a hover transition effect.
8. The `:hover` and `.active` pseudo-classes change the background color on hover and when a button is active, respectively.

```css
.code-container {
  background-color: #282c34;
  color: #abb2bf;
  font-size: large;
  border-radius: 5px;
  overflow: auto;
  margin-bottom: 20px;
  position: relative;
}

.code-container pre {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  word-break: break-all;
}
```

9. The `.code-container` class styles the code snippet container, including the background color, text color, font size, border radius, and margin-bottom.
10. The `overflow: auto` property adds scrollbars if the content exceeds the container's dimensions.
11. The `position: relative` property is used for positioning the "Copy" button inside the container.
12. The nested `pre` elements inside the code container have no margin, use a monospace font, preserve whitespace, and wrap long lines.

```css
.code-block-selector {
  background-color: #121212;
  padding: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.code-btn {
  background-color: #1e90ff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.code-btn:hover,
.code-btn.active {
  background-color: #1473c7;
}
```

13. The `.code-block-selector` class styles the "Approach" buttons container, including the background color, padding, and rounded corners at the top.
14. The `.code-btn` class styles the individual "Approach" buttons, similar to the language buttons, with a different background color.
15. The `:hover` and `.active` pseudo-classes change the background color on hover and when a button is active, respectively.

```css
.copy-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #1e90ff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.copy-btn:hover {
  background-color: #1473c7;
}
```

16. The `.copy-btn` class styles the "Copy" button, positioning it at the top-right corner of the code container using `position: absolute`.
17. The button has the same styles as the language and "Approach" buttons, with a hover transition effect.

```css
.hljs {
  background-color: #121212 !important;
}
```

18. The `.hljs` class overrides the highlight.js default background color to match the code container's background.

```css
footer {
  background-color: #1e1e1e;
  color: #ffffff;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
}

footer p {
  margin: 0;
}
```

19. The `footer` styles set the background color, text color, center the text, add padding, and position the footer at the bottom of the page using `position: fixed`.
20. The `width: 100%` property ensures that the footer spans the entire width of the page.
21. The nested `p` element inside the footer has no margin.

## JavaScript Functionality

The JavaScript file `script.js` contains the logic to handle user interactions and update the displayed code snippets. Here's a detailed breakdown of the main functions:

```javascript
const codes = {
  c: [
    `#include <stdio.h>

int main() {
  // C code for array
  return 0;
}`,
    `#include <stdio.h>

int main() {
  // C code for array - Approach 2
  return 0;
}`,
    `#include <stdio.h>

int main() {
  // C code for array - Approach 3
  return 0;
}`
  ],
  // ...
};
```

1. The `codes` object holds the code snippets for each programming language and approach.
2. Each language is a key in the object, and its value is an array of code snippets.
3. In this example, the C language has three code snippets, representing different approaches.

```javascript
function showCode(language) {
  const codeBlocks = document.querySelectorAll('.code-container pre code');
  const langBtns = document.querySelectorAll('.lang-btn');
  const codeBtns = document.querySelectorAll('.code-btn');
  const codeBlockSelector = document.getElementById('code-block-selector');

  codeBlocks.forEach((block, i) => {
    block.textContent = codes[language][i] || codes[language][0];
    block.className = `language-${language}`;
    block.style.display = 'none';
  });

  codeBlocks[0].style.display = 'block';
```

4. The `showCode()` function is called when a language button is clicked.
5. It selects all the code blocks, language buttons, "Approach" buttons, and the code block selector.
6. It loops through the code blocks, setting their text content to the corresponding code snippet for the selected language.
7. If multiple approaches are available, it uses the index `i` to select the appropriate code snippet.
8. The `className` property is set to `language-${language}` for syntax highlighting.
9. The `style.display` property is set to `'none'` for all code blocks to hide them initially.
10. Finally, the first code block is shown by setting its `style.display` to `'block'`.

```javascript
  langBtns.forEach(btn => {
    btn.classList.remove('active');
  });

  const activeBtn = document.querySelector(`.lang-btn[onclick="showCode('${language}')"]`);
  activeBtn.classList.add('active');

  codeBtns.forEach((btn, i) => {
    btn.style.display = i < codes[language].length ? 'inline-block' : 'none';
  });

  codeBlockSelector.style.display = codes[language].length > 1 ? 'block' : 'none';
  hljs.highlightAll();
}
```

11. The function then removes the `active` class from all language buttons.
12. It selects the active language button using a CSS selector and adds the `active` class to it.
13. It loops through the "Approach" buttons and sets their `style.display` property based on the number of available approaches for the selected language.
14. If there is only one approach, the "Approach" buttons are hidden.
15. The code block selector's `style.display` property is set to `'block'` if there are multiple approaches, or `'none'` if there is only one approach.
16. Finally, the `hljs.highlightAll()` function is called to highlight the code snippets.

```javascript
function showCodeBlock(index) {
  const codeBlocks = document.querySelectorAll('.code-container pre code');
  const codeBtns = document.querySelectorAll('.code-btn');

  codeBlocks.forEach((block, i) => {
    block.style.display = i === index ? 'block' : 'none';
  });

  codeBtns.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });

  hljs.highlightAll();
}

17. The `showCodeBlock()` function is called when an "Approach" button is clicked.
18. It selects all the code blocks and "Approach" buttons.
19. It loops through the code blocks and sets their `style.display` property to `'block'` if the index matches the selected index, or `'none'` otherwise, effectively showing the selected code block and hiding the others.

```javascript
  codeBtns.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });

  hljs.highlightAll();
}
```

20. It loops through the "Approach" buttons and toggles the `active` class based on the selected index, highlighting the active button.
21. Finally, it calls `hljs.highlightAll()` to re-highlight the code snippets after the display has been updated.

```javascript
function copyCode() {
  const codeBlock = document.querySelector('.code-container pre code:not([style*="none"])');
  const tempInput = document.createElement('textarea');
  tempInput.value = codeBlock.textContent;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  alert('Code copied to clipboard!');
}
```

22. The `copyCode()` function is called when the "Copy" button is clicked.
23. It selects the visible code block using the CSS selector `.code-container pre code:not([style*="none"])`, which finds the `<code>` element that is not hidden by the `style="display: none;"` attribute.
24. It creates a temporary `<textarea>` element and sets its value to the text content of the selected code block.
25. The `<textarea>` is appended to the `<body>`, selected, and copied to the clipboard using the `document.execCommand('copy')` method.
26. After copying, the `<textarea>` is removed from the `<body>`.
27. Finally, an alert is displayed to inform the user that the code has been copied to the clipboard.

```javascript
function getCurrentLanguage() {
  const activeBtn = document.querySelector('.lang-btn.active');
  return activeBtn.getAttribute('onclick').replace("showCode('", "").replace("')", "");
}
```

28. The `getCurrentLanguage()` function is a helper function that retrieves the currently selected language.
29. It selects the active language button using the CSS selector `.lang-btn.active`.
30. It then extracts the language from the `onclick` attribute of the active button by removing the `showCode('` prefix and `)` suffix.

```javascript
document.addEventListener('DOMContentLoaded', () => {
  showCode('c');
});
```

31. Finally, the JavaScript code block at the end of the `<body>` element listens for the `DOMContentLoaded` event, which fires when the initial HTML document has been completely loaded and parsed.
32. When the `DOMContentLoaded` event occurs, the `showCode('c')` function is called to display the C language code snippet and the first approach by default.
# Code Snippet Viewer

This is a web application that allows users to view and copy code snippets for various programming languages. Users can select a language and toggle between different approaches for the same language.

## Features

- Display code snippets for multiple programming languages
- Toggle between different approaches for each language
- Copy the selected code snippet to the clipboard
- Syntax highlighting for the code snippets

## Technologies Used

- HTML
- CSS
- JavaScript
- highlight.js (for syntax highlighting)

## HTML Structure

The HTML file `index.html` contains the structure of the web page. Here's a breakdown of the main elements:

1. **Header**: Displays the title of the web page.
2. **Language Buttons**: Allows users to select a programming language.
3. **Code Container**: Holds the code snippet and the "Approach" buttons.
4. **Code Block Selector**: Displays the "Approach" buttons when multiple approaches are available for a language.
5. **Code Blocks**: Holds the code snippets for each approach.
6. **Copy Button**: Enables users to copy the selected code snippet.
7. **Footer**: Displays the copyright information.

## CSS Styling

The CSS file `styles.css` defines the visual appearance of the web page. It includes styles for:

1. **Body**: Sets the background color and text color.
2. **Header**: Styles the header section.
3. **Container**: Centers the content and sets the maximum width.
4. **Language Buttons**: Styles the language selection buttons.
5. **Code Container**: Styles the code snippet container.
6. **Code Block Selector**: Styles the "Approach" buttons container.
7. **Code Buttons**: Styles the individual "Approach" buttons.
8. **Copy Button**: Styles the "Copy" button.
9. **Syntax Highlighting**: Overrides the highlight.js default background color.
10. **Footer**: Styles the footer section.

## JavaScript Functionality

The JavaScript file `script.js` contains the logic to handle user interactions and update the displayed code snippets. Here's a breakdown of the main functions:

1. **`showCode(language)`**: Displays the code snippets for the selected language and updates the "Approach" buttons based on the available approaches.
2. **`showCodeBlock(index)`**: Displays the selected code block based on the "Approach" button clicked.
3. **`copyCode()`**: Copies the currently visible code snippet to the clipboard.
4. **`getCurrentLanguage()`**: Retrieves the currently selected language.

When the page loads, the `showCode('c')` function is called to display the C language code snippet and the first approach.

## Usage

1. Open the `index.html` file in a web browser.
2. Select a programming language from the language buttons.
3. If multiple approaches are available for the selected language, use the "Approach" buttons to toggle between them.
4. Click the "Copy" button to copy the currently visible code snippet to the clipboard.

## Customization

To customize the code snippets or add new languages, you can modify the `codes` object in the `script.js` file. Each language is represented as a key in the object, and its value is an array of code snippets for each approach.

For example, to add a new language:

```javascript
const codes = {
  // ...
  ruby: [
    `def array
  # Ruby code for array
end`,
    `def array
  # Ruby code for array - Approach 2
end`
  ]
  // ...
};
```

Then, add a new language button in the `index.html` file:

```html
<button class="lang-btn" onclick="showCode('ruby')">Ruby</button>
```

## Conclusion

This code snippet viewer allows users to easily access and copy code snippets for various programming languages. It provides a clean and intuitive interface for toggling between different approaches and copying the desired code snippet.
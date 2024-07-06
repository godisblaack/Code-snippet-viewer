const codes = {
  // Update the key to match the new topic
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
  cpp: [
    `#include <iostream>

int main() {
  // C++ code for array
  return 0;
}`,
    `#include <iostream>

int main() {
  // C++ code for array - Approach 2
  return 0;
}`
  ],
  csharp: [
    `using System;

public class Array {
  public static void Main(string[] args) {
    // C# code for array
  }
}`
  ],
  java: [
    `public class Array {
  public static void main(String[] args) {
    // Java code for array
  }
}`
  ],
  python: [
    `def array():
  # Python code for array
  pass`
  ],
  javascript: [
    `function array() {
  // JavaScript code for array
}`
  ]
  // Add more languages as needed
};

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

function getCurrentLanguage() {
  const activeBtn = document.querySelector('.lang-btn.active');
  return activeBtn.getAttribute('onclick').replace("showCode('", "").replace("')", "");
}

document.addEventListener('DOMContentLoaded', () => {
  showCode('c');
});

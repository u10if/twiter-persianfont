const customFontURL = 'https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/webfonts/Vazirmatn-Medium.woff2';

const styleElement = document.createElement('style');
styleElement.textContent = `
@font-face {
  font-family: 'CustomFont';
  src: url('${customFontURL}') format('woff2');
}

body, p, h1, h2, h3, h4, h5, h6, a, span, input, textarea, button {
  font-family: 'CustomFont', sans-serif !important;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 100;
  font-variation-settings: "wght" 500;
  line-height: 24px;
}
`;

document.head.appendChild(styleElement);

const applyCustomFont = (node) => {
  if (node.nodeType === Node.ELEMENT_NODE) {
    const textElements = node.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6, a, span, input, textarea, button');
    textElements.forEach((element) => {
      element.style.fontFamily = 'CustomFont, sans-serif';
    });
  }
};

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach(applyCustomFont);
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

applyCustomFont(document.body);
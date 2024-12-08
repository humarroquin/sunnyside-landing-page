# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef).

![Design preview for the Single-page design portfolio coding challenge](./preview.jpg)

## Table of contents

- [Overview](#overview)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### Built with

- HTML
- Vanilla CSS
- Vanilla JS
- Desktop-first workflow

### What I learned

I learned about the window.matchMedia method and applied it to remove a class when the screen width is 661px or larger.

```js
const mediaQuery = window.matchMedia('(min-width: 661px)');

function handleMediaQueryChange(e) {
  if (e.matches) {
    navbar.classList.remove('show-menu');
  }
}

mediaQuery.addEventListener('change', handleMediaQueryChange);
```

### Continued development

Look for additional resources to practice and deepen my understanding of this window.matchMedia method.

### Useful resources

- [Window: matchMedia() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) - This MDN documentation helped me better understand how the window.matchMedia method works.

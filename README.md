# Kai Jeng — Software Engineer Portfolio

My personal portfolio, built to share my software engineering experience,
skills, projects and career journey over the past seven years.

**[Visit the portfolio](https://kaijeng613.github.io/)** ·
**[LinkedIn](https://www.linkedin.com/in/wong-kai-jeng/)** ·
**[GitHub](https://github.com/KaiJeng613)**

## About the portfolio

The site brings together my experience across hospitality, enterprise platforms,
financial integrations and self-service systems, alongside my current direction
at Etherscan and interests in blockchain, AI and developer tools.

It is a lightweight static website built with HTML, CSS and vanilla JavaScript.
There is no framework, package installation or build step.

## Features

- **Experience:** compact summaries, searchable by company, technology or industry,
  with hospitality, fintech, enterprise and blockchain category filters.
- **Skills:** engineering, product platform and delivery capabilities.
- **Projects:** selected work and links to explore further.
- **About:** a personal account of my career journey and engineering approach.
- **Direct tab links:** open a section immediately using the `tab` query parameter.
- **Responsive layout:** adapts to desktop and mobile screens.
- **KJ branding:** a transparent SVG favicon and a brief monogram intro animation.
- **Reduced motion support:** skips the intro animation when the visitor requests less motion.
- **Footer links:** contact information, repository source, and repository star and fork badges.
- **Small conveniences:** a scroll-to-top button and an automatically updated copyright year.

## Direct links

| Section | URL |
| --- | --- |
| Experience | [Open Experience](https://kaijeng613.github.io/?tab=experience) |
| Skills | [Open Skills](https://kaijeng613.github.io/?tab=skills) |
| Projects | [Open Projects](https://kaijeng613.github.io/?tab=projects) |
| About | [Open About](https://kaijeng613.github.io/?tab=about) |

A valid `tab` value selects the section and scrolls to the tab navigation after
the page loads. Without a valid value, the site defaults to Experience.

Experience search works together with the selected category. Search terms narrow
the entries and hide unrelated category buttons, while keeping All and the
selected category available. A result count, empty state and Clear filters button
help visitors refine or reset their search.

## Project structure

```text
index.html   Page content, section markup, metadata and footer links
style.css    Layout, colors, responsive styles and animations
script.js    Tab selection, query parameters, filters and scroll behavior
favicon.svg  Transparent KJ monogram with light/dark theme colors
profile.jpg  Profile photograph
README.md    Project overview and maintenance notes
```

## Preview locally

Open `index.html` directly in a browser. To preview with a local web server,
run the following from the repository folder if Python is installed:

```sh
python -m http.server 8000
```

Then visit [localhost:8000](http://localhost:8000/). You can test direct links
locally too, for example [localhost:8000/?tab=about](http://localhost:8000/?tab=about).
Stop the server with `Ctrl+C`.

## Updating the site

- Edit **`index.html`** to update the introduction, experience, skills, projects,
  career narrative and contact links.
- Edit **`style.css`** to adjust the design. Shared colors are defined in `:root`.
- Edit **`script.js`** to change interactions. It loads with `defer` so it runs
  after the HTML has been parsed.
- Replace **`profile.jpg`** to update the photograph.
- Edit **`favicon.svg`** to change the tab icon. When replacing it, update the
  version query in its `index.html` link to help browsers refresh their cached icon.

When adding a tab, give its button a `data-tab` value matching the panel's `id`.
The existing JavaScript uses that relationship for both clicks and direct links.

Before publishing, preview the site at desktop and mobile sizes, check each tab
and experience filter, and test the direct links above.

## Publishing

The portfolio is intended for GitHub Pages at
[kaijeng613.github.io](https://kaijeng613.github.io/).
Keep the static site files together at the repository root. Commit and push
updates to the branch configured as the repository's GitHub Pages publishing
source. Deployment follows the repository's Pages configuration; no local build
command is required for this project.

## External services and inspiration

The footer uses [Shields.io](https://shields.io/) images to display this
repository's GitHub **stars and forks**, rather than totals across my account or
pull request counts. The badges load lazily and may show cached counts. They
depend on Shields.io being available; the repository links remain usable
independently of those images.

The brief monogram intro and repository statistics were inspired by
[Brittany Chiang's portfolio](https://v4.brittanychiang.com/), adapted to this
site's simpler KJ branding and existing design.

## Contact

Reach me through [LinkedIn](https://www.linkedin.com/in/wong-kai-jeng/) or
[email](mailto:kaijengre2@gmail.com).

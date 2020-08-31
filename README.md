<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.robert.seligmann.dev">
    <img alt="Logo" src="https://raw.githubusercontent.com/robsel118/RobertSeligmann/master/src/images/logo.svg" width="80"/>  
  </a>
</p>

<h1 align="center">
  robert.seligmann.dev
</h1>

<p align="center">Third version of <a target="_blank" href="https://robert.seligmann.dev">robert.seligmann.dev</a> built using <a target="_blank" href="https://www.gatsbyjs.org/">Gatsby.js</a>, <a target="_blank" href="https://styled-components.com/">styled-components</a>, and <a target="_blank" href="https://remark.js.org/">remark</a>. Hosted on <a target="_blank" href="https://pages.github.com/">GitHub Pages</a>.</p>

<br/>

<p align="center">
  <a href="https://github.com/robsel118/RobertSeligmann/actions" target="_blank">
    <img src="https://github.com/robsel118/RobertSeligmann/workflows/Github%20Pages/badge.svg" alt="Github Page Status" />
  </a>
</p>

![preview](https://raw.githubusercontent.com/robsel118/RobertSeligmann/master/src/images/preview.png)

## 🔧 Quick start


1. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

2. Install dependencies

   ```sh
   yarn
   ```

3. Start the development server

   ```sh
   yarn develop
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   yarn build
   ```

1. Preview the site as it will appear once deployed

   ```sh
   yarn serve
   ```

## 📝 How to use this repository (Please read)
👉 Feel free to fork and use this repo for your own website, but with the proper attribution. As you know __plagiarism is bad__,  I have spend quite some time on it (and still plan to improve it) and I am quite happy with it, so it would be saddening to see someone else claiming this work as their own work. 

__TL;DR__ => Use it as you will, but please give me proper credit by linking back to robert.seligmann.dev. Thanks!

### Editing Content

All the content in the project can be changed by editing the MD files located in the `content` folder.
   
### Adding New Content

New content can be added by creating a new MD file in the appropriate folder. For example to add a new article:

1. Create a new folder inside `content/articles`
1. Create a new `index.md` file, and add the frontmatter (see below)
1. Add an image to the created folder (from step 1)
1. Reference this image as your `cover` in the frontmatter
1. Write your content below the frontmatter using Markdown (see this [documentation](https://using-remark.gatsbyjs.org/) to see how it is converted to HTML)

**Frontmatter reference:**

```md
---
title: 'New adventure'
slug: '/path' 
bannerImage: './path-to-image.jpg'
bannerTitle: 'Center title displayed inside the image'
bannerSubTitle: 'Center subtitle displayed inside the image'
isBannerDark: true # set a different text color depending on if the background image is dark or not
---

# This markdown text will be converted to an HTML <h1> tag. 
```
Sample files have been created when appropriate, e.g. just duplicate the `index.md.sample` file in the folder, remove the `.sample` extension and edit the file.

### Change your `static` folder

The `static` folder contains static files such as a resume other document you may want to share. These are then accessed via the url: `www.your-website.com/static-file.extension`. Don't forget to change these files, too!

## 🤔 Questions or problems?
If you come across any bugs or if you have any suggestions, please open up an issue on the main repository: [robsel118/RobertSeligman](https://github.com/robsel118/RobertSeligmann/issues). Thanks!

<br/>

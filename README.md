# PROJECT "dc-fe-marcin-berger"
***Recruitment assignment to `DigitalColliers`***

This app is fun page of `Rick &amp; Morty` series

To keep users' favourite characters applied `Web Storage`

<br/><hr/>

# Project install, run
## Project setup
`npm install`

### Compiles and hot-reloads for development
`npm run serve` <br/>
and open `http://localhost:8080/` or `http://192.168.1.32:8080/`

### Compiles and minifies for production
`npm run build`

### Lints and fixes files
`npm run lint`

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<br/><hr/><hr/>

# Copyrights
## Morty favicon
- Artist: Good Stuff No Nonsense (Available for custom work)
- Iconset: Free Space Icons (78 icons)
- License: CC Attribution 4.0
- Commercial usage: Allowed
  https://iconarchive.com/show/free-space-icons-by-goodstuff-no-nonsense/rick-icon.html
  Scaled to obtain size more suitable to favicon with `convert` of 1999-2019 ImageMagick Studio LLC
  
<br/><hr/><hr/><hr/>

# Stack
- Vue.js 3.x
- TS
- GraphQL
- Vuex

Node.js v.12.22.1 LTS

### Changed dependencies to remove high vulnerabilities @ `package-lock.json`
All high vulnerabilities are related to `normalize-url` or `css-what` package. These issues are not solved yet by Vue (https://github.com/vuejs/vue-cli/issues/6523)
It could be manually removed by manual update of package dependencies @ `package-lock.json` (but it is risky if packages would work) by set fixed packages:
```
css-what
"version": "5.0.1",
"resolved": "https://registry.npmjs.org/css-what/-/css-what-5.0.1.tgz",
"integrity": "sha512-FYDTSHb/7KXsWICVsxdmiExPjCfRC4qRFBdVwv7Ax9hMnvMmEjP9RfxTEZ3qPZGmADDn2vAKSo9UcN1jKVYscg=="
```

<br/><hr/>

<br/><hr/>

# App requirements
See file [Recriutment_ask_descr.md](./Recriutment_ask_descr.md)

<br/><hr/>

# Project issues
## TailwindCSS - PostCSS 8 issues with Vue
It was not so easy to install and start running TailwindCSS. There is issue with PostCSS 8 and Vue.

I solved it acc. https://tailwindcss.com/docs/installation#post-css-7-compatibility-build
(but I found it after 2h because Vue CLI recommends website which unfortunately does not solve the issue: https://github.com/postcss/postcss/wiki/PostCSS-8-for-end-users;
Vue should add link to Tailwind website url as stated above)

<br/><hr/>

# Project Development Process
0. Set-up new project with `Vue CLI` `vue create dc-fe-marcin-berger` (including Vue 3.x, Vue CLI, Vuex, TS, ESLint) & start-up app
1. Readme.md, Requirements.md, License
2. Add TailwindCSS, add initial styles, add favicon
3. Fix issues with packages (if possible) created by Vue CLI - removed high vulnerabilities
4. Prepare rough table with data with search/filtration
5. Add `GraphQL` (with welcome data page/view)
6. Add `Web Storage` to keep users's favourite characters (in the future moved to DB with tables/collections users & characters)
7. Style table/page + responsiveness
8. Deploy to `netlify`

### Actual development progress:
p.0-3 DONE! 😁

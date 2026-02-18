
<h1 align="center">
  <br>
  Portfolio Website
  <br>
</h1>

<h4 align="center">A simple two-column portfolio template built with <a href="[https://nextjs.org](https://nextjs.org)" target="_blank">Next.js</a> and <a href="[https://tailwindcss.com](https://tailwindcss.com)" target="_blank">Tailwind CSS</a>.</h4>

<p align="center">
  <a href="https://qosmo.me/">See live</a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#customization">Customization</a> •
  <a href="#license">License</a>
</p>
</div>

## Key Features

* Simple and easy to edit - your version is up and running in minutes.
  - The contents of the page are loaded from a JSON file, which can be modified without editing the source.
* Colors are easily customizable to your taste:
  - There are a few presets, but adding your own palette is easy.
* Mobile ready:
  - Optimized for desktop and mobile devices.
* Easily deployed:
  - Fork the repository on GitHub, edit the details and deploy on your favorite platform (e.g. [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [Cloudflare Pages](https://developers.cloudflare.com/pages/get-started/) or [Vercel](https://vercel.com/docs/deployments)).

## How To Use

To clone and run this site, run the commands below in your terminal:

```bash
# Fork and clone repo
$ git clone https://github.com/USERNAME/qosmo

# Enter directory
$ cd qosmo

# Install dependencies
$ yarn install

# Run the app
$ yarn dev

# Build the app
$ yarn build
```

> **Note**
> After running the dev command the live version of it is available at `localhost:3000`.

## Customization

In order to customize the template to your own needs, please do the following.

1. Edit the title and description of the website in `app/layout.js`.
2. Add your personal details by editing `translations/en.json`
   - You can specify any number of positions in experiences and related skills, education, volunteering and projects.
   - In the About section, multiple paragraphs can be created by creating multiple entries in the array `general:about`.
3. Replace the file `app/favicon.ico` with a favicon of your choice.
4. (Optional) Change the color palette by editing `globals.css`.
5. (Optional) Edit the imprint and privacy statement if it is necessary in the country/territory you live in.

## Stack

This project uses the following open source packages:

- [Next.js 16](https://nextjs.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Heroicons](https://heroicons.com)

## License

GNU GENERAL PUBLIC LICENSE 3.0

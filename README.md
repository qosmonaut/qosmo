
<h1 align="center">
  <br>
  Qosmo Portfolio Website
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
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>
</div>

## Key Features

* Simple and easy to edit - your version is up and running in minutes.
  - All information of the page is loaded from a JSON file, which can be modified without coding knowledge.
* Colors are easily customizable to your taste.
  - There are a few presets, but adding your own color palette is very easy.
* Mobile ready.
  - Optimized for desktop, but looks good on mobile as well.
* Deployed easily:
  - Create a private fork of this repository on your GitHub account, change the details and deploy on your favorite platform.

## How To Use

To clone and run this website, you'll need to paste the following steps in your command line:

```bash
# Clone this repository
$ git clone https://github.com/qosmonaut/qosmo

# Go into the repository
$ cd qosmo

# Install dependencies
$ yarn install

# Run the app
$ yarn dev

# Build the app
$ yarn build
```

> **Note**
> After running the app the live version of it is available at `localhost:3000`.

## Customization

In order to customize the template to your own needs, please do the following.

1. Edit the title and description of the website in the file `app/layout.js`.
2. Add your personal details by editing the file `translations/en.json`
   - You can specify an arbitrary number of positions in experiences (+ their skills), education, voluntering and projects.
   - In the About section, multiple paragraphs can be created by creating multiple entries in the array `General:about`.
3. Replace the file `app/favicon.ico` with a favicon of your choice.
4. (Optional) Change the color palette by editing the file `tailwind.config.js`.
5. (Optional) Edit the imprint and privacy statement if it is necessary in your country.
6. Enjoy!

## Credits

This software uses the following open source packages:

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Heroicons](https://heroicons.com)

## License

GNU GENERAL PUBLIC LICENSE 3.0

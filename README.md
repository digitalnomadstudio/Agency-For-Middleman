# Start Bootstrap Agency for [Middleman](https://middlemanapp.com)  
As far as the layout and function is concerned, this conversion of Start Bootstrap Agency is as close to the original as possible.  
The changes I made:  

 * Extended the intro background image so that it occupies more screen real estate on larger displays (no dead "white space" between sections)
 * Rotating, configurable intro text (via [banner.js](source/js/banner.js)) -- reverting to the original is a simple matter of commenting/uncommenting a couple of lines in [partials/_header.erb](source/partials/_header.erb)

Sections are broken down in to partials (as is the customary way with Middleman, Jekyll, Pelican and [*insert favorite staticgen tool here*]).  
Several sections are configurable in `data`:  

 * Team members (*name, title, image, description*)
 * Services (*service, description, fontawesome icon*)
 * Site details (*site name, heading/title*)



### Portfolio items:  

      ---
      id: 1
      title: Round Icons
      date: 2017-06-01
      image: roundicons.png
      category: Graphic Design
      client: Middleman
      clienturl: https://middlemanapp.com
      ---

      Next level fam before they sold out, readymade shoreditch.  
      Hot chicken williamsburg brunch hammock semiotics.


### Now with more hipster ipsum!  

![Agency for Middleman](screenshots/Agency.png)

Original Start Bootstrap README:  


# [Start Bootstrap](http://startbootstrap.com/) - [Agency](http://startbootstrap.com/template-overviews/agency/)

[Agency](http://startbootstrap.com/template-overviews/agency/) is a one page agency portfolio theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/). This theme features several content sections, a responsive portfolio grid with hover effects, full page portfolio item modals, a responsive timeline, and a working PHP contact form.

## Getting Started

Several options are available to get started quickly:
* [Download the latest release on Start Bootstrap](http://startbootstrap.com/template-overviews/agency/)
* Clone the repo: `git clone https://github.com/BlackrockDigital/startbootstrap-agency.git`
* Fork the repo

## Developing Using Source Files

To use the source files, you will need to have npm installed globally along with Gulp.js. To start:
* Run `npm install` in the root directory
* Run `gulp dev` and edit the files as needed

If you need to update the plugins included with this template, simply run the following tasks:
* First run `npm update` to update the dependencies
* Then run `gulp copy` to copy the new versions to their proper destinations

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/BlackrockDigital/startbootstrap-agency/issues) here on GitHub or leave a comment on the [template overview page at Start Bootstrap](http://startbootstrap.com/template-overviews/agency/).

## Creator

Start Bootstrap was created by and is maintained by **[David Miller](http://davidmiller.io/)**, Owner of [Blackrock Digital](http://blackrockdigital.io/).

* https://twitter.com/davidmillerskt
* https://github.com/davidtmiller

Start Bootstrap is based on the [Bootstrap](http://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2016 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-agency/blob/gh-pages/LICENSE) license.
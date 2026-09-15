# dom-playground

What does it take to make a page react to a click or to the mouse passing by,
with nothing but the browser? Five cards, one interaction each, one script
each, and no JavaScript library.

No build step: open the file and try each card.

## Screenshots

![A white page: a white navigation bar with the brand Terrain de jeu DOM and five links, a large centred title, then four Bootstrap cards in a two by two grid and a fifth, full width, underneath. Changer un texte shows an underlined sentence and, below it, Et voilà ! in bold. Animer une image shows a small drawn terminal window with a command being typed. Colorer au survol shows a white paragraph whose text is blue. Compter les clics shows a blue button reading Tu m'as cliqué 4 fois. The wide card asks Qu'avez-vous pensé de cette page ? above four outlined buttons, the first, Utile, filled in grey, and a blue reply line underneath. A grey footer reads © 2026 - Terrain de jeu DOM - Licence](preview.png)

![The same page on a phone: the navigation collapses behind a toggler, the title stays centred and the cards stack in one column, the first reading Et voilà !](preview-mobile.png)

## How it works

**One script per card, and nothing shared.** `js/texte.js`, `js/image.js`,
`js/couleur.js`, `js/compteur.js` and `js/reactions.js` each grab the elements
they need by id and attach their listeners. Removing a card means removing one
script tag and one file; the others do not notice.

**Every interaction is a listener, never an attribute.** The HTML carries no
`onclick` or `onmouseover`. All wiring happens through `addEventListener`, so
the markup stays pure structure and the behaviour lives in one place.

**The image swap is a source swap.** On `mouseover` the `src` moves from
`images/terminal.svg` to `images/terminal-anime.svg`, and `mouseout` puts it
back. Both icons are hand-drawn SVGs; the animated one carries its own CSS
keyframes, so it animates inside a plain `<img>` with no script of its own.

**The colour change is done by the script, on purpose.** A `:hover` rule would
do it in one line of CSS. Here the paragraph starts black through the
stylesheet and the script sets `style.color` to blue and back, which is the
point of the card: the same effect, driven from JavaScript, on an element that
is not a link.

**The counter keeps its own state.** A single `let clics` next to the button
is the whole memory of the fourth card. Each click increments it and rewrites
the button's text.

**Four buttons, one listener.** The fifth card never attaches anything to a
button. Its single listener sits on the buttons' parent; a click bubbles up to
it, `event.target.closest("button")` names the button that was pressed, and
that button's `data-message` attribute supplies the reply. Adding a fifth
button is one line of HTML and no JavaScript.

## Running it

Open `index.html` in a browser. There is nothing to install.

## Stack

HTML, CSS with Bootstrap 5.1 for the grid and the cards, and vanilla
JavaScript. Five scripts, two SVG icons, no JavaScript library.

## Résumé

Cinq interactions DOM sur une page, sans bibliothèque de script : un clic qui réécrit
un paragraphe, une image qui change de source au survol de la souris, un
paragraphe qui passe du noir au bleu sous la souris sans être un lien, un
bouton qui compte ses propres clics, et une barre de quatre boutons tenue par
un seul écouteur posé sur leur parent, où `event.target` désigne le bouton
pressé et son attribut `data-message` fournit la réponse. Chaque carte est tenue par son propre
script, qui prend ses éléments par leur identifiant et pose ses écouteurs
avec `addEventListener` ; le HTML ne porte aucun attribut d'événement. Le
changement de couleur est fait volontairement par le script et non par une
règle `:hover`, puisque c'est le sujet de la carte. Les deux icônes de
terminal sont des SVG dessinés pour le projet, la version animée portant ses
propres images clés CSS.

## Licence

MIT. See [LICENSE](LICENSE).

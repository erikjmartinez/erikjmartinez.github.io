//document.addEventListener('DOMContentLoaded', init);
window.onload = function init() {
  new TypeIt("#developer", {
    // strings: 'A Full-Stack Developer In The Making.',
    waitUntilVisible: true,
    speed: 180,
    loop: false
  })
    // }).go();
    //new TypeIt('#developer')
    .pause(4200)
    .type("A Full-Stack Developer in the making.")
    // .pause(2000)
    // .delete()
    // .type("Don't believe me?")
    // .pause(2000)
    // .delete()
    // .type("Just keep scrolling.")
    // .pause(500)
    // .type("&#128521;")
    .go();
};

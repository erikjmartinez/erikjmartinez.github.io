//document.addEventListener('DOMContentLoaded', init);
window.onload = function init() {
  new TypeIt('#developer', {
      // strings: 'A Full-Stack Developer In The Making.',
      waitUntilVisible: true,
      speed: 200,
      loop: false
    })
    // }).go();
    //new TypeIt('#developer')
    .type('A Full-Stack Developer In The Making.')
    .pause(2000)
    // .delete()
    // .type('Plus A Little More.')
    // .delete(19)
    .go();
};
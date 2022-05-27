/* globals Hooks, game, Babele */
Hooks.on('init', () => {
    console.log ("INITIALIZING SPANISH TRANSLATION BABELE INIT")
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'pf2-spanish-babele',
            lang: 'es',
            dir: 'compendiums/es'
        });
    }
});

Hooks.once("babele.ready", () => {
    game.pf2e.ConditionManager.initialize();
  //  Babele.get().register({
  //      module: "pf2-spanish-babele",
  //      lang: "es",
  //      dir: "compendiums/es"
  //  });
});

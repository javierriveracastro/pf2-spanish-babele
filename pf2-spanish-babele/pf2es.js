/* globals Hooks, game, Babele */

Hooks.once("babele.ready", () => {
    game.pf2e.ConditionManager.initialize();
    Babele.get().register({
        module: "pf2-spanish-babele",
        lang: "es",
        dir: "compendiums"
    });
});

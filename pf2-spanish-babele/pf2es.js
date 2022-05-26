/* globals Hooks, game */

Hooks.once("babele.ready", () => {
    game.pf2e.ConditionManager.initialize();
});

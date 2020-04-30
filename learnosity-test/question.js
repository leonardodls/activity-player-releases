/*global LearnosityAmd*/
LearnosityAmd.define([], function () {
  'use strict';

  function LeonardoQuestion(init, lrnUtils) {
      this.init = init;
      this.lrnUtils = lrnUtils;
      this.question = init.question;
      this.$el = init.$el;
      this.$el[0].innerHTML = "Learnosity <b>Demo</b>!";

      init.events.trigger('ready');
  }


  return {
      Question: LeonardoQuestion
  };
});

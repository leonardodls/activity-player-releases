/*global LearnosityAmd*/
LearnosityAmd.define([], function () {
  'use strict';

  function LeonardoQuestion(init, lrnUtils) {
      this.init = init;
      this.lrnUtils = lrnUtils;
      this.question = init.question;
      this.$el = init.$el;
      this.$el[0].html("Hello <b>world</b>!");

      init.events.trigger('ready');
  }


  return {
      Question: LeonardoQuestion
  };
});

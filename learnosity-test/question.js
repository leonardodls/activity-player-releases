/*global LearnosityAmd*/
LearnosityAmd.define([], function () {
  'use strict';

  function CustomShorttext(init, lrnUtils) {
      this.init = init;
      this.lrnUtils = lrnUtils;
      this.question = init.question;
      this.$el = init.$el;

      init.events.trigger('ready');
  }


  return {
      Question: CustomShorttext
  };
});

var makeBlinkyDancer = function(top, left, timeBetweenSteps, direction) {

  makeDancer.call(this, top, left, timeBetweenSteps, direction);
  // this.oldStep = makeDancer.prototype.step;
  // this.$node.addClass('standingLeft');
  if (this.facing === 'left') {
    this.$node.addClass('standingLeft');
  } else {
    this.$node.addClass('standingRight');

  }
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
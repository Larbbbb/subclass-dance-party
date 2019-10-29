var makeBouncyDancer = function(top, left, timeBetweenSteps, direction) {

  makeDancer.call(this, top, left, timeBetweenSteps, direction);
  // this.oldStep = makeDancer.prototype.step;
  this.bouncing = false;
  if (this.facing === 'left') {
    this.$node.addClass('bounceLeft');
  } else {
    this.$node.addClass('bounceRight');

  }
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);

makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.bouncing) {
    // debugger;
    this.$node.animate({'top': `${this.top + 20}`}, 'fast');
    // this.setPosition(this.top + 20, this.left);
    this.bouncing = false;
  } else {
    this.$node.animate({'top': `${this.top - 20}`}, 'fast');
    // this.setPosition(this.top - 20, this.left);
    this.bouncing = true;
  }
};
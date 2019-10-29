var makeGrowDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = makeDancer.prototype.step;
  this.color = 'red';
  this.stepCount = 0;
};

makeGrowDancer.prototype = Object.create(makeDancer.prototype);

makeGrowDancer.prototype.constructor = makeGrowDancer;

makeGrowDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.stepCount < 4) {
    this.stepCount++;
    this.$node.css('width', '+=10');
    this.$node.css('height', '+=10');
  } else {
    this.stepCount = 0;
    this.$node.css('width', '0');
    this.$node.css('height', '0');
  }
  if (this.color === 'red') {
    this.$node.css({'borderColor': 'blue'});
    this.color = 'blue';
  } else {
    this.$node.css({'borderColor': 'red'});
    this.color = 'red';
  }
};
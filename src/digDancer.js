var makeDigDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeDigDancer.prototype = Object.create(makeDancer.prototype);
makeDigDancer.prototype.constructor = makeDigDancer;

makeDigDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  
};
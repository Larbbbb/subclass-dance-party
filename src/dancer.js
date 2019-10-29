// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, direction) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.facing = direction;
  this.top = top;
  this.left = left;
  this.linedUp = false;
  this.setPosition(top, left);
  this.step();
  this.$node.mouseenter(function() {
    $(this).addClass('barkDog');
  });
  this.$node.mouseleave(function() {
    $(this).removeClass('barkDog');
  });
  // var dancer = {};

  // use jQuery to create an HTML <span> tag
};


makeDancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.lineUp = function() {
  if ( this.linedUp ) {
    this.$node.animate({'left': `${this.left}`}, 500);
    this.linedUp = false;
  } else {
    this.$node.animate({'left': '50'}, 500);
    this.linedUp = true;
  }
};
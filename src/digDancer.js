var makeDigDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, Math.max(2000, Math.random() * 10000));
  // debugger;
  this.stepCount = Math.floor(Math.random() * Math.floor(10));
  this.digCount = 3;
};

makeDigDancer.prototype = Object.create(makeDancer.prototype);
makeDigDancer.prototype.constructor = makeDigDancer;

makeDigDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.stepCount > 0) {
    let target = {
      top: $('body').height() * (Math.random() * (.6) + 0.4),
      left: $('body').width() * Math.random()
    };

    if (target.left > this.left) {
      this.$node.addClass('sniffRight');
      this.$node.removeClass('sniffLeft digDog');
      this.facing = 'right';
    } else {
      this.$node.addClass('sniffLeft');
      this.$node.removeClass('sniffRight digDog');
      this.facing = 'left';
    }
    if (!this.linedUp) {
      this.$node.animate({'top': `${target.top}`, 'left': `${target.left}`}, 'slow');
    }
    this.stepCount--;
  } else {
    if (this.digCount === 0) {
      this.stepCount = Math.floor(Math.random() * Math.floor(10));
      this.digCount = 3;
    }
    if (this.digCount === 3) {
      this.$node.addClass('digDog');
    }
    this.digCount--;
  }
};
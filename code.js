var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var striker = createSprite(200, 200,20,20);
striker.shapeColor='yellow';

var computerpaddle1 = createSprite(200,60,90,20);
computerpaddle1.shapeColor='white';

var paddle2 = createSprite(200,15,150,25);
paddle2.shapeColor='black';

var playerpaddle1 = createSprite(200,339,90,20);
playerpaddle1.shapeColor='white';

var playerpaddle2 = createSprite(200,385,150,25);
playerpaddle2.shapeColor='black';

var Score=0;
var CompScore=0;
var PlayerScore=0;

function draw() {



 background("green")
 drawSprites();

 for (var x =0; x <=400; x+=30) {
 line(x, 200, x+=5, 200);
}



if (keyDown("space")) {
  striker.velocityX=4;
  striker.velocityY=5;
}
if (keyDown("left")) {
  playerpaddle1.x-=5;
}
if (keyDown("RIGHT_ARROW")) {
  playerpaddle1.x+=5;
}
computerpaddle1.x=striker.x;

striker.bounceOff(computerpaddle1);
striker.bounceOff(playerpaddle1);
 createEdgeSprites();
 striker.bounceOff(topEdge);
 striker.bounceOff(bottomEdge);
 striker.bounceOff(leftEdge);
 striker.bounceOff(rightEdge);

if (striker.isTouching(paddle2)) {
   CompScore=CompScore+1;
 }
 if (striker.isTouching(playerpaddle2)) {
  PlayerScore=PlayerScore+1;
 }
 
if (PlayerScore==5 || CompScore==5)
{
fill("maroon");
textSize(18);
text("Game Over", 170,160);
 
}
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

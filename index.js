function handleStartStep3() {
  const main = document.querySelector("main");
  const parts = document.querySelectorAll(".tree");
  const ornaments = document.querySelectorAll(".ornament");
  document.documentElement.setAttribute("data-steps", "12345");

  parts.forEach((part, i) => {
    part.style.setProperty("--i", i);
  });
  ornaments.forEach((part, i) => {
    part.style.setProperty("--i", i * 3.6 + 12); //maaaagic numbers!
  });

  // Show different steps to get to the tree
  // const steps = document.querySelectorAll('input[type="radio"]');

  // steps.forEach((step) => {
  //   step.addEventListener('click', (e) => {
  //     document.documentElement.setAttribute('data-steps', e.currentTarget.value);
  //   });
  // });

  let step3Interval = setInterval(() => {
    const values = ["1", "12", "123", "1234", "12345"];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    console.log(randomValue);
    document.documentElement.setAttribute("data-steps", randomValue);
  }, 1500);

  setTimeout(() => {
    clearInterval(step3Interval);
    document.documentElement.setAttribute("data-steps", "12345");
    setTimeout(() => {
      handleActive("step4");
      setInterval(createHeart, 100);
      /* Typing */
      const message = `Chúc anh em một mùa Giáng Sinh ấm áp, tràn đầy niềm vui. \nCảm ơn mọi người đã luôn đồng hành và hỗ trợ nhau trong suốt năm vừa qua. \nHãy bình chọn cho nhóm Christmas Love nhé. \nMerry Christmas! 🎄🎁✨`;

      const textEl = document.getElementById("text");
      let i = 0;

      function type() {
        if (i < message.length) {
          textEl.innerHTML += message[i] === "\n" ? "<br>" : message[i];
          i++;
          setTimeout(type, 50);
        }
      }

      type();
    }, 2000);
  }, 12100);

  // Update Playback Rate
  const rate = document.getElementById("rate");

  const updateRate = (e) => {
    if (main.getAnimations) {
      const animation = main.getAnimations()[0];
      if (animation) {
        if (animation.playState === "paused") {
          animation.play();
        }
        animation.playbackRate = parseFloat(1);
      }
    }
  };

  // rate.addEventListener('input', updateRate);
  updateRate();

  // Pink tree

  const pinkMain = document.querySelector(".pink main");
  const pinkParts = document.querySelectorAll(".pinkTree");
  const pinkOrnaments = document.querySelectorAll(".pinkOrnament");

  pinkParts.forEach((part, i) => {
    part.style.setProperty("--i", i);
  });
  pinkOrnaments.forEach((part, i) => {
    part.style.setProperty("--i", i * 3.6 + 12); //maaaagic numbers!
  });

  // Show different steps to get to the tree
  // const steps = document.querySelectorAll('input[type="radio"]');

  // steps.forEach((step) => {
  //   step.addEventListener('click', (e) => {
  //     document.documentElement.setAttribute('data-steps', e.currentTarget.value);
  //   });
  // });

  // setInterval(() => {
  //   const values = ["1", "12", "123", "1234", "12345"];
  //   const randomValue = values[Math.floor(Math.random() * values.length)];

  // console.log(randomValue);
  //   document.documentElement.setAttribute('data-steps', randomValue);
  // }, 1000);

  // Update Playback Rate
  const pinkRate = document.getElementById("pinkRate");

  const updatePinkRate = (e) => {
    if (pinkMain.getAnimations) {
      const animation = pinkMain.getAnimations()[0];
      if (animation) {
        if (animation.playState === "paused") {
          animation.play();
        }
        animation.playbackRate = parseFloat(1);
      }
    }
  };

  // pinkRate.addEventListener('input', updatePinkRate);
  updatePinkRate();
  // End pink tree
}

/* Start Snow */
const canvas = document.getElementById("snow-circle");
const ctx = canvas.getContext("2d");
let w,
  h,
  flakes = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 150; i++) {
  flakes.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 3 + 1,
    d: Math.random() + 1,
  });
}

let angle = 0;
function animate() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.beginPath();
  flakes.forEach((f) => {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    f.y += Math.pow(f.d, 2) + 0.5;
    f.x += Math.sin(angle) * 0.5;
    if (f.y > h) {
      f.y = -5;
      f.x = Math.random() * w;
    }
  });
  ctx.fill();
  angle += 0.01;
  requestAnimationFrame(animate);
}
animate();

/* Start Snow */
const audio = document.getElementById("bgMusic");
audio.muted = false;
audio.volume = 0.3;
audio.play();

/* Start Step 2 */
function init() {
  var svg = document.querySelector(".scene");
  var zoom = false;
  var animationOn = false;

  var viewBoxes = {
    overHouses: {
      x: 43,
      y: 290,
      width: 130,
      height: 67,
    },
    overSnowmen: {
      x: 250,
      y: 325,
      width: 225,
      height: 115,
    },
    overPenguins: {
      x: 634,
      y: 310,
      width: 95,
      height: 140,
    },
    overHanging: {
      x: 774,
      y: 416,
      width: 49,
      height: 38,
    },
    overSkilift: {
      x: 897,
      y: 284,
      width: 217,
      height: 130,
    },
  };

  var skiliftDom = svg.querySelector("#skilift"),
    houses = {
      dom: svg.querySelector("#houses"),
    },
    penguinsDom = svg.querySelectorAll("#penguins > g"),
    babyPenguins = [penguinsDom[2], penguinsDom[3], penguinsDom[4]],
    snowManHat = svg.querySelector("#hatman"),
    handHat = snowManHat.querySelector("#handhat_1_"),
    eyesHat = snowManHat.querySelector("#eyesHatMan"),
    elfMan = svg.querySelector("#elfman"),
    elfButtons = elfMan.querySelectorAll("#elfButtons circle"),
    elfBow = elfMan.querySelectorAll("#bowElf"),
    scarfMan = svg.querySelector("#scarfman"),
    hangingDom = svg.querySelectorAll("#hanging > g"),
    letters = svg.querySelectorAll("#letters path");

  function startScene() {
    TweenMax.set(
      [svg.querySelector("#leftSkiLift"), svg.querySelector("#rightSkiLift")],
      {
        y: -600,
      }
    );
    TweenMax.set(svg.querySelector("#trailSkiLift"), {
      scaleX: 0,
      transformOrigin: "left bottom",
    });
    TweenMax.set(svg.querySelector("#lift"), {
      opacity: 0,
    });
    TweenMax.set(houses.dom, {
      scaleY: 0,
      transformOrigin: "center bottom",
    });
    TweenMax.set(svg.querySelector("#snowPenguins"), {
      y: -600,
      opacity: 0,
    });
    TweenMax.set(svg.querySelector("#penguins"), {
      scale: 0,
      transformOrigin: "10% 50%",
    });
    TweenMax.set(
      [svg.querySelector("#snowManSnow1"), svg.querySelector("#snowManSnow2")],
      {
        y: -600,
        opacity: 0,
      }
    );
    TweenMax.set(snowManHat, {
      rotationZ: -60,
      scale: 0,
      transformOrigin: "center bottom",
    });
    TweenMax.set(elfMan, {
      rotationZ: 60,
      scale: 0,
      transformOrigin: "center bottom",
    });
    TweenMax.set(scarfMan, {
      rotationZ: 90,
      scale: 0,
      transformOrigin: "center bottom",
    });
    TweenMax.set(hangingDom, {
      opacity: 0,
    });

    //Letters intro
    for (var i = 0; i < letters.length; i++) {
      TweenMax.set(letters[i], {
        transformOrigin: "center top",
        rotationZ: Math.random() * 180,
        scale: 0,
      });
    }

    copyAnim();
  }

  function openBox() {
    document.querySelector(".gift").removeEventListener("click", openBox);
    const audio = document.getElementById("bgMusic");
    audio.muted = false;
    audio.volume = 0.3;
    audio.play();
    document.body.style.background =
      "radial-gradient(circle, hsl(343, 100%, 8%), hsl(343, 100%, 14%))";
    TweenMax.set(".hat", {
      transformOrigin: "left bottom",
    });
    TweenMax.to(".hat", 1, {
      rotationZ: -80,
      x: -500,
      opacity: 0,
      ease: Power2.easeIn,
    });
    TweenMax.to(".box", 1, {
      y: 800,
      ease: Power2.easeIn,
    });
    TweenMax.to(".gift", 1, {
      opacity: 0,
      delay: 1,
      onStart: function () {
        startScene();
      },
      onComplete: function () {
        document.querySelector(".gift").classList.add("hidden");
        handleActive("step3");
        handleStartStep3();
      },
    });
  }

  function startAnimations() {
    animationOn = true;

    //Ski Lift
    var skilift = new TimelineMax({
      repeat: -1,
      repeatDelay: 0.5,
    });
    skilift.to(skiliftDom.querySelector("#lift"), 7, {
      x: 145,
      y: -64,
      ease: Power1.easeInOut,
    });
    skilift.to(
      skiliftDom.querySelector("#lift"),
      7,
      {
        x: 0,
        y: 0,
        ease: Power1.easeInOut,
      },
      "+=.5"
    );

    //Ski Lift
    houses.smoke1 = houses.dom.querySelectorAll(
      "#smokes > g:nth-child(5) path"
    );
    houses.smoke2 = houses.dom.querySelectorAll(
      "#smokes > g:nth-child(4) path"
    );
    houses.smoke3 = houses.dom.querySelectorAll(
      "#smokes > g:nth-child(3) path"
    );
    houses.smoke4 = houses.dom.querySelectorAll(
      "#smokes > g:nth-child(2) path"
    );
    houses.smoke5 = houses.dom.querySelectorAll(
      "#smokes > g:nth-child(1) path"
    );
    TweenMax.staggerTo(
      houses.smoke1,
      4,
      {
        y: -11,
        opacity: 0,
        repeat: -1,
        ease: Linear.easeNone,
      },
      0.5
    );
    TweenMax.staggerTo(
      houses.smoke2,
      4,
      {
        y: -13,
        opacity: 0,
        repeat: -1,
        ease: Linear.easeNone,
      },
      0.5
    );
    TweenMax.staggerTo(
      houses.smoke3,
      4,
      {
        y: -9,
        opacity: 0,
        repeat: -1,
        ease: Linear.easeNone,
      },
      0.8
    );
    TweenMax.staggerTo(
      houses.smoke4,
      4,
      {
        y: -14,
        opacity: 0,
        repeat: -1,
        ease: Linear.easeNone,
      },
      1
    );
    TweenMax.staggerTo(
      houses.smoke5,
      7,
      {
        y: -17,
        opacity: 0,
        repeat: -1,
        ease: Linear.easeNone,
      },
      1.3
    );

    //Hanging
    var hanging = new TimelineMax({
      repeat: -1,
    });
    TweenMax.set(hangingDom, {
      transformOrigin: "center top",
    });
    TweenMax.set(hangingDom[0], {
      rotationZ: 10,
    });
    TweenMax.set(hangingDom[1], {
      rotationZ: 5,
    });
    TweenMax.set(hangingDom[2], {
      rotationZ: -13,
    });
    TweenMax.set(hangingDom[3], {
      rotationZ: -8,
    });
    TweenMax.set(hangingDom[4], {
      rotationZ: 15,
    });
    TweenMax.to(hangingDom[0], 3, {
      rotationZ: -10,
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
    });
    TweenMax.to(hangingDom[1], 2, {
      rotationZ: -5,
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
    });
    TweenMax.to(hangingDom[2], 5, {
      rotationZ: 13,
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
    });
    TweenMax.to(hangingDom[3], 4, {
      rotationZ: 8,
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
    });
    TweenMax.to(hangingDom[4], 3, {
      rotationZ: -15,
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
    });

    //Pinguins
    var penguins1 = new TimelineMax({
      repeat: -1,
    });
    penguins1.to(penguinsDom[0], 3, {
      x: 35,
      y: 90,
      ease: Power2.easeIn,
    });
    penguins1.set(penguinsDom[0], {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0,
    });
    penguins1.to(
      penguinsDom[0],
      0.7,
      {
        opacity: 1,
        scale: 1,
      },
      "+=1"
    );

    var penguins2 = new TimelineMax({
      repeat: -1,
      delay: 1,
    });
    penguins2.to(penguinsDom[1], 3, {
      x: 34,
      y: 90,
      ease: Power2.easeIn,
    });
    penguins2.set(penguinsDom[1], {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0,
    });
    penguins2.to(
      penguinsDom[1],
      0.7,
      {
        opacity: 1,
        scale: 1,
      },
      "+=1"
    );

    var penguins3 = new TimelineMax({
      repeat: -1,
    });
    penguins3.staggerTo(
      babyPenguins,
      4,
      {
        x: 39,
        y: 100,
        ease: Power2.easeIn,
      },
      1.1
    );
    penguins3.set(babyPenguins, {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 0,
    });
    penguins3.staggerTo(
      babyPenguins,
      0.7,
      {
        opacity: 1,
        scale: 1,
      },
      0.2
    );
    penguins3.progress(0.5);

    //Snowman hat
    TweenMax.set(handHat, {
      transformOrigin: "70% bottom",
    });
    TweenMax.to(handHat, 3, {
      rotationZ: 20,
      yoyo: true,
      repeat: -1,
      ease: Power1.easeInOut,
    });
    TweenMax.set(eyesHat, {
      transformOrigin: "center center",
    });
    var eyesHatTl = new TimelineMax({
      repeat: -1,
      repeatDelay: 1.5,
    });
    eyesHatTl.to(eyesHat, 0.1, {
      scaleY: 0,
    });
    eyesHatTl.to(eyesHat, 0.1, {
      scaleY: 1,
    });

    //Snowman elf
    var elfButtonsTl = new TimelineMax({
      repeat: -1,
    });
    elfButtonsTl.set(elfButtons[0], {
      fill: "#EE4250",
    });
    elfButtonsTl.set(
      elfButtons[0],
      {
        fill: "#22BC34",
      },
      "+=0.3"
    );
    elfButtonsTl.set(elfButtons[1], {
      fill: "#EE4250",
    });
    elfButtonsTl.set(
      elfButtons[1],
      {
        fill: "#22BC34",
      },
      "+=0.3"
    );
    elfButtonsTl.set(elfButtons[2], {
      fill: "#EE4250",
    });
    elfButtonsTl.set(
      elfButtons[2],
      {
        fill: "#22BC34",
      },
      "+=0.3"
    );

    TweenMax.set(elfBow, {
      transformOrigin: "center center",
    });
    var elfBowTl = new TimelineMax({
      repeat: -1,
      repeatDelay: 0.4,
    });
    elfBowTl.to(elfBow, 0.4, {
      scaleX: 1.6,
    });
    elfBowTl.to(elfBow, 0.8, {
      scaleX: 1,
      ease: Elastic.easeOut,
    });

    TweenMax.set(elfMan.querySelector("#elfLeftArm"), {
      transformOrigin: "right top",
      rotationZ: 55,
    });
    TweenMax.to(elfMan.querySelector("#elfLeftArm"), 1, {
      rotationZ: 100,
      yoyo: true,
      repeat: -1,
      ease: Power1.easeInOut,
    });
    TweenMax.set(elfMan.querySelector("#elfRightArm"), {
      transformOrigin: "left top",
      rotationZ: -60,
    });
    TweenMax.to(elfMan.querySelector("#elfRightArm"), 1, {
      rotationZ: -110,
      yoyo: true,
      repeat: -1,
      ease: Power1.easeInOut,
      delay: -0.21,
    });

    //Snowman scard
    TweenMax.to(scarfMan.querySelector("#pieceScarfMan"), 3, {
      rotationZ: -18,
      yoyo: true,
      repeat: -1,
      ease: Linear.easeNone,
    });

    var scarfManTl = new TimelineMax({
      repeat: -1,
      repeatDelay: 1,
    });
    TweenMax.set(scarfMan, {
      transformOrigin: "center bottom",
    });
    scarfManTl.to(scarfMan, 0.2, {
      scaleY: 0.92,
    });
    scarfManTl.to(scarfMan, 0.6, {
      scaleY: 1.07,
      y: -8,
    });
    scarfManTl.to(scarfMan, 0.4, {
      scaleY: 1,
      y: 0,
      ease: Power1.easeIn,
    });
  }

  //SNOW
  var snow = svg.querySelector("#snow").querySelectorAll("ellipse, path");
  var snows = [[], []];
  for (var i = 0; i < snow.length; i++) {
    rand = Math.floor(Math.random() * 2);
    var offset = snow[i].getBoundingClientRect();
    TweenMax.set(snow[i], {
      y: -(offset.top + offset.width + 100),
    });
    TweenMax.to(snow[i], Math.random() * 50 + 50, {
      y: 920,
      repeat: -1,
      delay: -Math.random() * 100,
    });
  }

  function copyAnim() {
    var appearance = new TimelineMax({
      onComplete: startAnimations,
    }).timeScale(1);
    appearance
      .staggerTo(
        letters,
        3,
        {
          scale: 1,
          rotationZ: 0,
          ease: Elastic.easeOut,
        },
        0.1
      )
      .to(
        houses.dom,
        1,
        {
          scaleY: 1,
          ease: Elastic.easeOut,
        },
        "-=2"
      )
      .to(
        svg.querySelector("#snowManSnow1"),
        1,
        {
          opacity: 1,
          y: 0,
          ease: Power2.easeOut,
        },
        "-=1.7"
      )
      .to(
        svg.querySelector("#snowManSnow2"),
        1,
        {
          opacity: 1,
          y: 0,
          ease: Power2.easeOut,
        },
        "-=1.2"
      )
      .to(
        scarfMan,
        1,
        {
          rotationZ: 0,
          scale: 1,
          ease: Elastic.easeOut,
        },
        "-=0.8"
      )
      .to(
        snowManHat,
        1,
        {
          rotationZ: 0,
          scale: 1,
          ease: Elastic.easeOut,
        },
        "-=0.8"
      )
      .to(
        elfMan,
        1,
        {
          rotationZ: 0,
          scale: 1,
          ease: Elastic.easeOut,
        },
        "-=0.8"
      )
      .to(
        svg.querySelector("#snowPenguins"),
        1,
        {
          opacity: 1,
          y: 0,
          ease: Power2.easeOut,
        },
        "-=.8"
      )
      .to(svg.querySelector("#penguins"), 1, {
        scale: 1,
        ease: Power2.easeOut,
      })
      .to(hangingDom, 0.3, {
        opacity: 1,
      })
      .to(svg.querySelector("#leftSkiLift"), 0.7, {
        y: 0,
        ease: Power1.easeOut,
      })
      .to(svg.querySelector("#rightSkiLift"), 0.7, {
        y: 0,
        ease: Power1.easeOut,
      })
      .to(svg.querySelector("#trailSkiLift"), 0.7, {
        scaleX: 1,
      })
      .to(
        svg.querySelector("#lift"),
        0.3,
        {
          opacity: 1,
        },
        "-=0.7"
      );
  }

  //HOVER EFFECTS
  function enterOverlay(e) {
    if (!zoom && animationOn) {
      svg.style.cursor =
        "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/glass-01.png) 20 20, auto";
      TweenMax.to(e.target, 0.3, {
        opacity: 1,
        ease: Power2.easeOut,
      });
    }
  }

  function leaveOverlay(e, el) {
    if (!el) {
      el = e.target;
    }
    if (!zoom) {
      svg.style.cursor = "auto";
    }
    TweenMax.to(el, 0.5, {
      opacity: 0,
      ease: Power2.easeOut,
    });
  }

  function zoomViewBox(e) {
    if (zoom || !animationOn) {
      return;
    }
    e.stopPropagation();
    var id = this.getAttribute("id");

    TweenMax.to(svg, 2, {
      attr: {
        viewBox:
          viewBoxes[id].x +
          " " +
          viewBoxes[id].y +
          " " +
          viewBoxes[id].width +
          " " +
          viewBoxes[id].height,
      },
      ease: Power3.easeOut,
    });

    zoom = true;
    leaveOverlay(false, this);
    svg.style.cursor =
      "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/cross.png) 20 20, auto";
  }

  function unZoom() {
    zoom = false;
    svg.style.cursor = "auto";
    TweenMax.to(svg, 2, {
      attr: { viewBox: "0 0 1600 900" },
      ease: Power3.easeOut,
    });
  }

  var overlays = svg.querySelectorAll("#overlays > g");
  for (var i = 0; i < overlays.length; i++) {
    overlays[i].addEventListener("mouseenter", enterOverlay);
    overlays[i].addEventListener("mouseleave", leaveOverlay);
    overlays[i].addEventListener("click", zoomViewBox);
  }
  svg.addEventListener("click", unZoom);

  document.querySelector(".gift").addEventListener("click", openBox);
  // document.body.style.background = "radial-gradient(circle, hsl(343, 100%, 8%), hsl(343, 100%, 14%))";
  // document.querySelector(".scene").style.display = "block";
}

//preload images
var glass = new Image();
glass.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/glass-01.png";
var cross = new Image();
cross.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/cross.png";

setTimeout(() => {
  handleActive("step2");
  init();
}, 9500);

/* End Step 2 */

// Step 4

let inter = null;

function createHeart() {
  const heart = document.createElement("img");
  heart.src = "https://pngimg.com/uploads/heart/heart_PNG51335.png";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 5 + 3 + "s ";
  // heart.innerText = "🦄";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// setInterval(createHeart, 100);

//// Pháo hoa

// when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
// not supported in all browsers though and sometimes needs a prefix, so we need a shim
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

// now we will setup our basic variables for the demo
var fireCanvas = document.getElementById("fireCanvas"),
  fireCtx = fireCanvas.getContext("2d"),
  // full screen dimensions
  cw = window.innerWidth,
  ch = window.innerHeight,
  // firework collection
  fireworks = [],
  // particle collection
  particles = [],
  // starting hue
  hue = 120,
  // when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
  limiterTotal = 5,
  limiterTick = 0,
  // this will time the auto launches of fireworks, one launch per 80 loop ticks
  timerTotal = 20,
  timerTick = 0,
  mousedown = false,
  // mouse x coordinate,
  mx,
  // mouse y coordinate
  my;

// set fireCanvas dimensions
fireCanvas.width = cw;
fireCanvas.height = ch;

// now we are going to setup our function placeholders for the entire demo

// get a random number within a range
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// calculate the distance between two points
function calculateDistance(p1x, p1y, p2x, p2y) {
  var xDistance = p1x - p2x,
    yDistance = p1y - p2y;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// create firework
function Firework(sx, sy, tx, ty) {
  // actual coordinates
  this.x = sx;
  this.y = sy;
  // starting coordinates
  this.sx = sx;
  this.sy = sy;
  // target coordinates
  this.tx = tx;
  this.ty = ty;
  // distance from starting point to target
  this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
  this.distanceTraveled = 0;
  // track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
  this.coordinates = [];
  this.coordinateCount = 3;
  // populate initial coordinate collection with the current coordinates
  while (this.coordinateCount--) {
    this.coordinates.push([this.x, this.y]);
  }
  this.angle = Math.atan2(ty - sy, tx - sx);
  this.speed = 2;
  this.acceleration = 1.05;
  this.brightness = random(50, 70);
  // circle target indicator radius
  this.targetRadius = 1;
}

// update firework
Firework.prototype.update = function (index) {
  // remove last item in coordinates array
  this.coordinates.pop();
  // add current coordinates to the start of the array
  this.coordinates.unshift([this.x, this.y]);

  // cycle the circle target indicator radius
  if (this.targetRadius < 8) {
    this.targetRadius += 0.3;
  } else {
    this.targetRadius = 1;
  }

  // speed up the firework
  this.speed *= this.acceleration;

  // get the current velocities based on angle and speed
  var vx = Math.cos(this.angle) * this.speed,
    vy = Math.sin(this.angle) * this.speed;
  // how far will the firework have traveled with velocities applied?
  this.distanceTraveled = calculateDistance(
    this.sx,
    this.sy,
    this.x + vx,
    this.y + vy
  );

  // if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
  if (this.distanceTraveled >= this.distanceToTarget) {
    createParticles(this.tx, this.ty);
    // remove the firework, use the index passed into the update function to determine which to remove
    fireworks.splice(index, 1);
  } else {
    // target not reached, keep traveling
    this.x += vx;
    this.y += vy;
  }
};

// draw firework
Firework.prototype.draw = function () {
  fireCtx.beginPath();
  // move to the last tracked coordinate in the set, then draw a line to the current x and y
  fireCtx.moveTo(
    this.coordinates[this.coordinates.length - 1][0],
    this.coordinates[this.coordinates.length - 1][1]
  );
  fireCtx.lineTo(this.x, this.y);
  fireCtx.strokeStyle = "hsl(" + hue + ", 100%, " + this.brightness + "%)";
  fireCtx.stroke();

  fireCtx.beginPath();
  // draw the target for this firework with a pulsing circle
  fireCtx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
  fireCtx.stroke();
};

// create particle
function Particle(x, y) {
  this.x = x;
  this.y = y;
  // track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
  this.coordinates = [];
  this.coordinateCount = 5;
  while (this.coordinateCount--) {
    this.coordinates.push([this.x, this.y]);
  }
  // set a random angle in all possible directions, in radians
  this.angle = random(0, Math.PI * 2);
  this.speed = random(1, 10);
  // friction will slow the particle down
  this.friction = 0.95;
  // gravity will be applied and pull the particle down
  this.gravity = 1;
  // set the hue to a random number +-50 of the overall hue variable
  this.hue = random(hue - 50, hue + 50);
  this.brightness = random(50, 80);
  this.alpha = 1;
  // set how fast the particle fades out
  this.decay = random(0.015, 0.03);
}

// update particle
Particle.prototype.update = function (index) {
  // remove last item in coordinates array
  this.coordinates.pop();
  // add current coordinates to the start of the array
  this.coordinates.unshift([this.x, this.y]);
  // slow down the particle
  this.speed *= this.friction;
  // apply velocity
  this.x += Math.cos(this.angle) * this.speed;
  this.y += Math.sin(this.angle) * this.speed + this.gravity;
  // fade out the particle
  this.alpha -= this.decay;

  // remove the particle once the alpha is low enough, based on the passed in index
  if (this.alpha <= this.decay) {
    particles.splice(index, 1);
  }
};

// draw particle
Particle.prototype.draw = function () {
  fireCtx.beginPath();
  // move to the last tracked coordinates in the set, then draw a line to the current x and y
  fireCtx.moveTo(
    this.coordinates[this.coordinates.length - 1][0],
    this.coordinates[this.coordinates.length - 1][1]
  );
  fireCtx.lineTo(this.x, this.y);
  fireCtx.strokeStyle =
    "hsla(" +
    this.hue +
    ", 100%, " +
    this.brightness +
    "%, " +
    this.alpha +
    ")";
  fireCtx.stroke();
};

// create particle group/explosion
function createParticles(x, y) {
  // increase the particle count for a bigger explosion, beware of the fireCanvas performance hit with the increased particles though
  var particleCount = 30;
  while (particleCount--) {
    particles.push(new Particle(x, y));
  }
}

// main demo loop
function loop() {
  // this function will run endlessly with requestAnimationFrame
  requestAnimFrame(loop);

  // increase the hue to get different colored fireworks over time
  //hue += 0.5;

  // create random color
  hue = random(0, 360);

  // normally, clearRect() would be used to clear the fireCanvas
  // we want to create a trailing effect though
  // setting the composite operation to destination-out will allow us to clear the fireCanvas at a specific opacity, rather than wiping it entirely
  fireCtx.globalCompositeOperation = "destination-out";
  // decrease the alpha property to create more prominent trails
  fireCtx.fillStyle = "rgba(0, 0, 0, 0.5)";
  fireCtx.fillRect(0, 0, cw, ch);
  // change the composite operation back to our main mode
  // lighter creates bright highlight points as the fireworks and particles overlap each other
  fireCtx.globalCompositeOperation = "lighter";

  // loop over each firework, draw it, update it
  var i = fireworks.length;
  while (i--) {
    fireworks[i].draw();
    fireworks[i].update(i);
  }

  // loop over each particle, draw it, update it
  var i = particles.length;
  while (i--) {
    particles[i].draw();
    particles[i].update(i);
  }

  // launch fireworks automatically to random coordinates, when the mouse isn't down
  if (timerTick >= timerTotal) {
    if (!mousedown) {
      // start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
      fireworks.push(
        new Firework(cw / 2, ch, random(0, cw), random(0, ch / 2))
      );
      timerTick = 0;
    }
  } else {
    timerTick++;
  }

  // limit the rate at which fireworks get launched when mouse is down
  if (limiterTick >= limiterTotal) {
    if (mousedown) {
      // start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
      fireworks.push(new Firework(cw / 2, ch, mx, my));
      limiterTick = 0;
    }
  } else {
    limiterTick++;
  }
}

// mouse event bindings
// update the mouse coordinates on mousemove
fireCanvas.addEventListener("mousemove", function (e) {
  mx = e.pageX - fireCanvas.offsetLeft;
  my = e.pageY - fireCanvas.offsetTop;
});

// toggle mousedown state and prevent fireCanvas from being selected
fireCanvas.addEventListener("mousedown", function (e) {
  e.preventDefault();
  mousedown = true;
});

fireCanvas.addEventListener("mouseup", function (e) {
  e.preventDefault();
  mousedown = false;
});

// once the window loads, we are ready for some fireworks!
window.onload = loop;

// const steps = ['step1', 'step2', 'step3', 'step4'];
// let currentIndex = 0;

// setInterval(() => {
//   // Xoá class active ở tất cả step
//   steps.forEach(id => {
//     document.getElementById(id).classList.remove('active');
//   });

//   // Thêm active vào step hiện tại
//   document.getElementById(steps[currentIndex]).classList.add('active');

//   // Tăng index, quay vòng từ 1 → 4
//   currentIndex = (currentIndex + 1) % steps.length;
// }, 2000);

function handleActive(stepId) {
  const steps = ["step1", "step2", "step3", "step4"];
  steps.forEach((id) => {
    document.getElementById(id).classList.remove("active");
  });
  document.getElementById(stepId).classList.add("active");
}

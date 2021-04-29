const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

const tl = gsap.timeline({ paused: true, reversed: true });

if (window.screen.width >= 1024) {
  tl.to(".cover", 1, {
    width: "60%",
    ease: Power2.easeOut,
    opacity: 0.8,
  })
    .fromTo(
      ".nav-closed",
      0.5,
      {
        width: "20%",
      },
      {
        width: "40%",
      },
      "-= 0.5"
    )
    .fromTo(
      ".menu-icon",
      0.5,
      {
        x: 0,
        color: "white",
      },
      {
        x: 100,
        color: "#136356",
      },
      "-= 0.5"
    )
    .to(
      "nav",
      1,
      {
        height: "100%",
        ease: Power2.easeOut,
      },
      "-= 0.5"
    )
    .fromTo(
      ".nav-open",
      0.5,
      {
        opacity: 0,
        x: 50,
        ease: Power2.easeOut,
      },
      {
        opacity: 1,
        x: 0,
        onComplete: function () {
          navOpen.style.pointerEvents = "auto";
        },
      }
    )
    .fromTo(
      ".cover-date",
      1,
      {
        opacity: 0.7,
        fontSize: "2em",
        left: "10%",
        bottom: "10%",
        ease: Power2.easeOut,
      },
      {
        opacity: 1,
        fontSize: "5em",
        left: "80%",
        bottom: "50%",
        onComplete: function () {
          navOpen.style.pointerEvents = "auto";
        },
      },
      "-= 0.5"
    );
} else {
  tl.to(".cover", 1, {
    width: "60%",
    ease: Power2.easeOut,
    opacity: 0.6,
  })
    .fromTo(
      ".nav-closed",
      0.5,
      {
        width: "20%",
      },
      {
        width: "40%",
      },
      "-= 0.5"
    )
    .fromTo(
      ".menu-icon",
      0.5,
      {
        x: 0,
        color: "white",
      },
      {
        x: 100,
        color: "#136356",
      },
      "-= 0.5"
    )
    .to(
      "nav",
      1,
      {
        height: "100%",
        ease: Power2.easeOut,
      },
      "-= 0.5"
    )
    .fromTo(
      ".nav-open",
      0.5,
      {
        opacity: 0,
        x: 50,
        ease: Power2.easeOut,
      },
      {
        opacity: 1,
        x: 0,
        onComplete: function () {
          navOpen.style.pointerEvents = "auto";
        },
      }
    )
    .fromTo(
      ".cover-date",
      1,
      {
        opacity: 0.7,
        fontSize: "2em",
        left: "10%",
        right: "auto",
        bottom: "10%",
        ease: Power2.easeOut,
      },
      {
        opacity: 1,
        fontSize: "5em",
        left: "auto",
        right: "1rem",
        bottom: "50%",
        onComplete: function () {
          navOpen.style.pointerEvents = "auto";
        },
      },
      "-= 0.5"
    );
}

navButton.addEventListener("click", (e) => {
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  toggleTimeline(tl);
});

function toggleTimeline(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}

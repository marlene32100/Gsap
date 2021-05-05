const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

const tl = gsap.timeline({ paused: true, reversed: true });

if (window.screen.width >= 1024) {
  tl.to(".cover", 1, {
    width: "60%",
    ease: Power2.easeOut,
    opacity: 0.4,
  })
    .to("nav", 0.5, {
      height: "100vh",
    })
    .fromTo(
      ".nav-closed-portfolio",
      0.5,
      {
        width: "20%",
      },
      {
        width: "40%",
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
      ".cover-date-portfolio",
      1,
      {
        color: "transparent",
        opacity: 0.7,
        fontSize: "2em",
        left: "10%",
        ease: Power2.easeOut,
      },
      {
        color: "white",
        opacity: 1,
        fontSize: "5em",
        left: "45%",
        onComplete: function () {
          navOpen.style.pointerEvents = "auto";
        },
      }
    );
} else if (window.screen.width >= 768) {
  {
    tl.to(".cover", 1, {
      width: "60%",
      ease: Power2.easeOut,
      opacity: 0.4,
    })
      .fromTo(
        ".nav-closed-portfolio",
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
          x: 10,
        },
        {
          x: 100,
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
        ".cover-date-portfolio",
        1,
        {
          color: "transparent",
          opacity: 0.7,
          fontSize: "2em",
          left: "10%",
          ease: Power2.easeOut,
        },
        {
          color: "white",
          opacity: 1,
          fontSize: "5em",
          left: "45%",
          onComplete: function () {
            navOpen.style.pointerEvents = "auto";
          },
        }
      );
  }
} else if (window.screen.width >= 378) {
  tl.to(".cover", 1, {
    width: "0%",
    ease: Power2.easeOut,
    opacity: 0,
  })
    .fromTo(
      ".nav-closed-portfolio",
      0.5,
      {
        width: "20%",
      },
      {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      },
      "-= 0.5"
    )
    .fromTo(
      ".menu-icon",
      0.5,
      {
        x: 10,
      },
      {
        x: 100,
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
    .to(".dishes", 0.1, {
      marginBottom: "50%",
    })
    .fromTo(
      ".cover-date-portfolio",
      0.5,
      {
        color: "transparent",
        opacity: 0.7,
        fontSize: "2em",
        left: "10%",
        ease: Power2.easeOut,
      },
      {
        color: "white",
        opacity: 1,
        fontSize: "5em",
        left: "5%",
        onComplete: function () {
          navOpen.style.pointerEvents = "auto";
        },
      }
    )
    .fromTo(
      ".nav-open",
      1,
      {
        opacity: 0,
        x: 50,
        ease: "power3.inOut",
        width: "40%",
      },
      {
        opacity: 1,
        x: 0,
        width: "100%",
        onComplete: function () {
          navOpen.style.pointerEvents = "auto";
        },
      }
    )
    .to(
      ".nav-images",
      0.1,
      {
        opacity: 0,
        display: "none",
      },
      "-= 0.5"
    );
} else {
  tl.to(".cover", 1, {
    width: "0%",
    ease: Power2.easeOut,
    opacity: 0,
  })
    .fromTo(
      ".nav-closed-portfolio",
      0.5,
      {
        width: "20%",
      },
      {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      },
      "-= 0.5"
    )
    .fromTo(
      ".menu-icon",
      0.5,
      {
        x: 10,
      },
      {
        x: 100,
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
    .to(".dishes", 0.1, {
      marginBottom: "100%",
    })
    .fromTo(
      ".cover-date-portfolio",
      0.5,
      {
        color: "transparent",
        opacity: 0.7,
        fontSize: "2em",
        left: "10%",
        ease: Power2.easeOut,
      },
      {
        color: "white",
        opacity: 1,
        fontSize: "5em",
        left: "5%",
        onComplete: function () {
          navOpen.style.pointerEvents = "auto";
        },
      }
    )
    .fromTo(
      ".nav-open",
      1,
      {
        opacity: 0,
        x: 50,
        ease: "power3.inOut",
        width: "40%",
      },
      {
        opacity: 1,
        x: 0,
        width: "100%",
        onComplete: function () {
          navOpen.style.pointerEvents = "auto";
        },
      }
    )
    .to(
      ".nav-images",
      0.1,
      {
        opacity: 0,
        display: "none",
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

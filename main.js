document.addEventListener("DOMContentLoaded", (event) => {
  const elementToChange = document.getElementById("loginPopUp");
  const toggleButton = document.getElementById("logBtn");
  const exitButton = document.getElementById("extBtn");

  toggleButton.addEventListener("click", function () {
    if (elementToChange.style.display === "none" || elementToChange.style.display === "") {
      elementToChange.style.display = "block"; // Show the element
    } else {
      elementToChange.style.display = "none"; // Hide the element
    }
  });

  exitButton.addEventListener("click", function () {
    if (elementToChange.style.display === "block") {
      elementToChange.style.display = "none"; // Hide the element
    } else {
      elementToChange.style.display = "block"; // Show the element
    }
  });


  //GIC pop up
  const elementToChangeG = document.getElementById("GICpopUp");
  const toggleButtonG = document.getElementById("GICbtn");
  const toggleButtonGG = document.getElementById("GICbtnG");
  const exitButtonG = document.getElementById("extBtnG")

  toggleButtonG.addEventListener("click", function () {
    if (elementToChangeG.style.display === "none" || elementToChangeG.style.display === "") {
      elementToChangeG.style.display = "block"; // Show the element
    } else {
      elementToChangeG.style.display = "none"; // Hide the element
    }
  });

  toggleButtonGG.addEventListener("click", function () {
    if (elementToChangeG.style.display === "none" || elementToChangeG.style.display === "") {
      elementToChangeG.style.display = "block"; // Show the element
    } else {
      elementToChangeG.style.display = "none"; // Hide the element
    }
  });

  exitButtonG.addEventListener("click", function () {
    if (elementToChangeG.style.display === "block") {
      elementToChangeG.style.display = "none"; // Hide the element
    } else {
      elementToChangeG.style.display = "block"; // Show the element
    }
  });


  // scroll animation with intersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));




  //location animations 1
  const elementToChangeA = document.getElementById("imgHidA");
  const toggleButtonA = document.getElementById("imgBtnA");
  const exitButtonA = document.getElementById("extBtnA")

  toggleButtonA.addEventListener("click", function () {
    if (elementToChangeA.style.display === "none") {
      elementToChangeA.style.display = "grid"; // Show the element
    } else {
      elementToChangeA.style.display = "none"; // Hide the element
    }
  });

  exitButtonA.addEventListener("click", function () {
    if (elementToChangeA.style.display === "grid") {
      elementToChangeA.style.display = "none"; // Hide the element
    } else {
      elementToChangeA.style.display = "grid"; // Show the element
    }
  });


  //location animations 2
  const elementToChangeB = document.getElementById("imgHidB");
  const toggleButtonB = document.getElementById("imgBtnB");
  const exitButtonB = document.getElementById("extBtnB")

  toggleButtonB.addEventListener("click", function () {
    if (elementToChangeB.style.display === "none") {
      elementToChangeB.style.display = "grid"; // Show the element
    } else {
      elementToChangeB.style.display = "none"; // Hide the element
    }
  });

  exitButtonB.addEventListener("click", function () {
    if (elementToChangeB.style.display === "grid") {
      elementToChangeB.style.display = "none"; // Hide the element
    } else {
      elementToChangeB.style.display = "grid"; // Show the element
    }
  });


  //location animations 3
  const elementToChangeC = document.getElementById("imgHidC");
  const toggleButtonC = document.getElementById("imgBtnC");
  const exitButtonC = document.getElementById("extBtnC")

  toggleButtonC.addEventListener("click", function () {
    if (elementToChangeC.style.display === "none") {
      elementToChangeC.style.display = "grid"; // Show the element
    } else {
      elementToChangeC.style.display = "none"; // Hide the element
    }
  });

  exitButtonC.addEventListener("click", function () {
    if (elementToChangeC.style.display === "grid") {
      elementToChangeC.style.display = "none"; // Hide the element
    } else {
      elementToChangeC.style.display = "grid"; // Show the element
    }
  });


  //location animations 4
  const elementToChangeD = document.getElementById("imgHidD");
  const toggleButtonD = document.getElementById("imgBtnD");
  const exitButtonD = document.getElementById("extBtnD")

  toggleButtonD.addEventListener("click", function () {
    if (elementToChangeD.style.display === "none") {
      elementToChangeD.style.display = "grid"; // Show the element
    } else {
      elementToChangeD.style.display = "none"; // Hide the element
    }
  });

  exitButtonD.addEventListener("click", function () {
    if (elementToChangeD.style.display === "grid") {
      elementToChangeD.style.display = "none"; // Hide the element
    } else {
      elementToChangeD.style.display = "grid"; // Show the element
    }
  });
});

// const elementToChange = document.getElementById("loginPopUp");
// const toggleButton = document.getElementById("logBtn");
// const exitButton = document.getElementById("extBtn");

// toggleButton.addEventListener("click", function () {
//   if (elementToChange.style.display === "none" || elementToChange.style.display === "") {
//     elementToChange.style.display = "block"; // Show the element
//   } else {
//     elementToChange.style.display = "none"; // Hide the element
//   }
// });

// exitButton.addEventListener("click", function () {
//   if (elementToChange.style.display === "block") {
//     elementToChange.style.display = "none"; // Hide the element
//   } else {
//     elementToChange.style.display = "block"; // Show the element
//   }
// });


// //GIC pop up
// const elementToChangeG = document.getElementById("GICpopUp");
// const toggleButtonG = document.getElementById("GICbtn");
// const toggleButtonGG = document.getElementById("GICbtnG");
// const exitButtonG = document.getElementById("extBtnG")

// toggleButtonG.addEventListener("click", function () {
//   if (elementToChangeG.style.display === "none" || elementToChangeG.style.display === "") {
//     elementToChangeG.style.display = "block"; // Show the element
//   } else {
//     elementToChangeG.style.display = "none"; // Hide the element
//   }
// });

// toggleButtonGG.addEventListener("click", function () {
//   if (elementToChangeG.style.display === "none" || elementToChangeG.style.display === "") {
//     elementToChangeG.style.display = "block"; // Show the element
//   } else {
//     elementToChangeG.style.display = "none"; // Hide the element
//   }
// });

// exitButtonG.addEventListener("click", function () {
//   if (elementToChangeG.style.display === "block") {
//     elementToChangeG.style.display = "none"; // Hide the element
//   } else {
//     elementToChangeG.style.display = "block"; // Show the element
//   }
// });


// // scroll animation with intersectionObserver
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     } else {
//       entry.target.classList.remove('show');
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));




// //location animations 1
// const elementToChangeA = document.getElementById("imgHidA");
// const toggleButtonA = document.getElementById("imgBtnA");
// const exitButtonA = document.getElementById("extBtnA")

// toggleButtonA.addEventListener("click", function () {
//   if (elementToChangeA.style.display === "none") {
//     elementToChangeA.style.display = "grid"; // Show the element
//   } else {
//     elementToChangeA.style.display = "none"; // Hide the element
//   }
// });

// exitButtonA.addEventListener("click", function () {
//   if (elementToChangeA.style.display === "grid") {
//     elementToChangeA.style.display = "none"; // Hide the element
//   } else {
//     elementToChangeA.style.display = "grid"; // Show the element
//   }
// });


// //location animations 2
// const elementToChangeB = document.getElementById("imgHidB");
// const toggleButtonB = document.getElementById("imgBtnB");
// const exitButtonB = document.getElementById("extBtnB")

// toggleButtonB.addEventListener("click", function () {
//   if (elementToChangeB.style.display === "none") {
//     elementToChangeB.style.display = "grid"; // Show the element
//   } else {
//     elementToChangeB.style.display = "none"; // Hide the element
//   }
// });

// exitButtonB.addEventListener("click", function () {
//   if (elementToChangeB.style.display === "grid") {
//     elementToChangeB.style.display = "none"; // Hide the element
//   } else {
//     elementToChangeB.style.display = "grid"; // Show the element
//   }
// });


// //location animations 3
// const elementToChangeC = document.getElementById("imgHidC");
// const toggleButtonC = document.getElementById("imgBtnC");
// const exitButtonC = document.getElementById("extBtnC")

// toggleButtonC.addEventListener("click", function () {
//   if (elementToChangeC.style.display === "none") {
//     elementToChangeC.style.display = "grid"; // Show the element
//   } else {
//     elementToChangeC.style.display = "none"; // Hide the element
//   }
// });

// exitButtonC.addEventListener("click", function () {
//   if (elementToChangeC.style.display === "grid") {
//     elementToChangeC.style.display = "none"; // Hide the element
//   } else {
//     elementToChangeC.style.display = "grid"; // Show the element
//   }
// });


// //location animations 4
// const elementToChangeD = document.getElementById("imgHidD");
// const toggleButtonD = document.getElementById("imgBtnD");
// const exitButtonD = document.getElementById("extBtnD")

// toggleButtonD.addEventListener("click", function () {
//   if (elementToChangeD.style.display === "none") {
//     elementToChangeD.style.display = "grid"; // Show the element
//   } else {
//     elementToChangeD.style.display = "none"; // Hide the element
//   }
// });

// exitButtonD.addEventListener("click", function () {
//   if (elementToChangeD.style.display === "grid") {
//     elementToChangeD.style.display = "none"; // Hide the element
//   } else {
//     elementToChangeD.style.display = "grid"; // Show the element
//   }
// });
/* =========================================
   YATHRAGO GERMANY
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   YOUR REGISTRATION FORM
========================================= */

const FORM_URL =
  "https://forms.cloud.microsoft/r/U9EHR7jcQT";


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

  });


  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

      navMenu.classList.remove("open");

    });

  });

}


/* =========================================
   PRIVACY / TERMS MODALS
========================================= */

function openModal(id) {

  const modal = document.getElementById(id);

  if (modal) {

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

  }

}


function closeModal(id) {

  const modal = document.getElementById(id);

  if (modal) {

    modal.classList.remove("active");

    document.body.style.overflow = "";

  }

}


/* Close when clicking outside */

document.querySelectorAll(".modal").forEach(function(modal) {

  modal.addEventListener("click", function(event) {

    if (event.target === modal) {

      closeModal(modal.id);

    }

  });

});


/* Close with ESC */

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {

    document
      .querySelectorAll(".modal.active")
      .forEach(function(modal) {

        closeModal(modal.id);

      });

  }

});


/* =========================================
   REGISTRATION AGREEMENT
========================================= */

const privacyCheck =
  document.getElementById("privacyCheck");

const termsCheck =
  document.getElementById("termsCheck");

const registerBtn =
  document.getElementById("registerBtn");


function updateRegisterButton() {

  if (!privacyCheck || !termsCheck || !registerBtn) {
    return;
  }


  if (
    privacyCheck.checked &&
    termsCheck.checked
  ) {

    registerBtn.disabled = false;

  } else {

    registerBtn.disabled = true;

  }

}


if (privacyCheck) {

  privacyCheck.addEventListener(
    "change",
    updateRegisterButton
  );

}


if (termsCheck) {

  termsCheck.addEventListener(
    "change",
    updateRegisterButton
  );

}


updateRegisterButton();


/* =========================================
   REGISTER NOW
========================================= */

if (registerBtn) {

  registerBtn.addEventListener("click", function() {


    if (
      !privacyCheck.checked ||
      !termsCheck.checked
    ) {

      alert(
        "Please agree to the Privacy Policy and Terms & Conditions before registering."
      );

      return;

    }


    /*
      Opens your Microsoft Form.

      Your customers can complete all
      registration information there.
    */

    window.location.href = FORM_URL;

  });

}
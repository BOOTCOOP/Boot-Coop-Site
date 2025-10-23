var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
var themeToggleBtn = document.getElementById("theme-toggle");
var uxArtImage = document.getElementById("uxArtImage");
var SolanasImage = document.getElementById("SolanasImage");
var FacultadDeDerechoImage = document.getElementById("FacultadDeDerechoImage");
var BoxVisionImage = document.getElementById("BoxVisionImage");


if (localStorage.getItem("color-theme") === "dark") {
  uxArtImage.src = "./assets/clients/uxart.png";
  SolanasImage.src = "./assets/clients/solanasDark.png";
  FacultadDeDerechoImage.src = "./assets/clients/facultadDeDerechoDark.png";
  BoxVisionImage.src = "./assets/clients/boxVisionDark.png";
} else {
  uxArtImage.src = "./assets/clients/uxart.png";
  SolanasImage.src = "./assets/clients/solanas.png";
  FacultadDeDerechoImage.src = "./assets/clients/facultadDeDerecho.png";
  BoxVisionImage.src = "./assets/clients/boxVision.png";
}

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

// Cambiar la imagen también al hacer clic en el botón
themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // Cambiar el tema
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      uxArtImage.src = "./assets/clients/uxart.png";
      SolanasImage.src = "./assets/clients/solanasDark.png";
      FacultadDeDerechoImage.src = "./assets/clients/facultadDeDerechoDark.png";
      BoxVisionImage.src = "./assets/clients/boxVisionDark.png";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      uxArtImage.src = "./assets/clients/uxart.png";
      SolanasImage.src = "./assets/clients/solanas.png";
      FacultadDeDerechoImage.src = "./assets/clients/facultadDeDerecho.png";
      BoxVisionImage.src = "./assets/clients/boxVision.png";
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      uxArtImage.src = "./assets/clients/uxart.png";
      SolanasImage.src = "./assets/clients/solanas.png";
      FacultadDeDerechoImage.src = "./assets/clients/facultadDeDerecho.png";
      BoxVisionImage.src = "./assets/clients/boxVision.png";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      uxArtImage.src = "./assets/clients/uxart.png";
      SolanasImage.src = "./assets/clients/solanasDark.png";
      FacultadDeDerechoImage.src = "./assets/clients/facultadDeDerechoDark.png";
      BoxVisionImage.src = "./assets/clients/boxVisionDark.png";
    }
  }
});

// Implemento ENVIO de datos de Formulario
const $form = document.querySelector("#form");
$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(event.target);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "post",
    headers: myHeaders,
    redirect: "follow",
    body: data
  };

  // Intenta enviar los datos al servidor
  try {
    const response = await fetch("https://formspree.io/f/xdkwqegg", requestOptions);

    if (response.ok) {
      // Muestra el mensaje de toast si la respuesta es exitosa
      const toastElement = document.getElementById("toast-simple");
      toastElement.classList.remove("hidden");

      // Oculta el mensaje después de 3 segundos (ajusta el tiempo según tus preferencias)
      setTimeout(() => {
        toastElement.classList.add("hidden");
      }, 3000);

      // También puedes reiniciar el formulario o realizar otras acciones después de enviar
      $form.reset();
    } else {
      console.log('Error al enviar el formulario');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}


//   const response = await fetch($api, {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify([
//       [email, subject, message, new Date().toLocaleString()],
//     ]),
//   });
//   if (response.ok) {
//     const reseteo = this.reset();
//   }
// }

//particulas

particlesJS({
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#ffffff",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 5,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#56aeff",
      opacity: 1.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 66.39004149377594,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    // Elimina la clase "active" de todos los enlaces
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });

    // Agrega la clase "active" al enlace clicado
    this.classList.add('active');
  });
});

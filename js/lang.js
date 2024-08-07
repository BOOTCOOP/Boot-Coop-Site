const texts = {
  es: ["Cooperativa de soluciones TI", "Cooperativa de Diseño Web", "Cooperativa de Desarrollo de E-Commerce", "Cooperativa de Diseño UX/UI"],
  en: ["Cooperative of IT Solutions", "Cooperative of Web Design", "Cooperative of UX/UI Design", "Cooperative of E-Commerce Development"]
};

const options = {
  typeSpeed: 70,
  backSpeed: 30,
  smartBackspace: true,
  showCursor: false,
  loop: true,
  
};

let typed;

const setLanguage = (lang) => {
  options.strings = texts[lang];
  if (typed) {
    typed.destroy(); // Destruye la instancia actual antes de crear una nueva
  }
  typed = new Typed("#typed-output", options);
};

document.addEventListener("DOMContentLoaded", function() {
  setLanguage('es');
});

var language = {
  es: {
    lang: "ES",
    nav: {
      home: "Inicio",
      about: "Nosotros",
      tech: "Tecnologías",
      portfolio: "Casos de éxito",
      contact: "Contacto"
    },
    title: setLanguage.bind(null, 'es'),
    contact_us: "Contactanos",
    about_us: {
      title: "Nosotros",
      text: "Somos una cooperativa de trabajo con el objetivo de brindar un atractivo producto a la medida de tus necesidades. Diseñamos y desarrollamos sitios web y aplicaciones para el proyecto que tenés en mente, tanto para grandes instituciones o empresas, como páginas personales o profesionales.",
      item_1: {
        title: "Desarrollo de Software",
        text: "Desarrollamos software a la medida de las necesidades del proyecto. Buscamos las mejores soluciones a las particularidades del negocio y potenciamos tu aplicación pensando en su crecimiento y adaptación."
      },
      item_2: {
        title: "Aplicaciones Web",
        text: "Diseñamos su sitio para mejorar su presencia en la web manteniendo la identidad del producto. Utilizamos las últimas tecnologías, centrándonos en la estética y la usabilidad."
      },
      item_3: {
        title: "Aplicaciones Móviles",
        text: "Construimos y diseñamos aplicaciones híbridas para Android e IOS. Te asesoramos en el desarrollo y diseño para que tu aplicación móvil sea una realidad."
      },
      item_4: {
        title: "E-Commerce",
        text: "Desarrollamos la tienda online que buscas para tu negocio, con pago seguro y tus productos al alcance."
      },
      item_5: {
        title: "Hosting",
        text: "Garantizamos la disponibilidad de su proyecto en Internet. El hosting y el dominio ya no serán un problema con el que lidiar."
      },
      item_6: {
        title: "Mantenimiento",
        text: "Mantenemos vivo su proyecto con actualizaciones visuales, nuevas características y diseño creativo."
      }
    },
    technologies: {
      title: "Tecnologías",
      text: "Sabemos que es un mundo acelerado, por lo que es bueno tener opciones."
    },
    clients: {
      title: "Nuestros Clientes",
      text: "Sabemos que es un mundo acelerado, por lo que es bueno tener opciones"
    },
    portfolio: {
      title: "Casos de éxito",
      text: "Una muestra de nuestra experiencia y habilidades en acción a través de nuestros proyectos más destacados.",
      item_1: {
        title: "Buspack",
        subtitle: "Plataforma líder en logística, especializada en la gestión eficiente de encomiendas a nivel nacional. Nuestra solución online proporciona un sistema integral que optimiza el proceso logístico, asegurando entregas rápidas y seguras"
      },
      item_2: {
        title: "Facultad de derecho",
        subtitle: "Colaboramos en el mantenimiento del sitio web de la Facultad de Derecho, garantizando una presencia en línea actualizada y funcional para satisfacer las necesidades de la comunidad académica y los visitantes"
      },
      item_3: {
        title: "Dynamo IOT",
        subtitle: "Backoffice logístico personalizado para una empresa destacada en el sector. Esta herramienta permite una administración eficiente de conductores y vehículos, mejorando la planificación de rutas y la asignación de recursos"
      },
      item_4: {
        title: "Moveme",
        subtitle: "Aplicación web responsive diseñada para emprendimientos de Personal Trainer. Brinda una experiencia intuitiva, facilitando la interacción entre entrenadores y clientes para una gestión efectiva"
      },
      item_5: {
        title: "Somos Grissia",
        subtitle: "Plataforma web responsive, con diseño minimalista para emprendimientos de Community Manager. Ofrece herramientas eficaces para gestionar y potenciar la presencia online, simplificando la tarea de administrar contenido y aumentar la visibilidad en redes sociales"
      },
      item_6: {
        title: "Box Vision",
        subtitle: "Aplicación móvil de óptica con realidad aumentada para probar virtualmente distintos modelos de lentes, ofreciendo una experiencia personalizada y conveniente"
      },
    },
    contact_form: {
      title: "Contactanos",
      text: "¡Hablemos de tus proyectos! Contactanos para saber cómo podemos ayudarte.",
      email: {
        label: "Email",
        placeholder: "nombre@dominio.com"
      },
      subject: {
        label: "Asunto",
        placeholder: "Permítenos saber en qué te podemos ayudar"
      },
      message: {
        label: "Mensaje",
        placeholder: "Deja un comentario..."
      },
      submit: "Enviar mensaje"
    },
    footer: {
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    lang: "EN",
    nav: {
      home: "Home",
      about: "About",
      tech: "Technologies",
      portfolio: "Success Stories",
      contact: "Contact"
    },
    title: setLanguage.bind(null, 'en'),
    contact_us: "Contact us",
    about_us: {
      title: "About us",
      text: `We are a work cooperative with the aim of providing an attractive
      product tailored to your needs. We design and develop websites and
      applications for the project you have in mind, both for large
      institutions or companies, to small personal or professional
      pages.`,
      item_1: {
        title: "Software Development",
        text: `We develop software tailored to the needs of the project. We
        look for the best solutions to the particularities of the
        business and we enhance your application thinking about its
        growth and adaptation.`
      },
      item_2: {
        title: "Web Apps",
        text: "We design your site to enhance your presence on the web while maintaining the identity of the product. We use the latest technologies, focusing on aesthetics and usability."
      },
      item_3: {
        title: "Mobile Apps",
        text: "We build and design hybrid applications for Android and IOS. We advise you on the development and design so that your mobile application becomes a reality."
      },
      item_4: {
        title: "E-Commerce",
        text: "We develop the online store you are looking for for your business, with secure payment and your products within reach."
      },
      item_5: {
        title: "Hosting",
        text: "We guarantee the availability of your project on the Internet. Hosting and domain will no longer be a problem to deal with."
      },
      item_6: {
        title: "Maintenance",
        text: "We keep your project alive with visual updates, new features and creative design."
      }
    },
    technologies: {
      title: "Technologies",
      text: "We know it's a fast-paced world, so, it's good to have options."
    },
    clients: {
      title: "Our Clients",
      text: "We understand that it's a fast-paced world, so having options is a good thing"
    },
    portfolio: {
      title: "Success Stories",
      text: "A sample of our experience and skills in action through our most outstanding projects.",
      item_1: {
        title: "Buspack",
        subtitle: "Leading logistics platform, specialized in the efficient management of parcels nationwide. Our online solution provides a comprehensive system that optimizes the logistics process, ensuring fast and secure deliveries"
      },
      item_2: {
        title: "Facultad de derecho",
        subtitle: "We collaborate on the maintenance of the Faculty of Law website, ensuring an updated and functional online presence to meet the needs of the academic community and visitors"
      },
      item_3: {
        title: "Dynamo IOT",
        subtitle: "Customized logistic backoffice for a prominent company in the sector. This tool enables efficient management of drivers and vehicles, enhancing route planning and resource allocation"
      },
      item_4: {
        title: "Moveme",
        subtitle: "Responsive web application designed for Personal Trainer ventures. Provides an intuitive experience, facilitating interaction between trainers and clients for effective management"
      },
      item_5: {
        title: "Somos Grissia",
        subtitle: "Responsive web platform with a minimalist design for Community Manager ventures. Offers effective tools for managing and enhancing online presence, simplifying the task of content administration and increasing visibility on social media"
      },
      item_6: {
        title: "Box Vision",
        subtitle: "Augmented reality mobile application for an optical store, allowing virtual try-ons of different eyeglass models, providing a personalized and convenient experience"
      },
    },
    contact_form: {
      title: "Contact Us",
      text: "Let's talk about your projects! Contact us to find out how we can help you.",
      email: {
        label: "Your email",
        placeholder: "name@domain.com"
      },
      subject: {
        label: "Subject",
        placeholder: "Let us know how we can help you"
      },
      message: {
        label: "Your message",
        placeholder: "Leave a comment..."
      },
      submit: "Send message"
    },
    footer: {
      rights: "All Rights Reserved."
    }
  }
}

const $dropdownTarget = document.getElementById('language-dropdown-menu')
const $dropdownTrigger = document.getElementById('lang')
const dropdown = new Dropdown($dropdownTarget, $dropdownTrigger)
const $dropdownOptions = $dropdownTarget.getElementsByTagName('a')
for (let el of $dropdownOptions) {
  el.onclick = () => dropdown.hide()
}

const translate = (prop, subpaths = []) => {
  const keys = Object.keys(prop)
  keys.forEach(key => {
    const value = prop[key]
    if (typeof value === 'string') {
      const id = subpaths.length === 0 ? key : `${subpaths.join('-')}-${key}`
      const el = document.getElementById(id)
      if (el) {
        if (key === 'placeholder') {
          el.placeholder = value
        } else {
          el.textContent = value
        }
      }
    } else {
      translate(value, [...subpaths, key])
    }
  })
}

const updateLanguage = () => {
  const hash = window.location.hash.replace("#", "")
  const lang = language[hash]
  if (lang) {
    setLanguage(hash);
    translate(lang);
  }
}

window.onhashchange = updateLanguage;

// Llama a updateLanguage también al cargar la página para manejar el estado inicial
updateLanguage();
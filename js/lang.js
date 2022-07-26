var language = {
  es: {
    lang: "ES",
    nav: {
      home: "Inicio",
      about: "Nosotros",
      tech: "Tecnologías",
      portfolio: "Portafolio",
      contact: "Contacto"
    },
    title: "Cooperativa de soluciones IT",
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
    portfolio: {
      title: "Portafolio",
      text: "Explore toda la colección de componentes y elementos web de código abierto creados con las clases de utilidad de Tailwind",
      item_1: {
        title: "E-commerce Vintage",
        subtitle: "E-commerce desarrollado en React con tailwind"
      },
      item_2: {
        title: "Marketplace NFT",
        subtitle: "Una plataforma online basada en blockchain para vender y comprar tokens no fungibles (NFT)."
      },
    },
    contact_form: {
      title: "Contactanos",
      text: "¿Tienes un problema técnico? ¿Quiere enviar comentarios sobre una función beta? ¿Necesita detalles sobre nuestro plan Business? Haznos saber.",
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
      portfolio: "Portfolio",
      contact: "Contact"
    },
    title: "IT Solutions Cooperative",
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
    portfolio: {
      title: "Our Portfolio",
      text: "Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind",
      item_1: {
        title: "E-commerce Vintage",
        subtitle: "E-commerce developed in React with tailwind"
      },
      item_2: {
        title: "Marketplace NFT",
        subtitle: "A blockchain-based online platform to sell and buy non-fungible tokens (NFTs)."
      },
    },
    contact_form: {
      title: "Contact Us",
      text: "Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.",
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

const hash = window.location.hash.replace("#", "")
const lang = language[hash]
if (lang) {
  translate(lang)
}



window.onhashchange = (e) => {
  const langs = Object.keys(language)
  const hash = e.target.location.hash.replace("#", "")
  if (langs.includes(hash)) {
    location.reload(true)
  }
}
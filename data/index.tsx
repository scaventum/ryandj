const data = {
  sections: [
    {
      type: "hero",
      profile: {
        title: "Ryan Djoenaidi",
        subtitle: "Senior developer",
        introduction:
          "Wellington, NZ based senior developer proficient in PHP (Laravel) and JavaScript (React), experienced in AWS and Azure infrastructure management. Seeking opportunities to advance leadership skills and stay updated on evolving development technologies.",
        hightlightedItems: [
          {
            icon: {
              name: "laravel",
              style: "brands",
            },
            label: "Laravel",
            rating: 9,
          },
          {
            icon: {
              name: "php",
              style: "brands",
            },
            label: "PHP",
            rating: 8,
          },
          {
            icon: {
              name: "react",
              style: "brands",
            },
            label: "React",
            rating: 7,
          },
          {
            icon: {
              name: "js",
              style: "brands",
            },
            label: "JS",
            rating: 7,
          },
          {
            icon: {
              name: "aws",
              style: "brands",
            },
            label: "AWS",
            rating: 7,
          },
        ],
      },
    },
    {
      type: "categorised-items",
      titling: {
        title: "Skills",
        subtitle: "And expertise",
      },
      items: [
        {
          icon: {
            name: "server",
          },
          category: "back-end",
          label: "Back-end",
          items: [
            {
              icon: {
                name: "laravel",
                style: "brands",
              },
              label: "Laravel",
              rating: 9,
            },
            {
              icon: {
                name: "php",
                style: "brands",
              },
              label: "PHP",
              rating: 8,
            },
            {
              icon: {
                name: "database",
              },
              label: "MySQL",
              rating: 9,
            },
            {
              icon: {
                name: "cube",
              },
              label: "Composer",
              rating: 7,
            },
            {
              icon: {
                name: "terminal",
              },
              label: "Artisan",
              rating: 8,
            },
            {
              icon: {
                name: "server",
              },
              label: "NGINX",
              rating: 6,
            },
          ],
        },
        {
          icon: {
            name: "window-maximize",
          },
          category: "front-end",
          label: "Front-end",
          items: [
            {
              icon: {
                name: "react",
                style: "brands",
              },
              label: "React",
              rating: 7,
            },
            {
              icon: {
                name: "js",
                style: "brands",
              },
              label: "JS",
              rating: 7,
            },
          ],
        },
        {
          icon: {
            name: "cloud",
          },
          category: "infrastructure",
          label: "Infrastructures",
          items: [
            {
              icon: {
                name: "aws",
                style: "brands",
              },
              label: "AWS",
              rating: 7,
            },
            {
              icon: {
                name: "microsoft",
                style: "brands",
              },
              label: "Azure",
              rating: 6,
            },
            {
              icon: {
                name: "docker",
                style: "brands",
              },
              label: "Docker",
              rating: 7,
            },
          ],
        },
        {
          icon: {
            name: "gears",
          },
          category: "operation-system",
          label: "Operation Systems",
          items: [
            {
              icon: {
                name: "ubuntu",
                style: "brands",
              },
              label: "Linux",
              rating: 6,
            },
          ],
        },
        {
          icon: {
            name: "list-check",
          },
          category: "management",
          label: "Management",
          items: [
            {
              icon: {
                name: "jira",
                style: "brands",
              },
              label: "Jira",
              rating: 8,
            },
            {
              icon: {
                name: "confluence",
                style: "brands",
              },
              label: "Confluence",
              rating: 8,
            },
          ],
        },
        {
          icon: {
            name: "arrows-spin",
          },
          category: "workflow",
          label: "Workflow",
          items: [
            {
              icon: {
                name: "git",
                style: "brands",
              },
              label: "git",
              rating: 8,
            },
            {
              icon: {
                name: "bitbucket",
                style: "brands",
              },
              label: "Bitbucket",
              rating: 7,
            },
            {
              icon: {
                name: "github",
                style: "brands",
              },
              label: "GitHub",
              rating: 6,
            },
          ],
        },
        {
          icon: {
            name: "list",
          },
          category: "other",
          label: "Other",
          items: [
            {
              icon: {
                name: "code",
              },
              label: "SilverStripe",
              rating: 5,
            },
            {
              icon: {
                name: "code",
              },
              label: "CodeIgniter",
              rating: 5,
            },
            {
              icon: {
                name: "vuejs",
                style: "brands",
              },
              label: "Vue",
              rating: 5,
            },
            {
              icon: {
                name: "gitlab",
                style: "brands",
              },
              label: "GitLab",
              rating: 5,
            },
          ],
        },
      ],
    },
    {
      type: "timeline",
      titling: {
        title: "Experiences",
        subtitle: "And expertise",
      },
      items: [
        {
          organisationName: "AKQA",
          as: "Senior developer",
          location: "Wellington - New Zealand",
          period: {
            from: "Sep 2019",
            to: "Ongoing",
          },
          jobDescription: [
            "Collaborating closely with other full-stack developers, clients, product owners, third parties, and designers to deliver high-quality products in an agile environment",
            "Coordinating and assigning work within sprints and quarterly cycles in close collaboration with other developers to achieve targets.",
            "Intensively involved in discovering, developing, and delivering new features, applications, and infrastructures.",
            "Maintaining and servicing applications and infrastructure.",
          ],
        },
        {
          organisationName: "Dream Config",
          as: "Full stack web developer",
          location: "Auckland - New Zealand",
          period: {
            from: "Jan 2019",
            to: "Aug 2019",
          },
          jobDescription: [
            "Working closely with developer, designer, and director to meet client requirements collaboratively.",
            "Organizing and delegating tasks within daily cycles to meet set targets.",
            "Guiding the development approach across front-end, back-end, and infrastructure.",
            "Maintaining and servicing applications and infrastructure.",
          ],
        },
        {
          organisationName: "SkyHi",
          as: "Full stack web developer",
          location: "Auckland - New Zealand",
          period: {
            from: "Aug 2018",
            to: "Dec 2018",
          },
          jobDescription: [
            "Working closely with director to meet client requirements.",
            "Organizing and delegating tasks within daily cycles to meet set targets.",
            "Maintaining and servicing applications and infrastructure.",
          ],
        },
        {
          organisationName: "Rinnai Indonesia",
          as: "Full stack developer",
          location: "Jakarta - Indonesia",
          period: {
            from: "Oct 2014",
            to: "May 2017",
          },
          jobDescription: [
            "Engaging closely with full-stack developers, clients, and product owners to deliver features and fixes.",
            "Organizing and delegating tasks within daily cycles to meet set targets.",
            "Guiding the development approach across front-end, back-end, and infrastructure of web application.",
            "Maintaining and servicing applications and infrastructure.",
          ],
        },
        {
          organisationName: "Pro-Int Dinamika",
          as: "Graduate developer",
          location: "Jakarta - Indonesia",
          period: {
            from: "Aug 2013",
            to: "Sep 2014",
          },
          jobDescription: [
            "Working closely with senior developers and system analysts to deliver features and fixes.",
            "Organizing and delegating tasks within daily cycles to meet set targets.",
            "Maintaining and servicing applications.",
          ],
        },
      ],
    },
    {
      type: "timeline",
      items: [
        {
          organisationName: "WelTec",
          as: "Bachelor of IT",
          location: "Lower Hutt - New Zealand",
          period: {
            from: "July 2017",
            to: "June 2018",
          },
        },
        {
          organisationName: "Universitas Tarumanagara",
          as: "Bachelor of IT",
          location: "Jakarta - Indonesia",
          period: {
            from: "August 2009",
            to: "July 2013",
          },
        },
      ],
    },
    {
      type: "hyperlinks",
      items: [
        {
          icon: {
            name: "certificate",
          },
          title:
            "edX Verified Certificate for AI for Everyone: Master the Basics",
          subtitle: "July 2023 by IBM",
          link: "https://courses.edx.org/certificates/b65a31b3da03458da62b1097fba28cac",
        },
        {
          icon: {
            name: "aws",
            style: "brands",
          },
          title: "AWS Certified Solutions Architect - Associate",
          subtitle: "September 2020 by AWS",
          link: "https://www.credly.com/badges/674de27d-9341-4de4-9eee-f764b3f354f6",
        },
      ],
    },
    {
      type: "hyperlinks",
      items: [
        {
          icon: {
            name: "linkedin",
            style: "brands",
          },
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/ryan-djoenaidi-383b96166/",
        },
        {
          icon: {
            name: "gmail",
            style: "brands",
          },
          title: "Gmail",
          link: "mailto:ryan.djoenaidi@gmail.com",
        },
        {
          icon: {
            name: "whatsapp",
            style: "brands",
          },
          title: "WhatsApp",
          link: "https://wa.me/622040995746",
        },
        {
          icon: {
            name: "github",
            style: "brands",
          },
          title: "GitHub",
          link: "https://github.com/scaventum",
        },
      ],
    },
    {
      type: "list",
      items: [
        {
          icon: {
            name: "code",
          },
          title: "Programming, drawing, designing",
        },
        {
          icon: {
            name: "basketball",
          },
          title: "Table tennis, Basketball, Badminton, Swimming",
        },
        {
          icon: {
            name: "gamepad",
          },
          title: "YouTube, Netflix",
        },
        {
          icon: {
            name: "umbrella-beach",
          },
          title: "Tramping, Staycation",
        },
      ],
    },
    {
      type: "list",
      items: [
        {
          icon: {
            name: "user-check",
          },
          title: "Available upon request.",
        },
      ],
    },
  ],
};

export default data;

const url = `https://${
  process.env.PUBLIC_URL
    ? process.env.PUBLIC_URL
    : `localhost:${process.env.PORT || 3000}`
}`;
const title = "Ryan DJ - Senior developer";
const description =
  "Wellington-NZ based, proficient in PHP (Laravel) and JavaScript (React), experienced in AWS and Azure infrastructure management. Seeking opportunities to advance leadership skills and stay updated on evolving development technologies.";
const imageUrl = `${url}/assets/favicons/meta.jpg`;
const meta = {
  title,
  description,
  keywords: [
    "Laravel",
    "PHP",
    "React",
    "JavaScript",
    "AWS",
    "Senior",
    "Front-end",
    "Back-end",
    "Developer",
    "Wellington",
    "NZ",
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    type: "website",
    images: {
      secure_url: imageUrl,
      url: imageUrl,
      width: 200,
      height: 200,
      type: "image/jpeg",
      alt: title,
    },
  },
  icons: {
    icon: [
      {
        url: "/assets/favicons/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },
      {
        url: "/assets/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default meta;

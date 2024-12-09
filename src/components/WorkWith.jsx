import React from "react";
import Marquee from "react-fast-marquee";
import partnar1 from "../assets/eduusa.png";
import partnar2 from "../assets/ckgs.jpeg";
import partnar3 from "../assets/ef.png";
import partnar4 from "../assets/expedia.jpeg";
import partnar5 from "../assets/idp.png";
import partnar6 from "../assets/kaplan.png";
import partnar7 from "../assets/kayak.png";
import partnar8 from "../assets/tls.jpg";
import partnar9 from "../assets/tui.png";
import partnar10 from "../assets/vfs.png";

const partners = [
  {
    img: partnar1,
    alt: "Education USA",
    link: "https://educationusa.state.gov/",
  },
  { img: partnar2, alt: "CKGS", link: "https://www.ckgs.com/" },
  { img: partnar3, alt: "EF Education First", link: "https://www.ef.com/" },
  { img: partnar4, alt: "Expedia", link: "https://www.expedia.com/" },
  { img: partnar5, alt: "IDP Education", link: "https://www.idp.com/" },
  {
    img: partnar6,
    alt: "Kaplan",
    link: "https://www.kaplaninternational.com/",
  },
  { img: partnar7, alt: "Kayak", link: "https://www.kayak.com/" },
  { img: partnar8, alt: "TLScontact", link: "https://www.tlscontact.com/" },
  { img: partnar9, alt: "TUI Group", link: "https://www.tuigroup.com/" },
  { img: partnar10, alt: "VFS Global", link: "https://www.vfsglobal.com/" },
];

const WorkWith = () => {
  return (
    <section className=" py-12">
      <h2 className="text-center text-2xl font-bold text-blue-600 dark:text-teal-300 mb-6">
        We Work With
      </h2>
      <Marquee className="space-x-12 px-4">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={partner.img}
              alt={partner.alt}
              className="h-16 sm:h-20 lg:h-24 object-contain"
            />
          </a>
        ))}
      </Marquee>
    </section>
  );
};

export default WorkWith;

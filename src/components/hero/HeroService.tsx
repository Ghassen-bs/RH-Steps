
import React from 'react';
import Link from 'next/link';


interface DataType {
  id: number;
  title: string;
  description: string;
}

const banner_data:DataType[] = [
  {
    id: 1,
    title: "Photographie & Vidéographie",
    description: "Services professionnels de photographie et vidéographie pour tous vos besoins créatifs et projets professionnels.",
  },
  {
    id: 2,
    title: "Montage Vidéo & Publicités",
    description: "Création et montage de vidéos professionnelles et publicités digitales pour renforcer l'image de votre marque.",
  },
  {
    id: 3,
    title: "Création de Sites Web",
    description: "Conception et développement de sites web modernes et dynamiques adaptés aux besoins spécifiques de votre entreprise.",
  },
  {
    id: 4,
    title: "Marketing Digital",
    description: "Stratégies de marketing digital et gestion de campagnes sponsorisées pour accroître votre visibilité en ligne.",
  },
  {
    id: 5,
    title: "Design Graphique",
    description: "Création d'identité visuelle complète et design graphique professionnel pour renforcer l'image de votre entreprise.",
  },
  {
    id: 6,
    title: "Production Audio",
    description: "Services d'enregistrement, mixage et mastering audio pour tous vos projets sonores et productions musicales.",
  },
  {
    id: 7,
    title: "Organisation d'Événements",
    description: "Organisation professionnelle d'événements et location de matériel pour vos occasions spéciales et événements d'entreprise.",
  },

]

const HeroService = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section className="position-relative">
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_word_writting">
                Nos Services Créatifs et Professionnels pour Votre Entreprise
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_1_list">
            {banner_data.map((item, i) =>
              <div key={i} className="cs_card cs_style_1 anim_div_ShowDowns">
                <div className="cs_card_left">
                  <div className="cs_card_number cs_primary_font" style={{ backgroundImage: `url('/assets/img/hero_img_1.jpg')` }}>
                    0{i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      <Link href="/service-details">{item.title}</Link>
                    </h2>
                    <div className="cs_card_subtitle">{item.description}</div>
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  <Link href="/service-details" className="cs_card_link">
                  </Link>
                </div>
              </div>
            )} 

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroService;
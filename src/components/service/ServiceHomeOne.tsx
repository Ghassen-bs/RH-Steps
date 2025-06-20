

import React from 'react';
import Link from 'next/link';

interface DataType {
  id: number;
  title: string;
  des: string;
}[]

const service_data: DataType[] = [
  {
    id: 1,
    title: `Photographie & Vidéographie`,
    des: `Services professionnels de photographie et vidéographie pour tous vos besoins créatifs et projets professionnels.`
  },
  {
    id: 2,
    title: `Montage Vidéo & Publicités`,
    des: `Création et montage de vidéos professionnelles et publicités digitales pour renforcer l'image de votre marque.`
  },
  {
    id: 3,
    title: `Création de Sites Web`,
    des: `Conception et développement de sites web modernes et dynamiques adaptés aux besoins spécifiques de votre entreprise.`
  },
  {
    id: 4,
    title: `Marketing Digital`,
    des: `Stratégies de marketing digital et gestion de campagnes sponsorisées pour accroître votre visibilité en ligne.`
  },
  {
    id: 5,
    title: `Design Graphique`,
    des: `Création d'identité visuelle complète et design graphique professionnel pour renforcer l'image de votre entreprise.`
  },
  {
    id: 6,
    title: `Production Audio`,
    des: `Services d'enregistrement, mixage et mastering audio pour tous vos projets sonores et productions musicales.`
  },
  {
    id: 7,
    title: `Organisation d'Événements`,
    des: `Organisation professionnelle d'événements et location de matériel pour vos occasions spéciales et événements d'entreprise.`
  },

]

const ServiceHomeOne = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section className="cs_primary_bg position-relative">
        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Nos Services
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Services Créatifs et Professionnels
              </h2>
            </div>
            <div className="cs_section_heading_right cs_btn_anim">
              <Link href="/service" className="cs_btn cs_style_1 cs_color_1">
                <span>Voir Services</span>
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="cs_height_50 cs_height_lg_10"></div>
          <div className="cs_card_1_list">
            {service_data.map((item, i) => (
              <div key={i} className="cs_card cs_style_1 cs_color_1 anim_div_ShowDowns">
                <div className="cs_card_left">
                  <div className="cs_card_number cs_primary_font" style={{ backgroundImage: `url(/assets/img/hero_img_1.jpg)` }}>
                    0{i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      {item.title}
                    </h2>
                    <div className="cs_card_subtitle">
                      {item.des}
                    </div>
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  <div className="cs_card_link">
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_30"></div>
      </section>

    </>
  );
};

export default ServiceHomeOne;

import React from 'react';

import services_exploring from "@/assets/img/services_exploring.jpg"
import sound_box_icon from "@/assets/img/sound_box_icon.jpg"
import Image from 'next/image';
import Link from 'next/link';

interface DataType {
  sub_title: string;
  title: string;
  service_data: {
    id: number;
    title: string;
  }[];
  notice_title: string;
  notice_des: string;
}

const service_content: DataType = {
  sub_title: "Nos Services",
  title: "Services Créatifs et Professionnels",
  service_data: [
    {
      id: 1,
      title: "01 / Photographie & Vidéographie",
    },
    {
      id: 2,
      title: "02 / Montage Vidéo & Publicités",
    },
    {
      id: 3,
      title: "03 / Création de Sites Web",
    },
    {
      id: 4,
      title: "04 / Marketing Digital",
    },
    {
      id: 5,
      title: "05 / Design Graphique",
    },
    {
      id: 6,
      title: "06 / Production Audio",
    },
    {
      id: 7,
      title: "07 / Organisation d'Événements",
    },
  ],
  notice_title: `Création d'une Identité de Marque Forte par le Design`,
  notice_des: `Nous avons pu offrir des services créatifs et professionnels dans plusieurs domaines. Notre expertise vous garantit des résultats de qualité pour tous vos projets.`,
}
const {
  sub_title,
  title,
  service_data,
  notice_title,
  notice_des
} = service_content

const ServiceHomeThree = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_service_exploring">
            <div className="cs_service_exploring_1">
              <div className="cs_section_heading cs_style_1">
                <div className="cs_section_heading_text">
                  <div className="cs_section_subtitle anim_div_ShowZoom">
                    {sub_title}
                  </div>
                  <h2 className="cs_section_title anim_heading_title">
                    {title}
                  </h2>
                </div>
              </div>
              <div className="cs_height_150 cs_height_lg_20"></div>

              <ul className="cs_list_style_none cs_color_1 anim_div_ShowLeftSide">

                {service_data.map((item, i) =>
                  <li key={i}>
                    <Link href="/service-details">
                      <h3>{item.title}</h3>
                    </Link>
                  </li>
                )}

              </ul>

            </div>

            <div className="cs_service_exploring_2">
              <div className="cs_service_exploring_img">
                <div className="anim_div_ShowRightSide">
                  <Image src={services_exploring} className="cs_img" alt="services_exploring" />
                </div>
                <div className="cs_service_exploring_img_text cs_style_1 cs_color_1 anim_div_ShowDowns">
                  <Image src={sound_box_icon} alt="sound_box_icon" />
                  <h6 className="cs_white_color">
                    {notice_title}
                  </h6>
                  <p className="cs_font_16">
                    {notice_des}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default ServiceHomeThree;
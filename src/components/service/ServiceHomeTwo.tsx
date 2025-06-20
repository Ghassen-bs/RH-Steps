
import React from 'react';
import Link from 'next/link';
import bg_img from "@/assets/img/cp_services.jpg";
import Image from 'next/image';


interface DataType {
  sub_title: string;
  title: string;
  service_data: {
    id: number;
    title: string;
  }[];
}

const service_content: DataType = {
  sub_title: "Nos Services",
  title: "Services Créatifs et Professionnels",
  service_data: [
    {
      id: 1,
      title: "Photographie & Vidéographie",
    },
    {
      id: 2,
      title: "Montage Vidéo & Publicités",
    },
    {
      id: 3,
      title: "Création de Sites Web",
    },
    {
      id: 4,
      title: "Marketing Digital",
    },
    {
      id: 5,
      title: "Design Graphique",
    },
    {
      id: 6,
      title: "Production Audio",
    },
    {
      id: 7,
      title: "Organisation d'Événements",
    },
  ]
}

const { sub_title, title, service_data } = service_content

const ServiceHomeTwo = () => {
  return (
    <>
      <div className="cs_height_110"></div>
      <section className="cs_primary_bg">
        <div className="cs_height_100 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_color_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                {sub_title}
              </div>
              <h2 className="cs_section_title anim_heading_title">
                {title}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_50"></div>
          <div className="row cs_cr_pr cs_row_gap_150">
            <div className="col-md-6">
              <div className="anim_div_ShowLeftSide">
                {service_data.map((item, i) =>
                  <div key={i} className="cs_creative_protfolio cs_card_style_change">
                    <div className="cs_card cs_style_1 cs_color_1">
                      <div className="cs_card_right">
                        <div className="cs_card_right_in">
                          <h2 className="cs_card_title">
                            <Link href="/service-details" className="cs_white_color">
                              <span>0{item.id} / </span>{item.title}
                            </Link>
                          </h2>
                        </div>
                      </div>
                      <div className="cs_card_link_wrap">
                        <Link href="/service-details" className="cs_card_link cs_white_color">
                          
                        </Link>
                      </div>
                    </div>
                    <div className="cs_hr_design cs_color_1"></div>
                  </div>
                )}

              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="h-100">
                <Image src={bg_img} className="w-100 h-100 anim_div_ShowRightSide" alt="cp_services" />
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_60"></div>
      </section>
    </>
  );
};

export default ServiceHomeTwo;
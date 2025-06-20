
import React from 'react';
import Image from 'next/image';
import image from "@/assets/img/cp_services.jpg";


interface DataType {
  title: string;
  des: string;
  service_data: {
    id: number;
    title: string;
  }[];
}

const service_content: DataType = {
  title: 'Nos Services',
  des: 'Services Créatifs et Professionnels',
  service_data: [
    {
      id: 1,
      title: " Photographie & Vidéographie",
    },
    {
      id: 2,
      title: " Montage Vidéo & Publicités",
    },
    {
      id: 3,
      title: " Création de Sites Web",
    },
    {
      id: 4,
      title: " Marketing Digital",
    },
    {
      id: 5,
      title: " Design Graphique",
    },
    {
      id: 6,
      title: " Production Audio",
    },
    {
      id: 7,
      title: " Organisation d'Événements",
    },
  ]
}
const { title, des, service_data } = service_content

const ServiceHomeFour = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                {title}
              </div>
              <h2 className="cs_section_title anim_heading_title">
                {des}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_50"></div>
          <div className="row cs_cr_pr cs_row_gap_150">
            <div className="col-md-6 mb-4">
              <div className="h-100">
                <Image src={image} className="w-100 h-100 anim_div_ShowLeftSide" alt="cp_services" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="anim_div_ShowRightSide">
                {service_data.map((item, i) =>
                  <div key={i} className="cs_creative_protfolio cs_card_style_change">
                    <div className="cs_card cs_style_1 cs_color_1">
                      <div className="cs_card_right">
                        <div className="cs_card_right_in">
                          <h2 className="cs_card_title">
                            <a href="#" className="">
                              <span>0{item.id} / </span> {item.title}
                            </a>
                          </h2>
                        </div>
                      </div>
                      <div className="cs_card_link_wrap">
                        <a href="#" className="cs_card_link">
                          
                        </a>
                      </div>
                    </div>
                    <div className="cs_hr_design"></div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default ServiceHomeFour;
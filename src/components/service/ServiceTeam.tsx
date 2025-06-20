
"use client"

import React from 'react';
import Count from '../common/Count';


interface DataType {
  id: number;
  count: number;
  title: string;
  des: string;
}

const service_data: DataType[] = [
  {
    id: 1,
    count: 95,
    title: `Photographie & Vidéographie`,
    des: `Services professionnels de photographie et vidéographie pour tous vos besoins créatifs`
  },
  {
    id: 2,
    count: 90,
    title: `Montage Vidéo`,
    des: `Création et montage de vidéos professionnelles et publicités digitales pour votre marque`
  },
  {
    id: 3,
    count: 85,
    title: `Sites Web Dynamiques`,
    des: `Conception et développement de sites web modernes et dynamiques adaptés à vos besoins`
  },
  {
    id: 4,
    count: 95,
    title: `Marketing Digital`,
    des: `Stratégies de marketing digital et gestion de campagnes sponsorisées pour accroître votre visibilité`
  },
  {
    id: 5,
    count: 90,
    title: `Design Graphique`,
    des: `Création d'identité visuelle complète et design graphique professionnel pour votre entreprise`
  },
]

const ServiceTeam = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title_2 anim_heading_title">
                Skill & Specialist
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_50"></div>
          <div className="cs_team_details cs_funfact">

            {service_data.map((item, i) =>
              <div key={i} className="cs_funfact_max_w">
                <div className="cs_funfact cs_style1">
                  <div className="cs_stroke_text me-4">
                    <span className="amin_auto_count d-flex">
                      <Count number={item.count} /> %
                      </span>
                  </div>
                  <div className="cs_height_55 cs_height_lg_25"></div>
                  <div className="">
                    <h6>{item.title}</h6>
                    <p>
                      {item.des}
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceTeam;
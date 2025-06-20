 

import React from 'react';


interface DataType {
  subtitle: string;
  title: string;
  des: string;
}
const about_content: DataType = {
  subtitle: `Notre Histoire`,
  title: `Comment Notre Agence Repousse les Limites du Marketing et du Design Digital`,
  des: `Agence digitale créative ! Nous sommes spécialisés dans l'accompagnement des entreprises comme la vôtre pour réussir en ligne. Avec 15 projets complétés, 10 clients satisfaits, 2 prix remportés et 1 année d'expérience, nous proposons des services allant de la création de sites web au marketing digital, en passant par la photographie, la vidéographie et le design graphique. Nous avons les outils et l'expertise nécessaires pour élever votre présence en ligne et vous aider à naviguer dans le monde numérique en constante évolution.`,
}
const { subtitle, title, des } = about_content

const About = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="cs_primary_bg">
          <div className="container">
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="cs_section_heading_hr cs_style_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">
                    {subtitle}
                  </h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="cs_section_heading cs_style_1 cs_color_1">
                    <div className="cs_section_heading_text">
                      <h3 className="cs_section_title_3 anim_div_ShowLeftSide">
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="anim_div_ShowRightSide">
                    <p className="cs_ternary_color">
                      {des}
                    </p>
                    <p className="cs_ternary_color">
                      Notre objectif est de vous aider à atteindre vos ambitions commerciales grâce à des solutions digitales innovantes et sur mesure. Faites confiance à notre équipe passionnée pour transformer votre vision en réalité et propulser votre entreprise vers de nouveaux sommets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_385 cs_height_lg_120"></div>
          </div>
        </div>

      </section>
    </>
  );
};

export default About;
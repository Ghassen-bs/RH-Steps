

import React from 'react';
import Link from 'next/link';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Error = () => {
  return (
    <>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <div className="cs_height_219 cs_height_lg_120"></div>
        <section>
          <div className="container">
            <div className="cs_center">
              <div className="row col-md-8 col-12">
                <div className="cs_stroke_number cs_type_1">
                  <span>404</span>
                </div>
                <div className="cs_height_30 cs_height_lg_0"></div>
                <h3 className="cs_line_height_54 text-center cs_font_20_sm">
                  Désolé ! La page n'a pas été trouvée ici
                </h3>
                <div className="cs_height_10 cs_height_lg_10"></div>
                <p className="cs_font_16 text-center cs_m0">
                  Heureusement, comme il s'agit principalement d'un problème côté client, il est relativement facile pour les propriétaires de sites web de corriger l'erreur 404. Cet article expliquera les causes possibles de l'erreur 404 et montrera quatre méthodes efficaces pour la résoudre. Heureusement, comme il s'agit principalement d'un problème côté client, il est relativement facile pour les propriétaires de sites web de corriger l'erreur 404.
                </p>
                <div className="cs_height_50 cs_height_lg_50"></div>
                <div className="cs_center">
                  <Link href="/" className="cs_btn cs_style_1">
                    <span>Retour à l'Accueil</span>
                    <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="currentColor"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="cs_height_150 cs_height_lg_60"></div>

      </div>
      <FooterOne />
    </>
  );
};

export default Error;
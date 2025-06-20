'use client'
import React from 'react';
import Image, { StaticImageData } from 'next/image';


type DataType = StaticImageData[];
import brand_img_1 from "@/assets/img/time.jpeg"
import brand_img_2 from "@/assets/img/fer_a_beton.jpeg"
import brand_img_3 from "@/assets/img/farm-family.jpeg"
import brand_img_4 from "@/assets/img/aura.jpeg"
import brand_img_5 from "@/assets/img/patisserie.jpeg"
import brand_img_6 from "@/assets/img/hanen.jpeg"
import brand_img_7 from "@/assets/img/true_story.jpeg"
import brand_img_8 from "@/assets/img/lemhaf.jpeg"
import brand_img_9 from "@/assets/img/voyages.jpeg"
const brand_data: DataType = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_6,
  brand_img_7,
  brand_img_8,
  brand_img_9,

]

import brand_thumb_1 from "@/assets/img/pharma.jpeg"
import brand_thumb_2 from "@/assets/img/art_dose.jpeg"
import brand_thumb_3 from "@/assets/img/viona.jpeg"
import brand_thumb_4 from "@/assets/img/time.jpeg"
import brand_thumb_5 from "@/assets/img/fer_a_beton.jpeg"
import brand_thumb_6 from "@/assets/img/farm-family.jpeg"
import brand_thumb_7 from "@/assets/img/aura.jpeg"
import brand_thumb_8 from "@/assets/img/patisserie.jpeg"
import brand_thumb_9 from "@/assets/img/hanen.jpeg"


const brand_thumb_data: DataType = [
  brand_thumb_1,
  brand_thumb_2,
  brand_thumb_3,
  brand_thumb_4,
  brand_thumb_5,
  brand_thumb_6,
  brand_thumb_7,
  brand_thumb_8,
  brand_thumb_9,
]


const BrandHomeOne = ({ style_2 }: any) => {
  return (
    <> 
      
      {style_2 ?
        <>
          <div className="cs_height_150 cs_height_lg_60"></div>
          <p className="text-center cs_font_18 cs_normal">
            130+ Our Client & Partner We Are Working Together
          </p>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </>
        :
        <div className="cs_height_140 cs_height_lg_70"></div>
      }
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image 
                    src={item} 
                    alt="image-here" 
                    width={150} 
                    height={80} 
                    style={{ 
                      objectFit: 'contain',
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '150px',
                      maxHeight: '80px'
                    }} 
                  />
                </div>
              )}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image 
                    src={item} 
                    alt="image-here" 
                    width={150} 
                    height={80} 
                    style={{ 
                      objectFit: 'contain',
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '150px',
                      maxHeight: '80px'
                    }} 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_45 cs_height_lg_45"></div>
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image 
                    src={item} 
                    alt="image-here" 
                    width={150} 
                    height={80} 
                    style={{ 
                      objectFit: 'contain',
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '150px',
                      maxHeight: '80px'
                    }} 
                  />
                </div>
              )}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image 
                    src={item} 
                    alt="image-here" 
                    width={150} 
                    height={80} 
                    style={{ 
                      objectFit: 'contain',
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '150px',
                      maxHeight: '80px'
                    }} 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* {style_2 ? null :
        <div className="cs_height_140 cs_height_lg_70"></div>
      } */}
      <div className="cs_height_140 cs_height_lg_70"></div>
    </>
  );
};

export default BrandHomeOne;
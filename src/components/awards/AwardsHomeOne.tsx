'use client'
import React, { useState } from 'react';
import award_img_1 from "@/assets/img/award_1.svg";
import award_img_2 from "@/assets/img/award_2.svg";
import award_img_3 from "@/assets/img/award_3.svg";

import award_thumb_1 from "@/assets/img/award_thumb_1.jpg";
import award_thumb_2 from "@/assets/img/award_thumb_2.jpg";
import award_thumb_3 from "@/assets/img/award_thumb_3.jpg";
import Image, { StaticImageData } from 'next/image';


interface DataType {
  id: number;
  ward_img: any;
  img: StaticImageData;
  brand: string;
  title: string;
  des: string;
}[]

const award_data: DataType[] = [
  {
    id: 1,
    ward_img: award_img_1,
    img: award_thumb_1,
    brand: `Dribbbble`,
    title: `IOS App Design Award`,
    des: `Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design.`,
  },
  {
    id: 2,
    ward_img: award_img_2,
    img: award_thumb_2,
    brand: `Envato`,
    title: `Elite Author Award`,
    des: `Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design.`,
  },
  {
    id: 3,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Awwward`,
    title: `CSS Design Award`,
    des: `Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design.`,
  },
]

const AwardsHomeOne = ({style_2}: any) => {
  return null;
};

export default AwardsHomeOne;
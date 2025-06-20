import team_avatar_1 from "@/assets/img/teamsimg1.jpg";
import team_avatar_2 from "@/assets/img/teamsimg2.jpg";
import team_avatar_3 from "@/assets/img/teamsimg3.jpg";
import team_avatar_4 from "@/assets/img/teamsimg4.jpg";
import team_avatar_5 from "@/assets/img/teamsimg5.jpg";
import team_avatar_6 from "@/assets/img/teamsimg6.jpg";
import team_avatar_7 from "@/assets/img/teamsimg7.jpg";
import team_avatar_8 from "@/assets/img/teamsimg8.jpg";

import { StaticImageData } from "next/image";


interface DataType {
	id: number;
	img: StaticImageData;
	avatar_name: string;
	designation: string;
}

const team_data: DataType[] = [
  {
    id: 1,
    img: require('@/../public/assets/img/Baklouti_Rihab.jpeg'),
    avatar_name: 'Baklouti Rihab',
    designation: 'PDG',
  },
  {
    id: 2,
    img: require('@/../public/assets/img/Ben_Romdhane_Med_Habib.jpeg'),
    avatar_name: 'Ben Romdhane Med Habib',
    designation: 'CEO',
  },
  {
    id: 3,
    img: require('@/../public/assets/img/Ben_Said_Anis.jpeg'),
    avatar_name: 'Ben Said Anis',
    designation: 'Responsable média',
  },
  {
    id: 4,
    img: require('@/../public/assets/img/manar_trabelsi.jpeg'),
    avatar_name: 'Trabelsi Manar',
    designation: 'Secrétaire général',
  },
  {
    id: 4,
    img: require('@/../public/assets/img/Ghassen_Ben_Sedrine.jpeg'),
    avatar_name: 'Ben Sedrine Ghassen',
    designation: 'Développeur web',
  },
  {
    id: 5,
    img: require('@/../public/assets/img/Ghidaoui_Wassim.jpeg'),
    avatar_name: 'Ghidaoui Wassim',
    designation: 'Responsable studio et sonorisation',
  },
  {
    id: 6,
    img: require('@/../public/assets/img/marwen_selmi.jpeg'),
    avatar_name: 'Selmi Marwen',
    designation: 'Directeur artistique',
  },
  {
    id: 7,
    img: require('@/../public/assets/img/Saidi_nathir.jpeg'),
    avatar_name: 'Saidi Nathir',
    designation: 'Cadreur',
  },
];

export default team_data;

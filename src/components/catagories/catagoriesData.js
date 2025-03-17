import { FaBroom, FaCar, FaBoxOpen, FaHandsHelping, FaPaintBrush, FaPenNib, FaBullhorn, FaPencilAlt, FaVideo, FaCode, FaMusic, FaBuilding, FaCamera, FaEllipsisH } from 'react-icons/fa';
import { FaCarSide } from "react-icons/fa6";
import { CiMusicNote1 } from "react-icons/ci";

const categories = [
  { title: 'Helpers', jobs: '235 jobs available', icon: FaHandsHelping },
  { title: 'Ride', jobs: '235 jobs available', icon: FaCarSide },
  { title: 'Product', jobs: '140 jobs available', icon: FaBoxOpen, },
  { title: 'Cleaning', jobs: '235 jobs available', icon: FaBroom },
  { title: 'Painting', jobs: '235 jobs available', icon: FaPaintBrush },
  { title: 'Graphics & Desig', jobs: '235 jobs available', icon: FaPenNib },
  { title: 'Digital Marketing', jobs: '235 jobs available', icon: FaBullhorn },
  { title: 'Writing & Transla', jobs: '235 jobs available', icon: FaPencilAlt },
  { title: 'Video & Animatio', jobs: '235 jobs available', icon: FaVideo },
  { title: 'Programming &T', jobs: '235 jobs available', icon: FaCode },
  { title: 'Music & Audio', jobs: '235 jobs available', icon: CiMusicNote1 },
  { title: 'Business', jobs: '235 jobs available', icon: FaBuilding },
  { title: 'Photography', jobs: '235 jobs available', icon: FaCamera },
  { title: 'Other', jobs: '235 jobs available', icon: FaEllipsisH },
];

export default categories;

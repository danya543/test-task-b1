import Trash from '@assets/bin.png';
import Book from '@assets/book.svg';
import Booked from '@assets/booked.svg';
import Open from '@assets/burger.png';
import Close from '@assets/burger_cross.png';
import Git from '@assets/github.png';
import Left from '@assets/left-arrow.png';
import Linkedin from '@assets/linkedin.png';
import Mail from '@assets/mail.png';
import Next from '@assets/next.svg';
import NoImage from '@assets/no-image.png';
import Prev from '@assets/prev.svg';
import Right from '@assets/right-arrow.png';
import Telegram from '@assets/telegram.png';

export const Images = {
  Book: Book,
  Booked: Booked,
  OpenMenu: Open,
  CloseMenu: Close,
  Mail: Mail,
  Git: Git,
  Left: Left,
  Linkedin: Linkedin,
  Next: Next,
  NoImage: NoImage,
  Prev: Prev,
  Right: Right,
  Telegram: Telegram,
  Trash: Trash,
};

export const loadingCharactersNum = 5;

export const Socials = [
  { href: 'mailto:dgilev75@gmail.com', icon: Images.Mail },
  { href: 'https://github.com/danya543', icon: Images.Git },
  {
    href: 'https://www.linkedin.com/in/daniil-hiliou-91479a284/',
    icon: Images.Linkedin,
  },
  { href: 'https://t.me/danuchka', icon: Images.Telegram },
];

import { v4 as uuidv4 } from 'uuid';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiScikitlearn,
  SiKeras,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiExpress,
  SiMicrosoftoffice,
  SiCsswizardry,
  SiMongodb,
  SiPostgresql,
  SiMongoose,
  SiBootstrap,
  SiBulma,
  SiGreensock,
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaHtml5, FaPython, FaLinux, FaDocker, FaReact } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { LiaNode } from 'react-icons/lia';

export const arr = [
  {
    title: 'Resume Website',
    description:
      'The website you are looking at. Built with Next.js and Tailwind',
    githubLink: 'https://github.com/will-j-c/resume_website',
    appLink: '/',
    draft: false,
    uniqueId: uuidv4(),
    rank: 9,
    icons: [
      <SiNextdotjs key={uuidv4()} title='Next.js' />,
      <IoLogoJavascript key={uuidv4()} title='Javascript' />,
      <FaHtml5 key={uuidv4()} title='HTML' />,
      <SiTailwindcss key={uuidv4()} title='Tailwind CSS' />,
    ],
  },
  {
    title: 'CQF Exam 1 - Optimal Portfolios, Binomial Option Pricing, VaR, ES',
    description: 'First CQF exam submission exploring portfolio optimisation, binomial option pricing, VaR and ES in Python.',
    githubLink: 'https://github.com/will-j-c/cqf_exam_1',
    appLink: 'https://will-j-c.github.io/cqfexam1/',
    draft: false,
    uniqueId: uuidv4(),
    rank: 6,
    icons: [
      <SiPandas key={uuidv4()} title='Pandas' />,
      <SiNumpy key={uuidv4()} title='Numpy' />,
      <FaPython key={uuidv4()} title='Python' />,
    ],
  },
  {
    title: 'CQF Exam 2 - Monte Carlo Option Pricing, PDE Numerical Solutions and Monte Carlo Integration',
    description: 'Second CQF exam submission exploring numerical methods.',
    githubLink: 'https://github.com/will-j-c/resume_website',
    appLink: 'https://will-j-c.github.io/cqfexam2/',
    draft: false,
    uniqueId: uuidv4(),
    rank: 6,
    icons: [
      <SiPandas key={uuidv4()} title='Pandas' />,
      <SiNumpy key={uuidv4()} title='Numpy' />,
      <FaPython key={uuidv4()} title='Python' />,
    ],
  },
  {
    title: 'CQF Exam 3 - Daily Price Prediction With Random Forest Classifier',
    description: 'Examing the daily Schroders share price and attempting to predict an upward trend using a random forest classifier.',
    githubLink: 'https://github.com/will-j-c/cqf_exam_3',
    appLink: 'https://will-j-c.github.io/cqfexam3/',
    draft: false,
    uniqueId: uuidv4(),
    rank: 7,
    icons: [
      <SiPandas key={uuidv4()} title='Pandas' />,
      <SiNumpy key={uuidv4()} title='Numpy' />,
      <SiScikitlearn key={uuidv4()} title='Scikit-learn' />,
      <FaPython key={uuidv4()} title='Python' />,
    ],
  },
  {
    title:
      'CQF Final Project - Hourly Price Prediction With Recurrent Neural Networks',
    description:
      'The final project report for CQF examining the proplem of hourly upward price prediction using LSTM neural networks.',
    githubLink: 'https://github.com/will-j-c/cqf_final_project_DL',
    appLink:
      'https://will-j-c.github.io/cqffinal/',
    draft: false,
    uniqueId: uuidv4(),
    rank: 8,
    icons: [
      <SiTensorflow key={uuidv4()} title='TensorFlow' />,
      <SiPandas key={uuidv4()} title='Pandas' />,
      <SiNumpy key={uuidv4()} title='Numpy' />,
      <SiKeras key={uuidv4()} title='Keras' />,
      <SiScikitlearn key={uuidv4()} title='Scikit-learn' />,
      <FaPython key={uuidv4()} title='Python' />,
    ],
  },
  {
    title: 'TutorBook',
    description: 'The website you are looking at, made in Next.js',
    githubLink: 'https://github.com/will-j-c/resume_website',
    appLink: '/',
    draft: true,
    uniqueId: uuidv4(),
    rank: 4,
    icons: [
      <SiNextdotjs key={uuidv4()} title='Next.js' />,
      <IoLogoJavascript key={uuidv4()} title='Javascript' />,
      <FaHtml5 key={uuidv4()} title='HTML' />,
      <SiTailwindcss key={uuidv4()} title='Tailwind CSS' />,
    ],
  },
  {
    title: 'Hello World',
    description: 'The website you are looking at, made in Next.js',
    githubLink: 'https://github.com/will-j-c/resume_website',
    appLink: '/',
    draft: true,
    uniqueId: uuidv4(),
    rank: 3,
    icons: [
      <SiNextdotjs key={uuidv4()} title='Next.js' />,
      <IoLogoJavascript key={uuidv4()} title='Javascript' />,
      <FaHtml5 key={uuidv4()} title='HTML' />,
      <SiTailwindcss key={uuidv4()} title='Tailwind CSS' />,
    ],
  },
  {
    title: 'Wandr',
    description: 'A cross between travel log and travel planning that allows users to add places they have been or intend to go and visualise the places on the map with links to each place. Sign up with dummy credentials and try it out!',
    githubLink: 'https://github.com/will-j-c/wandr',
    appLink: 'https://wandr-0h26.onrender.com/',
    draft: false,
    uniqueId: uuidv4(),
    rank: 2,
    icons: [
      <IoLogoJavascript key={uuidv4()} title='Javascript' />,
      <FaHtml5 key={uuidv4()} title='HTML' />,
      <SiBulma key={uuidv4()} title='Bulma' />,
      <SiCsswizardry key={uuidv4()} title='CSS' />,
      <SiMongodb key={uuidv4()} title='MongoDB' />,
      <SiMongoose key={uuidv4()} title='Mongoose' />,
      <SiExpress key={uuidv4()} title='Express' />,
    ],
  },
  {
    title: 'Dungeon of Doom',
    description:
      'The first project I undertook at General Assembly. A fun, macabre little browser based game with animations from GSAP.',
    githubLink:
      'https://github.com/will-j-c/will-j-c.github.io/tree/main/dungeonofdoom',
    appLink: 'https://will-j-c.github.io/dungeonofdoom/',
    draft: false,
    uniqueId: uuidv4(),
    rank: 1,
    icons: [
      <SiGreensock key={uuidv4()} title='GSAP Animation' />,
      <IoLogoJavascript key={uuidv4()} title='Javascript' />,
      <FaHtml5 key={uuidv4()} title='HTML' />,
      <SiBootstrap key={uuidv4()} title='Bootstrap' />,
      <SiCsswizardry key={uuidv4()} title='CSS' />,
    ],
  },
];

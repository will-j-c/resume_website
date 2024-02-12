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
  SiGreensock
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaHtml5, FaPython, FaLinux, FaDocker, FaReact } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { LiaNode } from 'react-icons/lia';

export const arr = [
  {
    title: 'Resume Website',
    description: 'The website you are looking at. Built with Next.js and Tailwind',
    githubLink: 'https://github.com/will-j-c/resume_website',
    appLink: '/',
    draft: false,
    uniqueId: uuidv4(),
    icons: [
      <SiNextdotjs key={uuidv4()} title='Next.js' />,
      <IoLogoJavascript key={uuidv4()} title='Javascript' />,
      <FaHtml5 key={uuidv4()} title='HTML' />,
      <SiTailwindcss key={uuidv4()} title='Tailwind CSS' />,
    ],
  },
  {
    title: 'CQF Exam 1 - Optimal Portfolios',
    description: 'The website you are looking at, made in Next.js',
    githubLink: 'https://github.com/will-j-c/resume_website',
    appLink: '/',
    draft: true,
    uniqueId: uuidv4(),
    icons: [
      <SiNextdotjs key={uuidv4()} title='Next.js' />,
      <IoLogoJavascript key={uuidv4()} title='Javascript' />,
      <FaHtml5 key={uuidv4()} title='HTML' />,
      <SiTailwindcss key={uuidv4()} title='Tailwind CSS' />,
    ],
  },
  {
    title: 'CQF Exam 2 - Option Pricing',
    description: 'The website you are looking at, made in Next.js',
    githubLink: 'https://github.com/will-j-c/resume_website',
    appLink: '/',
    draft: true,
    uniqueId: uuidv4(),
    icons: [
      <SiNextdotjs key={uuidv4()} title='Next.js' />,
      <IoLogoJavascript key={uuidv4()} title='Javascript' />,
      <FaHtml5 key={uuidv4()} title='HTML' />,
      <SiTailwindcss key={uuidv4()} title='Tailwind CSS' />,
    ],
  },
  {
    title: 'CQF Exam 3 - Daily Price Prediction With Random Forest Classifer',
    description: 'The website you are looking at, made in Next.js',
    githubLink: 'https://github.com/will-j-c/resume_website',
    appLink: '/',
    draft: true,
    uniqueId: uuidv4(),
    icons: [
      <SiNextdotjs key={uuidv4()} title='Next.js' />,
      <IoLogoJavascript key={uuidv4()} title='Javascript' />,
      <FaHtml5 key={uuidv4()} title='HTML' />,
      <SiTailwindcss key={uuidv4()} title='Tailwind CSS' />,
    ],
  },
  {
    title:
      'CQF Final Project - Hourly Price Prediction With Recurrent Neural Networks',
    description:
      'The final project report for CQF examining the proplem of hourly upward price prediction using LSTM neural networks.',
    githubLink: 'https://github.com/will-j-c/cqf_final_project_DL',
    appLink:
      'https://htmlpreview.github.io/?https://raw.githubusercontent.com/will-j-c/cqf_final_project_DL/main/report.html',
    draft: false,
    uniqueId: uuidv4(),
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
    icons: [
      <SiNextdotjs key={uuidv4()} title='Next.js' />,
      <IoLogoJavascript key={uuidv4()} title='Javascript' />,
      <FaHtml5 key={uuidv4()} title='HTML' />,
      <SiTailwindcss key={uuidv4()} title='Tailwind CSS' />,
    ],
  },
  {
    title: 'Wandr',
    description: 'The website you are looking at, made in Next.js',
    githubLink: 'https://github.com/will-j-c/resume_website',
    appLink: '/',
    draft: true,
    uniqueId: uuidv4(),
    icons: [
      <SiNextdotjs key={uuidv4()} title='Next.js' />,
      <IoLogoJavascript key={uuidv4()} title='Javascript' />,
      <FaHtml5 key={uuidv4()} title='HTML' />,
      <SiTailwindcss key={uuidv4()} title='Tailwind CSS' />,
    ],
  },
  {
    title: 'Dungeon of Doom',
    description: 'The first project I undertook at General Assembly. A fun, macabre little browser based game with animations from GSAP.',
    githubLink: 'https://github.com/will-j-c/will-j-c.github.io/tree/main/dungeonofdoom',
    appLink: 'https://will-j-c.github.io/dungeonofdoom/',
    draft: false,
    uniqueId: uuidv4(),
    icons: [
      <SiGreensock key={uuidv4()} title='GSAP Animation' />,
      <IoLogoJavascript key={uuidv4()} title='Javascript' />,
      <FaHtml5 key={uuidv4()} title='HTML' />,
      <SiBootstrap key={uuidv4()} title='Bootstrap' />,
      <SiCsswizardry key={uuidv4()} title='CSS' />,
    ],
  },
];

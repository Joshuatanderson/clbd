import moment from 'moment';

import { seminar } from '../models/seminar';
import {
  laurieFlyerThumb,
  liwuFlyerThumb,
  mizgerdFlyerThumb,
  workshopFlyerThumb,
  workshopPdf,
  mizgerdPdf,
  liwuPdf,
  lauriePdf,
} from '../assets/pdfs/index';

// the first seminar is automatically featured

export const seminars: seminar[] = [
  {
    title: 'Proteomics Workshop',
    id: '0',
    code: 'SEMINAR',
    eventType: 'Workshop',
    date: moment('2020-01-24'),
    time: '10 am - 12 pm',
    registrationLink: 'https://redcap.lbrn.lsu.edu/surveys/?s=3EKCN8L4NH',
    registrationDueDate: moment('2020-01-19'),
    pdfLink: workshopPdf,
    speakers:
      'Stephanie Byrum, Ricky Edmonson, Samuel Mackintosh, Alan Tackett',
    speakerUniversities: 'University of Arkansas for Medical Sciences',
    location: 'Louisiana State University (PBS Conference room 3511)',
    image: workshopFlyerThumb,
    link: `/event/${0}`,
  },
  {
    title: 'Pneumonia Biology - Lungs Learn from Experience',
    id: '1',
    code: 'SEMINAR',
    eventType: 'Presentation',
    date: moment('2020-03-20'),
    time: '12 pm',
    speakers: 'Joseph Mizgerd, Sc.D.',
    speakerUniversities: 'Boston University',
    pdfLink: mizgerdPdf,
    location: 'LSU Vet Med Room 1212C',
    image: mizgerdFlyerThumb,
  },
  {
    title: 'Leukocyte-Endothelial Cell Interactions...',
    featured: true,
    id: '2',
    code: 'SEMINAR',
    eventType: 'Presentation',
    date: moment('2020-02-28'),
    time: '12 pm',
    speakers: 'Professor Laurie Kilpatrick, Ph.D.',
    speakerUniversities: 'Temple University',
    pdfLink: lauriePdf,
    location: 'LSU Vet Med Room 1212C',
    image: laurieFlyerThumb,
  },
  {
    title: 'Innate Immune Memory Dynamics...',
    id: '3',
    code: 'SEMINAR',
    eventType: 'Presentation',
    date: moment('2020-02-14'),
    time: '12 pm',
    pdfLink: liwuPdf,
    speakers: 'Professor Liwu Li, Ph.D',
    speakerUniversities: 'Virginia Tech',
    location: 'LSU Vet Med Room 1212B',
    image: liwuFlyerThumb,
  },
];

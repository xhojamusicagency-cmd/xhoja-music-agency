// Single source of truth for the roster shown on /team.
// Add a musician by appending an entry — no JSX changes needed.
// `region` drives which section of the bicoastal Team page they render under.

export type Region = 'la' | 'boston';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  region: Region;
  /** Optional external links surfaced in the bio modal. */
  videoUrl?: string;
  website?: string;
}

export const teamMembers: TeamMember[] = [
  // ─────────────────────────── LOS ANGELES ───────────────────────────
  {
    id: 15,
    name: 'Patrick Boylan',
    role: 'Jazz & Singing Pianist',
    bio: "Patrick Boylan is a Los Angeles–based jazz pianist, singing pianist, music director, and accompanist with a wonderfully varied performance career. He holds a piano bar residency at Tramp Stamp Granny's alongside recurring background-jazz residencies across the city. He has accompanied Broadway auditions and national tours including Hamilton, Phantom of the Opera, and Dirty Dancing, and accompanies musical theater classes at the California School of the Arts. A versatile performer with a warm baritone voice, Patrick brings talent, infectious joy, and energy to corporate events, private parties, weddings, and intimate dinners alike.",
    image: '/patrick-boylan.jpg',
    region: 'la',
    website: 'https://thepatrickboylan.com/musician',
  },

  // ───────────────────────────── BOSTON ─────────────────────────────
  {
    id: 1,
    name: 'Alexander Xhoja',
    role: 'Artistic Director & CEO',
    bio: 'Alexander Xhoja is a Boston-based, twenty-one-year-old pianist who is a recent recipient of a full-ride scholarship to the prestigious Berklee College of Music. With immense dedication and drive, he enriches the lives and hearts of his listeners by implementing emotional depth into his sound.',
    image: '/alexander-xhoja.jpg',
    region: 'boston',
  },
  {
    id: 2,
    name: 'Caelan Quadra',
    role: 'Executive Director',
    bio: "Caelan Quadra manages the Xhoja Music Agency's website, communication, and artist relations, ensuring seamless operations and a professional online presence that connects audiences with the agency's creative vision.",
    image: '/jamiliee-team.jpg',
    region: 'boston',
  },
  {
    id: 3,
    name: 'Elton Xhoja',
    role: 'Chairman of Education & Piano Instructor',
    bio: 'Elton Xhoja, a Berklee-trained educator and performer, leads educational direction at Xhoja Music Agency, crafting clear lesson objectives and inspiring students through creativity, improvisation, and a lifelong love of music.',
    image: '/elton-c.jpg',
    region: 'boston',
  },
  {
    id: 4,
    name: 'Jude Seiner',
    role: 'Bass & Guitar Instructor',
    bio: 'Jude Seiner is a scholarship recipient at Berklee College of Music, where he is currently studying performance and developing his voice as a modern jazz and contemporary musician. Recognized with a full scholarship for his artistic excellence and musical potential, Jude is an active performer known for his strong groove, musical sensitivity, and collaborative approach on stage.',
    image: '/jude-base.jpg',
    region: 'boston',
  },
  {
    id: 5,
    name: 'Kai Kitch',
    role: 'Drum Instructor',
    bio: 'Kai Kitch is a dynamic Boston-based drummer and versatile musician with a strong foundation in jazz and fluency across R&B, pop, and funk. His well-rounded and adaptable approach makes him an excellent fit for a wide range of performances and ensemble settings.',
    image: '/kai-drum.jpg',
    region: 'boston',
  },
  {
    id: 6,
    name: 'Jakob Kobal',
    role: 'Accordion & Piano Instructor',
    bio: "Jakob Kobal is a Slovenian accordionist and pianist based in Boston. Classically and jazz-trained, he moves fluidly between tango, Balkan folk, jazz, and contemporary music — bringing a refined yet creative approach to every performance.",
    image: '/jakob-jamiliee.png',
    region: 'boston',
  },
  {
    id: 7,
    name: 'Ellis Cordaro',
    role: 'Drum Instructor',
    bio: 'Ellis Cordaro is a versatile drummer and performing artist with a deep passion for jazz and global music traditions. Specializing in jazz, pop, R&B, rock, and Latin music, he brings a dynamic and culturally informed approach to every performance. He began his formal jazz training at the New England Conservatory Preparatory School before continuing his studies at the University of Massachusetts Amherst.',
    image: '/ellis-cordaro.jpg',
    region: 'boston',
  },
  {
    id: 8,
    name: 'Calele (Carolina Perez)',
    role: 'Vocals & Trumpet Instructor',
    bio: "Calele (Carolina Perez) is a Panamanian-Chilean Jazz and Latin vocalist and trumpeter currently studying Performance and Contemporary Writing and Production at Berklee College of Music. She has experience teaching children’s music classes and summer workshops (ages 6–15) at Fundación Danilo Pérez, as well as working as a freelance private instructor (in person and online).",
    image: '/calele-perez.jpg',
    region: 'boston',
  },
  {
    id: 9,
    name: 'Gabriel Lopez',
    role: 'Bass & Guitar Instructor',
    bio: 'Gabriel Lopez is a Puerto Rican electric bassist based in Boston. Deeply rooted in Latin music and jazz, his playing is driven by strong groove, time, and musical sensitivity. While bass is his primary instrument, Gabriel also brings a solid background in congas, which strongly informs his rhythmic approach and feel.',
    image: '/gabriel-lopez.jpg',
    region: 'boston',
  },
  {
    id: 10,
    name: 'Meshach Modebe',
    role: 'DJ',
    bio: "Meshach is a Boston-based DJ known for his polished style, sharp musical instincts, and ability to read any room. With experience performing at private events, weddings, and corporate functions, he brings professionalism and energy to every set — curating seamless mixes that keep the dance floor alive from start to finish.",
    image: '/meshach-dj.jpg',
    region: 'boston',
  },
  {
    id: 11,
    name: 'Ella Xhoja',
    role: 'Saxophone Instructor & Performer',
    bio: 'Ella Xhoja is a saxophonist and performer deeply rooted in the jazz scene, with experience from Jazz at Lincoln Center to the Mingus Festival. Featured on WICN\'s Jazz for New England with JazzHers and a member of the Post Underground Jazz Collective, she brings real stage experience into every lesson, helping students develop strong technique, confidence, and a personal artistic voice.',
    image: '/ella-xhoja.jpg',
    region: 'boston',
  },
  {
    id: 12,
    name: 'Jamiliee Haddad Zamorano',
    role: 'Vocal & Songwriting Instructor',
    bio: 'Jamiliee Haddad Zamorano is a trilingual songwriting and vocal coach of Mexican and Syrian descent, professionally shaped by her studies at Berklee College of Music. A classically trained bel canto vocalist, she bridges jazz and contemporary styles, guiding artists through a technique-driven yet emotionally grounded approach.',
    image: '/jamiliee-haddad.jpg',
    region: 'boston',
  },
  {
    id: 13,
    name: 'Dani Calderon',
    role: 'Vocal Instructor',
    bio: 'Dani is a passionate, hardworking and knowledgeable teacher, manager and vocalist! She creates an exciting learning environment that helps young singers build healthy vocal technique, musical literacy, and personal style. She strives to make every student feel like singing can be expressive and freeing, not something to be ashamed about!',
    image: '/dani-calderon.jpg',
    region: 'boston',
  },
  {
    id: 14,
    name: 'Gregory Ayriyan',
    role: 'Violinist & Composer',
    bio: "Gregory Ayriyan is a violinist, soloist, and award-winning composer based in Rhode Island. A graduate of the Baku Conservatory, Gregory brings classical depth and international training to performances ranging from solo recitals to ensemble work. His repertoire spans Bach, Bartók, Stravinsky, and Ravel, alongside his own award-winning compositions. An Armenian-American whose journey took him from Baku to America as a refugee, he brings cultural depth and emotional resonance to every performance.",
    image: '/gregory-ayriyan.jpg',
    region: 'boston',
    videoUrl: 'https://youtu.be/cEgIoQhDtuU',
    website: 'https://gregoryayriyan.wordpress.com',
  },
];

export const laMembers = teamMembers.filter((m) => m.region === 'la');
export const bostonMembers = teamMembers.filter((m) => m.region === 'boston');

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Code2, X, Github, ExternalLink, Linkedin, Instagram, Twitter, MessageCircle, Award, Store, BookOpenCheck, FileSearch, Pill, Network, Briefcase, Star, Utensils, Globe, Loader2 } from 'lucide-react';

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg role="img" className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.541l5.997 5.682c.281.28.618.422.955.422.337 0 .674-.141.956-.422l.955-.955a1.358 1.358 0 0 0 .422-.955c0-.337-.141-.674-.422-.956l-5.997-5.682a3.258 3.258 0 0 1-.582-.773 3.322 3.322 0 0 1-.225-.494 3.42 3.42 0 0 1-.106-.525 3.336 3.336 0 0 1-.037-.582c0-.196.031-.383.087-.562.062-.196.144-.383.25-.562.106-.175.237-.332.387-.469l3.854-4.126 5.406-5.788a1.358 1.358 0 0 0 .422-.955c0-.337-.141-.673-.422-.955l-.955-.956A1.374 1.374 0 0 0 13.483 0zm-1.848 7.575a1.374 1.374 0 0 0-.961.438l-2.736 2.929a1.358 1.358 0 0 0-.422.956c0 .337.141.674.422.956l2.736 2.929c.281.28.618.422.955.422.337 0 .674-.141.956-.422l.955-.955a1.358 1.358 0 0 0 .422-.956c0-.337-.141-.674-.422-.956l-2.736-2.929a3.258 3.258 0 0 1-.582-.773 3.322 3.322 0 0 1-.225-.494 3.42 3.42 0 0 1-.106-.525 3.336 3.336 0 0 1-.037-.582c0-.196.031-.383.087-.562.062-.196.144-.383.25-.562.106-.175.237-.332.387-.469l2.736-2.929a1.358 1.358 0 0 0 .422-.955c0-.337-.141-.673-.422-.955l-.955-.956a1.374 1.374 0 0 0-.961-.438zm6.536 2.394a1.374 1.374 0 0 0-.961.438l-4.515 4.832a1.358 1.358 0 0 0-.422.956c0 .337.141.674.422.956l4.515 4.832c.281.28.618.422.955.422.337 0 .674-.141.956-.422l.955-.955a1.358 1.358 0 0 0 .422-.956c0-.337-.141-.674-.422-.956l-4.515-4.832a3.258 3.258 0 0 1-.582-.773 3.322 3.322 0 0 1-.225-.494 3.42 3.42 0 0 1-.106-.525 3.336 3.336 0 0 1-.037-.582c0-.196.031-.383.087-.562.062-.196.144-.383.25-.562.106-.175.237-.332.387-.469l4.515-4.832a1.358 1.358 0 0 0 .422-.955c0-.337-.141-.673-.422-.955l-.955-.956a1.374 1.374 0 0 0-.961-.438z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const PROJECTS = [
  {
    id: '01',
    title: 'Personal Portfolio',
    icon: Globe,
    category: 'Interactive Founder OS',
    poster: '/proj1.png',
    year: '2026',
    tech: ['React', 'Framer Motion', 'Tailwind', 'Vite'],
    synopsis: 'An interactive personal operating system and digital footprint, visualizing my technical capabilities, founder narrative, and shipped ventures.',
    problem: 'Standard static portfolios fail to communicate engineering depth, product execution philosophy, or the operational scale of moving from an idea to a deployed production environment.',
    features: [
      'Advanced physics-based animations mapping interactive storytelling.',
      'Distinctive cinematic aesthetic moving beyond generic developer templates.',
      'Comprehensive project architecture visualization and operational metrics.',
      'Highly optimized reactive UI prioritizing single-page performance.'
    ],
    challenges: 'Achieving perfectly smooth 60fps layout transitions across complex project state changes while maintaining strict React re-rendering discipline.',
    status: 'Live System',
    liveLink: 'https://yashkoparde.vercel.app',
    githubLink: null,
  },
  {
    id: '02',
    title: 'Wheyo',
    icon: Store,
    category: 'Cloud Kitchen & Food Commerce Ecosystem',
    poster: '/proj2.png',
    year: '2024',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind', 'Supabase'],
    synopsis: 'A cloud kitchen operating platform enabling individuals to launch and scale food businesses without upfront infrastructure costs. Features dual interfaces: a customer checkout and an operational management portal.',
    problem: 'Starting a food business requires high capital for real estate, equipment, and logistics. Existing delivery aggregators only handle distribution and take massive cuts, ignoring the actual operational backend required to scale.',
    features: [
      'Customer-facing online ordering storefronts tailored for independent food brands.',
      'Unified operational management dashboard for kitchen staff to process multi-brand orders.',
      'Automated creator onboarding workflows and financial payout tracking.',
      'Internal admin portal for supply chain and inventory management.'
    ],
    challenges: 'Structuring a robust multi-tenant environment where customer orders are isolated by brand financially, but aggregated operationally in a single physical kitchen and admin backend.',
    status: 'Live / Active Operations',
    liveLink: 'https://wheyo.vercel.app',
    githubLink: null,
  },
  {
    id: '03',
    title: 'SHOT',
    icon: Star,
    category: 'Student Talent Network',
    poster: '/proj3.png',
    year: '2023',
    tech: ['Next.js', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    synopsis: 'A community-driven talent discovery and showcase platform built to highlight exceptional student creators and their event participation.',
    problem: 'Campus creators—designers, developers, and artists—lack a unified, high-visibility platform within the university ecosystem to showcase their work beyond fragmented social media.',
    features: [
      'Rich Creator Ecosystem for hosting centralized digital portfolios.',
      'Event participation tracking and verified digital credentialing.',
      'Curated talent discovery feeds for peer recognition and institutional visibility.',
      'Community building tools fostering cross-disciplinary collaboration.'
    ],
    challenges: 'Architecting a highly visual, media-heavy platform capable of serving unoptimized user-generated content natively without sacrificing Core Web Vitals or rendering performance.',
    status: 'Live Community',
    liveLink: 'https://shot.vercel.app',
    githubLink: null,
  },
  {
    id: '04',
    title: 'Evidentia',
    icon: FileSearch,
    category: 'Information Verification & Management',
    poster: '/proj4.png',
    year: '2025',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    synopsis: 'A digital evidence platform for collecting, organizing, analyzing, and verifying scattered digital evidence and documents into structured, searchable records.',
    problem: 'Verification and audit workflows are often messy. Legal and compliance teams struggle to connect fragmented digital files across drives and emails to establish a verifiable chain of facts.',
    features: [
      'Secure digital document intake and structured validation workflows.',
      'AI-assisted text extraction and chronological timeline organization.',
      'Immutable audit logs and traceability tracking for all uploaded assets.',
      'Advanced querying and semantic search across thousands of structured records.'
    ],
    challenges: 'Ensuring absolute data traceabilility while building a secure and highly optimized indexing system for deep semantic search across unstructured document text.',
    status: 'Live Prototype',
    liveLink: 'https://evidentia-rho.vercel.app',
    githubLink: null,
  },
  {
    id: '05',
    title: 'Yogyata',
    icon: Briefcase,
    category: 'Student Employability Ecosystem',
    poster: '/proj5.png',
    year: '2023',
    tech: ['React', 'Firebase', 'Tailwind', 'Express'],
    synopsis: 'A career readiness and skill-tracking platform designed to bridge the gap between academic curriculum and industry employability.',
    problem: 'Students often lack structured awareness of industry requirements and fail to systematically document their professional growth, leading to poor placement outcomes.',
    features: [
      'Algorithmic opportunity matching based on dynamic skill profiles.',
      'Comprehensive career progression and professional growth tracking.',
      'Structured institutional ecosystem for managing student placement readiness.',
      'Unified portfolio generation from tracked academic and personal projects.'
    ],
    challenges: 'Creating an engagement loop that motivates consistent student skill logging without it feeling like an administrative burden, while maintaining strict data schemas for employer matching.',
    status: 'Live MVP',
    liveLink: 'https://yogyatav0.netlify.app',
    githubLink: null,
  },
  {
    id: '06',
    title: 'Parakh',
    icon: BookOpenCheck,
    category: 'AI Academic Evaluation Platform',
    poster: '/proj6.png',
    year: '2024',
    tech: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    synopsis: 'An AI-powered academic evaluation platform that helps educators automate subjective assessment workflows, reduce manual grading effort, and generate performance insights.',
    problem: 'Educators spend countless hours manually grading written assessments, which causes feedback delays and creates inconsistencies in evaluation standards across institutions.',
    features: [
      'AI-assisted parsing and evaluation of written answers against customizable instructor rubrics.',
      'End-to-end automated grading workflows with human-in-the-loop validation.',
      'Granular student performance analytics and class-wide insight generation.',
      'Institutional dashboard for handling batch processing of student submissions.'
    ],
    challenges: 'Tuning the evaluation prompts to minimize hallucination on subjective answers, ensuring the system assists rather than replaces the educator\'s judgment while maintaining high throughput.',
    status: 'Live MVP',
    liveLink: 'https://parakh-farway.vercel.app',
    githubLink: null,
  },
  {
    id: '07',
    title: 'Pharmix',
    icon: Pill,
    category: 'B2B Pharma Marketplace',
    poster: '/proj7.png',
    year: '2025',
    tech: ['React', 'Supabase', 'Tailwind CSS', 'Node.js'],
    synopsis: 'A pharmaceutical supply-chain and procurement marketplace connecting local pharmacies directly with major suppliers to streamline procurement workflows.',
    problem: 'Local pharmacies rely on fragmented channels like phone calls or WhatsApp for restocking, leading to poor inventory visibility, supply delays, and routine life-threatening stockouts.',
    features: [
      'Centralized B2B marketplace architecture for structured vendor discovery.',
      'Real-time inventory visibility and supplier catalog synchronization.',
      'Streamlined digital procurement workflows and automated order routing.',
      'Comprehensive order lifecycle and delivery logistics management.'
    ],
    challenges: 'Handling complex B2B cart logic where a single pharmacy checkout routes sub-orders to multiple regional suppliers simultaneously with distinct invoicing and tracking.',
    status: 'Live Platform',
    liveLink: 'https://pharmix.vercel.app',
    githubLink: null,
  },
  {
    id: '08',
    title: 'Conserve MessBot',
    icon: Utensils,
    category: 'Predictive Food Operations',
    poster: '/proj8.png',
    year: '2023',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    synopsis: 'A smart hostel mess management platform that optimizes food procurement and reduces institutional waste through predictive attendance mapping.',
    problem: 'Hostel mess operators cook based on static headcount estimates, resulting in massive daily food wastage when students skip meals, and severe shortages during unexpected surges.',
    features: [
      'Predictive meal tracking mapping student attendance to precise procurement needs.',
      'Direct communication channel bridging operators and the student body.',
      'Granular waste reduction workflows and daily consumption analytics.',
      'Student utility dashboard for menu checking and absence logging.'
    ],
    challenges: 'Designing a frictionless absence-logging UX that students actually use daily; behavior change was harder than the complex scaling of the data pipeline.',
    status: 'Live Utility',
    liveLink: 'https://messbot.netlify.app',
    githubLink: null,
  },
  {
    id: '09',
    title: 'Job Bridge',
    icon: Network,
    category: 'Job Aggregation & Hiring Bridge',
    poster: '/proj9.png',
    year: '2024',
    tech: ['React', 'Vite', 'Tailwind', 'Firebase'],
    synopsis: 'A job and opportunity aggregation platform structures the entry-level hiring ecosystem by bridging students with actively recruiting employers.',
    problem: 'Campus recruitment is highly fragmented across disparate portals and untracked emails. Students lack a centralized opportunity pipeline, while employers struggle with unstructured application data.',
    features: [
      'Unified employer-student bridge for continuous opportunity discovery.',
      'Standardized candidate application tracking and recruitment workflows.',
      'Real-time job aggregation engine scraping diverse career portals.',
      'Institutional dashboarding for transparent campus placement metrics.'
    ],
    challenges: 'Developing a flexible data schema capable of handling wildly divergent job descriptions and variable candidate profiles without forcing a rigid, high-friction onboarding process.',
    status: 'Live Portal',
    liveLink: 'https://jobbridgevtu.vercel.app',
    githubLink: null,
  }
];

function ProjectCard({ project, isActive, isHidden, onClick, observerRef }: any) {
  const ProjectIcon = project.icon;
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      layoutId={`project-container-${project.id}`}
      ref={(el) => {
        targetRef.current = el;
        if (observerRef) observerRef(el);
      }}
      data-project-id={project.id}
      onClick={onClick}
      className={`relative w-full rounded-xl overflow-hidden transition-all duration-300 ease-out cursor-pointer group
        ${isActive ? 'scale-[1.01] z-20 shadow-[0_0_20px_rgba(212,175,55,0.15)] ring-1 ring-gold/20' : 'scale-100 z-10'}
        ${isHidden ? 'opacity-0 pointer-events-none !blur-none !grayscale-0' : 'opacity-100'}
      `}
    >
      <div className="relative aspect-[4/5] md:aspect-[21/9] w-full bg-ink overflow-hidden">
        
        {!imageLoaded && (
          <div className="absolute inset-0 bg-ink z-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-gold animate-spin opacity-50" />
          </div>
        )}

        <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%] z-0">
          <motion.img 
            layoutId={`project-image-${project.id}`}
            src={project.poster} 
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-700
              ${isActive ? 'scale-[1.03]' : 'scale-100'} 
              ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent opacity-90 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent opacity-90 z-10 pointer-events-none" />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 md:p-16 flex flex-col justify-end z-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl min-w-0 flex-1">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <Code2 className="w-4 h-4 text-gold shrink-0" />
                <span className="text-gold tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs uppercase font-semibold break-words max-w-full">
                  {project.category}
                </span>
              </div>
              
              <motion.h2 layoutId={`project-title-${project.id}`} className="text-[clamp(1.5rem,4vw,4.5rem)] font-serif mb-4 drop-shadow-lg flex items-center md:items-start gap-3 md:gap-6 break-words whitespace-normal leading-tight">
                <ProjectIcon className="w-8 h-8 md:w-12 md:h-12 text-white/80 shrink-0 md:mt-2" strokeWidth={1.5} />
                <span>{project.title}</span>
              </motion.h2>
              
              <p className="text-white/70 text-sm md:text-lg max-w-2xl leading-relaxed mb-6">
                {project.synopsis}
              </p>

              <div className="flex flex-wrap gap-3 text-[10px] md:text-xs tracking-widest text-white/60 uppercase">
                {project.tech.map((t: string) => (
                  <span key={t} className="border border-white/20 px-3 py-1.5 rounded-sm backdrop-blur-sm bg-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
              {project.liveLink && (
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white text-ink px-8 py-4 rounded-sm font-bold tracking-widest text-xs uppercase transition-all duration-500 hover:bg-gold opacity-100 translate-y-0"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              )}
              {project.githubLink && (
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white px-8 py-4 rounded-sm font-bold tracking-widest text-xs uppercase transition-all duration-500 hover:bg-white/10 hover:border-white opacity-100 translate-y-0"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Intro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2500);
    const t2 = setTimeout(() => setPhase(2), 6000);
    const t3 = setTimeout(onComplete, 7000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
        >
          {phase === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full h-full flex items-center justify-center overflow-hidden"
            >
              {/* Cinematic Flames Effect */}
              <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-60 mix-blend-screen">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bottom-[-50px] rounded-full blur-2xl"
                    style={{
                      width: Math.random() * 150 + 100,
                      height: Math.random() * 150 + 100,
                      left: `${Math.random() * 100}%`,
                      background: `radial-gradient(circle, rgba(255,120,0,0.8) 0%, rgba(255,30,0,0.4) 40%, rgba(0,0,0,0) 70%)`,
                    }}
                    animate={{
                      y: [0, -Math.random() * 400 - 200],
                      x: [0, Math.random() * 100 - 50],
                      opacity: [0, 0.8, 0],
                      scale: [1, Math.random() * 1.5 + 1],
                    }}
                    transition={{
                      duration: Math.random() * 2 + 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
              
              <div 
                className="text-xs text-white/50 uppercase font-sans text-center px-4 relative z-10"
                style={{ letterSpacing: '0.4em', marginRight: '-0.4em' }}
              >
                Yash Koparde / Software Engineer
              </div>
            </motion.div>
          )}

          {phase === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="relative flex flex-col items-center justify-center w-full"
             >
              <h1
                  className="text-5xl md:text-8xl font-serif text-white text-center drop-shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                  style={{ letterSpacing: "0.2em", marginRight: "-0.2em" }}
              >
                PROJECT SHOWCASE
              </h1>

              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gold/10 to-transparent mix-blend-overlay"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Showcase() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const observerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  // Scroll-based materialization/dematerialization
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-project-id');
          if (entry.isIntersecting) {
            if (id) setActiveId(id);
          } else {
            setActiveId((prev) => (prev === id ? null : prev));
          }
        });
      },
      {
        root: null,
        rootMargin: '-25% 0px -25% 0px',
        threshold: 0,
      }
    );

    const currentRefs = observerRefs.current;
    Object.values(currentRefs).forEach((ref) => {
      if (ref) observer.observe(ref as Element);
    });

    return () => {
      Object.values(currentRefs).forEach((ref) => {
        if (ref) observer.unobserve(ref as Element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-ink text-white selection:bg-gold/30 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full p-6 md:p-10 z-40 mix-blend-difference pointer-events-none">
        <div className="font-serif text-2xl tracking-widest font-bold text-white">YK.</div>
      </header>

      {/* Social Icons (Absolute, scrolls with page) */}
      <div className="absolute top-0 right-0 p-6 md:p-10 z-40 flex gap-4 md:gap-6 pointer-events-auto mix-blend-difference">
        <a href="https://github.com/yashkoparde" target="_blank" rel="noreferrer" className="text-white hover:text-gold transition-colors" title="GitHub"><Github className="w-6 h-6" /></a>
        <a href="https://www.linkedin.com/in/yashkoparde" target="_blank" rel="noreferrer" className="text-white hover:text-gold transition-colors" title="LinkedIn"><Linkedin className="w-6 h-6" /></a>
        <a href="https://leetcode.com/u/yashkoparde" target="_blank" rel="noreferrer" className="text-white hover:text-gold transition-colors" title="LeetCode"><LeetCodeIcon className="w-6 h-6" /></a>
        <a href="https://wa.me/918778168629" target="_blank" rel="noreferrer" className="text-white hover:text-gold transition-colors" title="WhatsApp"><WhatsAppIcon className="w-6 h-6" /></a>
        <a href="https://instagram.com/am_yashhh" target="_blank" rel="noreferrer" className="text-white hover:text-gold transition-colors" title="Instagram"><Instagram className="w-6 h-6" /></a>
        <a href="https://x.com/yashkoparde0" target="_blank" rel="noreferrer" className="text-white hover:text-gold transition-colors" title="Twitter"><Twitter className="w-6 h-6" /></a>
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-serif tracking-tighter leading-none drop-shadow-2xl">
            DEVELOPER
          </h1>
          <p 
            className="text-gold mt-6 md:mt-10 uppercase text-xs md:text-sm font-semibold"
            style={{ letterSpacing: '0.5em', marginRight: '-0.5em' }}
          >
            2023&ndash;2026
          </p>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Extended Intro Text Section to increase page length */}
      <section className="h-[50vh] flex items-center justify-center px-6 md:px-24">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="text-white/40 text-xl md:text-3xl lg:text-4xl font-serif text-center max-w-4xl leading-relaxed"
        >
          Student founder and full-stack engineer building <span className="text-white/80">real products</span> with a focus on <span className="text-white/80">scalable operations</span> and <span className="text-white/80">automation infrastructure</span>.
        </motion.p>
      </section>

      {/* Projects List */}
      <section className="px-4 md:px-12 lg:px-24 pb-32 pt-16 max-w-[120rem] mx-auto flex flex-col gap-32 md:gap-48 lg:gap-64">
        {PROJECTS.map((project) => {
          const isActive = activeId === project.id;
          const isHidden = selectedProject?.id === project.id;

          return (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={isActive}
              isHidden={isHidden}
              onClick={() => setSelectedProject(project)}
              observerRef={(el) => {
                if (el) observerRefs.current[project.id] = el;
              }}
            />
          );
        })}
      </section>

      {/* Modal View */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-ink/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-container-${selectedProject.id}`}
              className="relative w-full max-w-6xl h-[85vh] bg-ink rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] ring-1 ring-gold/30 flex flex-col md:flex-row cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Side with Parallax */}
              <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
                <motion.img 
                  layoutId={`project-image-${selectedProject.id}`}
                  src={selectedProject.poster}
                  alt={selectedProject.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{ 
                    scale: [1.05, 1.1, 1.05],
                    y: ["0%", "-2%", "0%"]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ink via-ink/20 to-transparent" />
              </div>

              {/* Content Side */}
              <div className="relative w-full md:w-1/2 h-full p-8 md:p-12 overflow-y-auto hide-scrollbar flex flex-col bg-ink">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/50 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4 mt-8 md:mt-0 flex-wrap">
                  <Code2 className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-gold tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs uppercase font-semibold break-words max-w-full">
                    {selectedProject.category}
                  </span>
                </div>

                <motion.h2 layoutId={`project-title-${selectedProject.id}`} className="text-[clamp(1.5rem,4vw,4.5rem)] font-serif mb-8 drop-shadow-lg flex items-center md:items-start gap-3 md:gap-4 break-words whitespace-normal leading-tight">
                  <selectedProject.icon className="w-8 h-8 md:w-10 md:h-10 text-white/80 shrink-0 md:mt-2" strokeWidth={1.5} />
                  <span>{selectedProject.title}</span>
                </motion.h2>

                <div className="space-y-8">
                  <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <span className="bg-white/10 px-3 py-1 rounded text-xs font-mono uppercase tracking-widest text-white/80 border border-white/20">Status: {selectedProject.status}</span>
                  </div>

                  <section>
                    <h3 className="text-gold text-[10px] tracking-[0.2em] uppercase mb-3 border-b border-white/10 pb-2">Synopsis</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{selectedProject.synopsis}</p>
                  </section>

                  <section>
                    <h3 className="text-gold text-[10px] tracking-[0.2em] uppercase mb-3 border-b border-white/10 pb-2">Problem Solved</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{selectedProject.problem}</p>
                  </section>

                  <section>
                    <h3 className="text-gold text-[10px] tracking-[0.2em] uppercase mb-3 border-b border-white/10 pb-2">Core Features & Workflows</h3>
                    <ul className="list-disc list-outside ml-4 text-white/70 text-sm leading-relaxed space-y-2">
                      {selectedProject.features.map((f: string, i: number) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-gold text-[10px] tracking-[0.2em] uppercase mb-3 border-b border-white/10 pb-2">Complexity & Learnings</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{selectedProject.challenges}</p>
                  </section>

                  <section>
                    <h3 className="text-gold text-[10px] tracking-[0.2em] uppercase mb-3 border-b border-white/10 pb-2">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t: string) => (
                        <span key={t} className="border border-white/20 px-3 py-1.5 rounded-sm text-[10px] tracking-widest text-white/60 uppercase bg-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </section>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    {selectedProject.liveLink && (
                      <a 
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white text-ink px-8 py-4 rounded-sm font-bold tracking-widest text-xs uppercase hover:bg-gold transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a 
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-transparent border border-white/30 text-white px-8 py-4 rounded-sm font-bold tracking-widest text-xs uppercase hover:bg-white/10 hover:border-white transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Footer */}
      <footer className="py-12 text-center text-white/30 text-xs tracking-widest uppercase border-t border-white/10">
        &copy; {new Date().getFullYear()} Yash Koparde. All Rights Reserved.
      </footer>
    </div>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
      
      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Showcase />
        </motion.div>
      )}
    </>
  );
}

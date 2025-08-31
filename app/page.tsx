"use client";
import DarkVeil from "./components/DarkVeil/DarkVeil";
import TextType from "./components/TextType/TextType";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Navbar, NavBody, NavItems, MobileNav, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/app/components/ui/navbar";
import BounceCards from "./components/BounceCards/BounceCards";
import TextPressure from "./components/TextPressure/TextPressure";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import CurvedLoop from "./components/CurvedLoop/CurvedLoop";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";
import { AnimatedTestimonials } from "./components/ui/animated-testimonials";
import LogoLoop from "./components/LogoLoop/LogoLoop";
import { SiCplusplus, SiLeetcode, SiPython, SiTailwindcss } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./icons/icon";

export default function Home() {
  const [isOnMobile, setIsOnMobile] = useState(() => window.innerWidth < 640);
  // Nav

  const navItems = [
    {
      name: "Who is Naft?",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#project",
    },
    {
      name: "Skills",
      link: "#skills",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrollPass, setIsScrollPass] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScrollPass(true);
        setIsOnMobile(window.innerWidth < 640);
        console.log(isOnMobile);
      } else {
        setIsScrollPass(false);
      }
    });
    window.addEventListener("resize", () => {
      setIsOnMobile(window.innerWidth < 640);
    });
  });

  // Bounce Img
  const images = ["/img/p1.jpg", "/img/p2.jpg", "/img/a5.jpg", "/img/p3.jpg", "/img/p4.jpg"];

  const transformStyles = ["rotate(5deg) translate(-150px)", "rotate(0deg) translate(-70px)", "rotate(-5deg)", "rotate(5deg) translate(70px)", "rotate(-5deg) translate(150px)"];
  // Skills Container
  const testimonials = [
    {
      quote: "Math is the language of logic that shapes the way I think.",
      name: "Math",
      designation: "I'm pretty confident with numbers",
      src: "/img/math.jpg",
    },
    {
      quote: "I kinda expert to understand docs from various frameworks",
      name: "English",
      designation: "I'd like to watch 3brown1blue",
      src: "/img/english.jpg",
    },
    {
      quote: "With Python, I turn ideas into simple and practical solutions.",
      name: "Basic Python",
      designation: "Is it snake?",
      src: "/img/py.png?",
    },
    {
      quote: "Tailwind CSS helps me bring structure and style to the web with ease.",
      name: "Tailwind CSS",
      designation: "Please dont ask bootstrap",
      src: "/img/tailwind.png",
    },
    {
      quote: "C teaches me the fundamentals of programming and problem-solving.",
      name: "Basic C",
      designation: "Why not cpp?",
      src: "/img/clang.png",
    },
  ];
  // logo loop
  const techLogos = [
    { node: <SiCplusplus />, title: "Cpp", href: "https://isocpp.org/ " },
    { node: <SiLeetcode />, title: "Leetcode", href: "https://leetcode.com/" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];
  return (
    <div className="wrapper scroll-smooth">
      <div className={`notMobile fixed bg-slate-200 w-full h-full ${isOnMobile ? "hidden" : "block"}`}>
        <div className="textContent flex gap-7 h-full w-1/2 m-auto">
          <h1 className="m-auto text-red-600 font-bold flex-shrink text-3xl">ONLY ON MOBILE!</h1>
          <div className="line shrink-0 grow-0 bg-slate-800 h-28 w-0.5 m-auto"></div>
          <p className="m-auto w-48 shrink-0">Maff bangett, masih belum sempat update :c</p>
        </div>
      </div>
      <div className={`porto min-h-screen w-full bg text-slate-200 overflow-x-hidden scroll-smooth sm:accent-yellow-400 ${isOnMobile ? "block" : "hidden"}`}>
        <div className="navBar fixed top-0 items-center z-[9999] w-full">
          <div id="nav" className="bg-transparent z-50">
            <Navbar>
              {/* Desktop Nav */}
              <NavBody className="bg-slate-800">
                <NavbarButton>Naftalists.</NavbarButton>
                <NavItems items={navItems} />
                <div className="flex items-center gap-4">
                  <NavbarButton variant="secondary">Connect</NavbarButton>
                  <NavbarButton variant="primary">My Resume :D</NavbarButton>
                </div>
              </NavBody>

              {/* Mobile Nav */}
              <MobileNav className={`bg-transparent   backdrop-blur-3xl  border-amber-400 ${isScrollPass ? "border-t-2" : "border-none"}`}>
                <MobileNavHeader>
                  <NavbarButton variant="secondary" className="text-amber-400">
                    Naftalists.
                  </NavbarButton>
                  <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                </MobileNavHeader>

                <MobileNavMenu className=" bg-slate-950 border-b-2 border-l-2 border-r-2 border-amber-400 shadow" isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                  {navItems.map((item, idx) => (
                    <a key={`mobile-link-${idx}`} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className="relative text-slate-200">
                      <span className="block">{item.name}</span>
                    </a>
                  ))}
                  <div className="flex w-full flex-col gap-4">
                    <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="dark" className="w-full" target="_self" href="#connect">
                      Get Connect!
                    </NavbarButton>
                    <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="dark" className="w-full" target="_blank" href="/cv_naftali_3125600106.pdf">
                      My Resume :D
                    </NavbarButton>
                  </div>
                </MobileNavMenu>
              </MobileNav>
            </Navbar>

            {/* Navbar */}
          </div>
        </div>
        <div className="header1 relative  ">
          <div className="backgroundwarp h-screen w-screen">
            <div className="backgroundheader -z-10 absolute top-0 h-full w-full ">
              <DarkVeil />
            </div>
            <div className="heroText flex h-screen top-0 ">
              <h1 className="inline-block grow-0 flex-none my-auto text-6xl font-bold mx-5 ">
                Hello <br /> <TextType className="inline-block" text={["World!", "せかい!", "Welt!", "Monde!", "세계!", "العالم!", "世界!", "Wereld!"]} typingSpeed={200} deletingSpeed={100} pauseDuration={1500} cursorCharacter="_" />
              </h1>
              <div className="vLine  h-20 w-0.5 absolute top-80 left-1/2 inline-block my-auto mx-auto bg-slate-100"></div>
              <p className="inline-block absolute top-80 left-1/2 px-3 mx-3 text-xl">For Who dares to know!</p>
              <div className="imgList  h-1/4 w-full absolute bottom-12">
                <BounceCards
                  className="custom-bounceCards mx-auto"
                  images={images}
                  containerWidth={500}
                  containerHeight={250}
                  animationDelay={1}
                  animationStagger={0.08}
                  easeType="elastic.out(1, 0.5)"
                  transformStyles={transformStyles}
                  enableHover={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="about h-screen bg-slate-800">
          <h1>
            <TextPressure text="Who is Naft?" flex={true} alpha={false} stroke={true} width={true} weight={true} italic={true} textColor="#000000" strokeColor="#ffffff" minFontSize={36} />
          </h1>
          <div className="p-7 h-screen bg-slate-800 w-full">
            <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
              Lorem ipsum JK.... I’m undergraduate student @PENS with Informatics Engineering programme An ordinary person with kinds of extra- I might be born yesterday, but my passion in Informatics isn’t questionable ofc this page’s here
              to show u what can i do(although its just baby level :p)
            </ScrollReveal>
          </div>
        </div>
        <div id="project" className="about min-h-screen bg-slate-700 drop-shadow-[0_-3px_12px_rgba(0,0,0,0.25)]">
          <div className="tes w-full h-36   top-0  drop-shadow-[0_-3px_4px_rgba(0,0,0,0.25)]">
            <CurvedLoop marqueeText="My ✦ Projects ✦ " speed={1} curveAmount={500} direction="left" interactive={false} className="max-w-full max-h-full text-amber-400" />
          </div>
          <div className="cardItems min-h-screen flex flex-wrap gap-7 ">
            <SpotlightCard className="h-56 w-2/3 max-w-lg container mx-auto bg-slate-700 shadow-xl border-slate-700" spotlightColor="rgba(255, 225, 255, 0.2)">
              <h1 className="font-bold my-2 text-xl">OSIS Identity Online Card</h1>
              <p className="text-sm">OSIS identity pages for each members that can be scanned through barcode on a physical card. ex: osis/naftali.com. this project was made due the eficiency needs in internal budget.</p>
            </SpotlightCard>
            <SpotlightCard className="h-56 w-2/3 max-w-lg container mx-auto bg-slate-800 shadow-xl border-slate-700" spotlightColor="rgba(255, 225, 255, 0.2)">
              <h1 className="font-bold my-2 text-xl">AI Chat Box</h1>
              <p className="text-sm">An experiment with AI model especially with Gemini API--assisted by Gemini</p>
            </SpotlightCard>
            <SpotlightCard className="h-56 w-2/3 max-w-lg container mx-auto bg-slate-700 shadow-xl border-slate-700 mb-4" spotlightColor="rgba(255, 225, 255, 0.2)">
              <h1 className="font-bold my-2 text-xl">UKM Projects? </h1>
              <p className="text-sm">Perhaps, we can collaborate to make somethings new?</p>
            </SpotlightCard>
          </div>
        </div>
        <div id="skills" className="min-h-screen">
          <h1>
            <TextPressure text="Skills" flex={true} alpha={false} stroke={true} width={true} weight={true} italic={true} textColor="#000000" strokeColor="#ffffff" minFontSize={36} />
          </h1>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
          <div style={{ height: "200px", position: "relative", overflow: "hidden", color: "#000000" }}>
            <LogoLoop logos={techLogos} speed={30} direction="left" logoHeight={48} gap={40} pauseOnHover={false} scaleOnHover={false} fadeOut={true} fadeOutColor="#ffffff" ariaLabel="Technology" />
          </div>
        </div>
        <div id="connect" className="min-h-screen h-screen bg-slate-800 relative">
          <h1>
            <TextPressure text="Connect!" flex={true} alpha={false} stroke={true} width={true} weight={true} italic={true} textColor="#000000" strokeColor="#ffffff" minFontSize={36} />
          </h1>
          <img src="/img/p5.jpg" className="block mx-auto w-36 my-7 rounded-full  shadow-amber-400 border border-amber-400 hover:border-t-4 transition-all"></img>
          <h1 className="text-center font-bold text-2xl">Naftali</h1>
          <div className="social w-1/3 mx-auto my-7">
            <div className="socialItems flex ">
              <a
                href="https://github.com/Naftsira"
                className="mx-auto bg-slate-800 text-xl shadow-md border rounded-lg border-slate-700 px-[0.6rem] py-2 hover:shadow-amber-500 hover:border-amber-400 transition-all duration-150 ease-out delay-75 hover:text-amber-500 hover:scale-110 "
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=theo.sirait28@gmail.com&su=Inquiry%20Request&body=Hello%20Naftali%20...&bcc="
                target="_blank"
                className="mx-auto bg-slate-800 text-xl shadow-md border rounded-lg border-slate-700 px-[0.6rem] py-2 hover:shadow-amber-500 hover:border-amber-400 transition-all duration-150 ease-out delay-75 hover:text-amber-500 hover:scale-110"
              >
                <FontAwesomeIcon icon="envelope" />
              </a>
              <a
                href="https://www.linkedin.com/naftalists"
                target="_blank"
                className="mx-auto bg-slate-800 text-xl shadow-md border rounded-lg border-slate-700 px-[0.6rem] py-2 hover:shadow-amber-500 hover:border-amber-400 transition-all duration-150 ease-out delay-75 hover:text-amber-500 hover:scale-110"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
            </div>
          </div>
          <div className="resume p-3 mx-auto w-1/2 border border-slate-700 shadow-md rounded-full text-center hover:shadow-amber-500 hover:border-amber-400 transition-all duration-150 ease-out delay-75 hover:text-amber-500 hover:scale-110">
            <a href="/cv_naftali_3125600106.pdf" target="_blank" rel="noopener norefferer">
              <h1>Download My Resume :D</h1>
            </a>
          </div>
          <div className="copy mx-auto w-full absolute bottom-0">
            <p className=" text-center text-sm mb-5">
              Made with 💖 by{" "}
              <a href="https://instagram.com/naftalists" target="_blank">
                <u>@naftalists</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

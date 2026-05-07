import "./App.css";
import Hero  from "./Hero";




function App() {
  const projects = [
  {
    id: 1,
    title: "Coffee shop Website",
    description: "เว็บไซต์ร้านกาแฟที่มีการออกแบบทันสมัยและใช้งานง่ายมีระบบการสั่งซื้อออนไลน์และแชทผ่านไลน์",
    image: "/images/coffee-cafe.jpg",
    link: "https://coffee-website-ppo1.vercel.app/"
  },
  {
    id: 2,
    title: "Sign Shop Website",
    description: "เว็บไซต์ธุรกิจร้านป้ายโฆษณา",
    image: "/images/sign-shop.png",
    link: "https://sign-shop.vercel.app/"
  }
];
  return (
    <main className="portfolio-paage">
      <section className="hero-section">
        <Hero />
      </section>

     

      <section className="about-section">
        <div className="about-bg about-bg-1"></div>
        <div className="about-bg about-bg-2"></div>

        <p className="about-label">เกี่ยวกับผม</p>
        <h2 className="about-title">  นักพัฒนาเว็บไซด์</h2>

        <p className="about-description">
          ผมเป็นนักพัฒนาเว็บไซด์ ที่มีประสบการณ์และเชี่ยวชาญในด้านการออกแบบและพัฒนาเว็บไซด์ ที่เรียบง่ายและช่วยให้ธุระกิจเติบโตได้จริง
        </p>

        <div className="skill-grid">
          <div className="skill-card purple">
          <div className="skill-icon">💻</div>
          <h3>Frontend</h3>
          <span></span>
          <p>สร้างประสบการณ์ที่ดีและทันสมัยด้วยเทคโนโลยี่ฝั่งหน้าเว็บไซด์</p>
          <div className="skill-tags">
            <small>React</small>
            <small>HTML</small>
            <small>CSS</small>
          </div>
        </div>

        <div className="skill-card orange">
           <div className="skill-icon">⚡</div>
           <h3>Backend</h3>
           <span></span>
           <p>พัฒนา API และระบบหลังบ้านที่มีประสิทธิภาพและเสถียร</p>
           <div className="skill-tags">
            <small>Node.js</small>
            <small>Express</small>
           </div>
        </div>

        <div className="skill-card pink">
          <div className="skill-icon">🔥</div>
          <h3>Tools</h3>
          <span></span>
          <p>เครื่องมือที่ช่วยให้การพัฒนารวดเร็วและมีประสิทธิภาพ</p>
          <div className="skill-tags">
            <small>Git</small>
             <small>Firebase</small>
              <small>Vercel</small>
          </div>
          </div> 
          </div>
      </section>

      <section className="projects">
        <h2>ผลงานของผม</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} /> 

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a href={project.link} target="_blank" rel="noreferrer">
                  ดูเว็บไซต์
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>ติดต่อผม</h2>
        <p>
          หากคุณต้องการเว็บไซด์สวยๆ สำหหรับธุรกิจของคุณ ติดต่อผมได้เลยครับ
        </p>
         
         <div className="contact-actions">
          <a href="https://line.me/ti/p/~satitMe" className="btn primary"
            target="_blank"
            rel="noreferrer"
            className="btn primary">
            ติดต่อผ่านไลน์
          </a>

          <a href="tel:0815588630" className="btn secondary">
              📞 โทรหาเรา
          </a>
            
         </div>
      </section>
    </main>
  )
}

export default App;
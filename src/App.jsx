import "./App.css";




function App() {
  const projects = [
  {
    id: 1,
    title: "Coffee shop Website",
    description: "เว็บไซต์ร้านกาแฟที่มีการออกแบบทันสมัยและใช้งานง่ายมีระบบการสั่งซื้อออนไลน์และแชทผ่านไลน์",
    image: "/images/coffee-cafe.jpg",
    link: "https://coffee-shop-website.vercel.app/"
  },
  {
    id: 2,
    title: "Sign Shop Website",
    description: "เว็บไซต์ธุรกิจร้านป้ายโฆษณา",
    image: "/images/front-shop.jpg",
    link: "https://sign-shop.vercel.app/"
  }
];
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">สวัสดีครับ ผมตุ่ย</p>

        <h1>
          ผู้สร้างเว็บไซต์ สวยงามและใช้งานง่าย สำหรับ ธุรกิจขนาดเล็กและขนาดกลาง
        </h1>

        <p className="heroText">
          ผมสร้างเว็บไซต์ที่สะอาดตาและทันสมัยสำหรับช่วยธุรกิจของคุณให้มีความน่าเชื่อถือและดึงดูดลูกค้าใหม่ๆ มีความเป็นมืออาชีพ
        </p>

        <div className="heroActions">
          <a href="#projects" className="btn primary">
            ดูผลงานของผม
          </a>
          <a href="http://line.me/ti/p/~satitMe" className="btn secondary">
            ติดต่อผมผ่านไลน์
          </a>
        </div>
      </section>

      <section className="about">
        <h2>เกี่ยวกับผม</h2>
        <p>
          ผมเป็นนักพัฒนาเว็บไซต์ ที่มีประสบการณ์และมีความเชี่ยวชาญในด้านการออกแบบและพัฒนาเว็บไซต์  ที่ชอบพัฒนาเว็บไซต์ที่เรียบง่ายและช่วยให้ธุรกิจเติบโตได้จริง
        </p>

        <div className="aboutBox">
          <div>
            <h3>💻 Frontend</h3>
            <p>React, HTML, CSS</p>
          </div>

          <div>
            <h3>⚡ Backend</h3>
            <p>Node.js, Express</p>
          </div>
          
          <div>
            <h3>🔥 Tools</h3>
            <p>Git, Firebase, Vercel</p>
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
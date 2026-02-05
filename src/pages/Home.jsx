import React,{ useState, useEffect }  from 'react';
import '../styles/Home.css';


const heroImages = [
  'https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/475385491_122182334012094208_1609528450796256369_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHTQEeMIfUFw-OqMm9eGMWcEMhzHefhvuEQyHMd5-G-4XghhOe4tTtFoMnq3O5tuzGVARFQ3KR0Tk1pi0YGCRc9&_nc_ohc=xxOV6mduyNgQ7kNvwF63oBS&_nc_oc=Adlx60t8jmSVKi_1lcbtIpJJ4kdcSejMc_-l7YD1XfI5NuOBvxZ3Nb-o3MJTViGk12Y&_nc_zt=23&_nc_ht=scontent.fnbo1-1.fna&_nc_gid=vjRZuRKXrSDNT5pLIyLxLQ&oh=00_AftqQCTEnrL0ZnW5YUNQtK2vitz8PzVBVnjwpsvwqDzmXA&oe=6988B30A',
  'https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/487513352_122191207670094208_5466276275303908927_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeECKrnRepoR9XpxoB3CWnNQKC7FqIbyRv0oLsWohvJG_V_XFzhU001aAr_LNWd23_MkMtg0pQgpWlIYOq2wgJXr&_nc_ohc=xXZPs5mrKeQQ7kNvwFov9Hu&_nc_oc=Adl1mXc5XrZfbvrM0DNyO_cidaEubJwiccKAqWWdYEaQ076clEULDn_-qwCTJwAsSow&_nc_zt=23&_nc_ht=scontent.fnbo1-1.fna&_nc_gid=gnmA5ZTRWmAmidGoiXwdWg&oh=00_AfuYRWNg8-78BCHeg8Lha2e1dazDqQFJGsvDNCghuLgICg&oe=6987CA24'
];

export default function Home() {

  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Swap images every 200px of scroll
      setCurrentImage(scrollY > 200 ? 1 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="home">
      {/* Hero Section */}
     <section className="hero-section">
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
        ></div>

        <div className="hero-content">
          <p className="hero-label">KIPLOKYI SLOPES ACADEMY</p>
          <h1 className="hero-title">
            The best of holistic<br />learning
          </h1>
        </div>

        <div className="hero-pagination">
          <span className="page-number">01</span>
          <div className="page-divider"></div>
          <span className="page-number">02</span>
        </div>
      </section>



        {/* About Us Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <div className="section-header">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              <h2>ABOUT US</h2>
            </div>
            
            <p className="about-description">
              Kiplokyi Slopes Academy is a Private Primary and Junior Secondary School that was established
              in 2005. We are a non-denominational Christian School whose role is to support
              parents in fulfilling their biblical responsibility to educate their children. We aim to
              develop children who have a biblical worldview and are well prepared academically
              by integrating God's teachings and principles with academic pursuits.
            </p>
            
            <p className="about-description">We offer the Kenyan curriculum, with levels starting at:</p>
            
            <ul className="curriculum-list">
              <li>Preschool (Play-group, Reception, Pre-primary 1 and 2)</li>
              <li>Lower School (Grades 1-3)</li>
              <li>Middle School (Grades 4-6)</li>
              <li>Junior Secondary School (Grades 7-9)</li>
            </ul>
          </div>
          
          <div className="about-image">
            <img src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/487513352_122191207670094208_5466276275303908927_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeECKrnRepoR9XpxoB3CWnNQKC7FqIbyRv0oLsWohvJG_V_XFzhU001aAr_LNWd23_MkMtg0pQgpWlIYOq2wgJXr&_nc_ohc=xXZPs5mrKeQQ7kNvwFov9Hu&_nc_oc=Adl1mXc5XrZfbvrM0DNyO_cidaEubJwiccKAqWWdYEaQ076clEULDn_-qwCTJwAsSow&_nc_zt=23&_nc_ht=scontent.fnbo1-1.fna&_nc_gid=gnmA5ZTRWmAmidGoiXwdWg&oh=00_AfuYRWNg8-78BCHeg8Lha2e1dazDqQFJGsvDNCghuLgICg&oe=6987CA24" alt="Happy students at Kiplokyi Slopes Academy" />
          </div>
        </div>
      </section>

      {/* Join Kiplokyi Section */}
      <section className="join-section">
        <div className="section-header">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <h2>JOIN KIPLOKYI SLOPES</h2>
        </div>
        
        <div className="join-grid">
          <div className="join-card">
            <img src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/475989391_122182563680094208_421213809741696596_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeE0Q3g7hHhLa2rWyJ3ysMbRaJx_vkgwzeRonH--SDDN5HfDSR6y85sdd38Lbdfs0hgKJR0fRJzJnS4qX9ChL7XX&_nc_ohc=6LI8B_mYI68Q7kNvwH-y46c&_nc_oc=AdltoyUCtC4DjNMWJMasFXTLY5yx-rZzBH0wt4Wx-YzxpsK_6YGs4IsTf3nCvt97cPE&_nc_zt=23&_nc_ht=scontent.fnbo1-1.fna&_nc_gid=J8QwhjHBlgdb_FMrXj1gJQ&oh=00_AftW6H3efMRHEBNLQJssiwQoSxo4PVJ3uuku3ziL_AyqPg&oe=6988BCED" alt="Pre-school students learning" />
            <div className="join-label black">Pre-school</div>
          </div>
          
          <div className="join-card">
            <img src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/475712717_122182182086094208_6318814504427526330_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG70XNRYxWjTZSLlmQHFY7-b3Q24aUHX1JvdDbhpQdfUvLBuMOGBEK4aplVMxfGDa6d1icMnEMcKJ9DIYCZoOxB&_nc_ohc=VnYQ3XnFAUgQ7kNvwGZklYK&_nc_oc=AdnPVKTl6UAhvDyIrA6igRjSNbAJQpl-dVWBPgA5KPrX3mDTIE6KwOQAmBu1iWlhGlw&_nc_zt=23&_nc_ht=scontent.fnbo1-1.fna&_nc_gid=F0_uJ7bCGBkITm_gUFh_vw&oh=00_AftRuxw8gGEBALOPRq4h2WwORV0hQR0xD-7xlCD7LRFS8A&oe=6988B9B1" alt="CBC Curriculum students" />
            <div className="join-label yellow">CBC Curriculum</div>
          </div>
          
          
        </div>
      </section>

      {/* Founders Story Section */}
      <section className="founders-section">
        <div className="founders-content">
          <div className="founders-text">
            <div className="section-header">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <h2>THE FOUNDERS STORY</h2>
            </div>
            
            <p className="story-text">
              The dream started off way back in 2018 when a couple called for a family meeting
              to share their desire to start a school.
            </p>
            
            <p className="story-text">
              We look forward to seeing the school that started as a simple idea become a safe
              space that encourages, trains and moulds future generations for God's glory.
            </p>
            
            <p className="story-attribution">Mr. and Mrs. Sammy</p>
            
            <button className="discover-button">
              DISCOVER OUR STORY
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="m12 16 4-4-4-4M8 12h8"/>
              </svg>
            </button>
          </div>
          
          <div className="founders-image">
            <img src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/468309383_122173728026094208_6830148461464120064_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHzXWaLjamgmrtI6HW3-bc5bjBnES6zlwtuMGcRLrOXC97YHDynyBzOQ_JishwqJ79KQkSfscVq8tdtaRrtbiQO&_nc_ohc=17PE0A8qtqQQ7kNvwGKVcVK&_nc_oc=AdkOqAw4wB94lqgKy2AsjqXSQ6LVcc3ygQXyfXpckcMKpW_Ur3IZPadwTLudFTwBCLM&_nc_zt=23&_nc_ht=scontent.fnbo1-1.fna&_nc_gid=dxXL2jdRPSrUfJ7hCx0xyw&oh=00_AfukxPn_ZbvKGMZf9xy7r92WKLH1HL9y5FYxi8QE1iJcaA&oe=6987ADDE" alt="School Founders" />
          </div>
        </div>
      </section>

      {/* Discover More Section */}
      <section className="discover-section">
        <div className="section-header">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12h8m-4-4 4 4-4 4"/>
          </svg>
          <h2>DISCOVER MORE</h2>
        </div>
        
        <div className="discover-grid">
          <div className="discover-card">
            <img src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/475385491_122182334012094208_1609528450796256369_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHTQEeMIfUFw-OqMm9eGMWcEMhzHefhvuEQyHMd5-G-4XghhOe4tTtFoMnq3O5tuzGVARFQ3KR0Tk1pi0YGCRc9&_nc_ohc=xxOV6mduyNgQ7kNvwF63oBS&_nc_oc=Adlx60t8jmSVKi_1lcbtIpJJ4kdcSejMc_-l7YD1XfI5NuOBvxZ3Nb-o3MJTViGk12Y&_nc_zt=23&_nc_ht=scontent.fnbo1-1.fna&_nc_gid=CBMLEA2UVljfJalJA1XSGQ&oh=00_AftIcU6tpDArwEgzw-pbakeebqyuE2XPRcyJrN5IIE5qXA&oe=698799CA" alt="Academic Highlights" />
            <div className="card-label orange">Academic Highlights</div>
          </div>
          
          <div className="discover-card">
            <img src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/475837089_122182196342094208_2408657794692683682_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFAPEjx-wGO3w5MCsoJ0wxTxT0wUQAOIRDFPTBRAA4hELPYznz6S13_jLz62k-fJuakUnFaABO1wxl3blE79PlR&_nc_ohc=_NDnVhoiL0kQ7kNvwGoZeYA&_nc_oc=Adn-J6zCJx3Qqeot4pLvfYwuUoAvBUk-1e7OxOrzouURXpMyyfxni5Iobx5hvyekDXI&_nc_zt=23&_nc_ht=scontent.fnbo1-1.fna&_nc_gid=nYUmG5kt8fYwfTHDJSWMDA&oh=00_AftOYYbWxbfry_x3biRXpTc60bZL06nRVjmwuJpOuLlsdQ&oe=6988D960" alt="Fee Structure" />
            <div className="card-label green">Fee Structure</div>
          </div>
          
          <div className="discover-card">
            <img src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/475457404_122182336478094208_1979830431634138515_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFjjX8PPYRPs3wIaod4jCyXLHDXi99N14YscNeL303XhjWcDMmFJ0OT-aRMt3sWNUgXYC4eSZMtECpERoSldmoM&_nc_ohc=Dl9VAfIarwcQ7kNvwHDlcws&_nc_oc=AdmGAwwy6dFBI0cIkHREfe3VAw2lMaj3BZ17dOUrxTYQdGqYgzy-wyqdQ762Q27vOK0&_nc_zt=23&_nc_ht=scontent.fnbo1-1.fna&_nc_gid=vjRZuRKXrSDNT5pLIyLxLQ&oh=00_AfvVSGN4xH7_9iUaxqV0DPYQDv6f2vB_d9Jj8k5sfin56g&oe=6988DA8F" alt="Admission Process" />
            <div className="card-label yellow">Admission Process</div>
          </div>
        </div>
      </section>
    </div>
  );
}

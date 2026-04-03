import React from 'react'
import styles from './App.module.css'

const teamMembers = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=200&h=200&fit=crop&crop=face',
    alt: 'Team member 1',
    size: 'large',
    position: { left: '1.2%', top: '108px', zIndex: 1 },
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face',
    size: 'large',
    position: { left: '8.4%', top: '76px', zIndex: 2 },
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&h=200&fit=crop&crop=face',
    alt: 'Team member 3',
    size: 'large',
    position: { left: '25%', top: '22px' },
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face',
    alt: 'Team member 4',
    size: 'large',
    position: { left: '53%', top: '32px' },
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    alt: 'Team member 5',
    size: 'large',
    position: { left: '33.5%', top: '98px' },
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    alt: 'Team member 6',
    size: 'large',
    position: { right: '13%', top: '22px' },
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face',
    alt: 'Team member 7',
    size: 'large',
    position: { right: '1%', top: '86px' },
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    alt: 'Team member 8',
    size: 'large',
    position: { left: '60.2%', top: '68px', zIndex: 2 },
  },
]

export default function App() {
  return (
    <div className={styles.page}>
      <div className={styles.borderFrame} />

      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Elementum</span>
        </div>

        <ul className={styles.navLinks}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Studio</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>

        <button className={styles.menuBtn} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      <main className={styles.hero}>
        <div className={styles.decoLeftBlack}>
          <svg width="84" height="355" viewBox="0 0 84 355" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809" stroke="#0E0E0E" strokeWidth="8" />
          </svg>
        </div>

        <div className={styles.decoLeftRed}>
          <svg width="73" height="366" viewBox="0 0 73 366" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M-0.125563 3.81958C32.8912 14.0867 91.0122 45.1979 59.3623 87.5062C19.8 140.391 -8.5 121.794 -8.5 157.245C-8.5 192.696 44.6348 192.696 44.6348 268.246C44.6348 328.686 2.95478 362.393 -8.5 361.812" stroke="#FF7171" strokeWidth="8" />
          </svg>
        </div>

        <div className={styles.decoRight}>
          <svg width="117" height="146" viewBox="0 0 117 146" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M77.8783 -4.93067e-06C86.7352 5.11355 94.4983 11.9216 100.724 20.0353C106.95 28.149 111.517 37.4095 114.164 47.2882C116.811 57.1668 117.486 67.4701 116.151 77.6097C114.816 87.7494 111.497 97.5268 106.384 106.384C101.27 115.241 94.4622 123.004 86.3484 129.23C78.2347 135.455 68.9742 140.022 59.0955 142.669C49.2169 145.316 38.9136 145.992 28.774 144.657C18.6344 143.322 8.85694 140.003 -7.20974e-06 134.889L38.9391 67.4446L77.8783 -4.93067e-06Z" fill="#934CEC" />
          </svg>
        </div>

        <div className={styles.headingWrap}>
          <h1 className={styles.heading}>
            <span className={styles.line}>
              The{' '}
              <span className={styles.highlightYellow}>
                <span>thinkers</span>
                <svg className={styles.thinkersUnderline} viewBox="0 0 595 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M522.258 3H55.7582L594.258 27H0.258179L301.258 53" stroke="#FFC250" strokeWidth="6" />
                </svg>
              </span>{' '}
              and
            </span>
            <span className={styles.line}>
              doers were ch<span className={styles.highlightPink}>anging</span>
            </span>
            <span className={styles.line}>
              the <span className={styles.highlightGreen}>status</span> Quo with
            </span>
          </h1>

          <p className={styles.subText}>
            We are a team of strategists, designers communicators, researchers. Togeather,
            <br />
            we belive that progress only hghappens when you refuse to play things safe.
          </p>
        </div>

        <div className={styles.teamRow}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`${styles.avatarWrap} ${styles[member.size]} ${member.id === 2 ? styles.memberTwoBorder : ''} ${member.id === 8 ? styles.memberBelowAvatar : ''}`}
              style={member.position}
            >
              <img src={member.src} alt={member.alt} className={styles.avatar} />
            </div>
          ))}
        </div>
      </main>

      <section className={styles.scrollSections}>
        <div className={styles.softGlow} aria-hidden="true" />

        <div className={styles.featureRow}>
          <article className={`${styles.featureCard} ${styles.featureCardReference}`}>
            <h2>
              <span className={styles.tomorrowWord}>
                Tomorrow
                <svg className={styles.tomorrowUnderline} viewBox="0 0 372 33" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M45.0339 1.5H336.4L0.0641632 15.9H371.064L183.066 31.5" stroke="#FFC250" strokeWidth="3" />
                </svg>
              </span>{' '}
              should
              <br />
              be better than <span className={styles.highlightGreen}>today</span>
            </h2>
            <p>
              We are a team of strategists, designers communicators, researchers.
              <br />
              Togeather, we belive that progress only happens when you refuse
              <br />
              to play things safe.
            </p>
            <a href="#" className={styles.ctaLink}>Read more</a>
          </article>

          <div className={styles.featureVisual}>
            <svg className={styles.imageBackdrop} viewBox="0 0 233 227" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M45.3254 -2.02656e-06L232.277 40.5018L186.952 226.343L4.78625e-05 185.841L45.3254 -2.02656e-06Z" fill="#FF7171" />
            </svg>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=900&fit=crop&crop=faces"
              alt="Team collaboration"
            />
          </div>
        </div>

        <svg className={styles.connectorCurve} viewBox="0 0 1483 654" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <g filter="url(#filter0_d_2_9)">
            <path d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727" stroke="#FF6D6D" strokeWidth="5" />
          </g>
          <defs>
            <filter id="filter0_d_2_9" x="0" y="0" width="1502.99" height="653.604" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="16" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_9" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_9" result="shape" />
            </filter>
          </defs>
        </svg>

        <div className={styles.featureRowAlt}>
          <div className={styles.featureVisualLeft}>
            <svg className={styles.imageBackdropLeft} viewBox="0 0 233 227" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M45.3254 -2.02656e-06L232.277 40.5018L186.952 226.343L4.78625e-05 185.841L45.3254 -2.02656e-06Z" fill="#FF7171" />
            </svg>
            <span className={styles.cornerTriangleAlt} aria-hidden="true" />
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&h=900&fit=crop&crop=faces"
              alt="Design planning"
            />
          </div>

          <article className={styles.featureCardAlt}>
            
            <h2 className={styles.rightHeading}>
              <span className={styles.headingLine}><span className={styles.seeHighlight}>See</span> how we can</span>
              <span className={styles.headingLine}>help you <span className={styles.progressWord}>progress
                <svg className={styles.progressUnderlineSvg} viewBox="0 0 372 33" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M45.0339 1.5H336.4L0.064209 15.9H371.064L183.066 31.5" stroke="#FFC250" strokeWidth="3" />
                </svg>
              </span></span>
            </h2>
            <p>
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>
            <a href="#" className={`${styles.ctaLink} ${styles.ctaLineLink}`}>Read more</a>
          </article>
        </div>

      </section>
    </div>
  )
}
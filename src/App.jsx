import React, { useEffect } from 'react'
import styles from './App.module.css'
import confImage from './images/conf.png'

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
  useEffect(() => {
    const selectorList = [
      styles.headingWrap,
      styles.featureCardReference,
      styles.featureVisual,
      styles.featureVisualLeft,
      styles.featureCardAlt,
      styles.offerHeading,
      styles.testimonialCard,
      styles.newsletterTop,
    ]

    const targets = Array.from(
      document.querySelectorAll(selectorList.map((name) => `.${name}`).join(','))
    )

    if (targets.length === 0) {
      return undefined
    }

    const listeners = []

    targets.forEach((element) => {
      element.classList.add(styles.cursorReactive)

      const onMove = (event) => {
        const rect = element.getBoundingClientRect()
        const relX = (event.clientX - rect.left) / rect.width - 0.5
        const relY = (event.clientY - rect.top) / rect.height - 0.5
        const maxShift = Number(element.getAttribute('data-float-strength')) || 14

        element.style.setProperty('--cursor-float-x', `${(relX * maxShift * 2).toFixed(2)}px`)
        element.style.setProperty('--cursor-float-y', `${(relY * maxShift * 1.4).toFixed(2)}px`)
      }

      const onLeave = () => {
        element.style.setProperty('--cursor-float-x', '0px')
        element.style.setProperty('--cursor-float-y', '0px')
      }

      element.addEventListener('mousemove', onMove)
      element.addEventListener('mouseleave', onLeave)
      listeners.push({ element, onMove, onLeave })
    })

    return () => {
      listeners.forEach(({ element, onMove, onLeave }) => {
        element.removeEventListener('mousemove', onMove)
        element.removeEventListener('mouseleave', onLeave)
        element.classList.remove(styles.cursorReactive)
        element.style.removeProperty('--cursor-float-x')
        element.style.removeProperty('--cursor-float-y')
      })
    }
  }, [])

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
          <path className={styles.connectorCurveShimmer} d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727" stroke="#FFE0E0" strokeWidth="5" strokeLinecap="round" />
          <path className={styles.connectorCurveShimmerSoft} d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727" stroke="#FFD2D2" strokeWidth="4" strokeLinecap="round" />
          <path className={styles.connectorCurveShimmerSpark} d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727" stroke="#FFF2F2" strokeWidth="3" strokeLinecap="round" />
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
            <svg className={styles.leftCircleTriangleBefore} width="238" height="201" viewBox="0 0 238 201" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M118.646 0L237.291 200.25H3.05176e-05L118.646 0Z" fill="#FF7171"/>
            </svg>
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&h=900&fit=crop&crop=faces"
              alt="Design planning"
            />
            <svg className={styles.leftCircleTriangleAfter} width="238" height="201" viewBox="0 0 238 201" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M118.646 0L237.291 200.25H3.05176e-05L118.646 0Z" fill="#FF7171"/>
            </svg>
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

      <section className={styles.offerSection}>
        <svg className={styles.offerCurve} width="864" height="654" viewBox="0 0 864 654" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <g filter="url(#filter0_d_1_158)">
            <path d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727" stroke="#FF6D6D" strokeWidth="5" />
          </g>
          <defs>
            <filter id="filter0_d_1_158" x="0" y="0" width="1502.99" height="653.604" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="16" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_158" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_158" result="shape" />
            </filter>
          </defs>
        </svg>

        <h2 className={styles.offerHeading}>
          <span className={styles.offerHeadingLine}>What we <span className={styles.offerCan}>can</span></span>
          <span className={styles.offerHeadingLine}>
            <span className={styles.offerWordWrap}>
              offer
              <svg className={styles.offerUnderline} viewBox="0 0 160 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M18.6 1H145.3L0 8.5H159L78.5 16" stroke="#FFC250" strokeWidth="2" />
              </svg>
            </span>{' '}
            you!
          </span>
        </h2>

        <div className={styles.offerList}>
          <div className={styles.offerRow}>
            <p className={styles.offerMeta}>Office of multiple<br />interest content</p>
            <p className={styles.offerTitle}>Colaborative &amp; partnership</p>
            <span className={styles.offerArrow} aria-hidden="true">→</span>
          </div>

          <div className={styles.offerRow}>
            <p className={styles.offerMeta}>The hanger US Air force<br />digital experimantal</p>
            <p className={styles.offerTitle}>We talk about our weight</p>
            <span className={styles.offerArrow} aria-hidden="true">→</span>
          </div>

          <div className={`${styles.offerRow} ${styles.offerRowLast}`}>
            <p className={styles.offerMeta}>Data faucet content,<br />social, digital</p>
            <p className={styles.offerTitle}>Piloting digital <span className={styles.confidenceWrap}>
              <svg className={styles.confidenceCircle} width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <defs>
                  <clipPath id="circleClip">
                    <circle cx="80" cy="80" r="80" />
                  </clipPath>
                </defs>
                <image href={confImage} x="0" y="0" width="160" height="160" clipPath="url(#circleClip)" />
              </svg>
              confidence
            </span></p>
            <span className={styles.offerArrow} aria-hidden="true">→</span>
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <h2 className={styles.testimonialsHeading}>
          <span className={styles.whatBubble}>What</span> our customer <br />
          says <span className={styles.aboutUsHighlight}>
            About Us
            <svg className={styles.aboutUsUnderline} width="372" height="33" viewBox="0 0 372 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45.0338 1.5H336.4L0.0641479 15.9H371.064L183.066 31.5" stroke="#FFC250" strokeWidth="3"/>
            </svg>
          </span>
        </h2>

        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialsLeft}>
            <div className={styles.avatarLeft1}>
              <img src="https://i.pravatar.cc/120?img=12" alt="Customer" />
            </div>
            <div className={styles.avatarLeft2}>
              <img src="https://i.pravatar.cc/180?img=15" alt="Customer" />
            </div>
            <div className={styles.avatarLeft3}>
              <img src="https://i.pravatar.cc/80?img=32" alt="Customer" />
            </div>
            <div className={styles.avatarLeft4}>
              <img src="https://i.pravatar.cc/140?img=44" alt="Customer" />
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              <span className={styles.quoteStart} aria-hidden="true">“</span>
              <span className={styles.testimonialCopy}>
                Elementum delivered the site with in the timeline<br />
                as they requested. In the end, the client found a 50%<br />
                increase in traffic within days since its launch. They<br />
                also had an impressive ability to use technologies that<br />
                the company hasn't used, which have also proved to<br />
                be easy to use and reliable
              </span>
              <span className={styles.quoteEnd} aria-hidden="true">”</span>
            </p>
          </div>

          <div className={styles.testimonialsRight}>
            <div className={styles.avatarRight1}>
              <img src="https://i.pravatar.cc/100?img=28" alt="Customer" />
            </div>
            <div className={styles.avatarRight2}>
              <img src="https://i.pravatar.cc/220?img=51" alt="Customer" />
            </div>
            <div className={styles.avatarRight3}>
              <img src="https://i.pravatar.cc/120?img=63" alt="Customer" />
            </div>
            <div className={styles.avatarRight4}>
              <img src="https://i.pravatar.cc/140?img=68" alt="Customer" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.newsletterSection}>
        <div className={styles.newsletterTop}>
          <svg className={styles.newsletterRedArrow} width="178" height="123" viewBox="0 0 178 123" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5685 108.99L12.7017 119.458L2.23361 113.591C1.51093 113.186 0.596763 113.444 0.191749 114.167C-0.213265 114.889 0.0442476 115.803 0.76692 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7638 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1287 104.555 9.97374 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z" fill="#FF6D6D"/>
          </svg>
          <svg className={styles.newsletterRedArrow2} width="178" height="123" viewBox="0 0 178 123" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5685 108.99L12.7017 119.458L2.23361 113.591C1.51093 113.186 0.596763 113.444 0.191749 114.167C-0.213265 114.889 0.0442476 115.803 0.76692 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7638 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1287 104.555 9.97374 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z" fill="#FF6D6D"/>
          </svg>

          <h2 className={styles.newsletterHeading}>
            <span>Subscribe to</span>
            <span>our newsletter</span>
          </h2>

          <p className={styles.newsletterSubtext}>To make your stay special and even more memorable</p>

          <button className={styles.newsletterButton}>Subscribe Now</button>
        </div>

        <div className={styles.newsletterDivider} />

        <div className={styles.newsletterFooterGrid}>
          <div>
            <h3>Company</h3>
            <ul>
              <li>Home</li>
              <li>Studio</li>
              <li>Service</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3>Terms &amp; Policies</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms &amp; Conditions</li>
              <li>Explore</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div>
            <h3>Follow Us</h3>
            <ul>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div>
            <h3>Terms &amp; Policies</h3>
            <ul>
              <li>1498w Fulton st., STE</li>
              <li>2D Chicago, IL 63867.</li>
              <li>(123) 456789000</li>
              <li>info@elementum.com</li>
            </ul>
          </div>
        </div>

        <p className={styles.newsletterCopyright}>©2023 Elementum. All rights reserved</p>
      </section>
    </div>
  )
}
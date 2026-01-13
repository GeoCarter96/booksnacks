

export default function HomeSkeleton() {
  return (
    <div>
       <div className="skeleton-page">
        
        <nav className="nav">
          <div className="nav__wrapper">
            <div className="skeleton" style={{ width: '120px', height: '40px' }} />
            <ul className="nav__list--wrapper">
              {[...Array(4)].map((_, i) => (
                <li key={i} className="skeleton" style={{ width: '60px', height: '20px', marginLeft: '20px' }} />
              ))}
            </ul>
          </div>
        </nav>
          
        <section id="landing">
          <div className="container">
            <div className="landing__wrapper">
              <div className="landing__content">
                <div className="skeleton" style={{ width: '80%', height: '60px', marginBottom: '20px' }} />
                <div className="skeleton" style={{ width: '90%', height: '100px', marginBottom: '20px' }} />
                <div className="skeleton" style={{ width: '150px', height: '50px' }} />
              </div>
              <div className="skeleton landing__image--mask" style={{ width: '400px', height: '400px' }} />
            </div>
          </div>
        </section>
        
       
        <div className="container">
          <div className="statistics__wrapper">
             <div className="skeleton" style={{ width: '100%', height: '200px', marginTop: '40px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}



export default function SingleBookSk() {
  return (
    <div>
    <div className="row">
      <div className="container">
        <div className="inner__wrapper">
          <div className="inner__book">
         
            <div className="skeleton" style={{ width: '60%', height: '36px', marginBottom: '8px' }} />
            <div className="skeleton" style={{ width: '40%', height: '20px', marginBottom: '8px' }} />
            <div className="skeleton" style={{ width: '80%', height: '24px', marginBottom: '24px' }} />

            <div className="inner-book__wrapper">
              <div className="inner-book__description--wrapper">

                {[...Array(4)].map((_, i) => (
                  <div key={i} className="inner-book__description">
                    <div className="skeleton" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
                    <div className="skeleton" style={{ width: '100px', height: '18px', marginLeft: '10px' }} />
                  </div>
                ))}
              </div>
            </div>

         
            <div className="inner-book__read--btn-wrapper">
              <div className="skeleton" style={{ width: '150px', height: '48px', borderRadius: '4px' }} />
              <div className="skeleton" style={{ width: '150px', height: '48px', borderRadius: '4px' }} />
            </div>

        
            <div className="skeleton" style={{ width: '150px', height: '24px', margin: '32px 0 16px' }} />
            <div className="skeleton" style={{ width: '100%', height: '100px' }} />
            
            <div className="skeleton" style={{ width: '150px', height: '24px', margin: '32px 0 16px' }} />
            <div className="skeleton" style={{ width: '100%', height: '80px' }} />
          </div>

      
          <div className="inner-book--img-wrapper">
            <div className="skeleton" style={{ width: '300px', height: '450px' }} />
          </div>
        </div>
      </div>
    </div>
  
    </div>
  )
}

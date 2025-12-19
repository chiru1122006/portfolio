import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import Page8 from './Page8'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(10,10,10)' }}>
      {/* Page 1 - Hero Section */}
      <Page1 />
      
      {/* Page 2 - Bento Grid */}
      <div className="relative" style={{ backgroundColor: 'rgb(10,10,10)' }}>
        <Page2 />
      </div>
      
      {/* Page 3 - Portfolio */}
      <div className="relative" style={{ backgroundColor: 'rgb(10,10,10)' }}>
        <Page3 />
      </div>

      {/* Page 4 - Skills Section */}
      <div className="relative" style={{ backgroundColor: 'rgb(10,10,10)' }}>
        <Page4 />
      </div>

      {/* Page 5 - Marquee Section */}
      <div className="relative" style={{ backgroundColor: 'rgb(10,10,10)' }}>
        <Page5 />
      </div>

      {/* Page 6 - Interactive Portfolio */}
      <div className="relative" style={{ backgroundColor: 'rgb(10,10,10)' }}>
        <Page6 />
      </div>

      {/* Page 7 - Testimonials */}
      <div className="relative" style={{ backgroundColor: 'rgb(10,10,10)' }}>
        <Page7 />
      </div>

      {/* Page 8 - Contact/CTA */}
      <div className="relative" style={{ backgroundColor: 'rgb(10,10,10)' }}>
        <Page8 />
      </div>
    </div>
  )
}

export default App

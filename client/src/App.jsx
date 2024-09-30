import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Services from './components/Services';
import JobAssistance from './components/Job/JobAssistance';
import MentalSupport from './components/Mental/MentalSupport';
import LegalSupport from './components/Legal/LegalSupport';
// Import your other service-specific components here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        {/* Add your routes for job-assistance, mental-support, legal-support */}
        <Route path="/job-assistance" element={<JobAssistance />} />
        <Route path="/mental-support" element={<MentalSupport />} />
        <Route path="/legal-support" element={<LegalSupport />} />

      </Routes>
    </Router>
  );
}

export default App;



import { Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import Puppies, { PuppyDetail } from './Puppies.jsx';
import { HappyFamilies, HowItWorks, Faq, Contact, GoneHome, NotFound } from './Pages.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="puppies" element={<Puppies />} />
        <Route path="puppies/:slug" element={<PuppyDetail />} />
        <Route path="happy-families" element={<HappyFamilies />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gone-home" element={<GoneHome />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}


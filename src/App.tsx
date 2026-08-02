import { Routes, Route } from 'react-router'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Interventions from './pages/Interventions'
import InterventionDetail from './pages/InterventionDetail'
import Chirurgiens from './pages/Chirurgiens'
import AvantApres from './pages/AvantApres'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Devis from './pages/Devis'
import RendezVous from './pages/RendezVous'
import Legal from './pages/Legal'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/interventions" element={<Interventions />} />
        <Route path="/interventions/:slug" element={<InterventionDetail />} />
        <Route path="/chirurgiens" element={<Chirurgiens />} />
        <Route path="/avant-apres" element={<AvantApres />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/rendez-vous" element={<RendezVous />} />
        <Route path="/legal/:slug" element={<Legal />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

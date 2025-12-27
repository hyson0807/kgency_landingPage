import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<Navigate to="/terms#privacy" replace />} />
    </Routes>
  );
}
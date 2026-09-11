import { X } from 'lucide-react';

export default function ConsultationModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X /></button>
        <span className="eyebrow">Start a project</span>
        <h2>Book a Consultation</h2>
        <p>Tell us a little about your requirement. Backend submission will be connected in the Spring Boot phase.</p>
        <form onSubmit={e => e.preventDefault()} className="form-grid">
          <input placeholder="Full name" />
          <input placeholder="Phone number" />
          <input type="email" placeholder="Email address" />
          <select defaultValue=""><option value="" disabled>Service required</option><option>MEP Design</option><option>Architecture</option><option>Interior Design</option><option>Turnkey Execution</option></select>
          <textarea placeholder="Tell us about your project" rows="5" />
          <button className="btn btn-gold" type="submit">Request Consultation</button>
        </form>
      </div>
    </div>
  );
}

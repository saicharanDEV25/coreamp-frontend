import { X } from 'lucide-react';
import './ConsultationModal.css';

export default function ConsultationModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close consultation form"><X/></button>
        <span className="eyebrow dark">Start a project</span>
        <h2>Book a Consultation</h2>
        <p>Share your requirement. The form is frontend-only for now and can be connected to Spring Boot later.</p>
        <form onSubmit={e => e.preventDefault()} className="form-grid">
          <input placeholder="Full name" />
          <input placeholder="Phone number" />
          <input type="email" placeholder="Email address" />
          <select defaultValue="">
            <option value="" disabled>Service required</option>
            <option>Electrical Design</option>
            <option>Power System Studies</option>
            <option>MEP Design & Coordination</option>
            <option>Engineering Review</option>
          </select>
          <textarea placeholder="Tell us about your project" rows="5" />
          <button className="btn btn-gold" type="submit">Request Consultation</button>
        </form>
      </div>
    </div>
  );
}

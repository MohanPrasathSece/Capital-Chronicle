import React, { useState } from 'react';
import { submitLead, COUNTRY_PHONE_PATTERNS } from '../../lib/crmApi';

export function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: 'CH'
  });
  const [status, setStatus] = useState('');

  const validatePhone = (phone: string, countryCode: string) => {
    const pattern = COUNTRY_PHONE_PATTERNS[countryCode]?.pattern;
    return pattern ? pattern.test(phone) : false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(formState.phone, formState.countryCode)) {
      setStatus(`Invalid phone format. Example: ${COUNTRY_PHONE_PATTERNS[formState.countryCode].example}`);
      return;
    }

    setStatus('Submitting...');
    const res = await submitLead({
      ...formState,
      leadType: 'contact'
    });

    if (res.success) {
      setStatus('Success! Thank you for contacting us.');
      setFormState({ firstName: '', lastName: '', email: '', phone: '', countryCode: 'CH' });
    } else {
      setStatus('Error submitting form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form space-y-4 p-4 border rounded-md max-w-md bg-card text-card-foreground">
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-semibold">First Name</label>
        <input 
          className="border p-2 rounded-md bg-input text-ink"
          required 
          value={formState.firstName} 
          onChange={e => setFormState({...formState, firstName: e.target.value})} 
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-semibold">Last Name</label>
        <input 
          className="border p-2 rounded-md bg-input text-ink"
          required 
          value={formState.lastName} 
          onChange={e => setFormState({...formState, lastName: e.target.value})} 
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-semibold">Email</label>
        <input 
          className="border p-2 rounded-md bg-input text-ink"
          type="email" 
          required 
          value={formState.email} 
          onChange={e => setFormState({...formState, email: e.target.value})} 
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-semibold">Country Code</label>
        <select 
          value={formState.countryCode} 
          onChange={e => setFormState({...formState, countryCode: e.target.value})}
          className="country-dropdown border p-2 rounded-md"
          style={{ cursor: 'pointer', paddingRight: '20px' }}
        >
          {Object.keys(COUNTRY_PHONE_PATTERNS).map(code => (
            <option key={code} value={code}>{code} (+{COUNTRY_PHONE_PATTERNS[code].dialCode})</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-semibold">Phone</label>
        <input 
          className="border p-2 rounded-md bg-input text-ink"
          required 
          value={formState.phone} 
          onChange={e => setFormState({...formState, phone: e.target.value})} 
        />
      </div>
      <button 
        type="submit"
        className="w-full bg-primary text-primary-foreground p-2 rounded-md font-semibold hover:opacity-90 transition-opacity"
      >
        Submit
      </button>
      {status && <p className="text-sm text-center mt-2">{status}</p>}
    </form>
  );
}

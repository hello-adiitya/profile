import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/utils/constants';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center group">
        <Mail className="text-secondary group-hover:text-primary mr-3 transition-colors" size={20} />
        <a 
          href={`mailto:${CONTACT_INFO.email}`}
          className="text-dark hover:text-primary transition-colors"
        >
          {CONTACT_INFO.email}
        </a>
      </div>
      
      <div className="flex items-center group">
        <Phone className="text-secondary group-hover:text-primary mr-3 transition-colors" size={20} />
        <a 
          href={`tel:${CONTACT_INFO.phone}`}
          className="text-dark hover:text-primary transition-colors"
        >
          {CONTACT_INFO.phone}
        </a>
      </div>
      
      <div className="flex items-center group">
        <MapPin className="text-secondary group-hover:text-primary mr-3 transition-colors" size={20} />
        <span className="text-dark">{CONTACT_INFO.location}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
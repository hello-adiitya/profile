import React from 'react';
import { FormData } from '@/utils/types';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface ContactFormProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ContactForm = ({ formData, onChange, onSubmit }: ContactFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <Input
        label="Name"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={onChange}
        required
      />
      <Input
        label="Email"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        required
      />
      <Input
        label="Phone Number"
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={onChange}
        required
      />
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={onChange}
          rows={4}
          className="input-3d"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
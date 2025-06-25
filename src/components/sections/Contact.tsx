import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_k0zoxi9',        // ✅ Your Service ID
        'template_rcmaf84',       // ✅ Your Template ID
        formRef.current!,
        'eFFnvBh7YKicvN14v'        // ✅ Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          alert('✅ Thank you, your message has been sent!');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('❌ Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="input-style"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="input-style"
      />
      <textarea
        rows={4}
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
        className="input-style"
      />
      <button type="submit" className="submit-button">
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default Contact;

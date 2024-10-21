import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('Odesílání...');

    try {
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('Formulář byl úspěšně odeslán!');
        setFormData({ name: '', email: '', role: '', message: '' });
      } else {
        setSubmitStatus('Chyba při odesílání formuláře. Zkuste to prosím znovu.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('Chyba při odesílání formuláře. Zkuste to prosím znovu.');
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#3172e8] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Přihlaste se na kurz</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1">Jméno</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-[#4b86eb] text-white placeholder-indigo-300"
                placeholder="Vaše jméno"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-[#4b86eb] text-white placeholder-indigo-300"
                placeholder="vas@email.cz"
                required
              />
            </div>
            <div>
              <label htmlFor="role" className="block mb-1">Jsem</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-[#4b86eb] text-white"
                required
              >
                <option value="">Vyberte...</option>
                <option value="učitel">Pedagog</option>
                <option value="rodič">Rodič</option>
                <option value="jiné">Jiné</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Zpráva</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded bg-[#4b86eb] text-white placeholder-indigo-300"
                placeholder="Vaše zpráva nebo dotaz"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-white text-[#3172e8] py-2 px-6 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">Přihlásit</button>
          </form>
          {submitStatus && (
            <div className="mt-4 text-center font-semibold">
              {submitStatus}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
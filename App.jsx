import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postalFrom: '',
    postalTo: '',
    services: [],
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    const newServices = checked
      ? [...formData.services, value]
      : formData.services.filter((s) => s !== value);
    setFormData({ ...formData, services: newServices });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <nav className="sticky top-0 bg-white shadow z-10 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-600">Great Van Mover</h1>
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="text-center py-20 bg-red-50">
        <h2 className="text-4xl font-bold mb-4">Stress-Free Moving in Vancouver</h2>
        <p className="mb-6 text-lg">Reliable Moving, Cleaning, Organizing & Staging – All in One Place</p>
        <button className="bg-red-600 text-white px-4 py-2 rounded">Get a Free Quote</button>
        <p className="mt-4 text-sm text-gray-700">Call us now: <span className="font-semibold text-red-600">(236) 668-0629</span></p>
      </header>

      <section id="services" className="py-16 px-4 bg-blue-50">
        <h3 className="text-2xl font-bold text-center mb-10">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Moving', 'Cleaning', 'Organizing', 'Staging'].map((service) => (
            <div key={service} className="text-center border rounded p-4 bg-white shadow">
              <div className="h-40 bg-blue-100 mb-4 flex items-center justify-center">[Illustration: {service}]</div>
              <h4 className="font-semibold text-lg">{service}</h4>
              <p className="text-sm mt-2">Professional {service.toLowerCase()} tailored for your needs.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-16 px-4">
        <h3 className="text-2xl font-bold text-center mb-6">Why Choose Us</h3>
        <p className="max-w-3xl mx-auto text-center text-lg">We are a Vancouver-based team offering local expertise, professional service, and full-process support. Whether moving across town or preparing your home for sale, we make it seamless.</p>
      </section>

      <section id="contact" className="py-16 px-4 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-10">Contact Us</h3>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-4">
          <input type="text" name="name" placeholder="Your Name" className="border p-2 rounded" onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email Address" className="border p-2 rounded" onChange={handleInputChange} />
          <input type="tel" name="phone" placeholder="Phone Number" className="border p-2 rounded" onChange={handleInputChange} />
          <input type="text" name="postalFrom" placeholder="From Postal Code" className="border p-2 rounded" onChange={handleInputChange} />
          <input type="text" name="postalTo" placeholder="To Postal Code" className="border p-2 rounded" onChange={handleInputChange} />

          <div>
            <label className="block font-semibold mb-2">Services:</label>
            {['Moving', 'Cleaning', 'Organizing', 'Staging'].map((srv) => (
              <label key={srv} className="block text-sm">
                <input type="checkbox" value={srv} onChange={handleServiceChange} /> {srv}
              </label>
            ))}
          </div>

          <textarea name="notes" placeholder="Additional Notes" rows={4} className="border p-2 rounded" onChange={handleInputChange}></textarea>
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © 2025 Great Van Mover. All rights reserved.
      </footer>
    </div>
  );
}

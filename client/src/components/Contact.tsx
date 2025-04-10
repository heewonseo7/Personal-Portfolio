import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import phone from '../assets/images/phone.png';
import mail from '../assets/images/mail.png';

const Contact = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        emailjs.init('5k3o45oX8zATAentP');
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const serviceId = 'service_ofqwq5e';
        const templateId = 'template_5zdms5r';

        try {
        setLoading(true);
        setError(false);
        setSent(false);

        await emailjs.send(serviceId, templateId, {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value,
        });

        setSent(true);
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';
        } catch (err) {
        console.error(err);
        setError(true);
        } finally {
        setLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-black min-h-screen flex flex-col justify-center items-center px-4 py-16">
        <h2 className="text-white text-5xl font-normal mb-12 text-center">
            Get A Coffee & Chat With Me!
        </h2>
        
        {/* Contact info boxes wrapper */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
            {/* Email contact box */}
            <div className="bg-gradient-to-br from-[#313BAC] to-[#5865F2] hover:from-[#3F49C4] hover:to-[#6873FF] transition-all duration-300 rounded-xl p-5 flex flex-col items-center shadow-lg border border-[#5865F2]/30 w-64 transform hover:-translate-y-1">
                <div className="bg-white/15 backdrop-blur-sm p-3 rounded-full mb-3 border border-white/20">
                    <img src={mail} alt="Email" className="w-6 h-6" />
                </div>
                <p className="text-white font-medium">heewon_seo@brown.edu</p>
            </div>
            
            {/* Phone contact box */}
            <div className="bg-gradient-to-br from-[#E5347B] to-[#FF6B9D] hover:from-[#F0438B] hover:to-[#FF7DAB] transition-all duration-300 rounded-xl p-5 flex flex-col items-center shadow-lg border border-[#FF6B9D]/30 w-64 transform hover:-translate-y-1">
                <div className="bg-white/15 backdrop-blur-sm p-3 rounded-full mb-3 border border-white/20">
                    <img src={phone} alt="Phone" className="w-6 h-6" />
                </div>
                <p className="text-white font-medium">+1 (321)-240-0212</p>
            </div>
        </div>
        
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl space-y-6 bg-[#0f0f0f] p-8 rounded-xl shadow-xl"
        >
            <input
            type="text"
            name="name"
            ref={nameRef}
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded text-sm placeholder:text-gray-400"
            />
            <input
            type="email"
            name="email"
            ref={emailRef}
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded text-sm placeholder:text-gray-400"
            />
            <textarea
            name="message"
            ref={messageRef}
            required
            placeholder="Your Message"
            className="w-full h-32 px-4 py-2 bg-gray-800 text-white rounded text-sm placeholder:text-gray-400"
            />
            <div className="flex justify-center">
            <button
                type="submit"
                disabled={loading}
                className="bg-[#313BAC] hover:bg-[#3F49C4] text-white py-2 px-6 rounded disabled:opacity-50 transition"
            >
                {loading ? 'Sending...' : 'Send Message'}
            </button>
            </div>
            {sent && <p className="text-green-400 text-center">Message sent successfully!</p>}
            {error && <p className="text-red-400 text-center">Something went wrong. Try again.</p>}
        </form>
        </section>
    );
};

export default Contact;
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, Zap } from 'lucide-react';
// import QRCode from 'react-qr-code';

// const ContactFooter = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isHovering, setIsHovering] = useState(false);
//   const [amount, setAmount] = useState('100');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Reset form
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const upiString = `upi://pay?pa=INSERT_UPI_HERE&pn=Kartikey&am=${amount}&cu=INR`;

//   return (
//     <section className="py-24 px-6 relative z-10">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="max-w-6xl mx-auto"
//       >
//         <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-glow-cyan">
//           THE CONTROL DECK
//         </h2>
//         <p className="text-center text-muted-foreground mb-12 font-mono text-sm">
//           Establish communication or fuel the mission
//         </p>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="glass p-6 rounded-xl"
//           >
//             <h3 className="text-lg font-display font-semibold mb-6 flex items-center gap-2">
//               <Send className="w-5 h-5 text-primary" />
//               Transmit Message
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
//                   Callsign
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
//                   Frequency
//                 </label>
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
//                   placeholder="your@email.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
//                   Transmission
//                 </label>
//                 <textarea
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   rows={4}
//                   className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
//                   placeholder="Your message..."
//                   required
//                 />
//               </div>
//               <motion.button
//                 type="submit"
//                 className="w-full relative overflow-hidden rounded-lg py-3 px-6 font-mono text-sm uppercase tracking-wider border border-primary/50 text-primary hover:text-primary-foreground transition-colors"
//                 onMouseEnter={() => setIsHovering(true)}
//                 onMouseLeave={() => setIsHovering(false)}
//               >
//                 <motion.div
//                   className="absolute inset-0 bg-primary"
//                   initial={{ y: '100%' }}
//                   animate={{ y: isHovering ? '0%' : '100%' }}
//                   transition={{ duration: 0.3, ease: 'easeOut' }}
//                 />
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   <Send className="w-4 h-4" />
//                   Launch Transmission
//                 </span>
//               </motion.button>
//             </form>
//           </motion.div>

//           {/* Fuel My Work */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="glass p-6 rounded-xl"
//           >
//             <h3 className="text-lg font-display font-semibold mb-6 flex items-center gap-2">
//               <Zap className="w-5 h-5 text-accent" />
//               Fuel My Work
//             </h3>
            
//             <div className="mb-6">
//               <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
//                 Energy Units (INR)
//               </label>
//               <input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 min="1"
//                 className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 transition-colors text-center text-2xl font-mono"
//                 placeholder="100"
//               />
//             </div>

//             {/* QR Code with Scanner Frame */}
//             <div className="relative flex justify-center">
//               <div className="relative p-4 bg-white rounded-lg">
//                 {/* Scanner Frame */}
//                 <div className="absolute inset-0 pointer-events-none">
//                   {/* Corner brackets */}
//                   <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-accent" />
//                   <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-accent" />
//                   <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-accent" />
//                   <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-accent" />
                  
//                   {/* Scanning laser line */}
//                   <motion.div
//                     className="absolute left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
//                     animate={{
//                       top: ['10%', '90%', '10%'],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       ease: 'easeInOut',
//                     }}
//                   />
//                 </div>
                
//                 <QRCode
//                   value={upiString}
//                   size={180}
//                   level="H"
//                   style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
//                 />
//               </div>
//             </div>

//             <p className="text-center text-xs text-muted-foreground font-mono mt-4">
//               Scan with any UPI app to power up
//             </p>
            
//             <div className="mt-4 p-3 bg-background/30 rounded-lg">
//               <p className="text-[10px] font-mono text-muted-foreground/60 break-all">
//                 {upiString}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default ContactFooter;










import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Zap, Loader2, CheckCircle, XCircle } from 'lucide-react';
import QRCode from 'react-qr-code';

const ContactFooter = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isHovering, setIsHovering] = useState(false);
  const [amount, setAmount] = useState('100');

  // New States for Backend Communication
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');

    try {
      // The Real Backend Call
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        // Reset success message after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Backend connection failed:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // REPLACE THIS WITH YOUR ACTUAL UPI ID
  // const upiString = `upi://pay?pa=kartikey@oksbi&pn=Kartikey&am=${amount}&cu=INR`;

  const payeeAddress = "kartikeykushagra14@oksbi"; // Your UPI ID
const payeeName = "Kartikey Kushagra";          // Your Name


// The string uses ${variable} to inject the values
const upiString = `upi://pay?pa=${payeeAddress}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR`;

  return (
    <section className="py-24 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-glow-cyan">
          THE CONTROL DECK
        </h2>
        <p className="text-center text-muted-foreground mb-12 font-mono text-sm">
          Establish communication or fuel the mission
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-xl"
          >
            <h3 className="text-lg font-display font-semibold mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              Transmit Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
                  Callsign
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Enter your name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
                  Frequency
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="your@email.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
                  Transmission
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Your message..."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative overflow-hidden rounded-lg py-3 px-6 font-mono text-sm uppercase tracking-wider border border-primary/50 text-primary hover:text-primary-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ y: '100%' }}
                  animate={{ y: isHovering && !isSubmitting ? '0%' : '100%' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Launch Transmission
                    </>
                  )}
                </span>
              </motion.button>

              {/* Status Feedback Messages */}
              {formStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-sm font-mono justify-center mt-2">
                  <CheckCircle className="w-4 h-4" />
                  Transmission Received. Standing by.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm font-mono justify-center mt-2">
                  <XCircle className="w-4 h-4" />
                  Signal Lost. Check backend connection.
                </div>
              )}
            </form>
          </motion.div>

          {/* Fuel My Work */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-xl"
          >
            <h3 className="text-lg font-display font-semibold mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              Fuel My Work
            </h3>

            <div className="mb-6">
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
                Energy Units (INR)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 transition-colors text-center text-2xl font-mono"
                placeholder="100"
              />
            </div>

            {/* QR Code with Scanner Frame */}
            <div className="relative flex justify-center">
              <div className="relative p-4 bg-white rounded-lg">
                {/* Scanner Frame */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-accent" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-accent" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-accent" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-accent" />

                  {/* Scanning laser line */}
                  <motion.div
                    className="absolute left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
                    animate={{
                      top: ['10%', '90%', '10%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>

                <QRCode
                  value={upiString}
                  size={180}
                  level="H"
                  style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                />
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground font-mono mt-4">
              Scan with any UPI app to power up
            </p>

            <div className="mt-4 p-3 bg-background/30 rounded-lg">
              <p className="text-[10px] font-mono text-muted-foreground/60 break-all">
                {upiString}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactFooter;


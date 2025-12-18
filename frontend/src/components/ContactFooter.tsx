




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
      const response = await fetch('https://kartikeyportfolio.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
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

  const payeeAddress = "kartikeykushagra14@oksbi";
  const payeeName = "Kartikey Kushagra";
  const upiString = `upi://pay?pa=${payeeAddress}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR`;

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 relative z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-4 text-glow-cyan">
          THE CONTROL DECK
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 font-mono text-xs md:text-sm">
          Establish communication or fuel the mission
        </p>

        {/* Responsive Grid: Stacks on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-5 md:p-6 rounded-xl w-full"
          >
            <h3 className="text-base md:text-lg font-display font-semibold mb-4 md:mb-6 flex items-center gap-2">
              <Send className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              Transmit Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1 block">
                  Callsign
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Enter your name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1 block">
                  Frequency
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="your@email.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1 block">
                  Transmission
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Your message..."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative overflow-hidden rounded-lg py-2 md:py-3 px-6 font-mono text-xs md:text-sm uppercase tracking-wider border border-primary/50 text-primary hover:text-primary-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

              {/* Status Feedback */}
              {formStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm font-mono justify-center mt-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                  Transmission Received.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm font-mono justify-center mt-2">
                  <XCircle className="w-3 h-3 md:w-4 md:h-4" />
                  Signal Lost. Retry.
                </div>
              )}
            </form>
          </motion.div>

          {/* Fuel My Work */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-5 md:p-6 rounded-xl w-full"
          >
            <h3 className="text-base md:text-lg font-display font-semibold mb-4 md:mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              Fuel My Work
            </h3>

            <div className="mb-4 md:mb-6">
              <label className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1 block">
                Energy Units (INR)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                className="w-full bg-background/50 border border-white/10 rounded-lg px-3 py-2 md:px-4 md:py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 transition-colors text-center text-xl md:text-2xl font-mono"
                placeholder="100"
              />
            </div>

            {/* QR Code Frame */}
            <div className="relative flex justify-center">
              <div className="relative p-3 md:p-4 bg-white rounded-lg">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-accent" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-accent" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-accent" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-accent" />
                  <motion.div
                    className="absolute left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
                    animate={{ top: ['10%', '90%', '10%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
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

            <p className="text-center text-[10px] md:text-xs text-muted-foreground font-mono mt-3 md:mt-4">
              Scan with any UPI app to power up
            </p>

            <div className="mt-3 md:mt-4 p-2 md:p-3 bg-background/30 rounded-lg hidden md:block">
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

import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
export const Route = createFileRoute('/crypto')({
  component: CryptoPage,
});

function CryptoPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setErrorMsg("");
    setSuccess(false);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        reset();
      } else {
        throw new Error("Failed to submit enquiry.");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  const backgroundVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: { duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" as const }
    }
  };

  const floatingShape1 = {
    animate: { y: [0, -100, 0], rotate: [0, 90, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } }
  };
  const floatingShape2 = {
    animate: { x: [0, -100, 0], rotate: [0, -90, 0], transition: { duration: 7, repeat: Infinity, ease: "easeInOut" } }
  };

  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground overflow-hidden relative"
      variants={backgroundVariants}
      animate="animate"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.1) 0%, rgba(255,255,255,1) 100%)',
        backgroundSize: '400% 400%'
      }}
    >
      {/* Background Animated Elements - Made highly visible */}
      <motion.div className="absolute top-20 left-10 w-64 h-64 border-[30px] border-black opacity-20 rounded-full pointer-events-none z-0" variants={floatingShape1} animate="animate" />
      <motion.div className="absolute top-[40%] right-10 w-[300px] h-[300px] border-[20px] border-black opacity-20 pointer-events-none z-0" variants={floatingShape2} animate="animate" />
      <motion.div className="absolute bottom-20 left-1/3 w-48 h-48 bg-black opacity-20 pointer-events-none z-0" variants={floatingShape1} animate="animate" style={{ animationDelay: '2s' }} />


      {/* Newspaper Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative border-b-4 border-black py-6 px-4 md:px-8 text-center z-10 bg-white/80 backdrop-blur-sm"
      >
        <p className="text-sm font-sans uppercase tracking-widest mb-2 font-bold">Special Edition</p>
        <motion.h1 
          className="font-serif text-5xl md:text-8xl font-bold uppercase tracking-tight inline-block"
          whileHover={{ scale: 1.02, rotate: -1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          The Crypto Ledger
        </motion.h1>
        <motion.div 
          className="h-1 bg-black w-full mt-4 origin-left"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <div className="flex justify-between text-xs md:text-sm font-sans font-bold uppercase border-b border-t border-black py-2 mt-2">
          <span>London, Edition 1</span>
          <span>Price: 1 Satoshi</span>
          <span>Vol. CXXIV</span>
        </div>
      </motion.header>

      {/* Main Content Grid */}
      <main className="container-edit py-8 md:py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Articles */}
          <div className="md:col-span-2 space-y-12 relative z-10">
            <motion.article 
              variants={itemVariants} 
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="space-y-4 bg-white/60 p-6 border border-black/10 backdrop-blur-sm"
            >
              <motion.h2 
                className="font-serif text-4xl md:text-6xl font-bold leading-none uppercase origin-left"
                whileHover={{ scale: 1.02 }}
              >
                Digital Gold Rush: The Unstoppable Rise of Bitcoin
              </motion.h2>
              <div className="flex items-center space-x-2 text-sm font-sans font-bold uppercase border-b border-black pb-2">
                <span>By Financial Correspondent</span>
              </div>
              <p className="font-serif text-xl leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                In an era defined by unprecedented technological advancement, the emergence of decentralized digital currencies has fundamentally altered our understanding of value and exchange. The premier cryptocurrency, Bitcoin, continues its volatile yet inexorable march toward mainstream financial acceptance, defying early critics who dismissed it as a mere speculative curiosity.
              </p>
              <p className="font-serif text-xl leading-relaxed">
                Institutional adoption has accelerated rapidly over the past fiscal quarter, with major banking entities establishing dedicated digital asset trading desks. This paradigm shift suggests a permanent integration of cryptographic assets into the traditional financial architecture.
              </p>
            </motion.article>

            <motion.div 
              variants={itemVariants} 
              whileHover={{ x: 10 }}
              className="border-t-2 border-black pt-8 bg-white/60 p-6 backdrop-blur-sm"
            >
              <motion.h3 
                className="font-serif text-3xl font-bold uppercase mb-4 origin-left"
                whileHover={{ scale: 1.02, color: "#333" }}
              >
                Ethereum's Smart Contract Revolution
              </motion.h3>
              <p className="font-serif text-lg leading-relaxed">
                While Bitcoin established the premise of decentralized scarcity, Ethereum introduced programmable money. The proliferation of decentralized finance (DeFi) protocols operating on the Ethereum network has created a parallel financial system, complete with lending, borrowing, and derivative instruments—all executing autonomously without human intermediation.
              </p>
            </motion.div>
            
            {/* Animated Graph Placeholder */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="border-4 border-black p-4 relative h-64 overflow-hidden"
            >
              <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 font-sans text-xs font-bold uppercase z-10">Market Volatility Index</div>
              {/* Decorative Animated Lines */}
              <motion.svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <motion.path 
                  d="M0,80 L10,70 L20,90 L30,40 L40,60 L50,20 L60,50 L70,10 L80,30 L90,20 L100,5"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path 
                  d="M0,100 L10,100 L10,70 L20,70 L20,90 L30,90 L30,40 L40,40 L40,60 L50,60 L50,20 L60,20 L60,50 L70,50 L70,10 L80,10 L80,30 L90,30 L90,20 L100,20 L100,100 Z"
                  fill="black"
                  opacity="0.1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.svg>
            </motion.div>
          </div>

          {/* Right Column: Enquiry Form & Sidebar */}
          <div className="space-y-8 relative z-10">
            <motion.div 
              variants={itemVariants} 
              whileHover={{ y: -5, boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-4 border-black p-6 bg-white"
            >
              <motion.h3 
                className="font-serif text-2xl font-bold uppercase text-center border-b-2 border-black pb-2 mb-6"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Direct Telegraph Enquiry
              </motion.h3>
              <p className="font-serif text-sm italic mb-6 text-center">
                Submit your query regarding digital asset management. Our clerks will respond via return post.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-sans text-sm font-bold uppercase">
                <div>
                  <label className="block mb-1">Full Name</label>
                  <input 
                    {...register("name", { required: true })}
                    className="w-full border-2 border-black p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  />
                  {errors.name && <span className="text-red-600 text-xs mt-1 block">Name is required</span>}
                </div>
                
                <div>
                  <label className="block mb-1">Electronic Mail Address</label>
                  <input 
                    type="email"
                    {...register("email", { required: true })}
                    className="w-full border-2 border-black p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  />
                  {errors.email && <span className="text-red-600 text-xs mt-1 block">Email is required</span>}
                </div>
                
                <div>
                  <label className="block mb-1">Contact Number</label>
                  <input 
                    type="tel"
                    {...register("number", { required: true })}
                    className="w-full border-2 border-black p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  />
                  {errors.number && <span className="text-red-600 text-xs mt-1 block">Number is required</span>}
                </div>
                
                <div>
                  <label className="block mb-1">Your Dispatch (Optional)</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className="w-full border-2 border-black p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 resize-none"
                  ></textarea>
                </div>
                
                <motion.button 
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, backgroundColor: isSubmitting ? "transparent" : "#000", color: isSubmitting ? "#000" : "#fff" }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full border-4 border-black py-3 font-bold uppercase tracking-widest transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? "Dispatching..." : "Dispatch Telegraph"}
                </motion.button>
                {success && <div className="text-green-600 text-sm font-bold mt-2">Enquiry received successfully.</div>}
                {errorMsg && <div className="text-red-600 text-sm font-bold mt-2">{errorMsg}</div>}
              </form>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              whileHover={{ scale: 1.02 }}
              className="border-t-4 border-b-4 border-black py-4 bg-white/80 backdrop-blur-sm px-4"
            >
              <h4 className="font-sans font-bold uppercase text-center mb-4 tracking-widest text-sm">Market Quotes</h4>
              <ul className="space-y-3 font-mono text-sm">
                <motion.li whileHover={{ scale: 1.05, originX: 0 }} className="flex justify-between cursor-pointer border-b border-black/10 pb-1 hover:text-green-700"><span>BTC/USD</span> <span>64,231.50 ▲</span></motion.li>
                <motion.li whileHover={{ scale: 1.05, originX: 0 }} className="flex justify-between cursor-pointer border-b border-black/10 pb-1 hover:text-red-700"><span>ETH/USD</span> <span>3,452.12 ▼</span></motion.li>
                <motion.li whileHover={{ scale: 1.05, originX: 0 }} className="flex justify-between cursor-pointer border-b border-black/10 pb-1 hover:text-green-700"><span>SOL/USD</span> <span>142.85 ▲</span></motion.li>
                <motion.li whileHover={{ scale: 1.05, originX: 0 }} className="flex justify-between cursor-pointer hover:text-green-700"><span>XRP/USD</span> <span>0.582 ▲</span></motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </main>
      
      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 border-t-4 border-black py-6 text-center font-sans font-bold uppercase text-xs bg-white/80 backdrop-blur-sm"
      >
        <p>© {new Date().getFullYear()} Capital Chronicle. Printed in the Digital Era.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <motion.a whileHover={{ y: -2 }} href="/privacy" className="hover:underline">Privacy Policy</motion.a>
          <motion.a whileHover={{ y: -2 }} href="/terms" className="hover:underline">Terms & Conditions</motion.a>
        </div>
      </motion.footer>
    </motion.div>
  );
}

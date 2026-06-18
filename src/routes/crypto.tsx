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
        throw new Error("Échec de la soumission de la demande.");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Une erreur s'est produite.");
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
        <p className="text-sm font-sans uppercase tracking-widest mb-2 font-bold">Édition Spéciale</p>
        <motion.h1 
          className="font-serif text-5xl md:text-8xl font-bold uppercase tracking-tight inline-block"
          whileHover={{ scale: 1.02, rotate: -1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Le Grand Livre Crypto
        </motion.h1>
        <motion.div 
          className="h-1 bg-black w-full mt-4 origin-left"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <div className="flex justify-between text-xs md:text-sm font-sans font-bold uppercase border-b border-t border-black py-2 mt-2">
          <span>Londres, Édition 1</span>
          <span>Prix: 1 Satoshi</span>
          <span>Vol. CXXIV</span>
        </div>
      </motion.header>

      {/* Ticker Tape */}
      <div className="w-full bg-black text-white overflow-hidden py-2 border-b-4 border-black/20 flex whitespace-nowrap z-20 relative">
        <motion.div 
          className="flex space-x-8 font-mono text-sm font-bold uppercase"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* Double content for seamless looping */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-8 items-center">
              <span>BTC: $64,231 <span className="text-green-400">▲ +2.4%</span></span>
              <span>ETH: $3,452 <span className="text-red-400">▼ -0.8%</span></span>
              <span>SOL: $142 <span className="text-green-400">▲ +5.1%</span></span>
              <span>ADA: $0.45 <span className="text-green-400">▲ +1.2%</span></span>
              <span>DOGE: $0.12 <span className="text-red-400">▼ -3.4%</span></span>
              <span>DOT: $6.78 <span className="text-green-400">▲ +0.5%</span></span>
              <span>LINK: $14.20 <span className="text-green-400">▲ +4.2%</span></span>
              <span>AVAX: $34.50 <span className="text-red-400">▼ -1.1%</span></span>
            </div>
          ))}
        </motion.div>
      </div>

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
                La Ruée vers l'Or Numérique : L'Ascension Inarrêtable du Bitcoin
              </motion.h2>
              <div className="flex items-center space-x-2 text-sm font-sans font-bold uppercase border-b border-black pb-2">
                <span>Par le Correspondant Financier</span>
              </div>
              <p className="font-serif text-xl leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Dans une ère définie par des avancées technologiques sans précédent, l'émergence des monnaies numériques décentralisées a fondamentalement modifié notre compréhension de la valeur et de l'échange. La première crypto-monnaie, le Bitcoin, poursuit sa marche volatile mais inexorable vers l'acceptation financière grand public, défiant les premiers critiques qui l'ont rejetée comme une simple curiosité spéculative.
              </p>
              <p className="font-serif text-xl leading-relaxed">
                L'adoption institutionnelle s'est accélérée rapidement au cours du dernier trimestre fiscal, d'importantes entités bancaires créant des bureaux de négociation d'actifs numériques dédiés. Ce changement de paradigme suggère une intégration permanente des actifs cryptographiques dans l'architecture financière traditionnelle.
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
                La Révolution des Contrats Intelligents d'Ethereum
              </motion.h3>
              <p className="font-serif text-lg leading-relaxed">
                Alors que le Bitcoin a établi le principe de la rareté décentralisée, Ethereum a introduit l'argent programmable. La prolifération des protocoles de finance décentralisée (DeFi) fonctionnant sur le réseau Ethereum a créé un système financier parallèle, complet avec des instruments de prêt, d'emprunt et de produits dérivés, tous s'exécutant de manière autonome sans intermédiation humaine.
              </p>
            </motion.div>
            
            {/* Animated Graph Placeholder */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="border-4 border-black p-4 relative h-64 overflow-hidden bg-white/50"
            >
              <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 font-sans text-xs font-bold uppercase z-30 flex items-center space-x-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Action du Marché en Direct</span>
              </div>
              
              {/* Candlesticks Animation */}
              <div className="absolute bottom-0 left-0 w-full h-full flex items-end px-2 space-x-1 pb-4 pt-12 overflow-hidden opacity-90 z-10">
                {[...Array(20)].map((_, i) => {
                  const isUp = i % 3 !== 0;
                  const height = 20 + Math.random() * 60;
                  const duration = 1.5 + Math.random() * 2;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end relative h-full">
                      {/* Wick */}
                      <motion.div 
                        className={`w-0.5 ${isUp ? 'bg-green-600' : 'bg-red-600'} absolute`}
                        initial={{ height: "0%" }}
                        animate={{ height: ["10%", `${height + 20}%`, "10%"] }}
                        transition={{ duration, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                      />
                      {/* Body */}
                      <motion.div 
                        className={`w-full max-w-[12px] ${isUp ? 'bg-green-500' : 'bg-red-500'} border border-black z-20`}
                        initial={{ height: "0%" }}
                        animate={{ height: ["5%", `${height}%`, "5%"] }}
                        transition={{ duration, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", delay: i * 0.1 }}
                      />
                    </div>
                  );
                })}
              </div>
              
              {/* Current Price Line */}
              <motion.div 
                className="absolute left-0 w-full border-t-2 border-dashed border-black/70 z-20"
                animate={{ top: ["70%", "30%", "50%", "20%", "60%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute right-0 -top-3 bg-black text-white text-[10px] px-1 font-mono">ACTUEL</div>
              </motion.div>
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
                Demande par Télégraphe Direct
              </motion.h3>
              <p className="font-serif text-sm italic mb-6 text-center">
                Soumettez votre demande concernant la gestion d'actifs numériques. Nos commis vous répondront par retour de courrier.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-sans text-sm font-bold uppercase">
                <div>
                  <label className="block mb-1">Nom Complet</label>
                  <input 
                    {...register("name", { required: true })}
                    className="w-full border-2 border-black p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  />
                  {errors.name && <span className="text-red-600 text-xs mt-1 block">Le nom est requis</span>}
                </div>
                
                <div>
                  <label className="block mb-1">Adresse Courriel Électronique</label>
                  <input 
                    type="email"
                    {...register("email", { required: true })}
                    className="w-full border-2 border-black p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  />
                  {errors.email && <span className="text-red-600 text-xs mt-1 block">L'e-mail est requis</span>}
                </div>
                
                <div>
                  <label className="block mb-1">Numéro de Contact</label>
                  <input 
                    type="tel"
                    {...register("number", { required: true })}
                    className="w-full border-2 border-black p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  />
                  {errors.number && <span className="text-red-600 text-xs mt-1 block">Le numéro est requis</span>}
                </div>
                
                <div>
                  <label className="block mb-1">Votre Dépêche (Optionnel)</label>
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
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le Télégraphe"}
                </motion.button>
                {success && <div className="text-green-600 text-sm font-bold mt-2">Demande reçue avec succès.</div>}
                {errorMsg && <div className="text-red-600 text-sm font-bold mt-2">{errorMsg}</div>}
              </form>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              whileHover={{ scale: 1.02 }}
              className="border-t-4 border-b-4 border-black py-4 bg-white/80 backdrop-blur-sm px-4"
            >
              <h4 className="font-sans font-bold uppercase text-center mb-4 tracking-widest text-sm">Cotes du Marché</h4>
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
        <p>© {new Date().getFullYear()} Capital Chronicle. Imprimé à l'ère numérique.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <motion.a whileHover={{ y: -2 }} href="/privacy" className="hover:underline">Politique de Confidentialité</motion.a>
          <motion.a whileHover={{ y: -2 }} href="/terms" className="hover:underline">Conditions Générales</motion.a>
        </div>
      </motion.footer>
    </motion.div>
  );
}

import { motion } from 'motion/react';
import { Network, Lightbulb, Zap } from 'lucide-react';

export function Vision() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0CB14B] to-[#cd2653] rounded-2xl mb-6">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">
            L'Intégration <span className="bg-gradient-to-r from-[#0CB14B] to-[#cd2653] bg-clip-text text-transparent">globale</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aller au-delà du KNX pour créer le bâtiment intelligent de demain
          </p>
        </motion.div>

        {/* Hero Visual Card - Creative Design */}
        <motion.div
          className="relative max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0CB14B] via-gray-900 to-[#cd2653] opacity-90" />
            
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }} />
            
            {/* Floating Orbs */}
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 bg-[#0CB14B] rounded-full blur-3xl opacity-30"
              animate={{
                y: [0, 30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-40 h-40 bg-[#cd2653] rounded-full blur-3xl opacity-30"
              animate={{
                y: [0, -30, 0],
                x: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Glassmorphism Content Container */}
            <div className="relative backdrop-blur-sm bg-white/5 border border-white/10">
              <div className="p-8 sm:p-12 py-16 sm:py-20">
                <motion.div
                  className="max-w-4xl mx-auto text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {/* Animated Formula */}
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
                    <motion.span
                      className="px-6 py-3 bg-[#0CB14B] text-white rounded-full shadow-lg shadow-[#0CB14B]/50"
                      whileHover={{ scale: 1.05 }}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(12, 177, 75, 0.5)",
                          "0 0 40px rgba(12, 177, 75, 0.8)",
                          "0 0 20px rgba(12, 177, 75, 0.5)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      KNX
                    </motion.span>
                    
                    <motion.span
                      className="text-white text-3xl"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      +
                    </motion.span>
                    
                    <motion.span
                      className="px-6 py-3 bg-[#cd2653] text-white rounded-full shadow-lg shadow-[#cd2653]/50"
                      whileHover={{ scale: 1.05 }}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(205, 38, 83, 0.5)",
                          "0 0 40px rgba(205, 38, 83, 0.8)",
                          "0 0 20px rgba(205, 38, 83, 0.5)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      IoT
                    </motion.span>
                    
                    <motion.span
                      className="text-white text-3xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      =
                    </motion.span>
                    
                    <motion.span
                      className="px-8 py-3 bg-gradient-to-r from-[#0CB14B] to-[#cd2653] text-white rounded-full shadow-2xl"
                      whileHover={{ scale: 1.05 }}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      KNX Augmenté
                    </motion.span>
                  </div>
                  
                  {/* Main Heading */}
                  <motion.h3
                    className="text-white text-2xl sm:text-4xl mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    Concevoir, performer et optimiser<br />
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      les systèmes connectés
                    </span>
                  </motion.h3>
                  
                  {/* Subtitle */}
                  <motion.p
                    className="text-gray-200 text-lg sm:text-xl max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    Du smart home à la GTB : révolutionner l'intégration dans le bâtiment
                  </motion.p>
                  
                  {/* Decorative Tech Lines */}
                  <div className="mt-8 flex justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full"
                        animate={{
                          scaleY: [1, 1.5, 1],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Add keyframes for grid animation */}
          <style>{`
            @keyframes gridMove {
              0% { transform: translateY(0); }
              100% { transform: translateY(50px); }
            }
          `}</style>
        </motion.div>

        {/* Visual Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Card 1: KNX Standard */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-80">
              <img
                src="https://images.unsplash.com/photo-1652689035535-c297e19d6dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYyMDI5MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Smart Building Exterior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0CB14B]/95 via-[#0CB14B]/70 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-2xl mb-2">KNX Standard</h3>
                <p className="text-white/90">
                  Le seul véritable standard dans le bâtiment intelligent
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: IoT Integration */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-80">
              <img
                src="https://images.unsplash.com/photo-1723271198638-8035292089a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NjIwMjkyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Office Building Facade"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#cd2653]/95 via-[#cd2653]/70 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-2xl mb-2">Écosystème IoT</h3>
                <p className="text-white/90">
                  Intégration de 50+ systèmes pour une interopérabilité totale
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Features - Compact */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Network,
              title: 'Interopérabilité',
              stat: '50+',
              label: 'Systèmes',
            },
            {
              icon: Zap,
              title: 'Performance',
              stat: '3x',
              label: 'Plus rapide',
            },
            {
              icon: Lightbulb,
              title: 'Innovation',
              stat: '100%',
              label: 'Open source',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#0CB14B] hover:shadow-lg transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#0CB14B] to-[#cd2653] rounded-xl mb-3">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl bg-gradient-to-r from-[#0CB14B] to-[#cd2653] bg-clip-text text-transparent mb-1">
                {feature.stat}
              </div>
              <p className="text-sm text-gray-500 mb-2">{feature.label}</p>
              <h3 className="text-gray-900">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { 
  Mail, 
  Phone, 
  Hammer, 
  Construction, 
  HardHat, 
  Wrench, 
  Cog, 
  Ruler,
  PaintBucket
} from 'lucide-react';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-3xl mx-auto">
            <img 
              src="/pa2om-logo-2.svg" 
              alt="PA2OM Logo" 
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Construction Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {/* First Row */}
            <div className="flex gap-6">
              <Construction className="w-10 h-10 text-pa-gold animate-pulse" />
              <Hammer className="w-10 h-10 text-pa-green-dark animate-bounce" />
              <HardHat className="w-10 h-10 text-pa-green-light animate-pulse delay-100" />
            </div>
            
            {/* Second Row */}
            <div className="flex gap-6">
              <Wrench className="w-10 h-10 text-pa-green-dark animate-[spin_3s_linear_infinite]" />
              <Cog className="w-10 h-10 text-pa-gold animate-[spin_4s_linear_infinite]" />
              <Ruler className="w-10 h-10 text-pa-green-light animate-pulse delay-200" />
              <PaintBucket className="w-10 h-10 text-pa-green-dark animate-bounce delay-100" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Website Under Construction
          </h1>
          
          <p className="text-xl text-gray-600 mb-12">
            Our new website is coming soon. In the meantime, please feel free to contact us using the information below.
          </p>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6 text-pa-green-dark" />
              <a 
                href="mailto:patrick.murphy@pa2om.com" 
                className="text-lg text-pa-gold hover:text-pa-green-dark hover:underline"
              >
                patrick.murphy@pa2om.com
              </a>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-pa-green-dark" />
              <span className="text-lg">
                Office: <a 
                  href="tel:435-565-9589" 
                  className="text-pa-gold hover:text-pa-green-dark hover:underline"
                >
                  435-565-9589
                </a>
              </span>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-pa-green-dark" />
              <span className="text-lg">
                Mobile: <a 
                  href="tel:802-999-1833" 
                  className="text-pa-gold hover:text-pa-green-dark hover:underline"
                >
                  802-999-1833
                </a>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UnderConstruction;
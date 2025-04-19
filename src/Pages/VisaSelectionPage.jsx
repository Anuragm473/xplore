import { useState } from 'react';
import { ChevronRight, Globe, Calendar, CreditCard, Check, Info, MapPin, Camera } from 'lucide-react';

export default function VisaSelectionPage() {
  const [selectedVisa, setSelectedVisa] = useState(null);
  
  const visaOptions = [
    {
      id: 'tourist',
      name: 'Tourist Visa',
      duration: '30 days',
      processingTime: '3-5 business days',
      price: '₹3,500',
      description: 'Standard tourist visa for sightseeing the majestic Taj Mahal, backwaters of Kerala, and leisure activities.',
      features: ['Multiple entry available', 'No business activities permitted', 'Extendable once']
    },
    {
      id: 'business',
      name: 'Business Visa',
      duration: '90 days',
      processingTime: '5-7 business days',
      price: '₹7,200',
      description: 'For business meetings, conferences, and short-term professional activities in tech hubs like Bangalore.',
      features: ['Multiple entry included', 'Commercial activities allowed', 'Extendable twice']
    },
    {
      id: 'transit',
      name: 'Transit Visa',
      duration: '72 hours',
      processingTime: '1-2 business days',
      price: '₹1,800',
      description: 'Short stay visa for travelers passing through India en route to another destination.',
      features: ['Single entry only', 'Cannot be extended', 'Quick processing']
    },
    {
      id: 'evisa',
      name: 'e-Visa',
      duration: '60 days',
      processingTime: '24-48 hours',
      price: '₹5,400',
      description: 'Electronic visa with expedited online application process for tourists and cultural exploration.',
      features: ['Fully digital process', 'Express processing available', 'Valid for tourism only']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br pt-30 from-orange-50 to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center">
              <MapPin size={32} className="text-orange-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover India with the Right Visa</h1>
          <p className="text-lg text-gray-600">Choose your gateway to experience the rich culture and diversity of India</p>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {visaOptions.map((visa) => (
            <div 
              key={visa.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:shadow-lg border-2 ${selectedVisa === visa.id ? 'border-orange-500' : 'border-transparent'}`}
              onClick={() => setSelectedVisa(visa.id)}
            >
              <div className="h-2 bg-gradient-to-r from-orange-400 to-yellow-400"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">{visa.name}</h2>
                  {selectedVisa === visa.id && (
                    <span className="bg-orange-500 text-white p-1 rounded-full">
                      <Check size={16} />
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">{visa.description}</p>
                
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <Calendar size={16} className="mr-2 text-orange-500" />
                      Duration: {visa.duration}
                    </div>
                    <div className="flex items-center font-medium text-sm text-orange-700">
                      <CreditCard size={16} className="mr-2 text-orange-500" />
                      {visa.price}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-700 mb-4">
                    <Globe size={16} className="mr-2 text-orange-500" />
                    Processing: {visa.processingTime}
                  </div>
                  
                  <ul className="space-y-1">
                    {visa.features.map((feature, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <ChevronRight size={16} className="mr-1 mt-1 text-orange-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex flex-col items-center">
          <button
            className={`px-8 py-4 rounded-xl text-white font-medium transition-colors duration-300 shadow-md ${
              selectedVisa ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!selectedVisa}
          >
            Continue Application Process
          </button>
          
          {!selectedVisa && (
            <div className="flex items-center mt-3 text-sm text-gray-600">
              <Info size={14} className="mr-1" />
              Please select a visa type to continue
            </div>
          )}
        </div>
        
        <div className="mt-12 bg-orange-50 border border-orange-100 rounded-lg p-6">
          <div className="flex items-start">
            <Camera className="text-orange-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-orange-800 mb-2">Planning Your Indian Adventure?</h3>
              <p className="text-orange-700 text-sm">
                From the majestic Himalayas to the backwaters of Kerala, India offers diverse experiences. Not sure which visa suits your journey? Our visa advisor can help you determine the best option.
              </p>
              <button className="mt-3 text-orange-600 hover:text-orange-800 text-sm font-medium flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                Speak to a Visa Expert <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
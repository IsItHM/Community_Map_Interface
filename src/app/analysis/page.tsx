


// import Link from 'next/link'; 
import Image from 'next/image';  

// Import images locally 
import one from 'one.png'; 
import two from '2 (2).png'; 
import three from '3 (3).png'; 
import four from '4 (4).png'; 
import five from '5 (5).png'; 
import six from '6 (6).png'; 
import seven from '7 (7).png'; 

export default function Analysis() {   
  const analyses = [     
    {       
      title: "Base Map",       
      description: "",       
      imageUrl: two,
    },
    {       
      title: "",       
      description: "",       
      imageUrl: one,
    },
    {       
      title: "",       
      description: "",       
      imageUrl: three,
    },
    {       
      title: "",       
      description: "",       
      imageUrl: four,
    },
    {       
      title: "",       
      description: "",       
      imageUrl: five,
    },
    {       
      title: "",       
      description: "",       
      imageUrl: six,
    },
    {       
      title: "",       
      description: "",       
      imageUrl: seven,
    },
  ];    

  return (     
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8 mt-20">       
      <h1 className="text-4xl font-bold text-white text-center mb-8 mt-5">Analysis Page</h1>       
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">         
        {analyses.map((analysis, index) => (           
          <div              
            key={index}              
            className="bg-gray-800 rounded-lg shadow-md p-6 hover:bg-gray-700 transition-all duration-300"           
          >             
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">               
              {analysis.imageUrl ? ( // Check if imageUrl is defined
                <Image                 
                  src={analysis.imageUrl}                 
                  alt={analysis.title}                 
                  fill                 
                  className="object-cover"                 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"               
                /> 
              ) : ( // Fallback content if imageUrl is not defined
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400">Image Not Available</span>
                </div>
              )}
            </div>             
            <h2 className="text-2xl font-semibold text-white mt-4">{analysis.title}</h2>             
            <p className="text-gray-300 mt-2">{analysis.description}</p>           
          </div>         
        ))}       
      </div>     
    </div>   
  ); 
}

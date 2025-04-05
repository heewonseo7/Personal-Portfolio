import { useState } from 'react';
import { educationData } from '../data/educationData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Education = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="bg-black flex flex-col justify-center items-center py-8">
            <h2 className="text-white text-4xl font-normal mb-6">Education</h2>
            <div className="grid gap-4 w-full max-w-5xl">
                {educationData.map((item, index) => (
                    <div 
                        key={item.school} 
                        className={`flex flex-col p-4 transition-all duration-500 ${
                            index !== educationData.length - 1 ? "border-b border-gray-700 pb-4" : ""
                        }`}
                        onMouseEnter={() => toggleExpand(index)}
                        onMouseLeave={() => toggleExpand(null)}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img 
                                    src={item.image} 
                                    alt={item.school} 
                                    className="w-20 h-20 object-cover rounded" 
                                />
                                <div>
                                    <h3 className="font-semibold text-lg text-white">{item.school}</h3>
                                    <p className="text-sm text-white">{item.major}</p>
                                    <p className="text-sm text-white">{item.date}</p>
                                </div>
                            </div>
                            <div className="text-white">
                                {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                        </div>
                        
                        {/* Courses Section - Only visible on hover */}
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${
                                expandedIndex === index 
                                    ? "max-h-96 opacity-100 mt-4" 
                                    : "max-h-0 opacity-0"
                            }`}
                        >
                            <p className="text-white font-semibold mb-2">Relevant Coursework:</p>
                            <ul className="list-disc list-inside text-white pl-2 space-y-1">
                                {item.courses.map((course, idx) => (
                                    <li key={idx} className="text-sm">{course}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
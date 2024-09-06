import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-2">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="rounded-md flex justify-between w-full bg-gray-100 p-3 border border-gray-100"
            >
                <span>{title}</span>
                {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                <svg
                    className="fill-indigo-500 shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                </svg>
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden bg-gray-100 p-2 border border-gray-100 rounded-md">{answer}</div>
            </div>
        </div>
    );
};

export default Accordion;


// import React, { useState } from 'react';

// const Accordion = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full max-w-md mx-auto space-y-2">
//       {[1, 2, 3].map((item, index) => (
//         <div key={index}>
//           <button
//             onClick={() => toggleAccordion(index)}
//             className="w-full flex justify-between items-center p-4 bg-blue-500 text-white font-medium text-left rounded"
//           >
//             <span>Accordion {item}</span>
//             <span>{openIndex === index ? '-' : '+'}</span>
//           </button>
//           <div
//             className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
//               openIndex === index ? 'max-h-40' : 'max-h-0'
//             }`}
//           >
//             <div className="p-4 bg-blue-100">
//               محتوى الأكوردين {item}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;
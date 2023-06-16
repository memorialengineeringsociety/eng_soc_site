import { useState } from 'react';

const PopupWarning = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black backdrop-blur-xl bg-opacity-50 flex justify-center items-center transition-opacity ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className="bg-white p-4 rounded text-center xl:w-1/5">
        <h2 className="text-xl font-bold text-black">Disclaimer</h2>
        <p className='text-lg font-semibold text-black'>The following content is a product of its time and does not necessarily reflect the values or norms of the current society. It is important to approach this material with an understanding that societal attitudes and perspectives evolve over time. The intention is to provide historical context and insight into past beliefs, behaviors, and cultural practices. It is essential to view this content through a critical lens and recognize that progress and social change may have occurred since its creation.</p>
        <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded" onClick={handleClose}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default PopupWarning;
import React from 'react';
import { Sun,ArrowRight } from 'lucide-react';

const SidebarLayout= () => {
  return (
    <div className="flex flex-col  lg:flex-row min-h-screen text-gray-900">
      <aside className="lg:w-1/4 w-full lg:p-10 p-6 border-r border-gray-200 max-h-screen">
        <div className="h-[70%] flex flex-col gap-6 mb-10">
          <Sun className="w-10 h-10" />
          <h1 className="text-5xl font-semibold max-w-96 tracking-tighter">Venkatesh</h1>
          <p className="text-gray-600 text-xl max-w-96 ">
            Go from design to site with Framer, the web builder for creative pros.
          </p>
        </div>
        <nav className="h-[30%] text-base flex flex-col justify-end gap-3">
          <a href="#" className="block  hover:text-gray-600">Twitter</a>
          <hr className='w-full h-[0.5px] bg-gray-200' />
          <a href="#" className="block hover:text-gray-600">Instagram</a>
          <hr className='w-full h-[0.5px] bg-gray-200' />
          <a href="#" className="block  hover:text-gray-600">Email</a>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto h-[100vh]">
        <div className="grid grid-cols-1 gap-8">
          {/* Project X */}
          <div>
            <div className="bg-gray-100 h-[90vh] mb-4 "></div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Project X</h2>
              <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center text-xl">
                View <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="bg-gray-100 h-[90vh] mb-4"></div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Project X</h2>
              <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                View <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="bg-gray-100 h-[90vh] mb-4"></div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Project X</h2>
              <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                View <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="bg-gray-100 h-[90vh] mb-4"></div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Project X</h2>
              <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                View <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default SidebarLayout;
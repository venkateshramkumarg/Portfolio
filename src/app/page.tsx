import React from 'react';
import { Sun,ArrowRight } from 'lucide-react';
import Image from 'next/image';
import pinterest_frontend from '/public/pinterest_frontend.png';
import pinterest_backend from '/public/pinterest_backend.png';
import trainapi from '/public/trainapi.png';
import ecommerce_backend from '/public/ecommerce_backend.png';

const SidebarLayout= () => {
  return (
    <div className="flex flex-col  lg:flex-row min-h-screen text-gray-900">
      <aside className="lg:w-1/4 w-full lg:p-10 p-6 max-h-screen w-100">
        <div className="h-[70%] flex flex-col gap-6 mb-10">
          <Sun className="w-10\ h-10" />
          <h1 className="text-4xl font-semibold max-w-100 tracking-tighter">Venkatesh G</h1>
          <p className="text-gray-600 text-xl max-w-96 ">
          Full-stack developer proficient in React, TypeScript, MongoDB, and modern JavaScript frameworks, seeking a challenging role to build exceptional web applications.
          </p>
        </div>
        <nav className="h-[25%] text-base flex flex-col justify-end gap-3">
          <a href="https://www.linkedin.com/in/venkateshramkumar-g-819182258/" className="block  hover:text-gray-600">Linkedin</a>
          <hr className='w-full h-[0.5px] bg-gray-200' />
          <a href="https://www.instagram.com/venkatesh_ram_kumar/" className="block hover:text-gray-600">Instagram</a>
          <hr className='w-full h-[0.5px] bg-gray-200' />
          <a href="mailto:venkateshramkumar3@gmail.com" className="block  hover:text-gray-600">Email</a>
        </nav>
      </aside>
      <main className="flex-1 lg:p-8 p-6 overflow-auto h-[100vh]">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <Image src={pinterest_frontend} alt="hello" className=' aspect-auto w-full mb-5'/>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Pinterest Frontend</h2>
              <a href="https://github.com/venkateshramkumarg/Pintrest-Frontend" target='blank'  className="text-gray-600 hover:text-gray-900 flex items-center text-xl">
                View <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
          <Image src={pinterest_backend} alt="hello" className=' aspect-auto w-full mb-5'/>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Pinterest Backend</h2>
              <a href="https://github.com/venkateshramkumarg/Pintrest-Backend_" target='blank' className="text-gray-600 hover:text-gray-900 flex items-center">
                View <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
          <Image src={trainapi} alt="hello" className=' aspect-auto w-full mb-5'/>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Train Ticket Backend</h2>
              <a href="https://github.com/venkateshramkumarg/Train-Ticket-Backend" target='blank' className="text-gray-600 hover:text-gray-900 flex items-center">
                View <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>

              <a href="https://github.com/venkateshramkumarg/ecommerce_backend.git" target='blank' className="text-gray-600 hover:text-gray-900 flex items-center">
                View <ArrowRight className="ml-1 w-4 h-4" />
                <div>
                  <Image src={ecommerce_backend} alt="hello" className=' aspect-auto w-full mb-5'/>
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">E-Commerce Backend</h2>
                  </div>
                  </div>
              </a>

        </div>
      </main>
    </div>
  );
};

export default SidebarLayout;
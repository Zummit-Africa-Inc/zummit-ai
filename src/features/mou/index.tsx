import { Appbar, Footer, Seo } from '@/components/shared'
import React from 'react'
import Image from "next/image"


export const MouPage = () => {
  return (
    <>
      <Seo title='Zummit Africa signs MOU' />
      <Appbar />
      <main className="w-full">
        <div className="flex flex-col items-center overflow-hidden bg-slate-50 pl-2 pr-2 sm:p-0">
          <section className=" bg-white pt-24">
            <div className="relative z-0 h-[800px] items-center w-screen">
              <Image
                src="/moubg-lg.svg"
                alt="AI Training Illustration"
                fill
                className="hidden lg:block object-cover"
              />
              <Image
                src="/moubg-sm-01.svg"
                alt="AI Training Illustration"
                fill
                className="lg:hidden object-cover"
              />
              <div className="items-center absolute left-4 top-28 z-20 max-w-4xl md:top-36 lg:left-40">
                <h1 className="mt-0 text-4xl text-primary-purple font-bold leading-[49px] md:mt-8 md:text-6xl lg:leading-[82px]">
                  Quantumzyme Signs <br />
                  MOU With Zummit Africa...
                </h1>
                <p className="mt-4 max-w-[400px] text-lg leading-relaxed md:mt-8 md:max-w-3xl md:text-2xl">
                  Quantumzyme Corp, a pioneering biotechnology company specializing in computational enzyme engineering, has signed a Memorandum of Understanding (MOU) with Zummit Africa to establish a Centre of Excellence in AI for Green Chemistry.
                </p>
              </div>
            </div>
          </section>

          <section className="w-screen bg-primary-purple px-4 lg:px-0">
            <div className="text-white container mx-auto flex flex-col gap-[30px] pb-32 pt-10 lg:gap-[85px] lg:pb-40 lg:pt-20 lg:text-lg">
              <p className='lg:text-3xl'>This partnership unites two organizations with complementary strengths:</p>

              <p className='lg:text-3xl'>Zummit Africa is a community-driven platform at the forefront of AI and data science education. Committed to empowering individuals and organizations, Zummit specializes in real-world machine learning solutions and digital transformation, making it the ideal technology partner for driving AI innovation in green chemistry.
              </p>

              <p className='lg:text-3xl'>Quantumzyme is a leader in biocatalysis and enzyme engineering, leveraging quantum mechanics, molecular modeling, and AI to develop clean, sustainable chemical processes. The company is currently advancing a novel biocatalyst for Ibuprofen API production, setting new benchmarks for green pharmaceutical manufacturing.</p>

              <div className='flex flex-col gap-[16px] lg:gap-[36px]'>
                <h2 className='lg:text-4xl'>The Centre of Excellence in AI for Green Chemistry will focus on:</h2>
                <div>

                  <div className='flex flex-col gap-[40px] lg:gap-[60px]'>
                    <div className='flex flex-col gap-[10px] lg:gap-[20px]'>
                      <h2 className='lg:text-3xl'>AI-driven Biocatalysis -</h2>
                      <p className='lg:text-2xl'>
                        Enhancing enzyme activity, selectivity, and specificity to enable more efficient, eco-friendly chemical processes.
                      </p>
                    </div>
                    <div className='flex flex-col gap-[10px] lg:gap-[20px]'>
                      <h2 className='lg:text-3xl'>Sustainable API Production -</h2>
                      <p className='lg:text-2xl'>
                        Optimizing biocatalysts for pharmaceutical applications, including the greener synthesis of Ibuprofen.
                      </p>
                    </div>
                    <div className='flex flex-col gap-[10px] lg:gap-[20px]'>

                      <h2 className='lg:text-3xl'>Data-driven Molecular Modeling -</h2>
                      <p className='lg:text-2xl'>
                        Using AI to predict enzyme behavior and accelerate the discovery of novel biotransformation solutions.
                      </p>
                    </div>
                    <div className='flex flex-col gap-[10px] lg:gap-[20px]'>

                      <h2 className='lg:text-3xl'>Industry-Academia Collaborations -</h2>
                      <p className='lg:text-2xl'>
                        Bridging the gap between research, industry needs, and workforce development in sustainable chemistry.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

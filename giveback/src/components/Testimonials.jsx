import React from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

export const FaqThree = () => {
  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black"> I would like to donate to IIT Jodhpur. Where do I start?</span>

              <ChevronUp className="h-5 w-5 text-gray-500" />
            </button>
            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-gray-500">
              Thank you for your interest in giving to IIT Madras. You could explore a cause/ project that resonates with you, at this link. You could also alternatively, sign up for our GEM initiative wherein you could make a contribution every month or contribute through your batch.

If you have a specific cause or a passion project that you would like to give wings to at IIT Madras, get in touch with us at jog-enquiry@ia.iitm.ac.in and we would be glad to explore possibilities.
              </p>
            </div>
          </div>
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
              >
                <span className="flex text-start text-lg font-semibold text-black">
                  What is the difference between a free and paid account?
                </span>
                <ChevronDown className="hidden h-5 w-5 text-gray-500 md:block" />
              </button>
            </div>
          ))}
        </div>
        <p className="textbase mt-6 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="#" title="" className="font-semibold text-black hover:underline">
            Contact our support
          </a>
        </p>
      </div>
    </section>
  )
}
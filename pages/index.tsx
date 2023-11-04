import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

import { CheckIcon } from '@heroicons/react/20/solid';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import SectionHeading from '../components/section-heading/section-heading';
import cs1 from '../images/cs2.png';
import f4 from '../images/f4.png';
import logo from '../images/logow.png';
import m4 from '../images/m4.png';
import m5 from '../images/m5.png';
import { useState } from 'react';

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about-us' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact-us' },
];

const testimonials = [
  {
    body: "Cooperative Code Ltd's support services have been instrumental in maintaining the efficiency and reliability of our IT systems. Their team is always responsive, knowledgeable, and dedicated to resolving issues quickly. This level of professionalism and expertise has significantly improved our company's overall productivity, allowing us to focus on our core business without worrying about IT problems. I highly recommend Cooperative Code Ltd for anyone in need of top-notch IT support.",
    author: {
      name: 'Michael Thompson',
      handle: 'GreenTech Innovations',
      imageUrl: m4,
    },
  },
  {
    body: "When we needed expert guidance to streamline our IT infrastructure, Cooperative Code Ltd was the perfect partner. Their IT consultancy service provided valuable insights and strategic recommendations that helped us optimize our technology investments and improve our overall efficiency. The team at Cooperative Code Ltd took the time to truly understand our business needs, and their expertise and dedication made a tangible difference. We couldn't be happier with the results.",
    author: {
      name: 'Jessica Martinez',
      handle: 'ProActive Health Solutions',
      imageUrl: f4,
    },
  },
  {
    body: 'Cooperative Code Ltd played a crucial role in designing and implementing the network infrastructure for our new office. Their team carefully assessed our requirements and delivered a custom solution that not only met our current needs but also allowed for future growth. The network design has proven to be reliable, secure, and high-performing, which has greatly contributed to the success of our new workspace. We are extremely grateful for the exceptional service provided by Cooperative Code Ltd and highly recommend them for any network design projects.',
    author: {
      name: 'Samuel Lewis',
      handle: 'Atlas Engineering Group',
      imageUrl: m5,
    },
  },
];

const features = [
  {
    name: 'Network Design',
    description:
      'Build a reliable, secure, and scalable network infrastructure tailored to your business needs with our expert guidance.',
  },
  {
    name: 'IT Support & Maintenance',
    description:
      'Ensure seamless operations with our proactive support, system maintenance, and rapid issue resolution services.',
  },
  {
    name: 'Offshore Support Workers',
    description:
      'Optimize your IT support costs and guarantee round-the-clock assistance with our dedicated offshore support teams.',
  },
  {
    name: 'Support Ticket Software',
    description:
      'Streamline your IT support process and enhance customer satisfaction with efficient support ticket management systems.',
  },
  {
    name: 'Cybersecurity',
    description:
      'Protect your digital assets from ever-evolving threats with our comprehensive security audits, monitoring, and incident response services.',
  },
  {
    name: 'Cloud Services',
    description:
      'Harness the power of the cloud with our expert guidance on selecting, migrating to, and managing cloud-based solutions.',
  },
  {
    name: 'IT Consulting',
    description:
      'Make informed decisions and maximize your technology investments with our strategic IT consulting services.',
  },
  {
    name: 'Employee Training',
    description:
      'Equip your team with the skills and knowledge to efficiently and securely utilize your IT systems and software.',
  },
];

export function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 z-50 sticky top-0 bg-gray-900">
        <div className="mx-auto max-w-7xl ">
          <div className="px-6 pt-3 pb-3 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav
              className="flex items-center justify-between lg:justify-start"
              aria-label="Global"
            >
              <a href="#" className="-m-1.5 p-1.5 text-white font-thin text-md">
                <span className="sr-only">Cooperative Code</span>
                <Image
                  alt="Cooperative Code"
                  className="h-8 w-auto"
                  src={logo}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 text-white">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Cooperative Code</span>
                <Image
                  alt="Cooperative Code"
                  className="h-8 w-auto"
                  src={logo}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="bg-gray-900">
        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
              <svg
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-gray-900 lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Unleash Your IT Potential
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-400">
                    Experience the difference as Cooperative Code Ltd
                    streamlines your operations, boosts productivity, and
                    secures your digital assets with tailored, innovative, and
                    cost-effective IT services designed to elevate your
                    business.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#contact-us"
                      className="rounded-md bg-brand-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get Started Today!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
              src={cs1}
              alt=""
            />
          </div>
        </div>
      </div>

      <SectionHeading title="Services" map="services">
        Our Comprehensive IT Services
      </SectionHeading>

      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Comprehensive IT Services for Business Success
              </p>
              <p className="mt-6 text-base leading-7 text-gray-400">
                At Cooperative Code Ltd, we offer an extensive range of IT
                services designed to propel your business to new heights. Our
                expertise spans network design, IT support and maintenance,
                offshore support workers, support ticket software,
                cybersecurity, cloud services, IT consulting, and employee
                training. With a team of dedicated professionals, we work
                hand-in-hand with your business to develop and implement
                tailored solutions that not only address your unique needs but
                also drive efficiency, innovation, and growth. Trust Cooperative
                Code Ltd to be your partner in unlocking the full potential of
                your IT infrastructure.
              </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-white">
                    <CheckIcon
                      className="absolute left-0 top-1 h-5 w-5 text-brand-500"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-gray-400">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <SectionHeading title="About Us" map="about-us">
        Why Choose Cooperative Code Ltd?
      </SectionHeading>

      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 shadow-xl">
                <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
                <div
                  className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 blur-3xl"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#DD7E0C] to-[#DD7E0C] opacity-30"
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                  />
                </div>
                <figure className="relative isolate">
                  <svg
                    viewBox="0 0 162 128"
                    fill="none"
                    aria-hidden="true"
                    className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                  >
                    <path
                      id="0ef284b8-28c2-426e-9442-8655d393522e"
                      d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                    />
                    <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x={86} />
                  </svg>
                  <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                    <p>
                      “Innovation is the catalyst for growth, and at Cooperative
                      Code Ltd, we strive to ignite the spark that propels
                      businesses towards a future defined by success and
                      technological prowess.”
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                    <strong className="font-semibold text-white">
                      Simon Skinner,
                    </strong>{' '}
                    Director at Cooperative Code
                  </figcaption>
                </figure>
              </div>
            </div>
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Experience, Expertise, and Exceptional Service
                </h1>
                <div className="max-w-xl text-gray-400">
                  <p className="mt-6">
                    At Cooperative Code Ltd, we take pride in our proven track
                    record of delivering IT excellence to businesses across
                    various industries. With years of experience under our belt,
                    our team of dedicated professionals possesses the knowledge
                    and expertise to design and implement custom IT solutions
                    that cater to your specific needs and objectives.
                  </p>
                  <p className="mt-8">
                    Our commitment to exceptional service has earned us a
                    reputation for going above and beyond to ensure client
                    satisfaction. We take the time to understand your unique
                    challenges and develop tailor-made strategies to help your
                    business overcome them. Our customer-centric approach
                    ensures that we not only meet but also exceed your
                    expectations, providing ongoing support and fostering
                    lasting partnerships.
                  </p>
                  <p className="mt-8">
                    At the core of Cooperative Code Ltd is our passion for
                    innovation and continuous improvement. We stay ahead of the
                    curve by keeping abreast of the latest technological
                    advancements and industry trends. This enables us to equip
                    our clients with cutting-edge solutions that empower them to
                    stay competitive in an ever-evolving digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionHeading title="Testimonials" map="testimonials">
        Our Satisfied Clients Speak for Us
      </SectionHeading>

      <div className="bg-gray-900 py-12 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flow-root max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:grid-cols-2 sm:text-[0] lg:grid-cols-3 grid">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author.handle}
                  className="pt-8 sm:inline-block sm:w-full sm:px-4"
                >
                  <figure className="rounded-2xl bg-gray-50 h-full p-8 text-sm leading-6">
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>

                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={testimonial.author.imageUrl}
                        alt=""
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.author.name}
                        </div>
                        <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionHeading title="Contact Us" map="contact-us">
        Ready to transform your IT landscape?
      </SectionHeading>

      <div className="relative isolate bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-900 lg:w-1/2">
                <svg
                  className="absolute inset-0 h-full w-full stroke-gray-800 [mask-image:radial-gradient(100%_200%_at_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      x="100%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="#101827"
                  />
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Get in touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-500">
                Reach out to us by filling out the form, and we&apos;ll be
                delighted to assist you. Alternatively, feel free to use the
                contact details below to connect with our team directly.
                Let&apos;s explore new possibilities together!
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="tel:+44 7564 054 797"
                    >
                      +44 7564 054 797
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="mailto:simon@cooperativecode.com"
                    >
                      simon@cooperativecode.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            name="contact"
            method="POST"
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
            netlify
            {...({} as any)}
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-400"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-400"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-400"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-400"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-400"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-brand-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Contact Us Now!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} Cooperative Code Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Index;

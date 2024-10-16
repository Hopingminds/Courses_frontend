import React, { useRef, useState, useEffect } from 'react';

const ReturnPolicy = () => {
    const infoWeCollectRef = useRef(null);
    const howWeUseInfoRef = useRef(null);
    const dataSharingRef = useRef(null);
    const dataSecurityRef = useRef(null);
    const yourChoicesRef = useRef(null);
    const childrensPrivacyRef = useRef(null);
    const changesToPolicyRef = useRef(null);
    const refundCancellationRef = useRef(null);
    const contactUsRef = useRef(null);
    const scrollContainerRef = useRef(null);

    const [activeSection, setActiveSection] = useState('');
    const [isSmallScreen, setIsSmallScreen] = useState(false);


    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 720); // 720px is the max of 'sm' breakpoint
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    const scrollToSection = (ref, sectionName) => {
        if (ref.current) {
            if (isSmallScreen) {
                const yOffset = -10; // Adjust this value to fine-tune the scroll position
                const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            } else {
                // Existing logic for larger screens
                if (scrollContainerRef.current) {
                    const sectionTop = ref.current.offsetTop;
                    scrollContainerRef.current.scrollTo({
                        top: sectionTop - 10,
                        behavior: 'smooth',
                    });
                }
            }
            setActiveSection(sectionName);
        }
    };


    return (
        <div className="bg-gray-50 p-4 xsm:p-6 sm:p-8 md:p-16 lg:p-24 xl:32 px-[5%]">
            {/* Main Title */}
            <h1 className="text-3xl xsm:text-4xl font-bold mb-4 text-center font-poppins">
                Privacy <span className="text-green-500 font-poppins">Policy</span>
            </h1>

            <p className="text-base xsm:text-lg text-gray-600 text-center mb-10 font-poppins">
                At Hoping Minds, we are committed to protecting the privacy and security of our users' personal information.
                This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to safeguard your data when you use our platform.
            </p>

            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row
            gap-8 relative">
                <aside className="lg:w-1/4 lg:sticky lg:top-8  h-fit xl:w-1/4 xl:sticky xl:top-16 ">
                    <div className="p-6 shadow-none">
                        <ul className="space-y-4">
                            <li
                                className={`text-base xsm:text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'info' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(infoWeCollectRef, 'info')}
                            >
                                Information We Collect
                            </li>
                            <li
                                className={`text-base xsm:text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'how' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(howWeUseInfoRef, 'how')}
                            >
                                How We Use Your Information
                            </li>
                            <li
                                className={`text-base xsm:text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'data' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(dataSharingRef, 'data')}
                            >
                                Data Sharing and Disclosure
                            </li>
                            <li
                                className={`text-base xsm:text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'security' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(dataSecurityRef, 'security')}
                            >
                                Data Security
                            </li>
                            <li
                                className={`text-base xsm:text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'choices' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(yourChoicesRef, 'choices')}
                            >
                                Your Choices
                            </li>
                            <li
                                className={`text-base xsm:text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'children' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(childrensPrivacyRef, 'children')}
                            >
                                Children's Privacy
                            </li>
                            <li
                                className={`text-base xsm:text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'changes' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(changesToPolicyRef, 'changes')}
                            >
                                Changes to This Privacy Policy
                            </li>
                            <li
                                className={`text-base xsm:text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'refund' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(refundCancellationRef, 'refund')}
                            >
                                Refund & Cancellation Policy
                            </li>
                            <li
                                className={`text-base xsm:text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'contact' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(contactUsRef, 'contact')}
                            >
                                Contact Us
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Divider Line */}
                <div className="hidden md:block lg:block xl:block w-1 h-auto bg-green-500"></div>

                {/* Main Content - Scrollable */}
                <section className="lg:w-3/4 xl:w-3/4 max-h-[70vh] overflow-y-scroll no-scrollbar" ref={scrollContainerRef}>
                    {/* Section: Information We Collect */}
                    <div className="mb-8" ref={infoWeCollectRef}>
                        <h2 className="text-xl xsm:text-2xl font-bold mb-4 font-poppins">Information We Collect:</h2>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            a. Personal Information: When you register an account with Hoping Minds, we may collect personal information such as your name, email address, and other contact details.
                        </p>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            b. Payment Information: If you make purchases through our platform, we may collect payment information, including credit card details and billing address.
                        </p>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            c. User-Generated Content: Any content you create or upload to our platform, such as comments, posts, or assignments, may be collected by us.
                        </p>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            d. Usage Data: We automatically collect certain information about your interactions with our website, including your IP address, browser type, device information, and pages visited.
                        </p>
                    </div>

                    {/* Section: How We Use Your Information */}
                    <div className="mb-8" ref={howWeUseInfoRef}>
                        <h2 className="text-xl xsm:text-2xl font-bold mb-4 font-poppins">How We Use Your Information:</h2>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            a. Providing Services: We use the information we collect to provide, maintain, and improve our eLearning platform, including delivering content, processing payments, and facilitating communication between users.
                        </p>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            b. Personalization: We may use your information to personalize your experience on our platform, such as recommending courses or content tailored to your interests.
                        </p>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            c. Communication: We may use your contact information to send you important updates, announcements, or promotional offers related to our services.
                        </p>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            d. Analytics: We use aggregated usage data to analyze trends, monitor the effectiveness of our platform, and make informed decisions about improvements.
                        </p>
                    </div>

                    {/* Section: Data Sharing and Disclosure */}
                    <div className="mb-8" ref={dataSharingRef}>
                        <h2 className="text-xl xsm:text-2xl font-bold mb-4 font-poppins">Data Sharing and Disclosure:</h2>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            a. Third-Party Service Providers: We may share your information with third-party service providers who assist us in delivering our services, such as payment processors and cloud hosting providers.
                        </p>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            b. Legal Requirements: We may disclose your information if required to do so by law or in response to valid legal requests, such as a subpoena or court order.
                        </p>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            c. Business Transfers: In the event of a merger, acquisition, or sale of our business, your information may be transferred to the new entity as part of the transaction.
                        </p>
                    </div>

                    {/* Section: Data Security */}
                    <div className="mb-8" ref={dataSecurityRef}>
                        <h2 className="text-xl xsm:text-2xl font-bold mb-4 font-poppins">Data Security:</h2>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            a. Security Measures: We take appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or alteration.
                        </p>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            b. Encryption: Sensitive information, such as payment details, is encrypted during transmission to safeguard your privacy and security.
                        </p>
                    </div>

                    {/* Section: Your Choices */}
                    <div className="mb-8" ref={yourChoicesRef}>
                        <h2 className="text-xl xsm:text-2xl font-bold mb-4 font-poppins">Your Choices:</h2>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            a. Account Settings: You can access and update your account information through your profile settings.
                        </p>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            b. Marketing Preferences: You have the option to opt-out of receiving promotional communications from us by adjusting your preferences in your account settings.
                        </p>
                    </div>

                    {/* Section: Children's Privacy */}
                    <div className="mb-8" ref={childrensPrivacyRef}>
                        <h2 className="text-xl xsm:text-2xl font-bold mb-4 font-poppins">Children's Privacy:</h2>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            Our platform is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13 without parental consent.
                        </p>
                    </div>

                    {/* Section: Changes to This Privacy Policy */}
                    <div className="mb-8" ref={changesToPolicyRef}>
                        <h2 className="text-xl xsm:text-2xl font-bold mb-4 font-poppins">Changes to This Privacy Policy:</h2>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any material changes by posting the revised policy on our website.
                        </p>
                    </div>

                    {/* Section: Refund & Cancellation Policy */}
                    <div className="mb-8" ref={refundCancellationRef}>
                        <h2 className="text-xl xsm:text-2xl font-bold mb-4 font-poppins">Refund & Cancellation Policy:</h2>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            a. Refunds: Refunds for courses purchased through our platform are available within 30 days of purchase, provided that the course has not been accessed.
                        </p>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                            b. Cancellations: You may cancel your subscription at any time through your account settings. Cancellations will take effect at the end of the current billing cycle.
                        </p>
                    </div>

                    {/* Section: Contact Us */}
                    <div className="mb-8" ref={contactUsRef}>
                        <h2 className="text-xl xsm:text-2xl font-bold mb-4 font-poppins">Contact Us:</h2>
                        <p className="text-sm xsm:text-base text-gray-700 mb-2 font-poppins">
                        If you have any questions about these Terms, please contact us at: <a href="mailto:support@hopingminds.com" className="text-blue-500 underline mr-1">support@hopingminds.com</a>,<a href='tel:+917657922600'>+91 76579 22600</a>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ReturnPolicy;

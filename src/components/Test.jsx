
<html class="light" lang="en"><head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>The Digital Curator | Architectural Real Estate</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;family=Inter:wght@400;500&amp;display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
    <style></style>

</head>
    <body class="bg-surface text-on-surface antialiased overflow-x-hidden">
        <div class="fixed inset-0 noise-overlay z-[100]"></div>
        {/* <!-- Navigation --> */}
        <nav class="fixed top-0 w-full z-50 bg-[#fafaf5]/80 dark:bg-[#1a1c19]/80 backdrop-blur-xl shadow-[0px_20px_40px_rgba(44,44,44,0.04)]">
            <div class="flex justify-between items-center px-8 py-6 max-w-[1440px] mx-auto font-['Manrope'] font-medium tracking-tight text-sm">
                <div class="text-xl font-bold tracking-tighter text-[#2c2c2c] dark:text-[#fafaf5]">The Digital Curator</div>
                <div class="hidden md:flex items-center gap-10">
                    <a class="text-[#9a442d] dark:text-[#e07a5f] border-b-2 border-[#9a442d] pb-1 hover:opacity-100 transition-all duration-300" href="#">Properties</a>
                    <a class="text-[#2c2c2c] dark:text-[#fafaf5] opacity-70 hover:opacity-100 hover:text-[#9a442d] transition-all duration-300" href="#">About</a>
                    <a class="text-[#2c2c2c] dark:text-[#fafaf5] opacity-70 hover:opacity-100 hover:text-[#9a442d] transition-all duration-300" href="#">Services</a>
                    <a class="text-[#2c2c2c] dark:text-[#fafaf5] opacity-70 hover:opacity-100 hover:text-[#9a442d] transition-all duration-300" href="#">Contact</a>
                </div>
                <div class="flex items-center gap-6">
                    <button class="grainy-gradient text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-transform active:scale-95">Book a Viewing</button>
                    <span class="material-symbols-outlined text-[#2c2c2c] cursor-pointer md:hidden" data-icon="menu">menu</span>
                </div>
            </div>
        </nav>
        <main>
            {/* <!-- Hero Section --> */}
            <section class="relative min-height-[921px] flex flex-col items-center justify-center pt-32 pb-20 px-8">
                <div class="absolute inset-0 grid-pattern"></div>
                <div class="relative z-10 text-center max-w-4xl mx-auto">
                    <span class="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 block font-medium">Curating Architectural Excellence</span>
                    <h1 class="text-5xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-8">
                        Living as a <span class="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">Work of Art.</span>
                    </h1>
                    <p class="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        We transcend traditional brokerage, treating every property as a curated masterpiece for the discerning architectural enthusiast.
                    </p>
                    <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <button class="grainy-gradient text-on-primary px-10 py-5 rounded-xl font-semibold text-lg shadow-xl active:scale-95 transition-all">Explore Properties</button>
                        <button class="bg-surface-container-high text-on-surface px-10 py-5 rounded-xl font-semibold text-lg active:scale-95 transition-all">Contact Us</button>
                    </div>
                </div>
                {/* <!-- Floating Search Filters --> */}
                <div class="relative z-20 mt-20 w-full max-w-5xl">
                    <div class="bg-surface/80 glass-panel p-6 rounded-2xl shadow-[0px_20px_40px_rgba(44,44,44,0.06)] grid grid-cols-1 md:grid-cols-4 gap-6 items-end border border-outline-variant/10">
                        <div class="flex flex-col gap-2">
                            <label class="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Location</label>
                            <div class="flex items-center gap-2 bg-surface-container-low px-4 py-3 rounded-lg border-b-2 border-transparent focus-within:border-primary transition-all">
                                <span class="material-symbols-outlined text-sm text-outline" data-icon="location_on">location_on</span>
                                <input class="bg-transparent border-none p-0 text-sm focus:ring-0 w-full font-medium" placeholder="Stockholm, SE" type="text" />
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label class="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Property Type</label>
                            <div class="flex items-center gap-2 bg-surface-container-low px-4 py-3 rounded-lg border-b-2 border-transparent focus-within:border-primary transition-all">
                                <span class="material-symbols-outlined text-sm text-outline" data-icon="apartment">apartment</span>
                                <select class="bg-transparent border-none p-0 text-sm focus:ring-0 w-full font-medium appearance-none">
                                    <option>Modernist Villa</option>
                                    <option>Penthouse</option>
                                    <option>Loft</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label class="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Price Range</label>
                            <div class="flex items-center gap-2 bg-surface-container-low px-4 py-3 rounded-lg border-b-2 border-transparent focus-within:border-primary transition-all">
                                <span class="material-symbols-outlined text-sm text-outline" data-icon="payments">payments</span>
                                <input class="bg-transparent border-none p-0 text-sm focus:ring-0 w-full font-medium" placeholder="€1.5M - €5M" type="text" />
                            </div>
                        </div>
                        <button class="bg-on-background text-surface py-3.5 rounded-lg font-bold text-sm tracking-tight hover:bg-primary transition-colors flex items-center justify-center gap-2">
                            <span class="material-symbols-outlined text-base" data-icon="search">search</span>
                            Search Gallery
                        </button>
                    </div>
                </div>
            </section>
            {/* <!-- About Section (Asymmetric Editorial) --> */}
            <section class="py-32 px-8 max-w-[1440px] mx-auto bg-surface-container-low rounded-[3rem]">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div class="relative">
                        <div class="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl scale-95 origin-bottom-left rotate-[-2deg]">
                            <img class="w-full h-full object-cover" data-alt="minimalist Scandinavian villa with floor-to-ceiling windows and clean white concrete walls in a serene forest setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS_HLZ3TgPin9eb7Sz0Hf8w7dq5JusOP7B8O8czd-AT0vhJylSB9CPrxYM3SYn-Y8XjkqvJMp76p7_Wu6iml3sQAA91_jEahAjbwrNnxzEN5FiWGj4FPG7R7txzURCuPE8vy4_FosD5f3-g4Szdtar1T_6iHDrWrafF05B9hRPEn6uEPg5eFMPuECjA0OlTR2kh3dAh8y2XhEldOuVXSoFEuNEQ7-bKwn9JfkkxQTqYEb2VYXkpbxmCjiDPbksU1l7ib8KEshFIw" />
                        </div>
                        <div class="absolute -bottom-12 -right-12 w-2/3 aspect-square overflow-hidden rounded-xl shadow-2xl border-[12px] border-surface-container-low z-10 hidden md:block rotate-[1deg]">
                            <img class="w-full h-full object-cover" data-alt="interior detail of a modern living room with a designer lounge chair, textured rug, and soft natural sunlight filtering through thin curtains" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvgzIGccnhrS2adDJKF4ANtrUgLALvR0rvGEVIJLBnHb2ki2FWr3qd9fF2_z98Gbvc8mDgFPAvUk_ALxfEgkm4hQQncj-4cDX1eGZkuKG2Gcxm5jDsZbVWJOJvhyM0Hh8R7FgMW6RENNr2jVbg-LDaKicPyEsebK_djG65yoYBqk2zDIPBHaDKjG_f-o_RnwpOrW3u5gR7vRHMCxozpPlHvtErdt-VwHBOEKDODITDcqPfs6J69I5AMcHl2n5p_lgPCJAWxdiUxA" />
                        </div>
                    </div>
                    <div class="flex flex-col gap-8">
                        <span class="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold">The Philosophy</span>
                        <h2 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Beyond walls. <br />Beyond windows.</h2>
                        <p class="text-lg text-secondary leading-relaxed font-light">
                            At The Digital Curator, we don't list properties; we archive experiences. Each home in our portfolio is selected for its architectural significance, its dialogue with natural light, and its commitment to functional minimalism.
                        </p>
                        <p class="text-lg text-secondary leading-relaxed font-light">
                            Our approach combines the precision of a gallery curator with the expertise of luxury real estate professionals.
                        </p>
                        <div class="flex gap-12 mt-8 overflow-x-auto pb-4 scrollbar-hide">
                            <div class="flex-shrink-0">
                                <div class="text-4xl font-extrabold text-primary mb-1">140+</div>
                                <div class="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Curated Estates</div>
                            </div>
                            <div class="flex-shrink-0">
                                <div class="text-4xl font-extrabold text-primary mb-1">€2.4B</div>
                                <div class="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Portfolio Value</div>
                            </div>
                            <div class="flex-shrink-0">
                                <div class="text-4xl font-extrabold text-primary mb-1">12</div>
                                <div class="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Global Awards</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Services Section (Masonry) --> */}
            <section class="py-32 px-8 max-w-[1440px] mx-auto">
                <div class="text-center mb-20">
                    <span class="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold block mb-4">Our Expertise</span>
                    <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">The Curated Experience</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {/* <!-- Service 1 --> */}
                    <div class="group bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col gap-6">
                        <span class="material-symbols-outlined text-4xl text-primary font-light" data-icon="architecture">architecture</span>
                        <h3 class="text-2xl font-bold tracking-tight">Architectural Advisory</h3>
                        <p class="text-secondary leading-relaxed font-light">Full-spectrum consulting on property potential, from historical significance to modernist restoration possibilities.</p>
                        <div class="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
                    </div>
                    {/* <!-- Service 2 --> */}
                    <div class="group bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col gap-6 lg:mt-12">
                        <span class="material-symbols-outlined text-4xl text-primary font-light" data-icon="camera">camera</span>
                        <h3 class="text-2xl font-bold tracking-tight">Narrative Marketing</h3>
                        <p class="text-secondary leading-relaxed font-light">We tell your home's story through cinematic videography and editorial-grade architectural photography.</p>
                        <div class="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
                    </div>
                    {/* <!-- Service 3 --> */}
                    <div class="group bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col gap-6">
                        <span class="material-symbols-outlined text-4xl text-primary font-light" data-icon="public">public</span>
                        <h3 class="text-2xl font-bold tracking-tight">Global Network</h3>
                        <p class="text-secondary leading-relaxed font-light">Direct access to a private circle of international investors, designers, and high-net-worth architectural collectors.</p>
                        <div class="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Section --> */}
            <section class="py-32 px-8 bg-surface-container-low relative overflow-hidden">
                <div class="max-w-3xl mx-auto text-center relative z-10">
                    <h2 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Begin Your Journey.</h2>
                    <p class="text-lg text-secondary mb-16 font-light">Reach out to our curators for a private consultation or to list your architectural landmark.</p>
                    <form class="flex flex-col gap-8 text-left">
                        <div class="group">
                            <label class="font-label text-[10px] uppercase tracking-widest text-secondary font-bold block mb-4">Full Name</label>
                            <input class="w-full bg-transparent border-b border-outline-variant py-4 text-2xl font-medium focus:border-primary focus:ring-0 transition-colors placeholder:text-outline-variant/50" placeholder="Erik Andersson" type="text" />
                        </div>
                        <div class="group">
                            <label class="font-label text-[10px] uppercase tracking-widest text-secondary font-bold block mb-4">Email Address</label>
                            <input class="w-full bg-transparent border-b border-outline-variant py-4 text-2xl font-medium focus:border-primary focus:ring-0 transition-colors placeholder:text-outline-variant/50" placeholder="erik@minimal.com" type="email" />
                        </div>
                        <div class="group">
                            <label class="font-label text-[10px] uppercase tracking-widest text-secondary font-bold block mb-4">Message</label>
                            <textarea class="w-full bg-transparent border-b border-outline-variant py-4 text-2xl font-medium focus:border-primary focus:ring-0 transition-colors placeholder:text-outline-variant/50 resize-none" placeholder="Tell us about your property vision..." rows="2"></textarea>
                        </div>
                        <button class="grainy-gradient text-on-primary py-6 rounded-xl font-bold text-xl mt-8 shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-95 group">
                            Send Inquiry
                            <span class="material-symbols-outlined group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                        </button>
                    </form>
                    <div class="flex flex-wrap justify-center gap-12 mt-20 border-t border-outline-variant/20 pt-12">
                        <div class="flex flex-col items-center gap-2">
                            <span class="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Inquiries</span>
                            <span class="text-on-surface font-medium">hello@digitalcurator.com</span>
                        </div>
                        <div class="flex flex-col items-center gap-2">
                            <span class="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Studio</span>
                            <span class="text-on-surface font-medium">Skeppsbron 18, Stockholm</span>
                        </div>
                        <div class="flex flex-col items-center gap-2">
                            <span class="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Call</span>
                            <span class="text-on-surface font-medium">+46 8 123 45 67</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        {/* <!-- Footer --> */}
        <footer class="bg-[#f4f4ef] dark:bg-[#121411] w-full rounded-t-[2rem] mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-12 py-20 max-w-[1440px] mx-auto font-['Manrope'] text-sm leading-relaxed">
                <div class="flex flex-col gap-6">
                    <div class="text-lg font-bold text-[#2c2c2c] dark:text-[#fafaf5]">The Digital Curator</div>
                    <p class="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 max-w-xs">Elevating real estate through architectural narrative and curated excellence since 2014.</p>
                </div>
                <div class="flex flex-col gap-4">
                    <h4 class="font-bold text-[#2c2c2c] dark:text-[#fafaf5] uppercase tracking-widest text-[10px]">Navigation</h4>
                    <a class="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors opacity-80 hover:opacity-100" href="#">Properties</a>
                    <a class="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors opacity-80 hover:opacity-100" href="#">Services</a>
                    <a class="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors opacity-80 hover:opacity-100" href="#">About Us</a>
                    <a class="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors opacity-80 hover:opacity-100" href="#">Journal</a>
                </div>
                <div class="flex flex-col gap-4">
                    <h4 class="font-bold text-[#2c2c2c] dark:text-[#fafaf5] uppercase tracking-widest text-[10px]">Legal &amp; Social</h4>
                    <a class="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
                    <a class="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
                    <a class="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors opacity-80 hover:opacity-100" href="#">Instagram</a>
                    <a class="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors opacity-80 hover:opacity-100" href="#">LinkedIn</a>
                </div>
                <div class="flex flex-col gap-6">
                    <h4 class="font-bold text-[#2c2c2c] dark:text-[#fafaf5] uppercase tracking-widest text-[10px]">Newsletter</h4>
                    <p class="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60">Receive curated architectural insights.</p>
                    <div class="flex border-b border-outline-variant/30 pb-2">
                        <input class="bg-transparent border-none p-0 text-sm focus:ring-0 w-full placeholder:text-outline-variant/50" placeholder="email@address.com" type="email" />
                        <button class="material-symbols-outlined text-primary" data-icon="east">east</button>
                    </div>
                </div>
            </div>
            <div class="max-w-[1440px] mx-auto px-12 py-8 border-t border-outline-variant/10 text-center">
                <p class="text-[#2c2c2c]/40 dark:text-[#fafaf5]/40 text-[10px] uppercase tracking-widest">© 2024 The Digital Curator. Architectural Real Estate.</p>
            </div>
        </footer>
    </body></html>
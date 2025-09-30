import Link from 'next/link';

export default function Home() {
  return (
    <div suppressHydrationWarning>
          <aside className="sidebar">
                <button type="button" className="sidebar-close-btn !mt-4">
                    <iconify-icon icon="radix-icons:cross-2"></iconify-icon>
                </button>
                <div>
                    <Link href="/" className="sidebar-logo">
                        <img src="assets/images/logo.png" alt="site logo" className="light-logo" />
                        <img src="assets/images/logo-light.png" alt="site logo" className="dark-logo" />
                        <img src="assets/images/logo-icon.png" alt="site logo" className="logo-icon" />
                    </Link>
                </div>
                <div className="sidebar-menu-area">
                    <ul className="sidebar-menu" id="sidebar-menu">
                        <li className="dropdown">
                            <a href="javascript:void(0)">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="menu-icon"></iconify-icon>
                                <span>Dashboard</span>
                            </a>
                        
                        </li>
                    
                                <li>
                                    <Link href="/login">  <iconify-icon icon="solar:gallery-wide-linear" className="menu-icon"></iconify-icon>
                                <span>Login</span></Link>
                                </li>
                                <li>
                                    <Link href="/register">
                                    <iconify-icon icon="solar:gallery-wide-linear" className="menu-icon"></iconify-icon>
                                <span>register</span>
                                    </Link>
                                </li>
                                
                            
                        
                        <li>
                            <a href="#">
                                <iconify-icon icon="solar:gallery-wide-linear" className="menu-icon"></iconify-icon>
                                <span>Gallery</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <iconify-icon icon="hugeicons:money-send-square" className="menu-icon"></iconify-icon>
                                <span>Pricing</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <iconify-icon icon="mage:message-question-mark-round" className="menu-icon"></iconify-icon>
                                <span>FAQs.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <iconify-icon icon="streamline:straight-face" className="menu-icon"></iconify-icon>
                                <span>404</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <iconify-icon icon="octicon:info-24" className="menu-icon"></iconify-icon>
                                <span>Terms & Conditions</span>
                            </a>
                        </li>
                    
                    </ul>
                </div>
            </aside>

            <main className="dashboard-main">
                <div className="navbar-header border-b border-neutral-200 dark:border-neutral-600">
                    <div className="flex items-center justify-between">
                        <div className="col-auto">
                            <div className="flex flex-wrap items-center gap-[16px]">
                                <button type="button" className="sidebar-toggle">
                                    <iconify-icon icon="heroicons:bars-3-solid" className="icon non-active"></iconify-icon>
                                    <iconify-icon icon="iconoir:arrow-right" className="icon active"></iconify-icon>
                                </button>
                                <button type="button" className="sidebar-mobile-toggle d-flex !leading-[0]">
                                    <iconify-icon icon="heroicons:bars-3-solid" className="icon !text-[30px]"></iconify-icon>
                                </button>
                                <form className="navbar-search">
                                    <input type="text" name="search" placeholder="Search " />
                                    <iconify-icon icon="ion:search-outline" className="icon"></iconify-icon>
                                </form>

                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="flex flex-wrap items-center gap-3">
                                <button type="button" id="theme-toggle" className="w-10 h-10 bg-neutral-200 dark:bg-neutral-700 dark:text-white rounded-full flex justify-center items-center">
                                    <span id="theme-toggle-dark-icon" className="hidden">
                                        <i className="ri-sun-line"></i>
                                    </span>
                                    <span id="theme-toggle-light-icon" className="hidden">
                                        <i className="ri-moon-line"></i>
                                    </span>
                                </button>

                               {/* Language Dropdown Start  */}
                                <div className="hidden sm:inline-block">
                                    <button data-dropdown-toggle="dropdownInformation" className="has-indicator w-10 h-10 bg-neutral-200 dark:bg-neutral-700 dark:text-white rounded-full flex justify-center items-center" type="button">
                                        <img src="assets/images/lang-flag.png" alt="image" className="w-6 h-6 object-cover rounded-full" />
                                    </button>
                                    <div id="dropdownInformation" className="z-10 hidden bg-white dark:bg-neutral-700 rounded-lg shadow-lg dropdown-menu-sm p-3">
                                        <div className="py-3 px-4 rounded-lg bg-primary-50 dark:bg-primary-600/25 mb-4 flex items-center justify-between gap-2">
                                            <div>
                                                <h6 className="text-lg text-neutral-900 font-semibold mb-0">Choose Your Language</h6>
                                            </div>
                                        </div>

                                        <div className="max-h-[400px] overflow-y-auto scroll-sm pe-2">
                                            <div className="mt-4 flex flex-col gap-4">

                                                <div className="form-check style-check flex items-center justify-between">
                                                    <label className="form-check-label line-height-1 font-medium text-secondary-light" htmlFor="english">
                                                        <span className="text-black hover-bXg-transparent hover-text-primary flex items-center gap-3">
                                                            <img src="assets/images/flags/flag1.png" alt="" className="w-9 h-9 bg-success-subtle text-success-600 rounded-full shrink-0" />
                                                            <span className="text-base font-semibold mb-0">English</span>
                                                        </span>
                                                    </label>
                                                    <input className="form-check-input rounded-full" name="language" type="radio" id="english" />
                                                </div>

                                                <div className="form-check style-check flex items-center justify-between">
                                                    <label className="form-check-label line-height-1 font-medium text-secondary-light" htmlFor="Japan">
                                                        <span className="text-black hover-bXg-transparent hover-text-primary flex items-center gap-3">
                                                            <img src="assets/images/flags/flag2.png" alt="" className="w-9 h-9 bg-success-subtle text-success-600 rounded-full shrink-0" />
                                                            <span className="text-base font-semibold mb-0">Japan</span>
                                                        </span>
                                                    </label>
                                                    <input className="form-check-input rounded-full" name="language" type="radio" id="Japan" />
                                                </div>

                                                <div className="form-check style-check flex items-center justify-between">
                                                    <label className="form-check-label line-height-1 font-medium text-secondary-light" htmlFor="Franch">
                                                        <span className="text-black hover-bXg-transparent hover-text-primary flex items-center gap-3">
                                                            <img src="assets/images/flags/flag3.png" alt="" className="w-9 h-9 bg-success-subtle text-success-600 rounded-full shrink-0" />
                                                            <span className="text-base font-semibold mb-0">Franch</span>
                                                        </span>
                                                    </label>
                                                    <input className="form-check-input rounded-full" name="language" type="radio" id="Franch" />
                                                </div>

                                                <div className="form-check style-check flex items-center justify-between">
                                                    <label className="form-check-label line-height-1 font-medium text-secondary-light" htmlFor="Germany">
                                                        <span className="text-black hover-bXg-transparent hover-text-primary flex items-center gap-3">
                                                            <img src="assets/images/flags/flag4.png" alt="" className="w-9 h-9 bg-success-subtle text-success-600 rounded-full shrink-0" />
                                                            <span className="text-base font-semibold mb-0">Germany</span>
                                                        </span>
                                                    </label>
                                                    <input className="form-check-input rounded-full" name="language" type="radio" id="Germany" />
                                                </div>

                                                <div className="form-check style-check flex items-center justify-between">
                                                    <label className="form-check-label line-height-1 font-medium text-secondary-light" htmlFor="SouthKoria">
                                                        <span className="text-black hover-bXg-transparent hover-text-primary flex items-center gap-3">
                                                            <img src="assets/images/flags/flag5.png" alt="" className="w-9 h-9 bg-success-subtle text-success-600 rounded-full shrink-0" />
                                                            <span className="text-base font-semibold mb-0">South Koria</span>
                                                        </span>
                                                    </label>
                                                    <input className="form-check-input rounded-full" name="language" type="radio" id="SouthKoria" />
                                                </div>

                                                <div className="form-check style-check flex items-center justify-between">
                                                    <label className="form-check-label line-height-1 font-medium text-secondary-light" htmlFor="Bangladesh">
                                                        <span className="text-black hover-bXg-transparent hover-text-primary flex items-center gap-3">
                                                            <img src="assets/images/flags/flag6.png" alt="" className="w-9 h-9 bg-success-subtle text-success-600 rounded-full shrink-0" />
                                                            <span className="text-base font-semibold mb-0">Bangladesh</span>
                                                        </span>
                                                    </label>
                                                    <input className="form-check-input rounded-full" name="language" type="radio" id="Bangladesh" />
                                                </div>

                                                <div className="form-check style-check flex items-center justify-between">
                                                    <label className="form-check-label line-height-1 font-medium text-secondary-light" htmlFor="India">
                                                        <span className="text-black hover-bXg-transparent hover-text-primary flex items-center gap-3">
                                                            <img src="assets/images/flags/flag7.png" alt="" className="w-9 h-9 bg-success-subtle text-success-600 rounded-full shrink-0" />
                                                            <span className="text-base font-semibold mb-0">India</span>
                                                        </span>
                                                    </label>
                                                    <input className="form-check-input rounded-full" name="language" type="radio" id="India" />
                                                </div>

                                                <div className="form-check style-check flex items-center justify-between">
                                                    <label className="form-check-label line-height-1 font-medium text-secondary-light" htmlFor="Koria">
                                                        <span className="text-black hover-bXg-transparent hover-text-primary flex items-center gap-3">
                                                            <img src="assets/images/flags/flag8.png" alt="" className="w-9 h-9 bg-success-subtle text-success-600 rounded-full shrink-0" />
                                                            <span className="text-base font-semibold mb-0">Koria</span>
                                                        </span>
                                                    </label>
                                                    <input className="form-check-input rounded-full" name="language" type="radio" id="Koria" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                               {/* Language Dropdown End  */}
                               {/* Message Dropdown Start  */}
                                <button data-dropdown-toggle="dropdownMessage" className="has-indicator w-10 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-full flex justify-center items-center" type="button">
                                    <iconify-icon icon="mage:email" className="text-neutral-900 dark:text-white text-xl"></iconify-icon>
                                </button>
                                <div id="dropdownMessage" className="z-10 hidden bg-white dark:bg-neutral-700 rounded-2xl overflow-hidden shadow-lg max-w-[394px] w-full">
                                    <div className="py-3 px-4 rounded-lg bg-primary-50 dark:bg-primary-600/25 m-4 flex items-center justify-between gap-2">
                                        <h6 className="text-lg text-neutral-900 font-semibold mb-0">Messaage</h6>
                                        <span className="w-10 h-10 bg-white dark:bg-neutral-600 text-primary-600 dark:text-white font-bold flex justify-center items-center rounded-full">05</span>
                                    </div>
                                    <div className="scroll-sm !border-t-0">
                                        <div className="max-h-[400px] overflow-y-auto">
                                            <a href="javascript:void(0)" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 justify-between gap-1">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 relative">
                                                        <img className="rounded-full w-11 h-11" src="assets/images/notification/profile-3.png" alt="Joseph image" />
                                                        <span className="absolute end-[2px] bottom-[2px] w-2.5 h-2.5 bg-success-500 border border-white rounded-full dark:border-gray-600"></span>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-sm fw-semibold mb-1">Kathryn Murphy</h6>
                                                        <p className="mb-0 text-sm line-clamp-1">hey! there i'm...</p>
                                                    </div>
                                                </div>
                                                <div className="shrink-0 flex flex-col items-end gap-1">
                                                    <span className="text-sm text-neutral-500">12:30 PM</span>
                                                    <span className="w-4 h-4 text-xs bg-warning-600 text-white rounded-full flex justify-center items-center">8</span>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 justify-between gap-1">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 relative">
                                                        <img className="rounded-full w-11 h-11" src="assets/images/notification/profile-4.png" alt="Joseph image" />
                                                        <span className="absolute end-[2px] bottom-[2px] w-2.5 h-2.5 bg-success-500 border border-white rounded-full dark:border-gray-600"></span>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-sm fw-semibold mb-1">Kathryn Murphy</h6>
                                                        <p className="mb-0 text-sm line-clamp-1">hey! there i'm...</p>
                                                    </div>
                                                </div>
                                                <div className="shrink-0 flex flex-col items-end gap-1">
                                                    <span className="text-sm text-neutral-500">12:30 PM</span>
                                                    <span className="w-4 h-4 text-xs bg-warning-600 text-white rounded-full flex justify-center items-center">8</span>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 justify-between gap-1">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 relative">
                                                        <img className="rounded-full w-11 h-11" src="assets/images/notification/profile-5.png" alt="Joseph image" />
                                                        <span className="absolute end-[2px] bottom-[2px] w-2.5 h-2.5 bg-success-500 border border-white rounded-full dark:border-gray-600"></span>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-sm fw-semibold mb-1">Kathryn Murphy</h6>
                                                        <p className="mb-0 text-sm line-clamp-1">hey! there i'm...</p>
                                                    </div>
                                                </div>
                                                <div className="shrink-0 flex flex-col items-end gap-1">
                                                    <span className="text-sm text-neutral-500">12:30 PM</span>
                                                    <span className="w-4 h-4 text-xs bg-warning-600 text-white rounded-full flex justify-center items-center">8</span>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 justify-between gap-1">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 relative">
                                                        <img className="rounded-full w-11 h-11" src="assets/images/notification/profile-6.png" alt="Joseph image" />
                                                        <span className="absolute end-[2px] bottom-[2px] w-2.5 h-2.5 bg-success-500 border border-white rounded-full dark:border-gray-600"></span>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-sm fw-semibold mb-1">Kathryn Murphy</h6>
                                                        <p className="mb-0 text-sm line-clamp-1">hey! there i'm...</p>
                                                    </div>
                                                </div>
                                                <div className="shrink-0 flex flex-col items-end gap-1">
                                                    <span className="text-sm text-neutral-500">12:30 PM</span>
                                                    <span className="w-4 h-4 text-xs bg-warning-600 text-white rounded-full flex justify-center items-center">8</span>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 justify-between gap-1">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 relative">
                                                        <img className="rounded-full w-11 h-11" src="assets/images/notification/profile-7.png" alt="Joseph image" />
                                                        <span className="absolute end-[2px] bottom-[2px] w-2.5 h-2.5 bg-success-500 border border-white rounded-full dark:border-gray-600"></span>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-sm fw-semibold mb-1">Kathryn Murphy</h6>
                                                        <p className="mb-0 text-sm line-clamp-1">hey! there i'm...</p>
                                                    </div>
                                                </div>
                                                <div className="shrink-0 flex flex-col items-end gap-1">
                                                    <span className="text-sm text-neutral-500">12:30 PM</span>
                                                    <span className="w-4 h-4 text-xs bg-warning-600 text-white rounded-full flex justify-center items-center">8</span>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="text-center py-3 px-4">
                                            <a href="javascript:void(0)" className="text-primary-600 dark:text-primary-600 font-semibold hover:underline text-center">See All Message </a>
                                        </div>
                                    </div>
                                </div>
                               {/* Message Dropdown End  */}
                               {/* Notification Start  */}
                                <button data-dropdown-toggle="dropdownNotification" className="has-indicator w-10 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-full flex justify-center items-center" type="button">
                                    <iconify-icon icon="iconoir:bell" className="text-neutral-900 dark:text-white text-xl"></iconify-icon>
                                </button>
                                <div id="dropdownNotification" className="z-10 hidden bg-white dark:bg-neutral-700 rounded-2xl overflow-hidden shadow-lg max-w-[394px] w-full">
                                    <div className="py-3 px-4 rounded-lg bg-primary-50 dark:bg-primary-600/25 m-4 flex items-center justify-between gap-2">
                                        <h6 className="text-lg text-neutral-900 font-semibold mb-0">Notification</h6>
                                        <span className="w-10 h-10 bg-white dark:bg-neutral-600 text-primary-600 dark:text-white font-bold flex justify-center items-center rounded-full">05</span>
                                    </div>
                                    <div className="scroll-sm !border-t-0">
                                        <div className="max-h-[400px] overflow-y-auto">
                                            <a href="javascript:void(0)" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 justify-between gap-1">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 relative w-11 h-11 bg-success-200 dark:bg-success-600/25 text-success-600 flex justify-center items-center rounded-full">
                                                        <iconify-icon icon="bitcoin-icons:verify-outline" className="text-2xl"></iconify-icon>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-sm fw-semibold mb-1">Congratulations</h6>
                                                        <p className="mb-0 text-sm line-clamp-1">Your profile has been Verified. Your profile has been Verified</p>
                                                    </div>
                                                </div>
                                                <div className="shrink-0">
                                                    <span className="text-sm text-neutral-500">23 Mins ago</span>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 justify-between gap-1">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 relative">
                                                        <img className="rounded-full w-11 h-11" src="assets/images/notification/profile-4.png" alt="Joseph image" />
                                                    </div>
                                                    <div>
                                                        <h6 className="text-sm fw-semibold mb-1">Ronald Richards</h6>
                                                        <p className="mb-0 text-sm line-clamp-1">You can stitch between artboards</p>
                                                    </div>
                                                </div>
                                                <div className="shrink-0">
                                                    <span className="text-sm text-neutral-500">23 Mins ago</span>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 justify-between gap-1">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 relative w-11 h-11 bg-primary-100 dark:bg-primary-600/25 text-primary-600 flex justify-center items-center rounded-full">
                                                        AM
                                                    </div>
                                                    <div>
                                                        <h6 className="text-sm fw-semibold mb-1">Arlene McCoy</h6>
                                                        <p className="mb-0 text-sm line-clamp-1">Invite you to prototyping</p>
                                                    </div>
                                                </div>
                                                <div className="shrink-0">
                                                    <span className="text-sm text-neutral-500">23 Mins ago</span>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 justify-between gap-1">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 relative">
                                                        <img className="rounded-full w-11 h-11" src="assets/images/notification/profile-6.png" alt="Joseph image" />
                                                    </div>
                                                    <div>
                                                        <h6 className="text-sm fw-semibold mb-1">Annette Black</h6>
                                                        <p className="mb-0 text-sm line-clamp-1">Invite you to prototyping</p>
                                                    </div>
                                                </div>
                                                <div className="shrink-0">
                                                    <span className="text-sm text-neutral-500">23 Mins ago</span>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 justify-between gap-1">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 relative w-11 h-11 bg-primary-100 dark:bg-primary-600/25 text-primary-600 flex justify-center items-center rounded-full">
                                                        DR
                                                    </div>
                                                    <div>
                                                        <h6 className="text-sm fw-semibold mb-1">Darlene Robertson</h6>
                                                        <p className="mb-0 text-sm line-clamp-1">Invite you to prototyping</p>
                                                    </div>
                                                </div>
                                                <div className="shrink-0">
                                                    <span className="text-sm text-neutral-500">23 Mins ago</span>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="text-center py-3 px-4">
                                            <a href="javascript:void(0)" className="text-primary-600 dark:text-primary-600 font-semibold hover:underline text-center">See All Notification </a>
                                        </div>
                                    </div>
                                </div>
                               {/* Notification End  */}


                                <button data-dropdown-toggle="dropdownProfile" className="flex justify-center items-center rounded-full" type="button">
                                    <img src="assets/images/user.png" alt="image" className="w-10 h-10 object-fit-cover rounded-full" />
                                </button>
                                <div id="dropdownProfile" className="z-10 hidden bg-white dark:bg-neutral-700 rounded-lg shadow-lg dropdown-menu-sm p-3">
                                    <div className="py-3 px-4 rounded-lg bg-primary-50 dark:bg-primary-600/25 mb-4 flex items-center justify-between gap-2">
                                        <div>
                                            <h6 className="text-lg text-neutral-900 font-semibold mb-0">Shahidul Islam</h6>
                                            <span className="text-neutral-500">Admin</span>
                                        </div>
                                        <button type="button" className="hover:text-danger-600">
                                            <iconify-icon icon="radix-icons:cross-1" className="icon text-xl"></iconify-icon>
                                        </button>
                                    </div>

                                    <div className="max-h-[400px] overflow-y-auto scroll-sm pe-2">
                                        <ul className="flex flex-col">
                                            <li>
                                                <a className="text-black px-0 py-2 hover:text-primary-600 flex items-center gap-4" href="#">
                                                    <iconify-icon icon="solar:user-linear" className="icon text-xl"></iconify-icon>  My Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-black px-0 py-2 hover:text-primary-600 flex items-center gap-4" href="#">
                                                    <iconify-icon icon="tabler:message-check" className="icon text-xl"></iconify-icon>  Inbox
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-black px-0 py-2 hover:text-primary-600 flex items-center gap-4" href="#">
                                                    <iconify-icon icon="icon-park-outline:setting-two" className="icon text-xl"></iconify-icon>  Setting
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-black px-0 py-2 hover:text-danger-600 flex items-center gap-4" href="javascript:void(0)">
                                                    <iconify-icon icon="lucide:power" className="icon text-xl"></iconify-icon>  Log Out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="dashboard-main-body">

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                        <h6 className="font-semibold mb-0 dark:text-white">Dashboard</h6>
                        <ul className="flex items-center gap-[6px]">
                            <li className="font-medium">
                                <Link href="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                    <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg"></iconify-icon>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="dark:text-white">-</li>
                            <li className="font-medium dark:text-white">CRM</li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
                        <div className="lg:col-span-12 2xl:col-span-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                <div className="card px-4 py-5 shadow-2 rounded-lg border-gray-200 dark:border-neutral-600 h-full bg-gradient-to-l from-primary-600/10 to-bg-white">
                                    <div className="card-body p-0">
                                        <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="mb-0 w-[44px] h-[44px] bg-primary-600 shrink-0 text-white flex justify-center items-center rounded-full h6">
                                                    <iconify-icon icon="mingcute:user-follow-fill" className="icon"></iconify-icon>
                                                </span>
                                                <div>
                                                    <span className="mb-2 font-medium text-secondary-light text-sm">New Users</span>
                                                    <h6 className="font-semibold">15,000</h6>
                                                </div>
                                            </div>

                                            <div id="new-user-chart" className="remove-tooltip-title rounded-tooltip-value"></div>
                                        </div>
                                        <p className="text-sm mb-0">Increase by  <span className="bg-success-100 dark:bg-success-600/25 px-1 py-px rounded font-medium text-success-600 dark:text-success-400 text-sm">+200</span> this week</p>
                                    </div>
                                </div>

                                <div className="card px-4 py-5 shadow-2 rounded-lg border-gray-200 dark:border-neutral-600 h-full bg-gradient-to-l from-success-600/10 to-bg-white">
                                    <div className="card-body p-0">
                                        <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="mb-0 w-[44px] h-[44px] bg-success-600 shrink-0 text-white flex justify-center items-center rounded-full h6">
                                                    <iconify-icon icon="mingcute:user-follow-fill" className="icon"></iconify-icon>
                                                </span>
                                                <div>
                                                    <span className="mb-2 font-medium text-secondary-light text-sm">Active Users</span>
                                                    <h6 className="font-semibold">8,000</h6>
                                                </div>
                                            </div>

                                            <div id="active-user-chart" className="remove-tooltip-title rounded-tooltip-value"></div>
                                        </div>
                                        <p className="text-sm mb-0">Increase by  <span className="bg-success-100 dark:bg-success-600/25 px-1 py-px rounded font-medium text-success-600 dark:text-success-400 text-sm">+200</span> this week</p>
                                    </div>
                                </div>

                                <div className="card px-4 py-5 shadow-2 rounded-lg border-gray-200 dark:border-neutral-600 h-full bg-gradient-to-l from-warning-600/10 to-bg-white">
                                    <div className="card-body p-0">
                                        <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="mb-0 w-[44px] h-[44px] bg-warning-600 text-white shrink-0 flex justify-center items-center rounded-full h6">
                                                    <iconify-icon icon="iconamoon:discount-fill" className="icon"></iconify-icon>
                                                </span>
                                                <div>
                                                    <span className="mb-2 font-medium text-secondary-light text-sm">Total Sales</span>
                                                    <h6 className="font-semibold">$5,00,000</h6>
                                                </div>
                                            </div>

                                            <div id="total-sales-chart" className="remove-tooltip-title rounded-tooltip-value"></div>
                                        </div>
                                        <p className="text-sm mb-0">Increase by  <span className="bg-danger-100 dark:bg-danger-600/25 px-1 py-px rounded font-medium text-danger-600 dark:text-danger-400 text-sm">-$10k</span> this week</p>
                                    </div>
                                </div>

                                <div className="card px-4 py-5 shadow-2 rounded-lg border-gray-200 dark:border-neutral-600 h-full bg-gradient-to-l from-purple-600/10 to-bg-white">
                                    <div className="card-body p-0">
                                        <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="mb-0 w-[44px] h-[44px] bg-purple-600 text-white shrink-0 flex justify-center items-center rounded-full h6">
                                                    <iconify-icon icon="mdi:message-text" className="icon"></iconify-icon>
                                                </span>
                                                <div>
                                                    <span className="mb-2 font-medium text-secondary-light text-sm">Conversion</span>
                                                    <h6 className="font-semibold">25%</h6>
                                                </div>
                                            </div>

                                            <div id="conversion-user-chart" className="remove-tooltip-title rounded-tooltip-value"></div>
                                        </div>
                                        <p className="text-sm mb-0">Increase by  <span className="bg-success-100 dark:bg-success-600/25 px-1 py-px rounded font-medium text-success-600 dark:text-success-400 text-sm">+5%</span> this week</p>
                                    </div>
                                </div>

                                <div className="card px-4 py-5 shadow-2 rounded-lg border-gray-200 dark:border-neutral-600 h-full bg-gradient-to-l from-pink-600/10 to-bg-white">
                                    <div className="card-body p-0">
                                        <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="mb-0 w-[44px] h-[44px] bg-pink-600 text-white shrink-0 flex justify-center items-center rounded-full h6">
                                                    <iconify-icon icon="mdi:leads" className="icon"></iconify-icon>
                                                </span>
                                                <div>
                                                    <span className="mb-2 font-medium text-secondary-light text-sm">Leads</span>
                                                    <h6 className="font-semibold">250</h6>
                                                </div>
                                            </div>

                                            <div id="leads-chart" className="remove-tooltip-title rounded-tooltip-value"></div>
                                        </div>
                                        <p className="text-sm mb-0">Increase by  <span className="bg-success-100 dark:bg-success-600/25 px-1 py-px rounded font-medium text-success-600 dark:text-success-400 text-sm">+20</span> this week</p>
                                    </div>
                                </div>

                                <div className="card px-4 py-5 shadow-2 rounded-lg border-gray-200 dark:border-neutral-600 h-full bg-gradient-to-l from-cyan-600/10 to-bg-white">
                                    <div className="card-body p-0">
                                        <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="mb-0 w-[44px] h-[44px] bg-cyan-600 text-white shrink-0 flex justify-center items-center rounded-full h6">
                                                    <iconify-icon icon="streamline:bag-dollar-solid" className="icon"></iconify-icon>
                                                </span>
                                                <div>
                                                    <span className="mb-2 font-medium text-secondary-light text-sm">Total Profit</span>
                                                    <h6 className="font-semibold">$3,00,700</h6>
                                                </div>
                                            </div>

                                            <div id="total-profit-chart" className="remove-tooltip-title rounded-tooltip-value"></div>
                                        </div>
                                        <p className="text-sm mb-0">Increase by  <span className="bg-success-100 dark:bg-success-600/25 px-1 py-px rounded font-medium text-success-600 dark:text-success-400 text-sm">+$15k</span> this week</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       {/* Revenue Growth start */}
                        <div className="lg:col-span-12 2xl:col-span-4">
                            <div className="card h-full rounded-lg border-0">
                                <div className="card-body p-6">
                                    <div className="flex items-center flex-wrap gap-2 justify-between">
                                        <div>
                                            <h6 className="mb-2 font-bold text-lg">Revenue Growth</h6>
                                            <span className="text-sm font-medium text-secondary-light">Weekly Report</span>
                                        </div>
                                        <div className="text-end">
                                            <h6 className="mb-2 font-bold text-lg">$50,000.00</h6>
                                            <span className="bg-success-100 dark:bg-success-600/25 px-3 py-1 rounded font-medium text-success-600 dark:text-success-400 text-sm">$10k</span>
                                        </div>
                                    </div>
                                    <div id="revenue-chart" className="mt-0"></div>
                                </div>
                            </div>
                        </div>
                       {/* Revenue Growth End */}
                       {/* Earning Static start */}
                        <div className="lg:col-span-12 2xl:col-span-8">
                            <div className="card h-full rounded-lg border-0">
                                <div className="card-body p-6">
                                    <div className="flex items-center flex-wrap gap-2 justify-between">
                                        <div>
                                            <h6 className="mb-2 font-bold text-lg">Earning Statistic</h6>
                                            <span className="text-sm font-medium text-secondary-light">Yearly earning overview</span>
                                        </div>
                                        <div className="">
                                            <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light">
                                                <option>Yearly</option>
                                                <option>Monthly</option>
                                                <option>Weekly</option>
                                                <option>Today</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex justify-center flex-wrap gap-3">

                                        <div className="inline-flex items-center gap-2 p-2 rounded-lg border transition hover:border-primary-600 border-neutral-200 dark:border-neutral-500 dark:hover:border-primary-600 pe-[46px] br-hover-primary group">
                                            <span className="bg-neutral-100 dark:bg-neutral-600 w-[44px] h-[44px] text-2xl transition rounded-lg flex justify-center items-center text-secondary-light group-hover:text-white group-hover:bg-primary-600">
                                                <iconify-icon icon="fluent:cart-16-filled" className="icon"></iconify-icon>
                                            </span>
                                            <div>
                                                <span className="text-secondary-light text-sm font-medium">Sales</span>
                                                <h6 className="text-base font-semibold mb-0">$200k</h6>
                                            </div>
                                        </div>

                                        <div className="inline-flex items-center gap-2 p-2 rounded-lg border transition hover:border-primary-600 border-neutral-200 dark:border-neutral-500 dark:hover:border-primary-600 pe-[46px] br-hover-primary group">
                                            <span className="bg-neutral-100 dark:bg-neutral-600 w-[44px] h-[44px] text-2xl transition rounded-lg flex justify-center items-center text-secondary-light group-hover:text-white group-hover:bg-primary-600">
                                                <iconify-icon icon="uis:chart" className="icon"></iconify-icon>
                                            </span>
                                            <div>
                                                <span className="text-secondary-light text-sm font-medium">Income</span>
                                                <h6 className="text-base font-semibold mb-0">$200k</h6>
                                            </div>
                                        </div>

                                        <div className="inline-flex items-center gap-2 p-2 rounded-lg border transition hover:border-primary-600 border-neutral-200 dark:border-neutral-500 dark:hover:border-primary-600 pe-[46px] br-hover-primary group">
                                            <span className="bg-neutral-100 dark:bg-neutral-600 w-[44px] h-[44px] text-2xl transition rounded-lg flex justify-center items-center text-secondary-light group-hover:text-white group-hover:bg-primary-600">
                                                <iconify-icon icon="ph:arrow-fat-up-fill" className="icon"></iconify-icon>
                                            </span>
                                            <div>
                                                <span className="text-secondary-light text-sm font-medium">Profit</span>
                                                <h6 className="text-base font-semibold mb-0">$200k</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="barChart"></div>
                                </div>
                            </div>
                        </div>
                       {/* Earning Static End */}
                       {/* Campaign Static start */}
                        <div className="lg:col-span-12 2xl:col-span-4">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                <div className="lg:col-span-6 2xl:col-span-12 col-xxl-12 col-sm-6">
                                    <div className="card h-full rounded-lg border-0">
                                        <div className="card-body p-6">
                                            <div className="flex items-center flex-wrap gap-2 justify-between">
                                                <h6 className="mb-2 font-bold text-lg">Campaigns</h6>
                                                <div className="">
                                                    <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light">
                                                        <option>Yearly</option>
                                                        <option>Monthly</option>
                                                        <option>Weekly</option>
                                                        <option>Today</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <div className="flex items-center justify-between gap-3 mb-3">
                                                    <div className="flex items-center">
                                                        <span className="text-2xl line-height-1 flex align-content-center shrink-0 text-orange-500 dark:text-orange-500">
                                                            <iconify-icon icon="majesticons:mail" className="icon"></iconify-icon>
                                                        </span>
                                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm ps-4">Email</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 w-full">
                                                        <div className="ms-auto">
                                                            <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                                <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                                            </div>
                                                        </div>
                                                        <span className="text-secondary-light font-xs font-semibold">80%</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between gap-3 mb-3">
                                                    <div className="flex items-center">
                                                        <span className="text-2xl line-height-1 flex align-content-center shrink-0 text-success-500 dark:text-success-500">
                                                            <iconify-icon icon="eva:globe-2-fill" className="icon"></iconify-icon>
                                                        </span>
                                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm ps-4">Website</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 w-full">
                                                        <div className="ms-auto">
                                                            <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                                <div className="bg-success-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                                            </div>
                                                        </div>
                                                        <span className="text-secondary-light font-xs font-semibold">80%</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between gap-3 mb-3">
                                                    <div className="flex items-center">
                                                        <span className="text-2xl line-height-1 flex align-content-center shrink-0 text-blue-600 dark:text-blue-500">
                                                            <iconify-icon icon="fa6-brands:square-facebook" className="icon"></iconify-icon>
                                                        </span>
                                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm ps-4">Facebook</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 w-full">
                                                        <div className="ms-auto">
                                                            <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                                            </div>
                                                        </div>
                                                        <span className="text-secondary-light font-xs font-semibold">80%</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between gap-3">
                                                    <div className="flex items-center">
                                                        <span className="text-2xl line-height-1 flex align-content-center shrink-0 text-purple-600 dark:text-purple-500">
                                                            <iconify-icon icon="fluent:location-off-20-filled" className="icon"></iconify-icon>
                                                        </span>
                                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm ps-4">Email</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 w-full">
                                                        <div className="ms-auto">
                                                            <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                                            </div>
                                                        </div>
                                                        <span className="text-secondary-light font-xs font-semibold">80%</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 2xl:col-span-12 col-xxl-12 col-sm-6">
                                    <div className="card h-full rounded-lg border-0 overflow-hidden">
                                        <div className="card-body p-6">
                                            <div className="flex items-center flex-wrap gap-2 justify-between">
                                                <h6 className="mb-2 font-bold text-lg">Customer Overview</h6>
                                                <div className="">
                                                    <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light">
                                                        <option>Yearly</option>
                                                        <option>Monthly</option>
                                                        <option>Weekly</option>
                                                        <option>Today</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap items-center mt-4">
                                                <ul className="shrink-0">
                                                    <li className="flex items-center gap-2 mb-7">
                                                        <span className="w-3 h-3 rounded-full bg-success-600"></span>
                                                        <span className="text-secondary-light text-sm font-medium">Total: 400</span>
                                                    </li>
                                                    <li className="flex items-center gap-2 mb-7">
                                                        <span className="w-3 h-3 rounded-full bg-warning-600"></span>
                                                        <span className="text-secondary-light text-sm font-medium">New: 400</span>
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <span className="w-3 h-3 rounded-full bg-primary-600"></span>
                                                        <span className="text-secondary-light text-sm font-medium">Active: 1400</span>
                                                    </li>
                                                </ul>
                                                <div id="donutChart" className="grow apexcharts-tooltip-z-none title-style circle-none"></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       {/* Campaign Static End */}
                       {/* Client Payment Status Start */}
                        <div className="lg:col-span-6 2xl:col-span-4">
                            <div className="card h-full rounded-lg border-0">
                                <div className="card-body p-6">
                                    <h6 className="mb-2 font-bold text-lg">Client Payment Status</h6>
                                    <span className="text-sm font-medium text-secondary-light">Weekly Report</span>

                                    <ul className="flex flex-wrap items-center justify-center mt-8">
                                        <li className="flex items-center gap-2 me-7">
                                            <span className="w-3 h-3 rounded-full bg-success-600"></span>
                                            <span className="text-secondary-light text-sm font-medium">Paid: 400</span>
                                        </li>
                                        <li className="flex items-center gap-2 me-7">
                                            <span className="w-3 h-3 rounded-full bg-info-600"></span>
                                            <span className="text-secondary-light text-sm font-medium">Pending: 400</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full bg-warning-600"></span>
                                            <span className="text-secondary-light text-sm font-medium">Overdue: 1400</span>
                                        </li>
                                    </ul>
                                    <div className="mt-[60px]">
                                        <div id="paymentStatusChart" className="margin-16-minus"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       {/* Client Payment Status End */}
                       {/* Country Status Start */}
                        <div className="lg:col-span-6 2xl:col-span-4">
                            <div className="card rounded-lg border-0">

                                <div className="card-body">
                                    <div className="flex items-center flex-wrap gap-2 justify-between">
                                        <h6 className="mb-2 font-bold text-lg">Countries Status</h6>
                                        <div className="">
                                            <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light">
                                                <option>Yearly</option>
                                                <option>Monthly</option>
                                                <option>Weekly</option>
                                                <option>Today</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            

                                <div className="card-body p-6 max-h-[270px] scroll-sm overflow-y-auto">
                                    <div className="">

                                        <div className="flex items-center justify-between gap-3 mb-3 pb-2">
                                            <div className="flex items-center w-full">
                                                <img src="assets/images/flags/flag1.png" alt="" className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                <div className="grow">
                                                    <h6 className="text-sm mb-0">USA</h6>
                                                    <span className="text-xs text-secondary-light font-medium">1,240 Users</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                                </div>
                                                <span className="text-secondary-light font-xs font-semibold">80%</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between gap-3 mb-3 pb-2">
                                            <div className="flex items-center w-full">
                                                <img src="assets/images/flags/flag2.png" alt="" className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                <div className="grow">
                                                    <h6 className="text-sm mb-0">Japan</h6>
                                                    <span className="text-xs text-secondary-light font-medium">1,240 Users</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                    <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                                                </div>
                                                <span className="text-secondary-light font-xs font-semibold">60%</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between gap-3 mb-3 pb-2">
                                            <div className="flex items-center w-full">
                                                <img src="assets/images/flags/flag3.png" alt="" className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                <div className="grow">
                                                    <h6 className="text-sm mb-0">France</h6>
                                                    <span className="text-xs text-secondary-light font-medium">1,240 Users</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                    <div className="bg-warning-600 h-2.5 rounded-full" style={{ width: '49%' }}></div>
                                                </div>
                                                <span className="text-secondary-light font-xs font-semibold">49%</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center w-full">
                                                <img src="assets/images/flags/flag4.png" alt="" className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                <div className="grow">
                                                    <h6 className="text-sm mb-0">Germany</h6>
                                                    <span className="text-xs text-secondary-light font-medium">1,240 Users</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                    <div className="bg-success-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                                                </div>
                                                <span className="text-secondary-light font-xs font-semibold">100%</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                       {/* Country Status End */}
                       {/* Top performance Start */}
                        <div className="lg:col-span-12 2xl:col-span-4">
                            <div className="card border-0 overflow-hidden">

                                <div className="card-body">
                                    <div className="flex items-center flex-wrap gap-2 justify-between">
                                        <h6 className="mb-2 font-bold text-lg">Top Performer</h6>
                                        <a href="javascript:void(0)" className="text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1">
                                            View All
                                            <iconify-icon icon="solar:alt-arrow-right-linear" className="icon"></iconify-icon>
                                        </a>
                                    </div>

                                    <div className="mt-8">

                                        <div className="flex items-center justify-between gap-3 mb-8">
                                            <div className="flex items-center">
                                                <img src="assets/images/users/user1.png" alt="" className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                <div className="grow">
                                                    <h6 className="text-base mb-0">Dianne Russell</h6>
                                                    <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                                                </div>
                                            </div>
                                            <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">60/80</span>
                                        </div>

                                        <div className="flex items-center justify-between gap-3 mb-8">
                                            <div className="flex items-center">
                                                <img src="assets/images/users/user2.png" alt="" className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                <div className="grow">
                                                    <h6 className="text-base mb-0">Wade Warren</h6>
                                                    <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                                                </div>
                                            </div>
                                            <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">50/70</span>
                                        </div>

                                        <div className="flex items-center justify-between gap-3 mb-8">
                                            <div className="flex items-center">
                                                <img src="assets/images/users/user3.png" alt="" className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                <div className="grow">
                                                    <h6 className="text-base mb-0">Albert Flores</h6>
                                                    <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                                                </div>
                                            </div>
                                            <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">55/75</span>
                                        </div>

                                        <div className="flex items-center justify-between gap-3 mb-8">
                                            <div className="flex items-center">
                                                <img src="assets/images/users/user4.png" alt="" className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                <div className="grow">
                                                    <h6 className="text-base mb-0">Bessie Cooper</h6>
                                                    <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                                                </div>
                                            </div>
                                            <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">60/80</span>
                                        </div>

                                        <div className="flex items-center justify-between gap-3 mb-8">
                                            <div className="flex items-center">
                                                <img src="assets/images/users/user5.png" alt="" className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                <div className="grow">
                                                    <h6 className="text-base mb-0">Arlene McCoy</h6>
                                                    <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                                                </div>
                                            </div>
                                            <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">55/75</span>
                                        </div>

                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center">
                                                <img src="assets/images/users/user1.png" alt="" className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                <div className="grow">
                                                    <h6 className="text-base mb-0">Arlene McCoy</h6>
                                                    <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                                                </div>
                                            </div>
                                            <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">50/70</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                       {/* Top performance End */}
                       {/* Latest Performance Start */}
                        <div className="lg:col-span-12 2xl:col-span-6">
                            <div className="card h-full border-0 overflow-hidden">
                                <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 ps-0 py-0 pe-6 flex items-center justify-between">
                                    <div className="border-b border-gray-200 dark:border-gray-700">
                                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
                                            <li className="" role="presentation">
                                                <button className="inline-block p-4 border-b-2 rounded-t-lg transition-colors ease-in-out duration-300 text-neutral-600 dark:text-white" id="todoList-styled-tab" data-tabs-target="#styled-todoList" type="button" role="tab" aria-controls="styled-todoList" aria-selected="false">To Do List</button>
                                            </li>
                                            <li className="" role="presentation">
                                                <button className="inline-block p-4 border-b-2 rounded-t-lg transition-colors ease-in-out duration-300 text-neutral-600 dark:text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="recentLead-styled-tab" data-tabs-target="#styled-recentLead" type="button" role="tab" aria-controls="styled-recentLead" aria-selected="false">Recent Leads</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <a href="javascript:void(0)" className="text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1">
                                        View All
                                        <iconify-icon icon="solar:alt-arrow-right-linear" className="icon"></iconify-icon>
                                    </a>
                                </div>

                                <div className="card-body p-6">
                                    <div id="default-styled-tab-content">
                                        <div className="hidden rounded-lg" id="styled-todoList" role="tabpanel">
                                            <div className="table-responsive scroll-sm">
                                                <table className="table bordered-table mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Task Name </th>
                                                            <th scope="col">Assigned To </th>
                                                            <th scope="col">Due Date</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                                                                    <span className="text-sm block font-normal text-secondary-light">#5632</span>
                                                                </div>
                                                            </td>
                                                            <td>Kathryn Murphy</td>
                                                            <td>27 Mar 2024</td>
                                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                                                            <td className="text-center text-neutral-700 text-xl">

                                                                <button data-dropdown-toggle="dropdown1" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </button>

                                                               {/* Dropdown menu */}
                                                                <div id="dropdown1" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                                                                    <span className="text-sm block font-normal text-secondary-light">#5632</span>
                                                                </div>
                                                            </td>
                                                            <td>Darlene Robertson</td>
                                                            <td>27 Mar 2024</td>
                                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                                                            <td className="text-center text-neutral-700 text-xl">
                                                                <button data-dropdown-toggle="dropdown2" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </button>

                                                               {/* Dropdown menu */}
                                                                <div id="dropdown2" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                                                                    <span className="text-sm block font-normal text-secondary-light">#5632</span>
                                                                </div>
                                                            </td>
                                                            <td>Courtney Henry</td>
                                                            <td>27 Mar 2024</td>
                                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                                                            <td className="text-center text-neutral-700 text-xl">
                                                                <button data-dropdown-toggle="dropdown3" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </button>

                                                               {/* Dropdown menu */}
                                                                <div id="dropdown3" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                                                                    <span className="text-sm block font-normal text-secondary-light">#5632</span>
                                                                </div>
                                                            </td>
                                                            <td>Jenny Wilson</td>
                                                            <td>27 Mar 2024</td>
                                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                                                            <td className="text-center text-neutral-700 text-xl">
                                                                <button data-dropdown-toggle="dropdown4" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </button>

                                                               {/* Dropdown menu */}
                                                                <div id="dropdown4" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                                                                    <span className="text-sm block font-normal text-secondary-light">#5632</span>
                                                                </div>
                                                            </td>
                                                            <td>Leslie Alexander</td>
                                                            <td>27 Mar 2024</td>
                                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                                                            <td className="text-center text-neutral-700 text-xl">
                                                                <button data-dropdown-toggle="dropdown5" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </button>

                                                               {/* Dropdown menu */}
                                                                <div id="dropdown5" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="hidden rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-recentLead" role="tabpanel">
                                            <div className="table-responsive scroll-sm">
                                                <table className="table bordered-table mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Task Name </th>
                                                            <th scope="col">Assigned To </th>
                                                            <th scope="col">Due Date</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                                                                    <span className="text-sm block font-normal text-secondary-light">#5632</span>
                                                                </div>
                                                            </td>
                                                            <td>Kathryn Murphy</td>
                                                            <td>27 Mar 2024</td>
                                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                                                            <td className="text-center text-neutral-700 text-xl">

                                                                <button data-dropdown-toggle="dropdown6" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </button>

                                                               {/* Dropdown menu */}
                                                                <div id="dropdown6" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                                                                    <span className="text-sm block font-normal text-secondary-light">#5632</span>
                                                                </div>
                                                            </td>
                                                            <td>Darlene Robertson</td>
                                                            <td>27 Mar 2024</td>
                                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                                                            <td className="text-center text-neutral-700 text-xl">
                                                                <button data-dropdown-toggle="dropdown7" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </button>

                                                               {/* Dropdown menu */}
                                                                <div id="dropdown7" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                                                                    <span className="text-sm block font-normal text-secondary-light">#5632</span>
                                                                </div>
                                                            </td>
                                                            <td>Courtney Henry</td>
                                                            <td>27 Mar 2024</td>
                                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                                                            <td className="text-center text-neutral-700 text-xl">
                                                                <button data-dropdown-toggle="dropdown8" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </button>

                                                               {/* Dropdown menu */}
                                                                <div id="dropdown8" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                                                                    <span className="text-sm block font-normal text-secondary-light">#5632</span>
                                                                </div>
                                                            </td>
                                                            <td>Jenny Wilson</td>
                                                            <td>27 Mar 2024</td>
                                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                                                            <td className="text-center text-neutral-700 text-xl">
                                                                <button data-dropdown-toggle="dropdown9" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </button>

                                                               {/* Dropdown menu */}
                                                                <div id="dropdown9" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                                                                    <span className="text-sm block font-normal text-secondary-light">#5632</span>
                                                                </div>
                                                            </td>
                                                            <td>Leslie Alexander</td>
                                                            <td>27 Mar 2024</td>
                                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                                                            <td className="text-center text-neutral-700 text-xl">
                                                                <button data-dropdown-toggle="dropdown10" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </button>

                                                               {/* Dropdown menu */}
                                                                <div id="dropdown10" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0)" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-12 2xl:col-span-6">
                            <div className="card h-full border-0 overflow-hidden">
                                <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6 flex items-center justify-between">
                                    <h6 className="text-lg font-semibold mb-0">Last Transaction</h6>
                                    <a href="javascript:void(0)" className="text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1">
                                        View All
                                        <iconify-icon icon="solar:alt-arrow-right-linear" className="icon"></iconify-icon>
                                    </a>
                                </div>
                                <div className="card-body p-6">
                                    <div className="table-responsive scroll-sm">
                                        <table className="table bordered-table style-two mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Transaction ID</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5986124445445</td>
                                                    <td>27 Mar 2024</td>
                                                    <td> <span className="bg-warning-100 dark:bg-warning-600/25 text-warning-600 dark:text-warning-400 px-6 py-1.5 rounded-full font-medium text-sm">Pending</span> </td>
                                                    <td>$20,000.00</td>
                                                </tr>
                                                <tr>
                                                    <td>5986124445445</td>
                                                    <td>27 Mar 2024</td>
                                                    <td> <span className="bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 px-6 py-1.5 rounded-full font-medium text-sm">Rejected</span> </td>
                                                    <td>$20,000.00</td>
                                                </tr>
                                                <tr>
                                                    <td>5986124445445</td>
                                                    <td>27 Mar 2024</td>
                                                    <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Completed</span> </td>
                                                    <td>$20,000.00</td>
                                                </tr>
                                                <tr>
                                                    <td>5986124445445</td>
                                                    <td>27 Mar 2024</td>
                                                    <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Completed</span> </td>
                                                    <td>$20,000.00</td>
                                                </tr>
                                                <tr>
                                                    <td>5986124445445</td>
                                                    <td>27 Mar 2024</td>
                                                    <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Completed</span> </td>
                                                    <td>$20,000.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                       {/* Latest Performance End */}
                    </div>
                </div>
                <footer className="d-footer">
                    <div className="flex items-center justify-between gap-3">
                        <p className="mb-0">2025.</p>
                        <p className="mb-0">Made by <span className="text-primary-600">Lawda Themes</span></p>
                    </div>
                </footer>
            </main>

  
    </div>
  );
}
export const blocksExample = {
    "default-navbar": {
        label: "Default Navbar",
        category: "Navbar",
        attributes: { class: "fa fa-bars" }, // Ícono del bloque
        content: `
        <!-- ========== HEADER ========== -->
        <header id="header" class="navbar navbar-expand-lg navbar-center navbar-light bg-white">
        <div class="container">
            <nav class="js-mega-menu navbar-nav-wrap">
            <!-- Default Logo -->
            <a class="navbar-brand" href="../index.html" aria-label="Unify">
                <img class="navbar-brand-logo" src="./assets/svg/logos/logo.svg" alt="Image Description">
            </a>
            <!-- End Default Logo -->

            <!-- Toggler -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-default">
                <i class="bi-list"></i>
                </span>
                <span class="navbar-toggler-toggled">
                <i class="bi-x"></i>
                </span>
            </button>
            <!-- End Toggler -->

            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav nav-pills">
                <!-- Landings -->
                <li class="hs-has-mega-menu nav-item"
                    data-hs-mega-menu-item-options='{
                        "desktop": {
                        "maxWidth": "40rem"
                        }
                    }'>
                    <a id="landingsMegaMenu" class="hs-mega-menu-invoker nav-link dropdown-toggle " aria-current="page" href="#" role="button" aria-expanded="false">Landings</a>

                    <!-- Mega Menu -->
                    <div class="hs-mega-menu dropdown-menu" aria-labelledby="landingsMegaMenu" style="min-width: 25rem;">
                    <!-- Main Content -->
                    <div class="row">
                        <div class="col-lg d-none d-lg-block">
                        <div class="d-flex align-items-start flex-column bg-light rounded-3 h-100 p-4">
                            <span class="fs-3 fw-bold d-block">Landings</span>
                            <p class="text-body">Accelerate the way your business builds modern sites at scale.</p>
                            <div class="mt-auto">
                            <p class="mb-1"><a class="small text-dark" href="#">Learn more <i class="bi-arrow-right-short fs-4"></i></a></p>
                            <p class="mb-1"><a class="small text-dark" href="#">Why Unify Template <i class="bi-arrow-right-short fs-4"></i></a></p>
                            </div>
                        </div>
                        </div>

                        <div class="col-sm">
                        <div class="navbar-dropdown-menu-inner">
                            <span class="dropdown-header">Classic</span>
                            <a class="dropdown-item " href="../index.html"><i class="bi-building me-2"></i> Corporate</a>
                            <a class="dropdown-item " href="../landing-business.html"><i class="bi-briefcase me-2"></i> Business <span class="badge text-primary">New</span></a>
                            <a class="dropdown-item " href="../landing-consulting.html"><i class="bi-chat-right-dots me-2"></i> Consulting <span class="badge text-primary">New</span></a>
                            <a class="dropdown-item " href="../landing-saas.html"><i class="bi-tropical-storm me-2"></i> SaaS</a>
                            <a class="dropdown-item " href="../landing-services.html"><i class="bi-gear me-2"></i> Services</a>
                        </div>
                        </div>
                    </div>
                    <!-- End Main Content -->
                    </div>
                    <!-- End Mega Menu -->
                </li>
                <!-- End Landings -->

                <!-- Pages -->
                <li class="hs-has-mega-menu nav-item">
                    <a id="pagesMegaMenu" class="hs-mega-menu-invoker nav-link dropdown-toggle " href="#" role="button" aria-expanded="false">Pages</a>

                    <!-- Mega Menu -->
                    <div class="hs-mega-menu hs-position-right dropdown-menu w-100" aria-labelledby="pagesMegaMenu" style="min-width: 42rem;">
                    <!-- Main Content -->
                    <div class="navbar-dropdown-menu-inner">
                        <div class="row">
                        <div class="col-sm-6 col-md-3">
                            <span class="dropdown-header">Company</span>
                            <a class="dropdown-item " href="../page-about.html">About</a>
                            <a class="dropdown-item " href="../page-customer-stories.html">Customer Stories</a>
                            <a class="dropdown-item " href="../page-customer-story.html">Customer Story</a>
                            <a class="dropdown-item " href="../page-help-center.html">Help Center</a>
                            <a class="dropdown-item " href="../page-help-center-categories.html">Help Center: Categories</a>
                            <a class="dropdown-item " href="../page-help-center-article.html">Help Center: Article</a>
                        </div>

                        <div class="col-sm-6 col-md-3 mb-3 mb-md-0">
                            <span class="dropdown-header invisible">Company</span>
                            <a class="dropdown-item " href="../page-careers.html">Careers</a>
                            <a class="dropdown-item " href="../page-careers-role-overview.html">Careers: Role Overview</a>
                            <a class="dropdown-item " href="../page-careers-apply.html">Careers: Apply</a>
                            <a class="dropdown-item " href="../page-hire-us.html">Hire Us</a>
                            <a class="dropdown-item " href="../page-login.html">Log In</a>
                            <a class="dropdown-item " href="../page-signup.html">Sign Up</a>
                            <a class="dropdown-item " href="../page-reset-password.html">Forgot Password</a>
                        </div>

                        <div class="col-sm-6 col-md-3 mb-3 mb-md-0">
                            <span class="dropdown-header">Portfolio</span>
                            <a class="dropdown-item " href="../portfolio-modern.html">Modern</a>
                            <a class="dropdown-item " href="../portfolio-case-study.html">Case Study</a>
                        </div>

                        <div class="col-sm-6 col-md-3">
                            <span class="dropdown-header">Specialty pages</span>
                            <a class="dropdown-item " href="../page-pricing.html">Pricing</a>
                            <a class="dropdown-item " href="../page-contacts.html">Contacts</a>
                            <a class="dropdown-item " href="../page-coming-soon.html">Coming Soon</a>
                            <a class="dropdown-item " href="../page-coming-soon-simple.html">Coming Soon: Simple</a>
                            <a class="dropdown-item " href="../page-error-404.html">Error 404</a>
                            <a class="dropdown-item " href="../page-terms.html">Terms & Conditions</a>
                            <a class="dropdown-item " href="../page-privacy.html">Privacy & Policy</a>
                        </div>
                        </div>
                        <!-- End Row -->
                    </div>
                    <!-- End Main Content -->
                    </div>
                    <!-- End Mega Menu -->
                </li>
                <!-- End Pages -->

                <!-- Blog -->
                <li class="hs-has-mega-menu nav-item"
                    data-hs-mega-menu-item-options='{
                        "desktop": {
                        "maxWidth": "50rem"
                        }
                    }'>
                    <a id="blogMegaMenu" class="hs-mega-menu-invoker nav-link dropdown-toggle " href="#" role="button" aria-expanded="false">Blog</a>

                    <!-- Mega Menu -->
                    <div class="hs-mega-menu dropdown-menu" aria-labelledby="blogMegaMenu" style="min-width: 12rem;">
                    <!-- Main Content -->
                    <div class="row">
                        <div class="col-lg d-none d-lg-block">
                        <div class="bg-light rounded-3 h-100 p-4">
                            <span class="d-block fs-4 fw-bold text-dark mb-3">Latest from the Blog</span>

                            <div class="row">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <!-- Card -->
                                <a class="d-block" href="../documentation/index.html">
                                <img class="img-fluid rounded-2 mb-2" src="../assets/svg/components/card-1.svg" alt="Image Description">

                                <span class="fs-4 fw-medium text-dark text-inherit">Documentation</span>
                                <p class="fs-6 text-body">Development guides for building projects with Unify</p>
                                <span class="link link-pointer">Learn more</span>
                                </a>
                                <!-- End Card -->
                            </div>
                            <!-- End Col -->

                            <div class="col-md-6">
                                <!-- Card -->
                                <a class="d-block" href="../snippets/index.html">
                                <img class="img-fluid rounded-2 mb-2" src="../assets/svg/components/card-2.svg" alt="Image Description">

                                <span class="fs-4 fw-medium text-dark text-inherit">Snippets</span>
                                <p class="fs-6 text-body">Move quickly with copy-to-clipboard feature</p>
                                <span class="link link-pointer">Learn more</span>
                                </a>
                                <!-- End Card -->
                            </div>
                            <!-- End Col -->
                            </div>
                            <!-- End Row -->
                        </div>
                        </div>

                        <div class="col-lg-4">
                        <div class="navbar-dropdown-menu-inner">
                            <span class="dropdown-header">Classic</span>
                            <a class="dropdown-item " href="../blog-modern.html">Modern <span class="badge text-primary">New</span></a>
                            <a class="dropdown-item " href="../blog-grid.html">Grid</a>
                            <a class="dropdown-item " href="../blog-list.html">List</a>
                            <a class="dropdown-item " href="../blog-article.html">Article <span class="badge text-primary">New</span></a>
                            <a class="dropdown-item " href="../blog-author-profile.html">Author Profile</a>
                        </div>
                        </div>
                    </div>
                    <!-- End Main Content -->
                    </div>
                    <!-- End Mega Menu -->
                </li>
                <!-- End Blog -->

                <!-- Docs -->
                <li class="hs-has-mega-menu nav-item"
                    data-hs-mega-menu-item-options='{
                        "desktop": {
                        "maxWidth": "20rem"
                        }
                    }'>
                    <a id="docsMegaMenu" class="hs-mega-menu-invoker nav-link dropdown-toggle " href="#" role="button" aria-expanded="false">Docs</a>

                    <!-- Mega Menu -->
                    <div class="hs-mega-menu hs-position-right-fix dropdown-menu" aria-labelledby="docsMegaMenu" style="min-width: 20rem;">
                    <!-- Link -->
                    <a class="navbar-dropdown-menu-media-link" href="../documentation/index.html">
                        <div class="d-flex">
                        <div class="flex-shrink-0">
                            <i class="bi-file-earmark-text fs-2 text-dark"></i>
                        </div>

                        <div class="flex-grow-1 ms-3">
                            <span class="navbar-dropdown-menu-media-title">Documentation <span class="badge badge-sm bg-primary rounded-pill ms-1">v3.1</span></span>
                            <p class="navbar-dropdown-menu-media-desc">Development guides for building projects with Unify</p>
                        </div>
                        </div>
                    </a>
                    <!-- End Link -->

                    <div class="dropdown-divider"></div>

                    <!-- Link -->
                    <a class="navbar-dropdown-menu-media-link" href="../snippets/index.html">
                        <div class="d-flex">
                        <div class="flex-shrink-0">
                            <i class="bi-layers fs-2 text-dark"></i>
                        </div>

                        <div class="flex-grow-1 ms-3">
                            <span class="navbar-dropdown-menu-media-title">Snippets</span>
                            <p class="navbar-dropdown-menu-media-desc">Move quickly with copy-to-clipboard feature</p>
                        </div>
                        </div>
                    </a>
                    <!-- End Link -->
                    </div>
                    <!-- End Mega Menu -->
                </li>
                <!-- End Docs -->

                <!-- Log in -->
                <li class="nav-item ms-lg-auto">
                    <a class="btn btn-ghost-dark me-2 me-lg-0" href="../page-login.html">Log in</a>
                    <a class="btn btn-dark d-lg-none" href="../page-signup.html">Sign up</a>
                </li>
                <!-- End Log in -->

                <!-- Sign up -->
                <li class="nav-item">
                    <a class="btn btn-dark d-none d-lg-inline-block" href="../page-signup.html">Sign up</a>
                </li>
                <!-- End Sign up -->
                </ul>
            </div>
            <!-- End Collapse -->
            </nav>
        </div>
        </header>
        <!-- ========== END HEADER ========== -->
        `,
    },

    "feature-general-1": {
        label: "Feature General 1", // Nombre del bloque
        category: "Features General", // Categoría del bloque en el panel
        attributes: { class: "fa fa-puzzle-piece" }, // Ícono del bloque
        content: `
            <!-- Features -->
            <div class="overflow-hidden">
            <div class="container content-space-1">
                <div class="row align-items-lg-center">
                <div class="col-lg-7 me-auto ms-lg-n10 mb-5 mb-lg-0">
                    <div class="row align-items-center">
                    <div class="col-4">
                        <img class="img-fluid rounded-3" src="./assets/img/580x480/img1.jpg" alt="Image Description">
                    </div>
                    <!-- End Col -->

                    <div class="col-3">
                        <img class="img-fluid rounded-3" src="./assets/img/350x700/img1.jpg" alt="Image Description">
                    </div>
                    <!-- End Col -->

                    <div class="col-5">
                        <img class="img-fluid rounded-3" src="./assets/img/400x700/img1.jpg" alt="Image Description">
                    </div>
                    <!-- End Col -->
                    </div>
                    <!-- End Row -->
                </div>
                <!-- End Col -->

                <div class="col-lg-5">
                    <div class="mb-5">
                    <h2>Collaborative tools to design user experience</h2>
                    <p>Use our tools to explore your ideas and make your vision come true. Then share your work easily.</p>
                    </div>

                    <!-- List Checked -->
                    <ul class="list-checked list-checked-soft-bg-primary list-checked-lg">
                    <li class="list-checked-item"><span class="fw-bold">Less routine</span> – more creativity</li>
                    <li class="list-checked-item">Hundreds of thousands saved</li>
                    <li class="list-checked-item">Scale budgets <span class="fw-bold">efficiently</span></li>
                    </ul>
                    <!-- End List Checked -->
                </div>
                <!-- End Col -->
                </div>
                <!-- End Row -->
            </div>
            </div>
            <!-- End Features -->
        `,
    },
    "landing-corporate": {
        label: "Landing corporate", // Nombre del bloque
        category: "Hero section", // Categoría del bloque en el panel
        attributes: { class: "fa fa-puzzle-piece" }, // Ícono del bloque
        content: `
            <!-- Hero -->
            <div class="container content-space-1">
                <div class="row justify-content-lg-between align-items-lg-center">
                    <div class="col-lg-5 mb-5 mb-lg-0">
                        <div class="mb-5">
                            <h1 class="display-4 text-dark mb-5">Start your journey with <span class="text-primary">Unify</span></h1>
                            <p class="fs-3">Feature-rich components and designed demo pages help you create the best possible products.</p>
                        </div>

                        <div class="d-grid d-sm-flex gap-3 mb-5">
                            <a class="btn btn-primary" href="#">Request demo</a>
                            <a class="btn btn-ghost-dark btn-pointer" href="#">Sign up free</a>
                        </div>
                    </div>
                    <!-- End Col -->

                    <div class="col-lg-6">
                        <div class="position-relative">
                            <div class="position-relative">
                                <img class="img-fluid" src="./assets/img/950x950/img1.jpg" alt="Image Description">

                                <div class="position-absolute bottom-0 end-0">
                                    <img class="w-100" src="./assets/svg/illustrations/cubics.svg" alt="SVG" style="max-width: 30rem;">
                                </div>
                            </div>

                            <!-- Media -->
                            <div class="d-inline-block position-absolute top-0 start-0 bg-white w-100 rounded-pill shadow-sm p-2 mt-5 ms-n5" style="max-width: 12rem;">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                    <span class="avatar avatar-sm avatar-circle">
                                        <img class="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description">
                                    </span>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                    <div class="fs-5 fw-bold mb-0">Julia</div>
                                    <span class="d-block fs-6">Fantastic theme!</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Media -->

                            <!-- Media -->
                            <div class="d-inline-block position-absolute bottom-0 start-0 bg-warning w-100 rounded-pill shadow-sm p-2 mb-10 ms-n10" style="max-width: 16rem;">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <span class="avatar avatar-sm avatar-circle">
                                            <img class="avatar-img" src="../assets/img/160x160/img3.jpg" alt="Image Description">
                                        </span>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <div class="fs-5 fw-bold text-dark mb-0">Michael</div>
                                        <span class="d-block fs-6 text-dark">Excellent documentation 🔥👋</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Media -->
                        </div>
                    </div>
                    <!-- End Col -->
                </div>
            <!-- End Row -->
            </div>
            <!-- End Hero -->
        `,
    },
};

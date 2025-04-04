export const blocksExample = {
    'hero-section': {
        label: 'Hero Section',  // Nombre del bloque
        category: 'Example',  // Categoría del bloque en el panel
        attributes: { class: 'fa fa-image' },  // Ícono del bloque
        content: `
            <!-- Hero -->
            <div class="overflow-hidden content-space-t-md-1">
                <div class="container position-relative content-space-t-3 content-space-b-2">
                    <div class="w-lg-75 mx-lg-auto">
                    <div class="text-center mb-5">
                        <span class="text-cap">Small business solutions</span>
                        <h1 class="display-4">Turn online shoppers into <span class="text-primary">lifetime customers</span></h1>
                    </div>

                    <div class="row justify-content-center align-items-sm-center col-sm-divider text-center text-sm-start gx-5 mb-5 mb-sm-7">
                        <div class="col-sm-auto">
                        <!-- Avatar Group -->
                        <div class="avatar-group avatar-group-sm justify-content-center">
                            <span class="avatar avatar-circle">
                            <img class="avatar-img" src="./src/assets/img/160x160/img10.jpg" alt="Image Description">
                            </span>
                            <span class="avatar avatar-circle">
                            <img class="avatar-img" src="./src/assets/img/160x160/img3.jpg" alt="Image Description">
                            </span>
                            <span class="avatar avatar-circle">
                            <img class="avatar-img" src="./src/assets/img/160x160/img9.jpg" alt="Image Description">
                            </span>
                            <span class="avatar avatar-circle">
                            <img class="avatar-img" src="./src/assets/img/160x160/img8.jpg" alt="Image Description">
                            </span>
                            <span class="avatar avatar-dark avatar-circle">
                            <span class="avatar-initials">7k+</span>
                            </span>
                        </div>
                        <!-- End Avatar Group -->
                        </div>
                        <!-- End Col -->

                        <div class="col-sm-auto">
                        <h5 class="mb-0">Trust pilot</h5>
                        <span class="d-block fs-5">Rated best over 37k reviews</span>
                        </div>
                        <!-- End Col -->
                    </div>
                    <!-- End Row -->
                    </div>

                    <div class="w-lg-65 mx-lg-auto">
                    <!-- Input Card -->
                    <form>
                        <div class="input-card input-card-sm">
                        <div class="input-card-form">
                            <label for="nameRegisterForm" class="form-label visually-hidden">Enter your name</label>
                            <input type="text" class="form-control form-control-lg" id="nameRegisterForm" placeholder="Your name" aria-label="Your name">
                        </div>
                        <div class="input-card-form">
                            <label for="emailRegisterForm" class="form-label visually-hidden">Enter email</label>
                            <input type="text" class="form-control form-control-lg" id="emailRegisterForm" placeholder="Your email" aria-label="Your email">
                        </div>
                        <button type="button" class="btn btn-primary btn-lg">Get started</button>
                        </div>
                    </form>
                    <!-- End Input Card -->

                    <!-- SVG Shape -->
                    <figure class="position-absolute top-50 end-0 translate-middle-y d-none d-md-block" style="width: 17rem; margin-right: -10rem;">
                        <img class="img-fluid" src="./src/assets/svg/components/three-arrows-1.svg" alt="Image Description">
                    </figure>
                    <!-- End SVG Shape -->

                    <!-- SVG Shape -->
                    <figure class="position-absolute top-50 start-0 translate-middle-y d-none d-md-block" style="width: 14rem; margin-left: -10rem;">
                        <img class="img-fluid" src="./src/assets/svg/components/three-arrows-2.svg" alt="Image Description">
                    </figure>
                    <!-- End SVG Shape -->
                    </div>
                </div>
            </div>
            <!-- End Hero -->
        `
    },
};
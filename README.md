# portfolio-My-library
My JavaScript UI library
Library documentation
«my-library»


I.Component  dropdown

<div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" id="dropDownMenuButton">Dropdown button</button> 
            <div class="dropdown-menu" data-toggle-id="dropDownMenuButton">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Action #2</a>
                <a href="#" class="dropdown-item">Action #3</a>
            </div>
        </div>

II. Creating tabs
<div class="tab mt-20 block-center">
            <div class="tab-panel" data-panel>
                <div class="tab-item tab-item--active">Content 1</div>
                <div class="tab-item">Content 2</div>
                <div class="tab-item">Content 3</div>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" id="dropDownMenuButton2">Dropdown button</button> 
                    <div class="dropdown-menu" data-toggle-id="dropDownMenuButton2">
                        <a href="#" class="dropdown-item">Action</a>
                        <a href="#" class="dropdown-item">Action #2</a>
                        <a href="#" class="dropdown-item">Action #3</a>
                    </div>
                </div>
            </div>
            <div class="tab-content tab-content--active">
                Lorem, ipsum dolor
                <br> <br>
                Lorem ipsum dolor
            </div>
            <div class="tab-content">
                Lorem, ipsum
                <br> <br>
                Lorem ipsum dolor
                <br> <br>
                Lorem ipsum dolor
            </div>
            <div class="tab-content">
                Lorem ipsum dolor
            </div>
        </div>
III.Carousel
 <div class="carousel" id="example">
            <ol class="carousel-indicators">
                <li class="active" data-slide-to="0"></li>
                <li data-slide-to="1"></li>
                <li data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-slides">
                    <div class="carousel-item">
                        <img src="https://thumbs.dreamstime.com/25594909.jpg" alt="photo">
                    </div>
                    <div class="carousel-item">
                        <img src=https://images.unsplash.com/photo-1554080353 alt="photo">
                    </div>
                    <div class="carousel-item">
                        <img src="https://34travel.me/media/images/1.jpg" alt="photo">
                    </div>
                </div>
            </div>
            <a href="#" class="carousel-prev" data-slide="prev">
                <span class="carousel-prev-icon">&lt;</span>
            </a>
            <a href="#" class="carousel-next" data-slide="next">
                <span class="carousel-prev-icon">&gt;</span>
            </a>
        </div>


IV. Creating an accordion
 <div class="accordion mt-20 block-center">
            <div class="accordion-head">
                Collapse first element
            </div>
            <div class="accordion-content">
                <div class="accordion-inner">
                    Lorem ipsum dolor
                </div>
            </div>

            <div class="accordion-head">
                    Collapse second element
            </div>
            <div class="accordion-content">
                <div class="accordion-inner">
                    Lorem ipsum dolor 
                </div>
            </div>
        </div>

V. Product card
<div class="goods d-flex f-space-around">
            <div class="card">
                <img class="card-img" src="https://media-cdn.com/road.jpg" alt="photo">
                <div class="card-body">
                    <div class="card-title">Card title</div>
                    <p class="card-text">Lorem ipsum dolor</p>
                    <a href="#" id="trigger" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Link to</a>
                </div>
            </div>

</div>

VI. modal window
 <!--Modal-->
<div class="modal" id="exampleModal">
            <div class="modal-dialog">
                <div class="modal-content">
                     <button class="close" data-close>
                        <span>&times;</span>
                     </button>
                     <div class="modal-header">
                        <div class="modal-title">
                            Modal title
                        </div>
                     </div>
                     <div class="modal-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing. 
                     </div>
                     <div class="modal-footer">
                        <button class="btn btn-danger" data-close>Close</button>
                        <button class="btn btn-success">Save change</button>
                     </div>
                </div>
            </div>
        </div>





VII. Helper CSS classes. (can be simply installed on layout elements)

* alignment
.text-center {
    text-align: center;
}

.block-center {
    margin: 0 auto;
}

* Display elements
.hidden {
    visibility: hidden;
}

.visible {
    visibility: visible;
}

.d-none {
    display: none;
}

.d-block {
    display: block;
}

.d-flex {
    display: flex;
}

.f-centered {
    justify-content: center;
    align-items: center;
}

.f-space-around {
    justify-content: space-around;
}

.f-space-between {
    justify-content: space-between;
}

*Fonts
.fz-16 {
    font-size: 16px;
}

.fz-20 {
    font-size: 20px;
}

.fz-24 {
    font-size: 24px;
}

.bold {
    font-weight: bold;
}

.thin {
    font-weight: 300;
}

.italic {
    font-style: italic;;
}

.text-color-primary {
    color: $primary;
}

.text-color-danger {
    color: $danger;
}

.text-color-warning {
    color: $warning;
}

.text-color-success {
    color: $success;
}

.text-color-dark {
    color: $dark;
}

* Margin
.m10 {
    margin: 10px;
}

.m20 {
    margin: 20px;
}

.mt-10 {
    margin-top: 10px;
}

.mr-10 {
    margin-right: 10px;
}

.mb-10 {
    margin-bottom: 10px;
}

.ml-10 {
    margin-left: 10px;
}

.mt-20 {
    margin-top: 20px;
}

.mr-20 {
    margin-right: 20px;
}

.mb-20 {
    margin-bottom: 20px;
}

.ml-20 {
    margin-left: 20px;
}

* Padding
.p10 {
    padding: 10px;
}

.p20 {
    padding: 20px;
}

.pt-10 {
    padding-top: 10px;
}

.pr-10 {
    padding-right: 10px;
}

.pb-10 {
    padding-bottom: 10px;
}

.pl-10 {
    padding-left: 10px;
}

.pt-20 {
    padding-top: 20px;
}

.pr-20 {
    padding-right: 20px;
}

.pb-20 {
    padding-bottom: 20px;
}

.pl-20 {
    padding-left: 20px;
}

* Размеры
.w-100 {
    width: 100%;
}

.w-50 {
    width: 50%;
}

.w-300 {
    width: 300px;
}

.w-500 {
    width: 500px;
}

.h-100 {
    height: 100%;
}

.h-50 {
    height: 50%;
}

.h-300 {
    height: 300px;
}

.h-500 {
    height: 500px;
}

*Colors
$primary: #025fff;
$success: #2a9924;
$danger: red;
$warning: rgb(212, 212, 69);
$dark: #343a40;

$(function(){
    makeNavBarResponsive();
    $(window).resize(makeNavBarResponsive);
    $(".nav-items2").css("display","none");
    $("footer").html(`
    <div class="footer-logo-section">
            <div class="footer-logo">
                    <a href="./index.html">
                        <img src="./images/ca_logo.png" alt="" class="logo-img">
                    </a>
                    <div class="websitePages">
                       <a href="./services.html">Services</a>
                       <a href="./about.html">About Us</a>
                       <a href="./contact.html">Contact Us</a>
                    </div>
                    <p style="color:#81b84d">&copy; R V Somani & Co., 2024</p>
            </div>
        </div>
        <div class="footer-section2">
            <p>Usefull articles</p>
            <div class="articleLinks">
                <a target="_blank" href="https://www.bankbazaar.com/tax/tax-deduction-and-types.html">Understand common tax deductions</a>
                <a target="_blank" href="https://mashable.com/article/tax-scams-to-avoid">Tax scams to watchout for</a>
                <a target="_blank" href="https://www.icicibank.com/blogs/mutual-fund/capital-gains-tax">Tax Implications of Investments</a>
                <a target="_blank" href="https://www.shopify.com/sg/retail/small-business-tax-tips">Small Business Tax Tips</a>
            </div>
        </div>
        <div class="footer-section3">
            <p>Leave a review!</p>
            <form method="post">
                <input type="text" placeholder="enter your review here"> <br/>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    `);
})

function makeNavBarResponsive(){
    if($(window).width() <= 500){
        console.log("width less than 500");
        $(".nav-section").html(
            `
            <div class="nav-container2">
                <div class="logo">
                    <a href="./index.html">
                        <img src="./images/ca_logo.png" alt="" class="logo-img">
                    </a>
                </div>
                <div class="hamburger">
                    <label for="hamburger" class="hIcon"><i class="fa-solid fa-bars"></i></label>
                    <input type="checkbox" id="hamburger" hidden>
                </div>
            </div>
            <nav class="nav-items2">
                    <p><a href="./index.html">Home</a></p>
                    <p><a href="./about.html">About Us</a></p>
                    <p><a href="./services.html">Our Services</a></p>
                    <p><a href="./index.html">Accomplishments</a></p>
                    <p><a href="./contact.html">Contact Us</a></p>
            </nav>
            `
        );
        $(".hIcon").css("display","block");
        $(".nav-items").css("display","none");
        $(".hIcon").on("click",handleNavMenu);
    }else{
        $(".nav-section").html(
            `
            <div class="nav-container1">
                <div class="logo">
                    <a href="./index.html">
                        <img src="./images/ca_logo.png" alt="" class="logo-img">
                    </a>
                </div>
                <nav class="nav-items1">
                    <p><a href="./index.html">Home</a></p>
                    <p><a href="./about.html">About Us</a></p>
                    <p><a href="./services.html">Our Services</a></p>
                    <p><a href="./index.html">Accomplishments</a></p>
                    <p><a href="./contact.html">Contact Us</a></p>
                </nav>
            </div>
            `
        );
    }
}
function handleNavMenu(){
    console.log("hamburger clicked");
    if($("#hamburger").is(':checked')){
        console.log("hamburger radiobtn is checked");
        $(".nav-items2").css("display","none");
    }
    else{
        console.log("hamburger radiobtn is not checked");
        $(".nav-items2").css("display","flex");
        $(".nav-items2").css("flex-direction","column");
        $(".nav-items2").css("justify-content","center");
        $(".nav-items2").css("align-items","center");
    }
}
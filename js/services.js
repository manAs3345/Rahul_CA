$(function(){
    $(".more-btn").on("click",function(){
        let serviceName = $(this).prev().prev().text();
        window.location.href=`./serviceDetails.html?service=${serviceName}`;
    })
})

function handleTaxationModal(){
    // let serviceName = $(".more-btn").text();
    // console.log(serviceName);
    //window.location.href=`./serviceDetail.html?serivce=${serviceName}`;
    // const taxationModal = document.getElementById("taxation-modal");
    // taxationModal.style.display="block";
}
function closeTaxationModal(){
    const taxationModal = document.getElementById("taxation-modal");
    taxationModal.style.display="none";
}

function handleAuditModal(){
    const auditModal = document.getElementById("audit-modal");
    auditModal.style.display="block";
}
function closeAuditModal(){
    const auditModal = document.getElementById("audit-modal");
    auditModal.style.display="none";
}
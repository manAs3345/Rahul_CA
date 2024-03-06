$(async function(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    console.log(urlSearchParams)
    const serviceName = urlSearchParams.get("service");
    if(serviceName != null){
        $('title').html(`R V Somani & Co. - ${serviceName}`);
        $('.black-overlay > h1').html(serviceName);
        let response = await fetch("./services.json");
        if(response.ok){
            let result = await response.json();
            let service_details_result = result.services.filter((element)=>{
                return element.name == serviceName
            });

            let service_details = service_details_result[0];
            $('.black-overlay > div').html(service_details.description);
            $('.service-details-img').attr("src",service_details.image_url);
            let serviceClassName = service_details.class_name;
            service_details.sub_services.forEach((element,index) => {
                $('.service-details > ol').append(
                    `
                    <b><li>${element.sub_service_name}</li></b>
                    <ul class="${serviceClassName}-${index}"></ul>
                    <br/>
                    `
                );    
                element.sub_service_descriptions.forEach(desc=>{
                    $(`.${serviceClassName}-${index}`).append(
                        `<li>${desc}</li>`
                    );
                })
                
            });
            
        }
    }else{
        window.location.href = "./services.html";
    }
    
});
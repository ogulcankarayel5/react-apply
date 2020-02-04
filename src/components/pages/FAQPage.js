import React from 'react'
import '../../assets/css/FAQ.css';

export default function FAQPage() {
    return (
        <div class="container">
        <br />
        <br />
        <br />
    
        <div class="alert alert-warning alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            Bu alan <strong>iletişim yazılım </strong> ile alakalı. Eğer burada cevap bulamazsan sol üstten ana sitemize gidebilirsin 
            
        </div>
    
        <br />
    
        <div class="" id="accordion">
            <div class="faqHeader">General questions</div>
            <div class="card ">
                <div class="card-header">
                    <h4 class="card-header">
                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Bu site ne için ?</a>
                    </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse in">
                    <div class="card-block">
                      Seni daha iyi tanımamız için,bazı senaryolarla test etmek istiyoruz. 
                    </div>
                </div>
            </div>

            <div class="card ">
                <div class="card-header">
                    <h4 class="card-header">
                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">İstediğim senaryoyu seçebilir miyim ?</a>
                    </h4>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse in">
                    <div class="card-block">
                      Evet,istediğini seçip cevabı bize mail yoluyla iletmen yeterli.En kısa sürede seninle iletişime geçeceğiz. 
                    </div>
                </div>
            </div>
           
           
            
           
        </div>
    </div>
    )
}

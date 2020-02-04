import $ from 'jquery';

export default function preloaderOrganize(){
    setTimeout(() => {
        $(".animate ").hide();
        $(".compose").removeClass("compose");
       
    },2000);
}


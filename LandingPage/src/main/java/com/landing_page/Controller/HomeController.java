package com.landing_page.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class HomeController {

    @GetMapping("/")
    public String HomePage(){
        return "index";
    }

    @GetMapping("/contact")
    public String contact_Form(){

        return "contact_Form";
    }

    @GetMapping("/collection")
    public String collection(){
        return "collection";
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2 implements OnInit {
  title = 'landing-page-2';

  ngOnInit() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = 'https://www.googletagmanager.com/gtag/js?id=G-MT32PFCVBC';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);

    let node2 = document.createElement('script');
    node2.type = 'text/javascript';
    node2.charset = 'utf-8';
    node2.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-MT32PFCVBC');
    `;
    document.getElementsByTagName('head')[0].appendChild(node2);

    let node3 = document.createElement('script');
    node3.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';
    node3.integrity = 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM';
    node3.crossOrigin = 'anonymous';
    node3.type = 'text/javascript';
    node3.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node3);
  }

  signUp():void{
    const a = document.createElement("a");
    a.href = "https://www.shop8home.com/signup?utm_source=Boost&utm_medium=Boost+&utm_campaign=Boost_SMO&utm_id=Boost&utm_term=dec&utm_content=Boost";
    a.click();
  }
}

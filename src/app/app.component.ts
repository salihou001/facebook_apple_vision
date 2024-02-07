import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  click = 0;
  showFooter = 0
  showVideoPage= 0
  showMoreConten = 0;
  numberLike = 18;
  numberLike_2 = 180;
  showSearchPage=0
  ngOnInit(): void {}
  like() {
    const TL = gsap.timeline();
    if (this.click == 0) {
      TL.to('.like', {
        backgroundColor: 'rgb(83, 134, 244)',
        color: '#fff',
        duration: 0.3,
        ease: 'power4.out',
      }).to(
        '.like svg',
        {
          fill: '#fff',
          duration: 0.3,
          ease: 'power4.out',
        },
        '<'
      );
      this.numberLike++;
      this.click++;
    } else {
      if (this.click == 1) {
        TL.to('.like', {
          backgroundColor: 'transparent',
          duration: 0.3,
          ease: 'power4.out',
        }).to(
          '.like svg',
          {
            fill: '#2563EB',
            duration: 0.3,
            ease: 'power4.out',
          },
          '<'
        );
        this.numberLike--;
        this.click--;
      }
    }
  }
  like_2() {
    const TL = gsap.timeline();
    if (this.click == 0) {
      TL.to('.like_2', {
        backgroundColor: 'rgb(83, 134, 244)',
        color: '#fff',
        duration: 0.3,
        ease: 'power4.out',
      }).to(
        '.like_2 svg',
        {
          fill: '#fff',
          duration: 0.3,
          ease: 'power4.out',
        },
        '<'
      );
      this.numberLike_2++;
      this.click++;
    } else {
      if (this.click == 1) {
        TL.to('.like_2', {
          backgroundColor: 'transparent',
          duration: 0.3,
          ease: 'power4.out',
        }).to(
          '.like_2 svg',
          {
            fill: '#2563EB',
            duration: 0.3,
            ease: 'power4.out',
          },
          '<'
        );
        this.numberLike_2--;
        this.click--;
      }
    }
  }
  showMoreContent() {
    const TL = gsap.timeline();
    if(this.showMoreConten == 0){
      TL.to('.arrow_dwon', {
        display: 'none',
        duration: 0.1,
        ease: 'power4.out',
      })
      .to('.gaming_content', {
        height: '55%',
        duration: 0.4,
        ease: 'power4.out',
      },"<.2")
      .to('.arrow_up', {
        display: 'block',
        duration: 0.3,
        ease: 'power4.out',
      },"<")
      this.showMoreConten++;
    }else{
      if(this.showMoreConten == 1){
        TL
        .to('.arrow_up', {
          display: 'none',
          duration: 0.1,
          ease: 'power4.out',
        })
        .to('.gaming_content', {
          height: '33%',
          duration: 0.4,
          ease: 'power4.out',
        },"<.2")
        .to('.arrow_dwon', {
          display: 'block',
          duration: 0.3,
          delay: 0.1,
          ease: 'power4.out',
        },"<")
        this.showMoreConten--;
      }
    }
  }
  toggleMenuBottom(){
    const TL = gsap.timeline();
    if(this.showFooter == 0){
      TL.to('.menu__footer', {
        y: '200px',
        x: '-100px',
        opacity : 0,
        duration: .7,
        ease: 'power4.in',
      })
      this.showFooter++
    }else{
      if(this.showFooter == 1){
        TL.to('.menu__footer', {
          y: '*',
          x: '*',
          opacity: 1,
          duration: .5,
          ease: 'power4.out',
        })
        this.showFooter--;
      }
    }
  }
  videoPage(){
    const TL = gsap.timeline();
    if(this.showVideoPage == 0){
      TL
      .to('.right__section', {
        x: '-100%',
        opacity : 0,
        duration: .5,
        ease: 'power4.in',
      })
      .to('.left__section', {
        x : '100%',
        opacity: 0,
        duration: .5,
        ease: 'power4.in',
      },"<")
      .to('.overlay_body', {
        height : '100%',
        duration: .6,
        delay: .3,
        ease: 'power4.out',
      })
      .to('.overlay_body', {
        height : '0',
        duration: .6,
        delay: 0.6,
        ease: 'power4.out',
      })
      .to('.right__section', {
        x: '*',
        opacity : 1,
        duration: .5,
        ease: 'power4.out',
      },"<.3")
      .to('.left__section', {
        x: '*',
        opacity : 1,
        duration: .5,
        ease: 'power4.out',
      },"<")
      .fromTo('.birthday,.contact', {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        delay: .1
      },{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: .4,
        ease: 'power4.out',
      })
    }
  }
  searchPage(){
    const TL = gsap.timeline();
    if(this.showSearchPage == 0){
      TL.to('.right__section_search', {
        x: '0',
        opacity : 1,
        duration: .5,
        ease: 'power4.out',
      })
      .to('.right__section', {
        opacity : 0,
        duration: .1,
        ease: 'power4.out',
      },"<")
      this.showSearchPage++;
    }else{
      if(this.showSearchPage == 1){
        TL.to('.right__section_search', {
          x: '-100%',
          opacity : 0,
          duration: .25,
          ease: 'power4.out',
        })
        .to('.right__section', {
          opacity : 1,
          duration: .1,
          ease: 'power4.out',
        },"<")
        this.showSearchPage--;
      }
    }
  }
}

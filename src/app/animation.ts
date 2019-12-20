import { transition, style, animate, trigger, state, useAnimation } from '@angular/animations';
import { BOUNCE_IN, BOUNCE_OUT } from 'angular-bounce';



export let fade= trigger('fade', [
    state('void',style({opacity:0})),
    transition(':enter,:leave', [        //void<=>*
      animate(2000)

    ])
  ])
  export let welcome= trigger('welcome', [
    transition('inactive => active', [ 
      useAnimation(BOUNCE_IN)
    ]),
    transition('active => inactive', [ 
      useAnimation(BOUNCE_OUT)
    ])
  ])
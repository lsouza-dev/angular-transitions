import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export const highlitedStateTrigger = trigger('highlitedState',[
    state('default',style({
      border: '2px solid #B2B6FF' 
      
    })),
    state('highlited',style({
        border: '4px solid #B2B6FF',
        filter: 'brightness(92%)'
    })),
    transition('default => highlited',[
      animate('200ms ease-out',style({
        transform: 'scale(1.02)'
      })),
      animate(200)
    ]),
  ])

export const shownStateTrigger = trigger('shownState',[
  transition(':enter',[
    style({
      opacity: 0
    }),
    animate(300,style({
      opacity: 1
    }))
  ]),
  transition(':leave',[
    animate(300,style({
      opacity: 0
    }))
  ])
])


export const checkButtonTrigger = trigger('checkTask',[
  transition('* => checked',[
    animate('400ms ease-in',style({
      transform: 'scale(0.4)',
    })),
    animate(200)
  ])
])

export const filterTrigger = trigger('filterAnimation',[
    transition(':enter',[
        style({
            opacity:0 ,
            width:0
        }),
        animate('2000ms ease-out',keyframes([
            style({offset: 0,opacity:0,width:0}),
            style({offset: 0.8,opacity:.5,width:'*',backgroundColor:'lightgreen'}),
            style({offset: 1,opacity:1,width:'*',backgroundColor:'lightblue'}),
        ])
        )
    ]),

    transition(':leave',[
        animate('400ms ease-out',style({
            opacity: 0,
            width:0
        }))
    ])
])
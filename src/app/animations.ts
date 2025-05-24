import { animate, group, keyframes, query, stagger, state, style, transition, trigger } from "@angular/animations";

export const highlitedStateTrigger = trigger('highlitedState', [
  state('default', style({
    border: '2px solid #B2B6FF'

  })),
  state('highlited', style({
    border: '4px solid #B2B6FF',
    filter: 'brightness(92%)'
  })),
  transition('default => highlited', [
    animate('200ms ease-out', style({
      transform: 'scale(1.02)'
    })),
    animate(200)
  ]),
])

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(300, style({
      opacity: 0
    }))
  ])
])


export const checkButtonTrigger = trigger('checkTask', [
  transition('* => checked', [
    animate('400ms ease-in', style({
      transform: 'scale(0.4)',
    })),
    animate(200)
  ])
])

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      width: 0
    }),
    animate('400ms ease-out', keyframes([
      style({ offset: 0, opacity: 0, width: 0 }),
      style({ offset: 0.8, opacity: .5, width: '*' }),
      style({ offset: 1, opacity: 1, width: '*' }),
    ])
    )
  ]),

  transition(':leave', [
    animate('400ms cubic-bezier(.13,.9,.8,.1)', style({
      opacity: 0,
      width: 0
    }))
  ])
])


export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    query('#botao-salvar', [
      group([
        animate(200, style({
          backgroundColor: '#63B77C'
        })),
        animate(100, style({
          transform: 'scale(1.1)'
        }))
      ]),
      animate(200, style({
        transform: 'scale(1)'
      }))
    ])
  ]),
  transition('valid => invalid', [
    query('#botao-salvar', [
      group([
        animate(200, style({
          backgroundColor: '#6C757D'
        })),
        animate(100, style({
          transform: 'scale(1.1)'
        }))
      ]),
      animate(200, style({
        transform: 'scale(1)'
      }))
    ])
  ])
])



export const semTarefasTrigger = trigger('semTarefas', [
  transition(':enter', [
    animate('500ms ease-in', keyframes([
      style({ opacity: 0.1, transform: 'translateX(-50%)' }),
      style({ opacity: 0.3, transform: 'translateX(-35%)' }),
      style({ opacity: 0.5, transform: 'translateX(-20%)' }),
      style({ opacity: 0.7, transform: 'translateX(-5%)' }),
      style({ opacity: 1, transform: 'translateX(0)' })
    ])),
  ]),
  transition(':leave', [
    animate('500ms ease-out', keyframes([
      style({ opacity: 1, transform: 'translateX(0)' }),
      style({ opacity: 0.7, transform: 'translateX(-5%)' }),
      style({ opacity: 0.5, transform: 'translateX(-20%)' }),
      style({ opacity: 0.3, transform: 'translateX(-35%)' }),
      style({ opacity: 0, transform: 'translateX(-50%)' }),
    ])),
  ])
])

export const shakeTrigger = trigger('shakeAnimation', [
  transition('* => *', [
    query('input.ng-invalid:focus,select.ng-invalid:focus', [
      animate('.5s', keyframes([
        style({ border: '2px solid red' }),
        style({ transform: 'translateX(0)' }),
        style({ transform: 'translateX(-10px)' }),
        style({ transform: 'translateX(10px)' }),
        style({ transform: 'translateX(-10px)' }),
        style({ transform: 'translateX(10px)' }),
        style({ transform: 'translateX(-10px)' }),
        style({ transform: 'translateX(10px)' }),
        style({ transform: 'translateX(-10px)' }),
        style({ transform: 'translateX(0)' }),
      ]))
    ], { optional: true })
  ])
])


export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query('#tarefas-container > div', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      stagger(200, [
        animate('500ms ease-out', keyframes([
          style({
            opacity: 1,
            transform: 'translateX(15%)',
            offset: .4
          }), style({
            opacity: 1,
            transform: 'translateX(0)',
            offset: 1
          }),
        ]))
      ]),
    ], { optional: true })
  ])
])
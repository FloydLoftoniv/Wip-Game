
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')


let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  }) 
  
}
 
//  imgElement = img;
var imgELement = document.getElementById("image");

var imgIndex = 1;

function changeimg() {
  
  var imgs = ['Myster\media\download.jpg',
 'Myster\media\hilltown.jpg',
 'Myster\media\bakery.jpg',
 'Myster\media\informent.jpg',
 'Myster\media\lab.jpg',
'Myster\media\zoo.jpg',
'Myster\media\temptomn.jpg',
'Myster\media\download.jpg'
];

 imgELement.setAttribute("src", imgs[imgIndex]);
  imgIndex++;
}
// document.getElementById('imgs').innerHTML = register();


/*bace code from https://www.youtube.com/channel/UCDPWmUB-7wCn9MDGlm9HyIQ*/
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [

  {
    id: 1,
    text: "You wake up and a bench outside of your city. You don't what day it is nor why it's important, so you decided to ask some people around town to help you remember. "  ,
    img:'media\download.jpg',
    options: [
      {
        text: "Open map",
        imgfile: 'media\pixil-frame-0.png',
        setState: { OpenMap: true },
        nextText: 2
      },
      {
        text: 'Leave',
        nextText: 11
      }
    ]
  },
  {
    id: 2,
    text: 'Select an Area of the town',
img:  'media\m\pixilart-drawing.png',
    options: [
        {
            text: 'baker town',
            nextText: 3
            },
            {
            text: 'Hidden lab',
            nextText: 4
           },
           {
           text: 'Crime tower',
           nextText: 5
          },
          {
             text: 'The Great Zoo',
             nextText: 6
            },
            {
                text: "Angel's club",
                nextText: 7
               },
            {
             text: 'Go home',
             nextText: 8
            },
    ]
  },
  {
    id: 3,
    text: 'You find yourself following a familair sent to a bakery,Toms bakery. As you walk inside the smell of bread and cookie intentifes and your greetied with a warm "How are you this fine morning."',
    
    options: [
      {
        text: 'Hey, Do what today is?',
        nextText: 3.1
      },
      {
        text: 'I heard your making A',
        requiredState: (currentState) => currentState.Bquestion,
        nextText: 5
      },
      {
        text: 'Nevermind see you later.',
        nextText: 2
      }
    ]
  },
  {
    id: 3.1,
    text: ';p.',
    options: [
      {
        text: 'Thanks you for the info.',
        setState:  {Mquestion: true},
        nextText: 3.3
      },
      {
        text: 'I heard your making A',
        requiredState: (currentState) => currentState.Bquestion,
        nextText: 3.2
      },
      {
        text: 'Nevermind see you later.',
        nextText: 2
      }
    ]
  },
  {
    id: 3.3,
    text: '[|8>.',
    options: [
      {
        text: 'Is that it',
        nextText: 3.4
      },
      {
        text: 'I heard your making A',
        requiredState: (currentState) => currentState.Bquestion,
        nextText: 3.2
      },
      {
        text: 'Nevermind see you later.',
        nextText: 2
      }
    ]
  },

  {
    id: 4,
    text: 'You find your towns local mad scienist working away on an Invetion.  ',
    options: [
        {
            text: 'Hey, Do what today is?',
            nextText:4.1
          },
          {
            text: 'I heard your making a special order for someone',
            requiredState: (currentState) => currentState.Squestion,
            nextText: 4.2
          },
          {
            text: 'Nevermind see you later.',
            nextText: 2
          }
    ]
  },
  {
    id: 4.1,
    text: 'She hasnt notice you yet this could be your to see what she"s working on.',
    options: [
        {
            text: 'Find a clue',
            setState:  {Equestion: true},
            nextText:4.3
          },
          {
            text: 'I heard your making a special order for someone',
            requiredState: (currentState) => currentState.Squestion,
            nextText: 4.2
          },
          {
            text: 'Nevermind see you later.',
            nextText: 2
          }
    ]
  },
  {
    id: 4.3,
    text: 'Clue found, I she has notice my snooping around I better get out of here before she exiperemnts ',
    options: [
        {
            text: 'clue',
            nextText:4.3
          },
          {
            text: 'I heard your making a special order for someone',
            requiredState: (currentState) => currentState.Squestion,
            nextText: 4.2
          },
          {
            text: 'Nevermind see you later.',
            nextText: 2
          }
    ]
  },


  {
    id: 5,
    text: '"Well if it isnt my fravoite dective, do you need an infor. "said ',
    options: [
        {
            text: 'Hey, Do what today is?',
            nextText: 5.1
          },
          {
            text: 'I heard your making a special order for someone',
            requiredState: (currentState) => currentState.Mquestion,
            nextText: 5.2
          },
          {
            text: 'Nevermind see you later.',
            nextText: 2
          }
    ]
  },
  {
    id:5.1,
    text: '"Woo woo woo slow dooown buddy, Im just tring to help you "said ',
    options: [
        {
            text: 'Cut the act I know your up to something ',
            nextText: 5.3
          },
          {
            text: 'I heard your making a special order for someone',
            requiredState: (currentState) => currentState.Mquestion,
            nextText: 5.2
          },
          {
            text: 'Nevermind see you later.',
            nextText: 2
          }
    ]
  },
  {
    id:5.2,
    text: '"Look buddy, pal, friend-ooo drop it or else your going to                                                                                                                                                                                                                                                          bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb "said ',
    options: [
        {
            text: 'Cut the act I know your up to something ',
            nextText: 5.3
          },
          {
            text: 'I heard your making a special order for someone',
            requiredState: (currentState) => currentState.Mquestion,
            nextText: 5.2
          },
          {
            text: 'Nevermind see you later.',
            nextText: 2
          }
    ]
  },
  {
    id:5.3,
    text: '"If you must know, I heard its someones speaical day and the boss was "said ',
    options: [
        {
            text: 'Cut the act I know your up to something ',
            nextText: 5.4
          },
          {
            text: 'I heard your making a special order for someone',
            requiredState: (currentState) => currentState.Mquestion,
            nextText: 5.2
          },
          {
            text: 'Nevermind see you later.',
            nextText: 2
          }
    ]
  },


  {
    id: 6,
    text: '"Welcome welcome the Greatest zoo on planet earth!" said the zookeeper Eduial ',
    options: [
        {
            text: 'Hey, Do what today is?',
            nextText: 6.1
          },
          {
            text: 'I heard that some of your petting zoo animal have gone missing.',
            requiredState: (currentState) => currentState.Equestion,
            nextText: 6.2
          },
          {
            text: 'Nevermind see you later.',
            nextText: 2
          }
    ]
  },
  {
    id:  6.1,
    text: '"Welcome welcome the Greatest zoo on planet earth!" said the zookeeper Eduial ',
    options: [
        {
            text: 'Whats that in it your monkey paw',
            setState:  {Bquestion: true},
            nextText: 6.3
          },
          {
            text: 'I heard that some of your petting zoo animal have gone missing.',
            requiredState: (currentState) => currentState.Equestion,
            nextText: 6.2
          },
          {
            text: 'Nevermind see you later.',
            nextText: 2
          }
    ]
  },
  {
    id: 7,
    text: 'As your walk down the street you hear the bueatiful voice coming from your usally hang out spot. You deside to go inside, there you see up on stage is your best friend Luna, this citys local star.   ',
    options: [
        {
            text: 'Hey, Do what today is?',
            nextText: 7.1
          },
          {
            text: 'I heard you were writing a song for someone speacial',
            requiredState: (currentState) => currentState.Cquestion,
            nextText: 7.2
          },
          {
            text: 'Nevermind see you later.',
            nextText: 2
          }
    ]
  },
  {
    id: 7.1,
    text: 'As your walk down the street you hear the bueatiful voice coming from your usally hang out spot. You deside to go inside, there you see up on stage is your best friend Luna, this citys local star.   ',
    options: [
        {
            text: 'Hey, Do what today is?',
            nextText: 7.1
          },
          {
            text: 'I heard you were writing a song for someone speacial',
            requiredState: (currentState) => currentState.Cquestion,
            nextText: 7.2
          },
          {
            text: 'Nevermind see you later.',
            nextText: 2
          }
    ]
  },
  {
    id: 7.2,
    text: '"Yeah well maybe but you should8"  ',
    options: [
        {
            text: 'Hey, Do what today is?',
            nextText: 7.1
          },
          {
            text: 'I heard you were writing a song for someone speacial',
            requiredState: (currentState) => currentState.Cquestion,
            nextText: 7.2
          },
          {
            text: 'Nevermind see you later.',
            nextText: 2
          }
    ]
  },
  {
    id: 7.3,
    text: '"Yeah well maybe but you should8"  ',
    options: [
        {
            text: 'Hey, Do what today is?',
            nextText: 7.1
          },
          {
            text: 'Maybe I will',
            setState: { Answer
              
              : true },
            nextText: 7.2
          },
          {
            text: 'Nevermind see you later.',
            nextText: 2
          }
    ]
  },
  {
    id: 8,
    text: 'Whats this my doors cracked open',
    options: [
        {
            text: 'Hey, Do what today is?',
            nextText: 9
          },
          {
            text: 'Of coure it is because today is...',
            requiredState: (currentState) => currentState. Answer,
            nextText: 10
          },
          {
            text: 'Nope nope nope nopenopenopenopenope.',
            nextText: 2
          }
    ]
  },
  {
    id: 9,
    text: 'You are blinded by a bright ligth and hear a loud sound...',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'You are blinded by a bright ligth and ',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You can away into a mist never to be seen agian. ',
    options: [
      {
        text: ' Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()


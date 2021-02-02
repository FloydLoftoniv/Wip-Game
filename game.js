
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
var imgELement = document.getElementById("image");

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

 //Img function ...broken
// //  imgElement = img;
// var imgs = ['Myster\media\download.jpg',
//  'Myster\media\hilltown.jpg',
//  'Myster\media\bakery.jpg',
//  'Myster\media\informent.jpg',
//  'Myster\media\lab.jpg',
// 'Myster\media\zoo.jpg',
// 'Myster\media\temptomn.jpg',
// 'Myster\media\download.jpg'
// ];

// function changeimg() {
//  document.getElementById('sec1').style.backgroundImage = "url(Myster\media\informent.jpg)";

// }
// // document.getElementById('imgs').innerHTML = register();



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
//start of game 
//add title screen 

  {
    id: 1,
    text: "You wake up and a bench outside of your city. You don't what day it is nor why it's important, so you decided to ask some people around town to help you remember. "  ,
    img:'media/pixil-frame-0.png',
    options: [
      {
        text: "Open map",
        
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
img:  'media/download.jpg',
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
             text:'Evil Lich Kings castle',
            nextText: 12
           },
           
           
            {
                text: "Angel's club",
                requiredState: (currentState) => currentState.Cquestion,
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
    text: 'You find yourself following a familair sent to a bakery,Toms bakery. As you walk inside the smell of bread and cookie intentifes and your greetied with a warm "How are you this fine morning." by your good freind tom. Tom average friendily neighborhood baker ',
    
    options: [
      {
        text: 'A smile appears across your face,finalily happy to talk to some familair, you say " Hey Tom, do what today is?"',
        nextText: 3.1
      },
      {
        text: 'I heard your making A speacil cake',
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
    id: 3.1,
    text: 'Stamuring over his words Tom says"W ww why its its.. half day barky everything is half." Tom is clearly nerious,sweaty even, were about say something about that he says "Why dont you ask yourr informent at crime town."',
    options: [
      {
        text: 'Thanks you for the info, are you ok.',
        setState:  {Mquestion: true},
        nextText: 3.3
      },
      {
        text: 'I heard your making A',
        requiredState: (currentState) => currentState.Bquestion,
        nextText: 3.2
      },
      {
        text: 'Can you say that again?',
        nextText: 3
      }
    ]
  },
  {
    id: 3.3,
    text: 'Toms face begans to return to normal and he says "Fine you should really go already you how it to find him after 5 oclock ".',
    options: [
      
      {
        text: 'I heard your making A',
        requiredState: (currentState) => currentState.Bquestion,
        nextText: 3.2
      },
      {
        text: 'The sweat dripping down Toms face and the missing cake of the tells a different, but now hes right so you decide to leave.',
        nextText: 2
      }
    ]
  },

  {
    id: 3.2,
    text: 'After being givin the run away far to many time to do you ask him this alittle different. After destroying 3 cakes and picking the 2nd cookies perfect giant cookies he say begging  "Whoa there let calm down and think if knew anything I would told you by now I swear!"',
    options: [
      {
        text: 'Your right I should calm down, Ill go for a walk. As you go for a walk hear a beauty voice echoing from some where, ',
        setstate:{Cquestion:true},
        nextText: 7
      },
    
    ]
  },
//add more detail
  {
    id: 4,
    text: 'You find your towns local mad scienist working away on an Invetion. Her name is Sara you her well, mostly because her invetion half her invetion go rouge and end up destoring the town. But she always builds something that repairs whatever her first invetion breaks so the mayor allows her to stay. ',
    options: [
        {
            text: 'You say"Hey, Do what today is?" but nothing happens maybe she hasnt noticed you. ',
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
            text: 'This maybe your only chance to Find a clue',
            setState:  { Squestion:true},
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
    id: 4.2,
    text: 'Before you can speak a small robot comes out a perectly it sizes hole, shhh you, and hands you a note that says "If your reading this I buzy working on an investion that someone ordered please come back later." Apon reading the note the quickly goes back it to the wall. But the back of the has what looks to be a imprint of another message on it, using your amazing Dectective skills to uncover this message " Can you that thing we were talking Im sure it will leave my Amico smiling to the end..." to rest of the message cannt be recovered. From that handwriting alone you know it has to Eddy from the zoo.',
    options: [
        {
            text: 'Why Is Eddy paying for a something to be made by Shara...  ',
            setState:  {Equestion: true, Squestion:true},
            nextText:4.3
          },
          {
            text: 'Nevermind see you later.',
            setState:  {Equestion: true, Squestion:true},
            nextText: 2
          }
    ]
  },

  {
    id: 4.3,
    text: 'Clue found, I she has notice my snooping around I better get out of here before she exiperemnts ',
    options: [
        
          {
            text: 'On second inspection this',
            nextText: 2
          }
    ]
  },


  {
    id: 5,
    text: 'As you walk down the crowded street you that a turn down a dark alley. After walk for severol mineutes you stand before the crime tower a place of where crimel of walks of life come talk of their adventures. And standing there like he always is your informent,Mindo, said "Well if it isnt my fravoite dective, do you need an infor. "',
    options: [
        {
            text: 'Hey,Mindo ,Do what today is?',
            nextText: 5.1
          },
          {
            text: 'I heard your making a special order for someone, speacil cake maybe.',
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
    text: 'As you know from dealing Mindo before they love making deals and making sure they always best infor"Woo woo woo slow dooown buddy, Im just tring to help you. "said Mindo. ',
    options: [
        {
            text: 'Cut the act I know your up to something. Your trying to distract me a from some thing arent you. ',
            nextText: 5.3
          },
          {
            text: 'I heard your making a special order for someone',
            requiredState: (currentState) => currentState.Mquestion,
            nextText: 5.2
          },
          {
            text: 'Nevermind see you later.',
            setstate:{Squestion:true},
            nextText: 5
          }
    ]
  },
  
  {
    id:5.2,
    text: '"Look buddy, pal, my dude, friend-ooo you should just drop or else... All I can tell you is the boss is having the mad sceincist and the baker whip something up. "said Your scetchy looking informent',
    options: [
      {
        text: 'Cut the act I know your up to something ',
        setstate:{Squestion:true,Mquestion:true},
        nextText: 5.3
      },
     
      {
        text: 'Nevermind see you later.',
        setstate:{Squestion:true,Mquestion:true},
        nextText: 2
      }
    ]

  },
  

  {
    id:5.3,
    text: 'Mindo now mad that you would say that,it true be they dont want to admin it."If you must know, I heard its someones speaical day and the boss was buy some gifts. "said Mindo with puff out checks. "Now go and dont come back unless you have useful info" Mindo  ',
    options: [
        
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
    text: ' As you walk into the zoo you hear "Welcome welcome the Greatest zoo on planet earth!" being said by the zookeeper Eduial or Eddy for short, people know him by clown like nature which often leding to people underestimating him. ',
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
    text: '"Why its the greateat day of all take an aniamal home day" said the zookeeper Eduial. You were about to tell Eduial that this a terrible idea. When a monkey comes running up to Eddy and holding a small piece of paper. ',
    options: [
        {
            text: 'Whats that in it your monkeys paw',
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
    id:  6.3,
    text: 'Eddy snatchs up the note, quickly reads it and gets a mischievous look on his face.  "What are you talking?" said Eddy unable to hide his smile.  ',
    options: [
        {
            text: 'If catch you messing with powers beyond understanding so help me.',

            nextText: 6.4
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
    id:  6.4,
    text: '"I like I said before the creation of the ultrapuppy was not my fault, if that stupid rat didnt knock over vial of chinchilla dna they would have been the perfect pet." said Eddy looking mad. Eddy turns away from you as if to say hes done talking, Im this is the hundredth time you yelled at him but then again the ultrapuppys did destroy half the city. ',
    options: [
        
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
    id:  6.2,
    text: '"No need to worry about them there being rented by someone today." said the zookeeper Eduial. As he said that a small piece of paper fell out of his jacket, you sneakily pull the paper closer to you. Its a receipt for the special cake only sold one bakery.',
    options: [
        {
            text: 'If catch you messing with powers beyond human understanding to crate "cuter" animals again so help me.',
            setState:  {Bquestion: true,Mquestion:true},
            nextText: 6.3
          },
          {
            text: 'Nevermind see you later.',
            setState:  {Bquestion: true},
            nextText: 2
          }
    ]
  },
//add more detail
  {
    id: 12,
    text: ' You deciede to test your luck and walk the huge flight of stairs that led to the ancient Castle, the owner of with being The Great Evil Lich king Ceaser.  ',
    options: [
        {
            text: 'Nock on the door and enter',
            nextText: 12.1
          },
          
          {
            text: ' Snap to your senses and leave.',
            nextText: 2
          }
    ]
  },

  {
    id: 12.1,
    text: ' Putting on a brave face you entering the castle, only to be met by a polite skeleton in a butler outfit ,that closes the huge wooden doors that you struggled to open very easily, they then led you to the throne room where you him, The Great Evil Lich King Ceaser, sitting apon the throne.  He has a pleasent look apon his skeletal face , he greets you with a ghostly "Hello." ',
    options: [
        {
            text: 'Oh great Lich King can you tell why today is important',
            nextText: 12.2
          },
          
          {
            text: ' Politly get up and leave.',
            nextText: 2
          }
    ]
  },

  {
    id:  12.2,
    text: 'Ceaser looks at you holding he boney fingers first 06, 10, 02. But you cant cenese of it ',
    options: [
        {
            text: 'You decide to ask Ceaser what is the Tom up.',
            nextText: 12.3
          },
          
          {
            text: ' Politly get up and leave.',
            nextText: 2
          }
    ]
  },
  {
    id:  12.3,
    text: ' Ceaser begans minicing the making of a cake and decrating it.',
    options: [
        {
            text: 'You still cant figure it, so instead you ask him what Mindo is hiding',
            nextText: 12.4
          },
          
          {
            text: ' Politly get up and leave.',
            nextText: 2
          }
    ]
  },
//  You on the sleep path
  {
    id:  12.4,
    text: 'Ceaser began acting throwing a blanket over something loud. You still dont get.',
    options: [
        {
            text: 'You ask what Shara is making.',
            nextText: 12.5
          },
          
          {
            text: ' Snap to your senses and leave.',
            nextText: 2
          }
    ]
  },
  {
    id:  12.5,
    text: ' Ceaser began doing a surpirzing good robot dance. You still dont get and your starting to feel tired.',
    options: [
        {
            text: 'Through your feeling tired you deside to keep going and Ceaser what Eddybul is up to.',
            nextText: 12.6
          },
          
          {
            text: ' Snap to your senses and leave.',
            nextText: 2
          }
    ]
  },
  {
    id:  12.6,
    text: '  Ceaser began mapping the full genetic line of a sheep turning a parrot and armadillo. You really dont get now and you so feel tired.',
    options: [
        {
            text: 'You',
            nextText: 12.7
          },
      
    ]
  },
  {
    id:  12.7,
    text: ' Ceaser began singing a jazzy lullaby that puts you to sleep.',
    options: [
        {
            text: 'sleep',
            nextText: 12.8
          },
          
    ]
  },
  {
    id:  12.8,
    text: ' You fell a sleep trying to put together Ceasers charade. You wake up in a room inside the caslte, after thanking Ceaser you leave still wondering about yestreday.',
    options: [
          
          {
            text: ' Game Over, Try Again. ',
            nextText: -1
          }
    ]
  },
  {
    id: 7,
    text: 'As your walk down the street you hear the bueatiful voice coming from your usally hang out spot. You deside to go inside, there you see up on stage is your best friend Luna, this citys local star.   ',
    options: [
        {
            text: 'Hey, Do what today is?',
            setstate:{Aquestion:true},
            nextText: 7.1
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
            nextText: 7.3
          },
          {
            text: 'I heard you were writing a song for someone speacial',
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
    text: '"Yeah well maybe but you go home and lie down you look good"  ',
    options: [
        {
            text: 'Yeah maybe I will',
             setState: {Answer:true},
            nextText: 7.3
          },
          
          
    ]
  },
  {
    id: 7.3,
    text: '"Well its not Chirstmas and its definitely not Valentines day, but I do know today is important for another reason."  ',
    options: [
        {
            text: 'Hey, Do what today is?',
            nextText: 7.4
          },
          {
            text: 'Nevermind see you later.',
            nextText: 2
          }
    ]
  },
  {
    id: 7.4,
    text: '"You look tried you should go home a rest."  ',
    options: [
        
          {
            text: 'Nevermind see you later.',
            nextText: 8
          }
    ]
  },
  {
    id: 8,
    text: 'As you get to home you realize your door is sligthly open but your sure you   "Whats this my doors cracked open" you cant help but to say out loud. ',
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
        text: 'Restart, Its you can still learn the truth ',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'You are blinded by a bright ligth and hear a loud poping sound... As you open your eyes before you see  ',
    options: [
      {
        text: 'Congratulations and happy birthday. Play Again.',
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


/*bace code from https://www.youtube.com/channel/UCDPWmUB-7wCn9MDGlm9HyIQ*/
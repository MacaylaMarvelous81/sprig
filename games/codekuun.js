/*
@title: codekuun
@tags: ['hackable', 'puzzle', 'logic']
@addedOn: 2024-09-16
@author: Jomar Milan
*/

const bitmaps = {
  controllableUp: {
    key: '~',
    sprite: bitmap`
.....0....0.....
....00000000....
...0222222220...
...0222222220...
..002222222200..
...0000000000...
.00.02222220....
0200022222200...
0200222222220...
.000222222220...
.000222222220...
...0022222200...
....02222220....
.....000000.....
......0..0......
......0..0......`
  },
  controllableDown: {
    key: '1',
    sprite: bitmap`
.....0....0.....
....00000000....
...0022002200...
...0020000200...
..002222222200..
...0000000000...
....02222220.00.
...0022222200020
...0222222220020
...022222222000.
...022222222000.
...0022222200...
....02222220....
.....000000.....
......0..0......
......0..0......`
  },
  controllableLeft: {
    key: '2',
    sprite: bitmap`
........0.......
......00000.....
.....0220000....
.....0020000....
.....0222220....
.....0000000....
....002222200...
....022222220.00
....022222220020
....022222220020
....022222220020
....02222222000.
....002222200...
.....0000000....
.......0.0......
.......0.0......`
  },
  controllableRight: {
    key: '3',
    sprite: bitmap`
.......0........
.....00000......
....0000220.....
....0000200.....
....0222220.....
....0000000.....
...002222200....
00.022222220....
020022222220....
020022222220....
020022222220....
.00022222220....
...002222200....
....0000000.....
......0.0.......
......0.0.......`
  },
  commandMove: {
    key: '6',
    sprite: bitmap`
.22222222222222.
2277777777777722
2777777777777772
2777777777777772
2777777755777772
2777777775577772
2777777775557772
2775555555555772
2775555555555772
2777777775557772
2777777775577772
2777777755777772
2777777777777772
2777777777777772
2277777777777722
.22222222222222.`
  },
  commandMoveSelected: {
    key: '9',
    sprite: bitmap`
.66666666666666.
6677777777777766
6777777777777776
6777777777777776
6777777755777776
6777777775577776
6777777775557776
6775555555555776
6775555555555776
6777777775557776
6777777775577776
6777777755777776
6777777777777776
6777777777777776
6677777777777766
.66666666666666.`
  },
  commandEmpty: {
    key: '7',
    sprite: bitmap`
.22222222222222.
2200000000000022
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2200000000000022
.22222222222222.`
  },
  commandErase: {
    key: '0',
    sprite: bitmap`
.22222222222222.
2200000000000022
2000000000000002
20000LLLLLL00002
2000LLLLLLLL0002
2000011111100002
2000010110100002
2000011001100002
2000011001100002
2000010110100002
2000011111100002
2000011111100002
2000000000000002
2000000000000002
2200000000000022
.22222222222222.`
  },
  commandEraseSelected: {
    key: '-',
    sprite: bitmap`
.66666666666666.
6600000000000066
6000000000000006
60000LLLLLL00006
6000LLLLLLLL0006
6000011111100006
6000010110100006
6000011001100006
6000011001100006
6000010110100006
6000011111100006
6000011111100006
6000000000000006
6000000000000006
6600000000000066
.66666666666666.`
  },
  commandRun: {
    key: '=',
    sprite: bitmap`
.22222222222222.
2244444444444422
2444444444444442
2444444444444442
2444442444444442
2444442244444442
2444442224444442
2444442222444442
2444442222444442
2444442224444442
2444442244444442
2444442444444442
2444444444444442
2444444444444442
2244444444444422
.22222222222222.`
  },
  commandRunSelected: {
    key: 'q',
    sprite: bitmap`
.66666666666666.
6644444444444466
6444444444444446
6444444444444446
6444442444444446
6444442244444446
6444442224444446
6444442222444446
6444442222444446
6444442224444446
6444442244444446
6444442444444446
6444444444444446
6444444444444446
6644444444444466
.66666666666666.`
  },
  commandTurnRight: {
    key: 'e',
    sprite: bitmap`
.22222222222222.
2244444444444422
2444444442444442
2444444444244442
2444422222224442
2444244444244442
2442444442444442
2442444444444442
2442444444444442
2442444444444442
2442444444444442
2442444444444442
2444444444444442
2444444444444442
2244444444444422
.22222222222222.`
  },
  commandTurnRightSelected: {
    key: 'r',
    sprite: bitmap`
.66666666666666.
6644444444444466
6444444442444446
6444444444244446
6444422222224446
6444244444244446
6442444442444446
6442444444444446
6442444444444446
6442444444444446
6442444444444446
6442444444444446
6444444444444446
6444444444444446
6644444444444466
.66666666666666.`
  },
  commandLoop: {
    key: 'y',
    sprite: bitmap`
.22222222222222.
22HHHHHHHHHHHH22
2HH0000000000HH2
2H0HHHHHHHHH0HH2
2H0HHHHHHH000002
2H0HHHHHHHH000H2
2H0HHHHHHHHH0HH2
2H0HHHHHHHHHHHH2
2H0HHHHHHHHHHHH2
2H0HHHHHHHHHHHH2
2H0HHHHHHHHHHHH2
2H0HHHHHHHHHHHH2
2H0HHHHHHHHHHHH2
2HH0000000000HH2
22HHHHHHHHHHHH22
.22222222222222.`
  },
  commandLoopSelected: {
    key: 'u',
    sprite: bitmap`
.66666666666666.
66HHHHHHHHHHHH66
6HH0000000000HH6
6H0HHHHHHHHH0HH6
6H0HHHHHHH000006
6H0HHHHHHHH000H6
6H0HHHHHHHHH0HH6
6H0HHHHHHHHHHHH6
6H0HHHHHHHHHHHH6
6H0HHHHHHHHHHHH6
6H0HHHHHHHHHHHH6
6H0HHHHHHHHHHHH6
6H0HHHHHHHHHHHH6
6HH0000000000HH6
66HHHHHHHHHHHH66
.66666666666666.`
  },
  commandLoopEnd: {
    key: 'i',
    sprite: bitmap`
.22222222222222.
22HHHHHHHHHHHH22
2HHHHH00HHHHHHH2
2HHHHHH00HHHHHH2
2HHHHHH00HHHHHH2
2HHHHHH00HHHHHH2
2HHHHHH00HHHHHH2
2HHHHHHH00HHHHH2
2HHHHHHH00HHHHH2
2HHHHHH00HHHHHH2
2HHHHHH00HHHHHH2
2HHHHHH00HHHHHH2
2HHHHHH00HHHHHH2
2HHHHH00HHHHHHH2
22HHHHHHHHHHHH22
.22222222222222.`
  },
  commandLoopEndSelected: {
    key: 'o',
    sprite: bitmap`
.66666666666666.
66HHHHHHHHHHHH66
6HHHHH00HHHHHHH6
6HHHHHH00HHHHHH6
6HHHHHH00HHHHHH6
6HHHHHH00HHHHHH6
6HHHHHH00HHHHHH6
6HHHHHHH00HHHHH6
6HHHHHHH00HHHHH6
6HHHHHH00HHHHHH6
6HHHHHH00HHHHHH6
6HHHHHH00HHHHHH6
6HHHHHH00HHHHHH6
6HHHHH00HHHHHHH6
66HHHHHHHHHHHH66
.66666666666666.`
  },
  barrier: {
    key: '8',
    sprite: bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................`
  },
  scrapCode: {
    key: 'w',
    sprite: bitmap`
................
.00000000000000.
.00000000000000.
.00000000000000.
.0D000000000000.
.00D00000000000.
.000D0000000000.
.0000D000000000.
.000D0000000000.
.00D00000000000.
.0D0000D0D0D0D0.
.00000000000000.
.00000000000000.
.00000000000000.
.00000000000000.
................`
  },
  floor: {
    key: '5',
    sprite: bitmap`
LLLLLLLLLLLLLLLL
L11111111111111L
L11111111111111L
L11111111111111L
L11111111111111L
L11111111111111L
L11111111111111L
L11111111111111L
L11111111111111L
L11111111111111L
L11111111111111L
L11111111111111L
L11111111111111L
L11111111111111L
L11111111111111L
LLLLLLLLLLLLLLLL`
  },
  nest1: {
    key: 'p',
    sprite: bitmap`
..........C.C.C.
.........C.CCCCC
........C.CLLLLL
......C..CLCCCCC
.....C.CCLLCCCCC
....C.CLLCCCCCCC
...C.CLCCCCCCCCC
..C.CLCCCCCCCCCC
...CCLCCCCCCCCCC
.CCLLCCCCCCCCCCC
..CLCCCCCCCCCCCC
CCLCCCCCCCCCCCCC
.CLCCCCCCCCCCCCC
CCLCCCCCCCCCCCCC
.CLCCCCCCCCCCCCC
CCLCCCCCCCCCCCCC`
  },
  nest2: {
    key: '[',
    sprite: bitmap`
C.C.C.C.C.C.C.C.
CCCCCCCCCCCCCCCC
LLLLLLLLLLLLLLLL
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`
  },
  nest3: {
    key: ']',
    sprite: bitmap`
C.C.C...........
CCCCC.C.........
LLLLLCC.C.......
CCCCCLLC.C......
CCCCCCLCC.C.....
CCCCCCCLLC.C....
CCCCCCCCCLC.C...
CCCCCCCCCCLC....
CCCCCCCCCCLC.C..
CCCCCCCCCCCLC.C.
CCCCCCCCCCCLLC.C
CCCCCCCCCCCCCLC.
CCCCCCCCCCCCCLCC
CCCCCCCCCCCCCLC.
CCCCCCCCCCCCCLCC
CCCCCCCCCCCCCLC.`
  },
  nest4: {
    key: 'a',
    sprite: bitmap`
.CLCCCCCCCCCCCCC
CCLCCCCCCCCCCCCC
.CLCCCCCCCCCCCCC
CCLCCCCCCCCCCCCC
.CLCCCCCCCCCCCCC
CCLCCCCCCCCCCCCC
.CLCCCCCCCCCCCCC
CCLCCCCCCCCCCCCC
.CLCCCCCCCCCCCCC
CCLCCCCCCCCCCCCC
.CLCCCCCCCCCCCCC
CCLCCCCCCCCCCCCC
.CLCCCCCCCCCCCCC
CCLCCCCCCCCCCCCC
.CLCCCCCCCCCCCCC
CCLCCCCCCCCCCCCC`
  },
  nest5: {
    key: 's',
    sprite: bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`
  },
  nest6: {
    key: 'd',
    sprite: bitmap`
CCCCCCCCCCCCCLC.
CCCCCCCCCCCCCLCC
CCCCCCCCCCCCCLC.
CCCCCCCCCCCCCLCC
CCCCCCCCCCCCCLC.
CCCCCCCCCCCCCLCC
CCCCCCCCCCCCCLC.
CCCCCCCCCCCCCLCC
CCCCCCCCCCCCCLC.
CCCCCCCCCCCCCLCC
CCCCCCCCCCCCCLC.
CCCCCCCCCCCCCLCC
CCCCCCCCCCCCCLC.
CCCCCCCCCCCCCLCC
CCCCCCCCCCCCCLC.
CCCCCCCCCCCCCLCC`
  },
  nest7: {
    key: 'f',
    sprite: bitmap`
CCLCCCCCCCCCCCCC
.CLCCCCCCCCCCCCC
CCLCCCCCCCCCCCCC
.CLCCCCCCCCCCCCC
CCLCCCCCCCCCCCCC
..CLCCCCCCCCCCCC
.CCLLCCCCCCCCCCC
...CCLCCCCCCCCCC
..C.CLCCCCCCCCCC
...C.CLCCCCCCCCC
....C.CLLCCCCCCC
.....C.CCLLCCCCC
......C..CLCCCCC
........C.CLLLLL
.........C.CCCCC
..........C.C.C.`
  },
  nest8: {
    key: 'g',
    sprite: bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
LLLLLLLLLLLLLLLL
CCCCCCCCCCCCCCCC
C.C.C.C.C.C.C.C.`
  },
  nest9: {
    key: 'h',
    sprite: bitmap`
CCCCCCCCCCCCCLCC
CCCCCCCCCCCCCLC.
CCCCCCCCCCCCCLCC
CCCCCCCCCCCCCLC.
CCCCCCCCCCCCCLCC
CCCCCCCCCCCCLC..
CCCCCCCCCCCLLCC.
CCCCCCCCCCLCC...
CCCCCCCCCCLC.C..
CCCCCCCCCLC.C...
CCCCCCCLLC.C....
CCCCCLLCC.C.....
CCCCCLC..C......
LLLLLC.C........
CCCCC.C.........
.C.C.C..........`
  }
};

const tunes = {
  select: tune`
272.72727272727275: E5/272.72727272727275,
8454.545454545456`,
  confirm: tune`
500: A5-500,
15500`,
  collect: tune`
82.1917808219178: F5/82.1917808219178,
82.1917808219178: F5/82.1917808219178,
82.1917808219178: A5/82.1917808219178,
82.1917808219178: A5/82.1917808219178,
82.1917808219178: A5/82.1917808219178,
2219.1780821917805`,
  victory: tune`
333.3333333333333: F5-333.3333333333333,
333.3333333333333: F5-333.3333333333333,
333.3333333333333: F5-333.3333333333333,
333.3333333333333: C5-333.3333333333333,
333.3333333333333: C5-333.3333333333333,
333.3333333333333: C5-333.3333333333333,
333.3333333333333: F5-333.3333333333333,
333.3333333333333: C5-333.3333333333333,
333.3333333333333: F5-333.3333333333333,
333.3333333333333: G5-333.3333333333333,
333.3333333333333: F5-333.3333333333333,
333.3333333333333,
333.3333333333333: C5-333.3333333333333,
6333.333333333333`
};

const inputs = {
  menuLeft: 'a',
  menuRight: 'd',
  menuConfirm: 'k',
  valueUp: 'w',
  valueDown: 's'
};

const textObject = (() => {
  const instances = [];
  
  const updateText = () => {
    clearText();
    
    instances.forEach((text) => {
      addText(text.getText(), {
        x: text.getX(),
        y: text.getY(),
        color: text.getColor()
      });
    });
  };

  return (text, x, y, color) => {
    const object = {
      getText: () => text,
      setText: (val) => {
        text = val;
        updateText();
      },
      getX: () => x,
      setX: (val) => {
        x = val;
        updateText();
      },
      getY: () => y,
      setY: (val) => {
        y = val;
        updateText();
      },
      getColor: () => color,
      setColor: (val) => {
        color = val;
        updateText();
      },
      remove: () => {
        instances.splice(instances.indexOf(object), 1);
        updateText();
      }
    };

    instances.push(object);
    updateText();
    
    return object;
  };
})();

const gameObject = (() => {
  const objects = [];
  
  return {
    constructor: (x, y, sprite) => {
      addSprite(0, 0, sprite);
      let sprigSprite = getTile(0, 0)[0];
      sprigSprite.x = x;
      sprigSprite.y = y;
  
      const object = {
        components: [],
        getX: () => sprigSprite.x,
        setX: (val) => sprigSprite.x = val,
        getY: () => sprigSprite.y,
        setY: (val) => sprigSprite.y = val,
        getSprite: () => sprigSprite.type,
        setSprite: (val) => {
          if (sprigSprite.type === val) return;
  
          const currentX = sprigSprite.x;
          const currentY = sprigSprite.y;
  
          sprigSprite.remove();
  
          addSprite(0, 0, val);
          sprigSprite = getTile(0, 0)[0];
          sprigSprite.x = currentX;
          sprigSprite.y = currentY;
        },
        remove: () => {
          // Maybe keep track if removed, and prevent operations on object if so?
          sprigSprite.remove();
      
          objects.splice(objects.indexOf(object), 1);
        }
      };
  
      objects.push(object);
      
      return object;
    },
    getObjectsWithComponent: (id) => objects.filter((obj) => obj.components.filter(component => component.id === id).length > 0),
    step() {
      objects.forEach((obj) => {
        const overlaps = objects.filter(otherObj => otherObj !== obj && otherObj.x === obj.x && otherObj.y === obj.y);
        
        obj.components.forEach((component) => {
          component.onStep();

          overlaps.forEach((otherObj) => component.onOverlap(otherObj));
        });
      });
    }
  };
})();

const agentComponent = ((obj, direction) => {
  return {
    id: 'agent',
    onStep: () => {},
    onOverlap: (otherObj) => {},
    moveForward: () => {
      const y = obj.getY();
      if (direction === 'up' && y > 1) {
        obj.setY(y - 1);
      } else if (direction === 'down' && y < height() - 2) {
        obj.setY(y + 1);
      } else if (direction === 'left') {
        obj.setX(obj.getX() - 1);
      } else if (direction === 'right') {
        obj.setX(obj.getX() + 1);
      }
    },
    turn: (newDirection) => {
      // right turns in the clockwise direction, left turns counterclockwise
      switch (direction) {
        case 'up':
          if (newDirection === 'right') direction = 'right';
          if (newDirection === 'left') direction = 'left';
          break;
        case 'down':
          if (newDirection === 'right') direction = 'left';
          if (newDirection === 'left') direction = 'right';
          break;
        case 'left':
          if (newDirection === 'right') direction = 'up';
          if (newDirection === 'left') direction = 'down';
          break;
        case 'right':
          if (newDirection === 'right') direction = 'down';
          if (newDirection === 'left') direction = 'up';
          break;
    }
  };
})();

const goalCollectorComponent((obj) => {
  return {
    id: 'goalCollector',
    onStep: () => {},
    onOverlap: (otherObj) => {}
  };
})();

const goalComponent = ((obj) => {
  return {
    id: 'goal',
    onStep: () => {},
    onOverlap: (otherObj) => {
      if (otherObj.components.filter(component => component.id === 'goalCollector').length <= 0) return;
      
      playTune(tunes.collect);
      obj.remove();
    }
  };
})();

const commandComponent = ((obj) => {
  let selected = false;
  
  return {
    id: 'command',
    onStep: () => {},
    onOverlap: (otherObj) => {},
    getSelected: () => selected,
    setSelected: (val) => {
      selected = val;
      // TODO: update sprite when selected
    }
  };
})();

const emptyCommandComponent = ((obj) => {
  return {
    id: 'emptyCommand',
    onStep: () => {},
    onOverlap: (otherObj) => {},
    execute: () => {}
  };
})();

const moveCommandComponent = ((obj) => {
  return {
    id: 'moveCommand',
    onStep: () => {},
    onOverlap: (otherObj) => {},
    execute: () => {
      gameObject.getObjectsWithComponent('agent').forEach((otherObj) => {
        otherObj.components.filter(component => component.id === 'agent').forEach(component => component.moveForward());
      });
    }
  };
})();

const eraseCommandComponent = ((obj) => {
  return {
    id: 'eraseCommand',
    onStep: () => {},
    onOverlap: (otherObj) => {},
    execute: () => {}
  };
})();

const runCommandComponent = ((obj) => {
  return {
    id: 'runCommand',
    onStep: () => {},
    onOverlap: (otherObj) => {},
    execute: () => {}
  };
})();

const turnRightCommandComponent = ((obj) => {
  return {
    id: 'turnRightCommand',
    onStep: () => {},
    onOverlap: (otherObj) => {},
    execute: () => {
      gameObject.getObjectsWithComponent('agent').forEach((otherObj) => {
        otherObj.components.filter(component => component.id === 'agent').forEach(component => component.turn('right'));
      });
    }
  };
})();

const loopCommandComponent = ((obj) => {
  // TODO: value text, incr/decr value
  let value = 0;
  
  return {
    id: 'loopCommand',
    onStep: () => {},
    onOverlap: (otherObj) => {},
    execute: () => {},
    getValue: () => value,
    setValue: (val) => value = val
  }
})();

const loopEndCommandComponent = ((obj) => {
  return {
    id: 'loopEndCommand',
    onStep: () => {},
    onOverlap: (otherObj) => {},
    execute: () => {}
  };
})();

// Map size is 10x8 so the map fits the 160x128 screen. In keeping the map size
// consistent across all levels, the 'hud' elements such as the commands and the
// command palette do not change size nor position, so the map change won't be
// as jarring.
const levels = [
  {
    onLoad(ephemeralObjects, ephemeralText) {
      const controllable = gameObject.constructor(3, 2, bitmaps.controllableRight.key);
      controllable.components.push(agentComponent());
      controllable.components.push(goalCollectorComponent());
      ephemeralObjects.push(controllable);
      const scrap = gameObject.constructor(6, 2, bitmaps.scrapCode.key);
      scrap.components.push(goalComponent());
      ephemeralObjects.push(scrap);

      ephemeralObjects.push(gameObject.constructor(0, 3, bitmaps.commandMove.key));
      ephemeralText.push(textObject('to move forward', 2, 7, color`0`));
      ephemeralObjects.push(gameObject.constructor(0, 4, bitmaps.commandErase.key));
      ephemeralText.push(textObject('remove a command', 2, 9, color`0`));
      ephemeralObjects.push(gameObject.constructor(0, 5, bitmaps.commandRun.key));
      ephemeralText.push(textObject('to run program', 2, 11, color`0`));
      
      ephemeralText.push(textObject('A/D-Move  K-Select', 1, 13, color`0`));
    },
    commands: [ Command.commandTypes.move ],
    commandSlots: 3,
    map: map`
..........
...8888...
..855558..
...8888...
..........
..........
..........
..........`
  },
  {
    onLoad(ephemeralObjects, ephemeralText) {
      const controllable = gameObject.constructor(3, 4, bitmaps.controllableUp.key);
      controllable.components.push(agentComponent());
      controllable.components.push(goalCollectorComponent());
      ephemeralObjects.push(controllable);
      const scrap = gameObject.constructor(5, 4, bitmaps.scrapCode.key);
      scrap.components.push(goalComponent());
      ephemeralObjects.push(scrap);

      ephemeralText.push(textObject('only the gray floor\ncan be traversed', 1, 10, color`0`));
    },
    commands: [ Command.commandTypes.move, Command.commandTypes.turnRight ],
    commandSlots: 6,
    map: map`
..........
..........
...888....
..85558...
..85858...
...8.8....
..........
..........`
  },
  {
    onLoad(ephemeralObjects, ephemeralText) {
      const controllable = gameObject.constructor(2, 1, bitmaps.controllableRight.key);
      controllable.components.push(agentComponent());
      controllable.components.push(goalCollectorComponent());
      ephemeralObjects.push(controllable);
      const scrap = gameObject.constructor(7, 1, bitmaps.scrapCode.key);
      scrap.components.push(goalComponent());
      ephemeralObjects.push(scrap);

      ephemeralText.push(textObject('commands between\nand  will loop', 1, 7, color`0`));
      ephemeralObjects.push(gameObject.constructor(9, 3, bitmaps.commandLoop.key));
      ephemeralObjects.push(gameObject.constructor(2, 4, bitmaps.commandLoopEnd.key));

      ephemeralText.push(textObject('W/S-set iterations', 1, 12, color`0`));
    },
    commands: [ Command.commandTypes.move, Command.commandTypes.loop, Command.commandTypes.loopEnd ],
    commandSlots: 3,
    map: map`
..........
.85555558.
..888888..
..........
..........
..........
..........
..........`
  },
  {
    onLoad(ephemeralObjects, ephemeralText) {
      const controllable = gameObject.constructor(3, 6, bitmaps.controllableUp.key);
      controllable.components.push(agentComponent());
      controllable.components.push(goalCollectorComponent());
      ephemeralObjects.push(controllable);
      const scrap = gameObject.constructor(3, 2, bitmaps.scrapCode.key);
      scrap.components.push(goalComponent());
      ephemeralObjects.push(scrap);
      const scrap2 = gameObject.constructor(7, 2, bitmaps.scrapCode.key);
      scrap.components.push(goalComponent());
    },
    commands: [ Command.commandTypes.move, Command.commandTypes.turnRight, Command.commandTypes.loop, Command.commandTypes.loopEnd],
    commandSlots: 7,
    map: map`
..........
...88888..
..8555558.
..858888..
..858.....
..858.....
..858.....
..........`
  },
  {
    onLoad(ephemeralObjects, ephemeralText) {
      ephemeralObjects.push(gameObject.constructor(2, 2, bitmaps.scrapCode.key));
      ephemeralObjects.push(gameObject.constructor(3, 3, bitmaps.scrapCode.key));
      
      ephemeralText.push(textObject('Nice job! Now Heidi\nhas a nest full of\nscraps!', 1, 11, color`8`));

      playTune(tunes.victory);
    },
    commands: [],
    commandSlots: 0,
    map: map`
..........
..........
..p[].....
..asd.2...
..fgh.....
..........
..........
..........`
  }
];

let level = 0;

const game = {
  commands: [],
  commandSlots: [],
  selected: 0,
  currentSlot: 0,
  canSelect: false,
  ephemeralObjects: [],
  ephemeralText: [],
  
  reset() {
    this.commands.forEach((obj) => obj.remove());
    this.commandSlots.forEach((obj) => obj.remove());

    // Last level is the win screen, there's no controls.
    if (level === levels.length - 1) {
      this.canSelect = false;
      return;
    }

    // Commands
    this.currentSlot = 0;
    this.commandSlots = [];
    for (let i = 0; i < levels[level].commandSlots; i++) {
      const command = gameObject.constructor(i + 1, 0, bitmaps.commandEmpty.key);
      command.components.push(commandComponent());
      command.components.push(emptyCommandComponent());
      this.commandSlots.push(command);
    }

    this.selected = 0;
    this.commands = levels[level].commands.map((type, index) => new Command(index + 1, height() - 1, type, index === 0));
    this.commands.push(new Command(this.commands.length + 1, height() - 1, Command.commandTypes.erase, false));
    this.commands.push(new Command(this.commands.length + 1, height() - 1, Command.commandTypes.run, false));
    
    this.canSelect = true;
  },

  moveSelection(dir) {
    if (!this.canSelect) return;

    playTune(tunes.select);
    
    this.commands[this.selected].selected = false;

    if (dir === 'left') this.selected--;
    if (dir === 'right') this.selected++;

    if (this.selected < 0) {
      this.selected = this.commands.length - 1;
    } else if (this.selected > this.commands.length - 1) {
      this.selected = 0;
    }

    this.commands[this.selected].selected = true;
  },

  selectCommand() {
    if (!this.canSelect) return;
    
    playTune(tunes.confirm);
    
    if (this.commands[this.selected].type === Command.commandTypes.erase) {
      if (this.currentSlot === 0) return;
      
      this.commandSlots[--this.currentSlot].type = Command.commandTypes.empty;
    } else if (this.commands[this.selected].type === Command.commandTypes.run) {
      this.canSelect = false;
      this.commands[this.selected].selected = false;

      const step = (state) => () => {
        if (this.commandSlots[state.instr].type === Command.commandTypes.loop && !state.loop.looping) {
          state.loop.instr = state.instr;
          state.loop.iterations = 0;
          state.loop.looping = true;
        } else if (this.commandSlots[state.instr].type === Command.commandTypes.loopEnd && state.loop.looping) {
          if (++state.loop.iterations < this.commandSlots[state.loop.instr].value) {
            state.instr = state.loop.instr;
          } else {
            state.loop.looping = false;
          }
        }
        
        this.commandSlots[state.instr].execute();

        GameObject.step();
        
        if (state.instr !== this.commandSlots.length - 1 && this.commandSlots[state.instr + 1].type !== Command.commandTypes.empty) {
          // No loop ends or anything. Proceed to next instruction.
          state.instr++;
          setTimeout(step(state), 500);
        } else {
          const scrapCount = GameObject.getObjectsOfType(Scrap).length;

          // Reload the level or load the next level depending if all scraps were successfully
          // collected or not
          if (scrapCount === 0) {
            level++;
          }

          setTimeout(() => this.reloadLevel(levels[level]), 500);
        }
      };

      step({
        instr: 0,
        loop: {
          instr: 0,
          iterations: 0,
          looping: false
        }
      })();
    } else {
      if (this.currentSlot === this.commandSlots.length) return;

      this.commandSlots[this.currentSlot].value = this.commands[this.selected].value;
      this.commandSlots[this.currentSlot].type = this.commands[this.selected].type;
      this.currentSlot++;
    }
  },

  incrementSelectedValue() {
    if (!this.canSelect) return;

    if (this.commands[this.selected].incrementValue()) playTune(tunes.select);
  },

  decrementSelectedValue() {
    if (!this.canSelect) return;

    if (this.commands[this.selected].decrementValue()) playTune(tunes.select);
  },

  reloadLevel(level) {
    this.ephemeralObjects.forEach((obj) => obj.remove());
    this.ephemeralText.forEach((text) => text.remove());
    setMap(level.map);
    this.reset();
    level.onLoad(this.ephemeralObjects, this.ephemeralText);
  }
};

const legend = [];
for (const item in bitmaps) legend.push([ bitmaps[item].key, bitmaps[item].sprite ]);
setLegend(...legend);

game.reloadLevel(levels[level]);

onInput(inputs.menuLeft, () => game.moveSelection('left'));
onInput(inputs.menuRight, () => game.moveSelection('right'));
onInput(inputs.valueUp, () => game.incrementSelectedValue());
onInput(inputs.valueDown, () => game.decrementSelectedValue());
onInput(inputs.menuConfirm, () => game.selectCommand());
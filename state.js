window.gameState = {
    isCompPlaying:false,
    gameStarted : false, //is set to true when clicked on Start
    endGame:false, //is true when the board is full or there is a win on the board
    currentTurn: '', //is randomly gen by the comp and holds an X or O. Toggles between the 2 depending on what was clicked on the board 
    player1Name: '', //name of the player captured in first input box 
    player2Name:'', //name of the player captured in second input box 
    player1XO :'', //has an X or O depending on what was assinged by the comuter at the start of the game and is for player 1
    player2XO :'', //has an X or O depending on what was assinged by the comuter at the start of the game and is for player 2
    clickedCellIndex: null, //a cell number between 0 and 8 
    board: [
      {id: '0',mark:'',  isMarked:false},
      {id: '1',mark:'',  isMarked:false}, 
      {id: '2',mark:'',  isMarked:false}, 
      {id: '3',mark:'',  isMarked:false},
      {id: '4',mark:'',  isMarked:false}, 
      {id: '5',mark:'',  isMarked:false}, 
      {id: '6',mark:'',  isMarked:false},
      {id: '7',mark:'',  isMarked:false}, 
      {id: '8',mark:'',  isMarked:false}, 
     
    ],
    markX: 'X', 
    markO:'O',
  clearBoard: function () {  //clears the state for  a new game to start
      isCompPlaying = false;
      this.player1Name = '',
      this.player2Name = '',
      this.player1XO ='',
      this.player2XO = '',
      this.currentTurn = '' ,
      this.endGame=false,
      this.gameStarted = false,
      this.clickedCellIndex = null,
      this.board = [
        { id: '0', mark: '', isMarked: false },
        { id: '1', mark: '', isMarked: false },
        { id: '2', mark: '', isMarked: false },
        { id: '3', mark: '', isMarked: false },
        { id: '4', mark: '', isMarked: false },
        { id: '5', mark: '', isMarked: false },
        { id: '6', mark: '', isMarked: false },
        { id: '7', mark: '', isMarked: false },
        { id: '8', mark: '', isMarked: false }
      ];
  }

  }
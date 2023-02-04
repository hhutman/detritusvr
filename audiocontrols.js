AFRAME.registerComponent('songplayer', {
  
    init: function () {
      
      let audiosource = document.querySelector('#musicwall');

      let musicplay = () => {
      audiosource.components.sound.playSound()
      }
      
      this.el.addEventListener('click', musicplay);

    }});
  
  AFRAME.registerComponent('songstopper', {
    init: function () {
    
      let audiosource = document.querySelector('#musicwall');

      let musicstop = () => {
      audiosource.components.sound.stopSound()
      }
      
      this.el.addEventListener('click', musicstop);
      
    }});



    var sound = new Howl({
      src: ['sound.mp3']
    });
    
    sound.play();


    var sound = new Howl({
      src: ['sound.webm', 'sound.mp3', 'sound.wav'],
      autoplay: true,
      loop: true,
      volume: 0.5,
      onend: function() {
        console.log('Finished!');
      }
    });



   
  
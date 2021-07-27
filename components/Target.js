AFRAME.registerComponent("coin", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `coin${i}`;

      //position variables
      var posX = Math.random() * 3000 + (-1000);      
      var posY = Math.random() * 2 + (-1);
      var posZ = Math.random() * 3000 + -1000;

      var position = { x: posX, y: posY, z: posZ };

      this.createRings(id, position);
    }
  },

  createRings: function(id,position) {
    var terrainEl = document.querySelector("#terrain");
    var coinEl = document.createElement("a-entity");

    coinEl.setAttribute("id",id);
    coinEl.setAttribute("material","color","#ff9100");
    coinEl.setAttribute("position",position);
    coinEl.setAttribute("geometry",{ primitive: "circle",radius: 15 });   

    coinEl.setAttribute("static-body",{
      shape:"sphere", 
      sphereRadius: 2
    })

    coinEl.setAttribute("game-play",{
      element_id : `#${id}`
    })
    terrainEl.appendChild(coinEl);
  }
});

angular.module("basic")
    .service("mainServ", function($http) {

        // this.qcCardPost = function(qaCardData){
        //     return $http({
        //         method:"POST",
        //         url:"/#/screentwo",
        //         data: qaCardData
        //     })
        //     .then(function(res){
        //       return res.data;
        //     });
        //   };

        //  //Servicer Side Selling the Stuff
        //   this.getPostNewItemToSell = function(newitem){
        //     return $http({
        //       method:"POST",
        //       url:"/widget",
        //       data: newitem
        //     })
        //     .then(function(response){
        //       console.log(response.data);
        //       return response.data;
        //     })
        //   };
        //   //Server Side Getting items to Sell
        //   this.getThings = function(){
        //     return $http({
        //       method:"GET",
        //       url:"/widget" 
        //     })
        //     .then(function(response){
        //       return response.data;
        //     })
        //   };

        //   this.addCart = function(){
        //     return $http({
        //        method: "POST",
        //         url: "/cart"
        //     }).then(function(response){
        //        return response.data;
        //     });
        //   };

        //   this.addToCart = function(item, cart){
        //     var newcart = cart;
        //     newcart.items.push(item);
        //     newcart.totalCost += item.cost;
        //     return $http({
        //        method: "PUT",
        //        url: "/cart/" + cart._id,
        //        data: newcart
        //     }).then(function(response){
        //         return response.data;
        //     })
        //   }






        //   //Server Side Posting the Creatures
        //   this.getPostCreature = function(name){
        //     return $http({
        //     method:"POST",
        //     url:"/todo",
        //     data: name
        //   })
        //   .then(function(response){
        //       console.log(response.data);
        //       return response.data;
        //     });
        //   };
        //   //Server Side Getting the Creatures
        //   this.getGetCreature = function(){
        //     return $http({
        //       method:"GET",
        //       url:"/todo"
        //     }).then(function(response){
        //       console.log(response.data);
        //       return response.data;
        //     });
        //   }
        //   this.getUpDateCreature = function(name){
        //     return $http({
        //       method:"PUT",
        //       url:"/todo/"+ name._id,
        //       data: name
        //     }).then(function(response){
        //       console.log(response.data);
        //       return response.data;
        //     });
        //   }
        //   //Server Side Deleting the Creatures
        //   this.getDeleteCreature = function(name){

        //     return $http({
        //       method:"DELETE",
        //       url:"/todo/"+ name._id
        //     }).then(function(response){
        //       console.log(response.data)
        //       return response.data;
        //     });
        //   }




        // 	//Server Side Posting the Chats
        // 	this.getPostChat = function(chat){
        //     return $http({
        //       method: "POST",
        //       url: "/chat",
        //       data: chat
        //     })
        //     .then(function(response){
        //     	console.log(response.data);
        //       return response.data;
        //     });
        //  	};

        //  	//Server Side Getting Chats
        //  	this.getGetChats = function(){
        //     return $http({
        //       method: "GET",
        //       url: "/chat"
        //     })
        //     .then(function(response){
        //       return response.data;
        //     });
        //   };

        // 	//Service Side Deleting Chats
        // 	this.getDeleteChats = function(){
        //   	return $http({
        //   		method: "Delete",
        //   		url: "/chat"
        //   	}) 
        //   	.then(function(response){
        //   		return response.data;
        //   	})
        //   }
        //   //Service for getting my Giphys
        //   this.getGetGiphy = function(){
        //     return $http({
        //       method: "GET",
        //       url:"http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC"
        //     }).then(function(response){
        //       console.log(response.data.data);
        //       return response.data;

        //     })
        //   }

        // 	//Service for Getting Pokemon!
        // 	this.getfindPokemon = function(){
        // 	 return $http({
        // 	  	method: "GET",
        //   	  	url: "http://pokeapi.co/api/v2/pokemon"
        //   	}).then(function(response){
        //   	  	return response.data.results;
        //   	})
        //   }
        // 	//Service got getting One Pokemon
        // 	this.getPokemonOne = function(url){
        //      	return $http({
        //        	method: "GET",
        //       	url: url
        //     }).then(function(response){
        //       	return response.data;
        //     })
        //    };





    });
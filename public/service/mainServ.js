angular.module("basic")
    .service("mainServ", function($http) {


        this.loginPostLogin = function(userLogin) {
            return $http({
                    method: "POST",
                    url: "/login",
                    data: userLogin
                })
                .then(function(res) {
                    return res.data;
                });
        };

        this.getSignOut = function() {
            return $http({
                    method: "GET",
                    url: "/logout"
                })
                .then(function(res) {
                    //console.log("SignOut");
                    return res;
                })
        }


        this.getKnownUser = function(userInfo) {

            return $http({
                    method: "GET",
                    url: "/user"
                })
                .then(function(res) {
                    // console.log(res);
                    // console.log(res.data);
                    return res;
                })
        }


        this.deleteSale = function(id) {
                return $http({
                        method: "DELETE",
                        url: "/sale/" + id
                    })
                    .then(function(res) {
                        return res;
                    })
            }
            // app.get('/user', userControl.getOneUser);
        this.getUpdateUserID = function(user) {
            // console.log(user);
            return $http({
                    method: "PUT",
                    url: "/user/" + user._id,
                    data: user
                })
                .then(function(res) {
                    // console.log(response.data);
                    return res;
                })
        }


        this.signupPostSignUp = function(userSignUp) {
            console.log(userSignUp);
            return $http({
                    method: "POST",
                    url: "/signup",
                    data: userSignUp
                })
                .then(function(res) {
                    //console.log(res.data);
                    //console.log("You have Signed in like a champ!");
                    return res.data;
                })
        }

        // this.qcCardPost = function(qacard) {
        //     console.log(qacard);
        //     return $http({
        //         method: 'POST',
        //         url: '/qacard',
        //         data: qacard

        //     }).then(function(res) {
        //         return res.data;
        //         console.log(res.data);
        //     });
        // };

        this.qcCardPost = function(card) {
            console.log(card);
            return $http({
                method: 'POST',
                url: '/card',
                data: card
            }).then(function(res) {
                console.log(res);
                console.log(res.data);
                return res.data;
            });
        };


        // this.getfacebooksignup = function() {
        //     return $http({
        //             method: "GET",
        //             url: "/auth/facebook"
        //         })
        //         .then(function(res) {
        //             console.log("You have Signed in to Facebook like champ!");
        //             return res.data;
        //         })
        // }




        //Start of qaCard stuff
        // this.getSales = function() {
        //     return $http({
        //         method: 'GET',
        //         url: '/sales'
        //     }).then(function(res) {
        //         return res.data;
        //     })
        // }


        this.getAllCards = function() {
            return $http({
                method: 'GET',
                url: '/cards'
            }).then(function(res) {
                return res.data;
            })
        }


        // // this is for getting just one sale!
        // this.getSale = function() {
        //     return $http({
        //         method: 'GET',
        //         url: '/sales/'
        //     }).then(function(res) {
        //         return res.data;
        //     })
        // }




        // this.getMySales = function() {
        //     return $http({
        //         method: 'GET',
        //         url: '/mysales'
        //     }).then(function(res) {
        //         return res.data;
        //     })
        // }


        // this.updateSale = function(sale){
        //   return $http({
        //     method: 'PUT',
        //     url: '/sales/' + sale.id,
        //     data: sale
        //   }).then(function(res){
        //     return res;
        //   })
        // }




    });
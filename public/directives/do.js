// angular.module("chatApp")
// .directive("doStuff", function(){

// 	function link(scope, element, attr ){
// 		element.on('click', function(){
// 			element.css({color:"red"});
// 			//element.css({"font-size":"75px" });

// 		})

// 	}


// 	return {
// 		templateUrl: './template/store/dostuff.html',
// 		restrict: "E",
// 		//controller: "doStuffCtrl",
// 		link: link
// 	};



// });
//.directive("otherThings");

// Type :  Usage
// A = <div Doc></div>
// C = <div class="Doc"></div>
// E = <Doc data="book_data"></Doc>
// M = <!--directive:Doc -->


// 'A' - only matches attribute name
// 'E' - only matches element name
// 'C' - only matches class name
// 'M' - only matches commen
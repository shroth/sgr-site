(function () {
      
          var imgholder = document.getElementsByClassName("imgholder");
          var holdermargin = imgholder.style.marginRight;
          var imgplace = document.getElementsByClassName("imgplace");
          var expandmargin = getComputedStyle(imgplace,'margin-right');

          
	
		//take holdermargin and add it to margin on implace
		imgplace.style.marginRight = expandmargin + holdermargin;
         
		console.log(imgplace)
            
})();
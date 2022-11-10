var nav = document.querySelector('.nav');
        var li = nav.children;
        for(var i =0;i<li.length;i++){
            li[i].onmouseover = function(){
                this.children[1].style.display = 'block';
            }
            li[i].onmouseout = function(){
                this.children[1].style.display = 'none';
            }
        }
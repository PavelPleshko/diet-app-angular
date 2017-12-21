
export class Toast{
  state:string='out';
  _defaults = {
    displayTime: Infinity,
    inDuration: 400,
    outDuration: 775,
    className: undefined,
    completeCallback: undefined,
    activationPercent: 0.8
  };
  _toasts;
  _container;
  options;
  msg;
  timeRemaining;
  el;
  counterInterval;
  panning;
	constructor(msg,displayTime,className?,completeCallback?){
   
		if(!msg){
			return;
		}
     this._toasts=[];
     this._container=null;

		this.options = {
			displayTime:displayTime,
			className:className,
			completeCallback:completeCallback
		}


		this.options = Object.assign(this.defaults, this.options);
		this.msg = msg;
		this.timeRemaining = this.options.displayTime

		 if (this._toasts.length === 0) {
        this._createContainer();
      }

      this._toasts.push(this);
      let toastElement = this.createToast();

      this.el = toastElement;
      this.setTimer();
	}

	  get defaults() {
      return this._defaults;
    }

     _createContainer() {
     	let container = document.createElement('div');
     	container.setAttribute('id','toast-container');
    

     	//event-listeners here
     	document.body.appendChild(container);
        this._container = container;
     }


      _removeContainer() {
      // Add event handler
      this._container.parentNode.removeChild(this._container);
      this._container = null;
    }

  removeAll() {
      for(let toastIndex in this._toasts) {
        this._toasts[toastIndex].remove();
      }
    }

    createToast() {
     
      let toast = document.createElement('div');
       toast.classList.add('opacity');
      toast.classList.add('toast');

 if (this.options.className) {
        let classes = this.options.className.split(' ');
        let i, count;
        for (i = 0, count = classes.length; i < count; i++) {
          toast.classList.add(classes[i]);
        }
  }
  toast.innerHTML =this.msg;
  this._container.appendChild(toast);
  return toast;
}


setTimer() {
      if (this.timeRemaining !== Infinity)  {
        this.counterInterval = setInterval(() => {
          // If toast is not being dragged, decrease its time remaining
          if (!this.panning) {
            this.timeRemaining -= 20;
          }

          // Animate toast out
          if (this.timeRemaining <= 0) {
            this.remove();
          }
        }, 20);
      }
      }

         
remove() {
      window.clearInterval(this.counterInterval);
      this.el.classList.add('opacity-no');
          
          out.call(this);


  }

}

            function out(){
              var self = this;
                setTimeout(function(){self.el.parentNode.removeChild(self.el);
                  self._removeContainer();},800);
            }

 
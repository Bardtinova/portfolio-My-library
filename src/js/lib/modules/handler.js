import $ from '../core';

$.prototype.on = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }
    return this;
}

$.prototype.off = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }
    return this;
}

$.prototype.click = function(handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
          this[i].addEventListener('click', handler);  
        } else {
            this[i].click();
        } 
    }

    return this;
}
// установка аттрибута
$.prototype.setAttr = function(name, value) {
    for (let i = 0; i < this.length; i++) {
        if (!name && !value) {
            return this;
        }
        if (name && value) {
          this[i].setAttribute(name, value);  
        }
    }
    return this;
}

// получение аттрибута
$.prototype.getAttr = function(name) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(name)) {
            return this;
        }
       this[i].getAttribute(name);  
    }
    return this;
}

//удаление аттрибута
$.prototype.removeAttr = function(name) {
    for (let i = 0; i < this.length; i++) {
       this[i].removeAttribute(name);  
    }

    return this;
}

// переключение аттрибута
$.prototype.toggleAttr = function(name, value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(name)) {
            this[i].removeAttribute(name);
        } else if (name && value) {
          this[i].setAttribute(name, value);  
        }
    }

    return this;
}


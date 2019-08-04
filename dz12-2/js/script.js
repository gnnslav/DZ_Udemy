
class Option {
    constructor(box, height, width, bg, fontSize, textAlign, text){
        this.box = box;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.text = text;
        this.init();
    }
    createDiv(){


        this.div = document.createElement('div');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.backgroundColor = this.bg;
        this.div.style.textAlign = this.textAlign;

        this.box.appendChild(this.div);
    }
    init(){
        this.createDiv();
    }
}

const box = new Option(document.querySelector('#box'), 50, 50, 'blue', 'center', 'hello');

window.box = box;

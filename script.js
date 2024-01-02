function ciul(){
    let size = document.getElementById('size').value;
    let color = document.getElementById('color').value;
    let n = document.getElementById('space').value;
    let style = document.getElementById('style').value;
    let box = document.getElementById('lorem').value;
    
    box.style.fontSize = size + 'px';
    box.style.color = color;
    box.style.fontspacing = n + 'px';

}
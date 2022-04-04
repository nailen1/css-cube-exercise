
function RangeDisplay(input) {
    this.input = input;
    this.output = document.createElement('span');
    this.output.className = 'range-display';
    this.units = this.input.getAttribute('data-units') || '';
    let onChange = this.update.bind(this);
    this.input.addEventListener('change', onChange);
    this.input.addEventListener('input', onChange);
    this.update();
    this.input.parentNode.appendChild(this.output);
}

RangeDisplay.prototype.update = function() {
    this.output.textContent = this.input.value + this.units;
}

var ranges = document.querySelectorAll('input[type="range"]');
for (var i=0; i < ranges.length; i++) {
    new RangeDisplay(ranges[i]);
}

var scene = document.querySelector('.scene');
var cube = document.querySelector('.cube');
var originX = 50;
var originY = 50;

function updatePerspectiveOrigin() {
    scene.style.perspectiveOrigin = originX + '% ' + originY + '%';
}

var perspectiveRange = document.querySelector('.perspetive-range');
var perspetiveDisplay = perspectiveRange.parentNode.querySelector('.range-display');
perspectiveRange.onChange = perspectiveRange.oninput = function() {
    if (value == '1000px') {
        value = 'none';
        perspetiveDisplay.textContent = 'none'
    }
    scene.style.perspective = value;
};
perspectiveRange.onchange();

var originXRange = document.querySelector('.origin-x-range');
originXRange.onchange = originXRange.oninput = function() {
    originX = originXRange.value;
    updatePerspectiveOrigin();
};
originXRange.onchange();

var originYRange = document.querySelector('.origin-y-range');
originYRange.onchange = originYRange.oninput = function() {
    originX = originXRange.value;
    updatePerspectiveOrigin();
};
originYRange.onchange();

var spinCubeCheckbox = document.querySelector('.spin-cube-checkbox');
spinCubeCheckbox.onchange = function() {
    cube.classList.toggle('is-spinning', spinCubeCheckbox.checked);
};
spinCubeCheckbox.onchange();

var backfaceCheckbox = document.querySelector('.backface-checkbox');
backfaceCheckbox.onchange = function() {
    cube.classList.toggle('is-backface-hidden', !backfaceCheckbox.checked);
};

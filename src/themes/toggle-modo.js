const svgs = document.querySelectorAll('svg')
let selectedSVG = null

selectedSVG = svgs[0].querySelectorAll('path'); 
selectedSVG[0].setAttribute('fill', '#02799D');
selectedSVG[1].setAttribute('fill', 'white');

svgs.forEach(svg => {
  const svgIcons = svg.querySelectorAll('path');

  svg.addEventListener('click', function() {
    if(selectedSVG) {
      selectedSVG[0].setAttribute('fill', '#E1E1E6')
      selectedSVG[1].setAttribute('fill', '#323238')
    }

    svgIcons[0].setAttribute('fill', '#02799D')
    svgIcons[1].setAttribute('fill', 'white')

    selectedSVG = svgIcons
  })
})

const liter = document.getElementById('liters')
const remained = document.getElementById('remained')
const percentage = document.querySelector('.percentage')
const cups = document.querySelectorAll('.cup-small')

cups.forEach((cup,idx)=>{
   cup.addEventListener('click',()=>highlightCups(idx))

    updateBigCup()
})
function highlightCups(idx){
    // cups[idx].classList.toggle('full')
    if(cups[idx].classList.contains('full') && !cups
        [idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    cups.forEach((cup,idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('full')
        }else {
            cup.classList.remove('full')
        }

    })
    updateBigCup()
}
function updateBigCup(){
    const fulledCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = cups.length

    if(fulledCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fulledCups / totalCups * 240}px`
        percentage.innerText = `${fulledCups / totalCups * 100}%`
    }

    if(fulledCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0

    }else {
        remained.style.visibility = 'visible'
        liter.innerText = `${2-(fulledCups*250/1000)}L`
    }





}

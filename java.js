const $container = document.getElementById('container')

let newElements = []

for (let i = 127789; i < 127799; i++){
    newElements.push(`
    <div class="emoji">
     <p>
        &#${i};
     </p>

     <p>
     ${i}
     </p>
    </div>
 
 
 
 
 
 
 
    `)
}

$container.innerHTML = newElements.join(``)

const $emojislist = document.querySelectorAll('.emoji')

for (let item of $emojislist){
    if (item.children[1].textContent.trim() === '127797'){
        item.style.backgroundColor = "lightgrey"
    }
}

$container.addEventListener ('click', function(event){
    const value = if (event.target.closest('div').children[1].textContent.trim()
    let name = ''
     if (value === '127789'){
         name = 'Hotdog'
         document.getElementById('preview').innerHTML = `
         <p style='font-size: 100px;'>
         </p>
         <p>
         ${name}
         </p>
`
})

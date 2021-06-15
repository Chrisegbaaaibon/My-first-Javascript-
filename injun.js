


const addNewComment = event => {
  event.preventDefault();
  console.log(event)
  let commentArea = document.createElement('div')
  commentArea.className = 'comment-area'
  let commentDiv = document.createElement('div')
  commentDiv.getElementById = 'comment-info'
  let name = document.getElementById('new_comment_name').value
  let email = document.getElementById('new_comment_email').value
  let note = document.getElementById('new_comment_text').value
  let nameDiv = document.createElement('div')
  nameDiv.className = 'name'
  nameDiv.innerText = name
  let  emailDiv = document.createElement('div')
  emailDiv.className = 'email'
  emailDiv.innerText = email
  let textDiv = document.createElement('div')
  textDiv.className = 'note'
  textDiv.innerText = note
  document.getElementById('new_comment_name').value = ''
  document.getElementById('new_comment_email').value =''
  document.getElementById('new_comment_text').value = ''
  commentDiv.appendChild(commentArea)
  // console.log(commentDiv)
  // commentDiv.appendChild(editbtn)
  document.getElementById('comment-info').appendChild(commentArea)
  commentArea.append(nameDiv,emailDiv,textDiv)
  
  

let editbtn = document.createElement('button')
editbtn.textContent = 'Edit';
editbtn.addEventListener('click', editBtn)
let Form = document.querySelector('form#comment-form');

function editBtn (Event) {
  let commentArea = Event.target.parentElement
  document.getElementById('new_comment_name').value = commentArea.querySelector('.name').value
  document.getElementById('new_comment_email').value = commentArea.querySelector('.email').value
  document.getElementById('new_comment_note').value = commentArea.querySelector('.note').value
  document.querySelector('.button-secondary').innerText = 'Edit Changes'
 
  commentArea.appendChild(editbtn)
}
console.log(editbtn)
}
let form = document.querySelector('form#comment-form')
form.addEventListener('submit', addNewComment);

// Adding to Comment Form Submit Event 


// console.log(editBtn)



// console.log

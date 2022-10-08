import './style.css';

const tasks = [
  {
    des: 'Bathing',
    status: true,
    index: 1,
  },
  {
    des: 'Writing',
    status: false,
    index: 2,
  },
];

const forapp = document.querySelector('.append');
let indi = '';

for (let i = 0; i < tasks.length; i += 1) {
  if (tasks[i].status === true) {
    const items = `
     <li class="task-list">
     <input type="checkbox" class="input-task">${tasks[i].des} </input>
     <p class="tasks"><img src="src/imgs/refresh.png"> </img></p>
     <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
     </li>`;
    indi += items;
  }
}
forapp.innerHTML = indi;



const wrapper = document.querySelector('.wrapper');
const backBtn = document.querySelector('.back-btn');
const menuBtn = document.querySelector('.menu-btn');

const toggleScreen = () => {
    wrapper.classList.toggle("show-category");
}

menuBtn.addEventListener('click', toggleScreen);
backBtn.addEventListener('click', toggleScreen);


const addTaskBtn = document.querySelector('.add-task-btn');
const addTaskForm = document.querySelector('.add-task');
const blackBackdrop = document.querySelector('.black-backdrop');

const toggleAddTaskForm = () => {
    addTaskForm.classList.toggle('active');
    blackBackdrop.classList.toggle('active');
    addTaskBtn.classList.toggle('active');
}
addTaskBtn.addEventListener('click', toggleAddTaskForm);
blackBackdrop.addEventListener('click', toggleAddTaskForm);


// add categories and tasks with js

let categories = [
    {
      title: "Personal",
      img: "boy.png",
    },
    {
      title: "Pekerjaan",
      img: "briefcase.png",
    },
    {
      title: "Shopping",
      img: "shopping.png",
    },
    {
      title: "Coding",
      img: "web-design.png",
    },
    {
      title: "Kesehatan",
      img: "healthcare.png",
    },
    {
      title: "Fitness",
      img: "dumbbell.png",
    },
    {
      title: "Education",
      img: "education.png",
    },
    {
      title: "Finansial",
      img: "saving.png",
    },
];
  
let tasks = [
    {
        id: 1,
        task: "Go to market",
        category: "Shopping",
        completed: false,
      },
      {
        id: 2,
        task: "Read a chapter of a book",
        category: "Personal",
        completed: false,
      },
      {
        id: 3,
        task: "Prepare presentation for meeting",
        category: "Pekerjaan",
        completed: false,
      },
      {
        id: 4,
        task: "Complete coding challenge",
        category: "Coding",
        completed: false,
      },
      {
        id: 5,
        task: "Take a 30-minute walk",
        category: "Kesehatan",
        completed: false,
      },
      {
        id: 6,
        task: "Do a 20-minute HIIT workout",
        category: "Fitness",
        completed: false,
      },
      {
        id: 7,
        task: "Watch an educational video online",
        category: "Education",
        completed: false,
      },
      {
        id: 8,
        task: "Review monthly budget",
        category: "Finansial",
        completed: false,
      },
      {
        id: 9,
        task: "Buy groceries for the week",
        category: "Shopping",
        completed: false,
      },
      {
        id: 10,
        task: "Write in a journal",
        category: "Personal",
        completed: false,
      },
      {
        id: 11,
        task: "Send follow-up emails",
        category: "Pekerjaan",
        completed: false,
      },
      {
        id: 12,
        task: "Work on a coding side project",
        category: "Coding",
        completed: false,
      },
      {
        id: 13,
        task: "Try a new healthy recipe",
        category: "Kesehatan",
        completed: false,
      },
      {
        id: 14,
        task: "Attend a yoga class",
        category: "Fitness",
        completed: false,
      },
      {
        id: 15,
        task: "Read an article about a new topic",
        category: "Education",
        completed: false,
      },
      {
        id: 16,
        task: "Set up automatic bill payments",
        category: "Finansial",
        completed: false,
      },
      // Additional tasks for each category
      {
        id: 17,
        task: "Buy new clothes",
        category: "Shopping",
        completed: false,
      },
      {
        id: 18,
        task: "Meditate for 10 minutes",
        category: "Personal",
        completed: false,
      },
      {
        id: 19,
        task: "Prepare agenda for team meeting",
        category: "Pekerjaan",
        completed: false,
      },
      {
        id: 20,
        task: "Debug a software issue",
        category: "Coding",
        completed: false,
      },
      {
        id: 21,
        task: "Try a new recipe for lunch",
        category: "Kesehatan",
        completed: false,
      },
      {
        id: 22,
        task: "Go for a run",
        category: "Fitness",
        completed: false,
      },
      {
        id: 23,
        task: "Learn a new language online",
        category: "Education",
        completed: false,
      },
      {
        id: 24,
        task: "Read about history",
        category: "Education",
        completed: false,
      },
      {
        id: 25,
        task: "Review investment portfolio",
        category: "Finansial",
        completed: false,
      },
];

let selectedCategory = categories[0];

const categoriesContainer = document.querySelector('.categories');
const categoryTitle = document.querySelector('.category-title');
const totalCategoryTasks = document.querySelector('.category-tasks');
const categoryImg = document.querySelector('#category-img');
const totalTasks = document.querySelector('.totalTasks');

const calculateTotal = () => {
    const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    totalCategoryTasks.innerHTML = `${categoryTasks.length} Tugas`;
    totalTasks.innerHTML = tasks.length;
};

const renderCategories = () => {
    categoriesContainer.innerHTML = "";
    categories.forEach((category) => {
        // get all the tasks of current category
        const categoryTasks = tasks.filter(
            (task) => task.category.toLowerCase() === category.title.toLowerCase()
        );

        // create a div to render category
        const div = document.createElement('div');
        div.classList.add('category');
        div.addEventListener('click', () => {
            wrapper.classList.add('show-category');
            selectedCategory = category;
            categoryTitle.innerHTML = category.title;
            categoryImg.src = `./images/${category.img}`;
            calculateTotal();
            // RE RENDER TASKS WHEN CATEGORY CHANGE
            renderTasks();
        });
        div.innerHTML = `
                        <div class="left">
                            <img src="./images/${category.img}" alt="${category.title}" srcset="">
                            <div class="content">
                                <h1>${category.title}</h1>
                                <p>${categoryTasks.length} Tugas</p>
                            </div>
                        </div>
                        <div class="option">
                            <div class="toggle-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"/>
                                </svg>
                            </div>
                        </div>
        `;

        categoriesContainer.appendChild(div);
        
    });
};

const tasksContainer = document.querySelector('.tasks');

const renderTasks = () => {
    tasksContainer.innerHTML = "";
    const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    // IF NO TASK FOR SELECTED CATEGORY
    if (categoryTasks.length === 0) {
        tasksContainer.innerHTML = `
            <p class="no-task">Tidak ada tugas untuk kategori ini</p>
        `;
    } else {
        // so, there are tasks for selected category
        categoryTasks.forEach((task) => {
            const div = document.createElement("div");
            const label = document.createElement("label");
            const checkbox = document.createElement("input");
            div.classList.add("task-wrapper");
            label.classList.add("task");
            label.setAttribute("for", task.id);
            checkbox.type = "checkbox";
            checkbox.id = task.id;
            checkbox.checked = task.completed;

            // add completion functionality on click checkbox
            checkbox.addEventListener('change', () => {
                const index = tasks.findIndex(t => t.id === task.id);

                // change the true to false or false to true
                tasks[index].completed = !tasks[index].completed; 
                // save to local
                saveLocal();
            });

            div.innerHTML = `
                <div class="delete">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </div>
            `;

            label.innerHTML = `
                <span class="checkmark">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>
                </span>
                <p>${task.task}</p>
            `;

            label.prepend(checkbox);
            div.prepend(label);
            tasksContainer.appendChild(div);

            // DELETE FUNCTIONALITY
            const deleteBtn = div.querySelector('.delete');
            deleteBtn.addEventListener('click', () => {
                const index = tasks.findIndex(t => t.id === task.id);

                // remove the clicked task with that index
                tasks.splice(index, 1);
                saveLocal();
                calculateTotal();
                renderCategories();
                renderTasks();
            });
        });
        calculateTotal();
        renderCategories();
    }
};


// SAVE & GET TASKS FROM LOCAL STORAGE
const saveLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getLocal = () => {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));
    // if tasks found,
    if (localTasks) {
        tasks = localTasks;
    }
};


// lets add some functionality to add a new task

// render all the categories in select-input
const categorySelect = document.querySelector('#category-select');
const cancelBtn = document.querySelector('.cancel-btn');
const addBtn = document.querySelector('.add-btn');

const taskInput = document.querySelector('#task-input');

cancelBtn.addEventListener('click', toggleAddTaskForm);
addBtn.addEventListener('click',() => {
    const task = taskInput.value;
    const category = categorySelect.value;

    // check if task input is empty
    if (task === "") {
        alert("Tolong masukan tugas anda.")
    }
    // jika tidak kosong
    else {
        const newTask = {
            id: tasks.length + 1,
            task,
            category,
            completed: false
        };
        tasks.push(newTask);
        taskInput.value = "";
        saveLocal();
        renderTasks();
        calculateTotal();
        renderCategories();
        toggleAddTaskForm();
    }
});

categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    categorySelect.appendChild(option);
});


getLocal();
calculateTotal();
renderCategories();
renderTasks();
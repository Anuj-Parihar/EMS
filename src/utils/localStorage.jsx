// localStorage.clear();
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "emp1@eg.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile the monthly sales data into a detailed report.",
        date: "2024-11-27",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update CRM Data",
        description: "Ensure all client details are updated in the CRM system.",
        date: "2024-11-25",
        category: "Data Entry",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Client Follow-up",
        description: "Call clients to confirm order details.",
        date: "2024-11-28",
        category: "Client Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 4,
      completed: 3,
      failed: 2,
    },
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "emp2@eg.com",
    password: "123",
    tasks: [
      {
        title: "Fix Bug #234",
        description: "Resolve the login page error reported by QA.",
        date: "2024-11-26",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code Review",
        description: "Review code changes submitted by teammates.",
        date: "2024-11-24",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update API Docs",
        description: "Document recent updates to the payment gateway API.",
        date: "2024-11-29",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 6,
      failed: 3,
    },
  },
  {
    id: 3,
    firstName: "Kavya",
    email: "emp3@eg.com",
    password: "123",
    tasks: [
      {
        title: "Design Landing Page",
        description: "Create a responsive design for the new product launch page.",
        date: "2024-11-30",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare Presentation",
        description: "Design slides for the upcoming client meeting.",
        date: "2024-11-28",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "UX Testing",
        description: "Run usability tests on the redesigned user dashboard.",
        date: "2024-11-26",
        category: "User Experience",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 3,
      newTask: 3,
      completed: 4,
      failed: 5,
    },
  },
  {
    id: 4,
    firstName: "Dev",
    email: "emp4@eg.com",
    password: "123",
    tasks: [
      {
        title: "Update Inventory",
        description: "Ensure all new stock is added to the inventory database.",
        date: "2024-11-27",
        category: "Operations",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Warehouse Audit",
        description: "Conduct a thorough check of all stored goods.",
        date: "2024-11-25",
        category: "Audit",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Supplier Follow-up",
        description: "Check the delivery status of pending orders.",
        date: "2024-11-29",
        category: "Logistics",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 5,
      newTask: 1,
      completed: 4,
      failed: 2,
    },
  },
  {
    id: 5,
    firstName: "Ananya",
    email: "emp5@eg.com",
    password: "123",
    tasks: [
      {
        title: "Monitor Network",
        description: "Check server uptime and ensure no disruptions.",
        date: "2024-11-26",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Upgrade Firmware",
        description: "Update firmware on all company-issued devices.",
        date: "2024-11-30",
        category: "IT",
        active: false,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Train New Staff",
        description: "Conduct IT orientation for new hires.",
        date: "2024-11-27",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    firstName: "Anuj",
    email: "admin@eg.com",
    password: "123",
  },
];

  
export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}; 
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));    
    const admin = JSON.parse(localStorage.getItem('admin'));
    return{ employees , admin };
    
};
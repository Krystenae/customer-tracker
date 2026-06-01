let customers = [
    {
        name: "John Smith",
        email: "john.smith@email.com",
        purchases: ["Laptop", "Mouse"]
    },
    {
        name: "Sarah Johnson",
        email: "sarah.johnson@email.com",
        purchases: ["Keyboard"]
    },
    {
        name: "Michael Brown",
        email: "michael.brown@email.com",
        purchases: ["Monitor", "Headphones"]
    }
];
customers.push({
    name: "Emily Davis",
    email: "emily.davis@email.com",
    purchases: ["Webcam"]
});

customers.shift();

customers[0].email = "sarah.j@email.com";
customers[0].purchases.push("USB Drive");
customers.forEach(customer => {
    console.log(
        `Name: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`
    );
});

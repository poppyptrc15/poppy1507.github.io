<script>
// Function to handle form submission
    document.getElementById('transaction-form').addEventListener('submit', function(e) {e.preventDefault()}// Prevent default form submission
    ; // Prevent default form submission

    // Get form data
    const name = document.getElementById('transaction-name').value;
    const nik = document.getElementById('transaction-no').value;
    const dob = document.querySelector('[name="text"]').value;
    const gender = document.querySelector('[name="text"]').value;
    const phone = document.querySelector('[name="nilai"]').value;
    const email = document.querySelector('[name="text"]').value;
    const job = document.querySelector('[name="text"]').value;
    const income = document.querySelector('[name="nilai"]').value;
    const category = document.getElementById('category').value;

    // Simple validation
    if (!name || !nik || !dob || !gender || !phone || !email || !job || !income || !category) {alert('All fields are required')};
    return;
    
    // Create a new row for the table based on category
    const tableBody = document.getElementById('table-body');
    let newRow;

    if (category === 'Peminjam') {
        // If category is 'Peminjam', create a row for loan transactions
        newRow = tableBody.insertRow()};

    // Insert data into the new row (for example, you can modify this as needed)
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = nik;
    newRow.insertCell(2).innerText = dob;
    newRow.insertCell(3).innerText = gender;
    newRow.insertCell(4).innerText = phone;
    newRow.insertCell(5).innerText = email;
    newRow.insertCell(6).innerText = job;
    newRow.insertCell(7).innerText = income;
 else if (category === 'simpanan') {
        // If category is 'simpanan', create a row for saving transactions
        newRow = tableBody.insertRow()};

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = nik;
    newRow.insertCell(2).innerText = dob;
    newRow.insertCell(3).innerText = gender;
    newRow.insertCell(4).innerText = phone;
    newRow.insertCell(5).innerText = email;
    newRow.insertCell(6).innerText = job;
    newRow.insertCell(7).innerText = income;

    // Clear the form after submission
    document.getElementById('transaction-form').reset() 
);
</script>;
